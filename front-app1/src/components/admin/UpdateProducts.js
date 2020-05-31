import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GetUsersReqest from '../../httprqpests/GetUsersReqest';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Deleteuser from '../../httprqpests/Deleteuser'
import GetProductsReqest from '../../httprqpests/GetProductsReqest'
import DeleteProduct from '../../httprqpests/DeleteProduct'
import UpdateProduct from '../../httprqpests/UpdateProduct'
import Container from '@material-ui/core/Container';
import CustomizedDialogUpdateProduct from './CustomizedDialogUpdateProduct'


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  Table: {
    border: '1px solid black',
    width: "700px",
    height: "600px"
  }
}));

export default function UpdateProducts() {

  const classes = useStyles();

  const [productArr, setProductArr] = useState([])
  const [Cart, SetProductToCart] = useState([])
  const [isopen, Setisopen] = useState(false)
  const [sumproducts, setsumproducts] = useState(0)

  useEffect(() => {
    GetProducts()
  }, [productArr])

  const GetProducts = async () => {
    try {
      const respone = await GetProductsReqest()
      const Prodacts = respone.data;
      setProductArr(Prodacts);
    } catch (error) {
     }
  }

  const DeleteProducts = async (id) => {
    try {
      const respone = await DeleteProduct(id);
      const filterdusersarr = productArr.filter((product) => { return product.id !== id })
      setProductArr(filterdusersarr)
    } catch (error) {
     }
  }

  return (
    <Container maxWidth="l">
      <TableContainer  >
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell><strong> <h2> ImagePath</h2> </strong> </TableCell>
              <TableCell><strong><h2>Title</h2></strong> </TableCell>
              <TableCell><strong><h2>Description</h2></strong></TableCell>
              <TableCell><strong><h2>Price</h2></strong></TableCell>
              <TableCell><strong><h2>Actions</h2></strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productArr.map((Prodact) => (
              <TableRow key={Prodact.id}>
                <TableCell>{(Prodact.imagePath).substring(1, 30)}</TableCell>
                <TableCell>{Prodact.title}</TableCell>
                <TableCell>{Prodact.description}</TableCell>
                <TableCell>{Prodact.price} $</TableCell>
                <TableCell><Button onClick={() => DeleteProducts(Prodact._id)}> delete prodcut</Button></TableCell>
                <TableCell> <CustomizedDialogUpdateProduct product={Prodact} id={Prodact.id} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}


 