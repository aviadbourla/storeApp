
import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";
import ProductCreat from '../components/admin/ProductCreat';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItems from '../components/ListItems';
import ShowUsers from '../components/admin/ShowUsers'
import ShowProducts from '../components/ShowProducts'
import UpdateProducts from '../components/admin/UpdateProducts'
import MaterialTableDemo from '../components/admin/MaterialTableDemo'
import Home from '../components/Home'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Showmap from '../Map/Showmap';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Checkout from '../Cheakout/Checkout'

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      color: 'green !important',
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(),
    display: 'inline-flex',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const WithDashboard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Store App
            </Typography>
          <IconButton color="inherit"  >
            <VpnKeyIcon />
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><ListItems></ListItems></List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {props.children}
      </main>
    </div>
  )
}

function DashboardRouter(props) {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={() => <WithDashboard><Home /> </WithDashboard>} />
        <Route path="/ProductCreat" component={() => <WithDashboard><ProductCreat /></WithDashboard>} />
        <Route path="/Users" component={() => <WithDashboard><ShowUsers /></WithDashboard>} />
        <Route path="/products" component={() => <WithDashboard><ShowProducts /></WithDashboard>} />
        <Route path="/UpdateProducts" component={() => <WithDashboard><UpdateProducts /></WithDashboard>} />
        <Route path="/showtable" component={() => <WithDashboard><MaterialTableDemo /></WithDashboard>} />
        <Route path="/map" component={() => <WithDashboard><Showmap /></WithDashboard>} />
        <Route path="/checkout" component={() => <WithDashboard><Checkout /></WithDashboard>} />
      </Switch>
    </BrowserRouter>
  );
}

export default DashboardRouter;
