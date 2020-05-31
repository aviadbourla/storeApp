import axios from 'axios';

const GetUsersReqest = async () => {
    return  axios.get('http://localhost:3001/users', {
        withCredentials: true
    })
};

export default GetUsersReqest;