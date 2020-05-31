import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import CustomizedRatings from './CustomizedRatings';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './map.css';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    border: 'none',
    zIndex: '-1'

  },
  media: {
    height: 10,
    paddingTop: '56.25%',
    borderRadius: '5%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();

  return (
    <Card elevation={0} className="cardd">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <ShoppingCartIcon />
          </Avatar>
        }
        title={props.description}
        subheader={props.address}
      />
      <CardMedia
        className={classes.media}
        image={props.Imgurl}
        title="Paella dish"
      />
      <div className="flex-container">
        <CustomizedRatings />
      </div>
    </Card>
  );
}