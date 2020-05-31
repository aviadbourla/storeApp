import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GlobalReqestsAddProduct from '../../httprqpests/GlobalReqestsAddProduct'
import { useHistory } from "react-router-dom";
import '../product.css'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function ProductCreat(props) {
    const classes = useStyles();

    const [PimagePath, setimagePath] = useState('');
    const [PTitle, setTitle] = useState('');
    const [PDescription, setDescription] = useState('');
    const [PPrice, setPrice] = useState('');
    const [eror, setEror] = useState('');
    const [validiton, setVliditon] = useState(false);

    let history = useHistory();

    useEffect(() => {
        setVliditon(false);
    }, [])

    // Before Writing "upload image" function in server check image path localy
    const handelForm = async (e) => {
        e.preventDefault();
        if ((!PimagePath || !PTitle || !PDescription || !PPrice)) {
            setEror('You need to fill all the inputes');
            setVliditon(false);
        }
        if ((isNaN(PPrice)) || PimagePath.substring(0, 4) !== 'http') {
            if (PimagePath.substring(0, 4) !== 'http') {
                setEror('Image path iligal');
            } else {
                setEror('Price need to be a number');
            }
        }
        else {
            setVliditon(true)
        }
        if (validiton) {
            {
                const newProdcut = { imagePath: PimagePath, title: PTitle, description: PDescription, price: PPrice }
                setEror("");
                try {
                    const respone = await GlobalReqestsAddProduct(newProdcut);
                    history.push("/products");
                } catch (error) {
                    setEror("Something went wrong");
                }
            }
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add/Update Prodcut
        </Typography>
                <form className={classes.form} onSubmit={handelForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="imagePath"
                                name="imagePath"
                                variant="outlined"
                                required
                                fullWidth
                                id="PimagePath"
                                label="image Path"
                                autoFocus
                                onChange={event => setimagePath(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="PTitle"
                                label="Title  "
                                name="Title"
                                autoComplete="Title"
                                onChange={event => setTitle(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="PDescription"
                                label="Description"
                                name="Description"
                                autoComplete="Description"
                                onChange={event => setDescription(event.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="Price"
                                label="Price"
                                type="Price"
                                id="PPrice"
                                autoComplete="Price"
                                onChange={event => setPrice((Number)(event.target.value))}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                    {eror ? <p className="eror-msg">{eror}</p> : null}
                </form>
            </div>

        </Container>
    );
}