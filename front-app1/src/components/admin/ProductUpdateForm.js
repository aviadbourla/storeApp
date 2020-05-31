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
import UpdateProduct from '../../httprqpests/UpdateProduct'


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

export default function ProductUpdateForm(props) {

    const classes = useStyles();

    const [PimagePath, setImagePath] = useState(props.imagePath);
    const [PTitle, setTitle] = useState(props.title);
    const [PDescription, setDescription] = useState(props.description);
    const [PPrice, setPrice] = useState(props.price);
    const [eror, setEror] = useState('');
    const [validiton, setValidation] = useState(false);

    useEffect(() => {
        setValidation(false)
    }, [])

    const handelForm = async (e) => {
        e.preventDefault();
        if (PimagePath || PTitle || PDescription || PPrice) {
            setValidation(true)
        }
        const newProdcut = { imagePath: PimagePath, title: PTitle, description: PDescription, price: PPrice }
        if (newProdcut && validiton) {
            {
                setEror("");
                const updatedproduct = { newp: newProdcut, oldId: props.id }
                const respone = await UpdateProduct(updatedproduct);
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
                    Update Prodcut
        </Typography>
                <form className={classes.form} noValidate onSubmit={handelForm}>
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
                                onChange={event => setImagePath(event.target.value)}
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
                                onChange={event => setPrice(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <input
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    />



                </form>
            </div>

        </Container>
    );
}