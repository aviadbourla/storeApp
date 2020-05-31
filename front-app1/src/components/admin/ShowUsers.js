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
import Deleteuser from '../../httprqpests/Deleteuser';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(5),
  },
  Table: {
    width: '70%',
  }
}));

export default function ShowUsers() {

  const [usersArr, setUsersArr] = useState([])
  const [eror, setEror] = useState(false);

  useEffect(() => {
    Getusers()
  }, [])

  const Getusers = async () => {
    try {
      const respone = await GetUsersReqest();
      const users = respone.data
      setUsersArr(users);
    } catch (eror) {
      setEror(true);
    }
  }

  const Deleteusers = async (id) => {
    try {
      await Deleteuser(id);
      const respone = await GetUsersReqest();
      const users = respone.data
      setUsersArr(users);
     } catch (eror) {
      setEror(true);
    }
  }

  const classes = useStyles();
  return (
    <div>
      {!eror ?
        <Container maxWidth="xl">
          <TableContainer  >
            <Table className={classes.Table} size="large" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell><strong> <h2> First Name</h2> </strong> </TableCell>
                  <TableCell><strong><h2>Last Name</h2></strong> </TableCell>
                  <TableCell><strong><h2>Email</h2></strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersArr.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.fname}</TableCell>
                    <TableCell>{user.lname}</TableCell>
                    <TableCell>{user.userEmail}</TableCell>
                    <TableCell><Button onClick={() => Deleteusers(user._id)} > delete user</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container> : <div> <h1> 404 </h1></div>}
    </div>
  );
}

