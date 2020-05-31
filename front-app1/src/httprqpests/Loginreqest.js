import axios from 'axios';
const Loginreqest = async () => {

  return axios.get('http://localhost:3001/isconnected', {
    withCredentials: true
  })
}

export default Loginreqest;


