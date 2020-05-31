
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as EmailValidator from 'email-validator';
import GlobalReqestslogin from '../../httprqpests/GlobalReqestlogin'
 import '../dahboard.css';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../Redux/index';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[10] : theme.palette.grey[900],
        backgroundSize: '40%',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(25, 20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '70%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginForm = (props) => {

    const classes = useStyles();
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eror, setEror] = useState('');
    const [validiton, setValidation] = useState(true);


    const handelForm = async (e) => {
        e.preventDefault();
        if (!password || !email) {
            setEror('enter password/email')
            setValidation(false)
            return
        }
        if (validiton) {
            const newuserlogin = { userEmail: email, userPassword: password }
            try {
                const respone = await GlobalReqestslogin(newuserlogin);
                if (respone.data.accessToken) {
                    document.cookie = `Authorization=Bearer ${respone.data.accessToken}`
                    props.login();
                    history.push("/siterouter");
                }
            } catch (eror) {
                setEror('wrong password cant login')
            }
        }
    };

    const handleBlur = (e) => {
        !EmailValidator.validate(email) ? setEror("bad email") : setEror("");
    }

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
      </Typography  >
            <form className={classes.form}  onSubmit={handelForm} >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={event => setEmail(event.target.value)}
                    onBlur={handleBlur}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={event => setPassword(event.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <p > {eror}  </p>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}

                >
                    Sign In
          </Button>
                <Grid container>

                    <Grid item>
                        <Link onClick={() => history.push("/signup")} variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        islogIn: state.connected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(actions.login()),
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
