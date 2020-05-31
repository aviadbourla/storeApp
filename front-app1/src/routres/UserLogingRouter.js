
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";
import RegisterForm from '../components/userforms/RegisterForm';
import LoginForm from '../components/userforms/LoginForm';
import SiteRouter from '../routres/SiteRouter'

const drawerWidth = 240;

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
}));

const WithImage = (props) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {props.children}
      </Grid>
    </Grid>

  )
}

export default function UserLogingRouter(props) {
  const Loginwithimage = () => {
    return <WithImage> <LoginForm /></WithImage>
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={() => <WithImage><RegisterForm /> </WithImage>} />
        <Route path="/siterouter" component={SiteRouter} />
        <Route path="/" exact component={Loginwithimage} />
      </Switch>
    </BrowserRouter>
  );
}

