import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(4),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];


const FooterActions = ({ showBack, onbackClick, onNextClick, showFinish, onFinishClick }) => {
  return (
    <Grid justify="space-between" direction="row-reverse" container>
      {!showFinish &&
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={onNextClick}
          >
            Next
        </Button>
        </Grid>
      }
      {showFinish &&
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={onFinishClick}
          >
            Finish
        </Button>
        </Grid>}
      {showBack && (
        <Grid item>
          <Button variant="contained" color="primary" onClick={onbackClick} >
            Back
        </Button>
        </Grid>
      )}
    </Grid>
  )
}

// function getStepContent(step) {
// }

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = useState({});
  const [orderSummary, setOrderSummary] = useState(false)

  const handleNext = (stepData) => {
    setData({ ...data, ...stepData });
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFinish = () => {
    setOrderSummary(true)
  };

  const stepsMapping = {
    0: <AddressForm />,
    1: <PaymentForm />,
    2: <Review />
  }

  const renderActions = (data) => <FooterActions
    showBack={activeStep !== 0}
    onbackClick={handleBack}
    onNextClick={() => handleNext(data)}
    showFinish={activeStep === Object.keys(stepsMapping).length - 1}
    onFinishClick={handleFinish}
  />

  const step = React.cloneElement(stepsMapping[activeStep], { renderActions })

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          {!orderSummary &&
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>}
          <React.Fragment>
            {orderSummary ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
              <p> {data}</p>
                </Typography>
              </React.Fragment>
            ) : (

                step

              )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}