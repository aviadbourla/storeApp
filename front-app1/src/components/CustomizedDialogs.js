import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  btn: {
    display: 'block',
    margin: 'auto',
    width: '10%',
    padding: '10px'
  }
}));

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const [sum, setSum] = useState();
  const classes = useStyles();
  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {console.log(props)}
      <div className={classes.btn}>
        <Button size="large" variant="outlined" color="primary" onClick={handleClickOpen} >
          press to Check out
        </Button>
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Order summary
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Table size="large">
              <TableHead>
                <TableRow>
                  <TableCell><strong> <h2>Title  </h2>  </strong> </TableCell>
                  <TableCell><strong> <h2> price </h2> </strong> </TableCell>
                  <TableCell><strong>   </strong> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.cart.map((cartfirst) => (
                  <TableRow key={cartfirst.id}>
                    <TableCell>{cartfirst.title}</TableCell>
                    <TableCell>{cartfirst.price}</TableCell>
                    <TableCell><img src={`${cartfirst.imagePath}`} alt="fifa" width="150" height="100" /></TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Typography>
        </DialogContent>
        <DialogTitle id="customized-dialog-title" >
          Order total:  {props.sum}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => history.push("/checkout")} color="primary">
            Go To payout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}