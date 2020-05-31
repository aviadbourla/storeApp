import axios from 'axios';


const GlobalAddUserReqest = async (props) => {
  const newUser = props;
  return axios.post('http://localhost:3001/signin', {
    newUser
  });
};


export default GlobalAddUserReqest;