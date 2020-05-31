import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";
import MapIcon from '@material-ui/icons/Map';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const ListItems = () => {
  let history = useHistory();
  return (
    <div>
      <ListItem button onClick={() => history.push("/")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => history.push("/products")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="products" />
      </ListItem>
      <ListItem button onClick={() => history.push("/map")}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="map" />
      </ListItem>
      <ListItem button onClick={() => history.push("/Users")}>
        <ListItemIcon>
          <AccessibilityNewIcon />
        </ListItemIcon>
        <ListItemText primary="Show users" />
      </ListItem>
      <ListItem button onClick={() => history.push("/ProductCreat")}>
        <ListItemIcon>
          <AddShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="creat product" />
      </ListItem>
      <ListItem button onClick={() => history.push("/UpdateProducts")}>
        <ListItemIcon>
          <SystemUpdateAltIcon />
        </ListItemIcon>
        <ListItemText primary="Update" />
      </ListItem>

    </div>)
}

export default ListItems