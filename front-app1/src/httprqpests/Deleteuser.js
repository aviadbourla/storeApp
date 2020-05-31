import axios from 'axios';

const Deleteuser = (props) => {
    const id = props
    return axios.post('http://localhost:3001/deleteuser', {
        id
    })
}
export default Deleteuser;