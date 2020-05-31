import React, { useEffect, useState } from 'react';
import DashboardRouter from '../routres/DashboardRouter'
import UserLogingRouter from '../routres/UserLogingRouter'
import Loginreqest from '../httprqpests/Loginreqest'
import { connect } from 'react-redux'
import * as actions from '../Redux/index';


const SiteRouter = (props) => {

  const [userConnection, setIsConnected] = useState(false);

  useEffect(() => {
    isconnected();
  }, [])

  const isconnected = async () => {
    try {
      const respone = await Loginreqest();
       if (respone.data) {
        setIsConnected(true)
        props.login();
      }else{
        props.islogIn ? setIsConnected(true) : setIsConnected(false);
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {(!userConnection) && (!props.islogIn) ? <UserLogingRouter /> : <DashboardRouter />}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SiteRouter);
