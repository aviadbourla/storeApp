import axios from 'axios';

const GlobalReqestslogin = async (props) => {
    const newuserlogin = props;
    return axios.post('http://localhost:3001/login', {
        newuserlogin
    })
};

export default GlobalReqestslogin;