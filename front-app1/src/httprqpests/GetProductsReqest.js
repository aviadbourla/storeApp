import axios from 'axios';

const GetProductsReqest = async () => {
    return axios.get('http://localhost:3001/products', {
    })
};

export default GetProductsReqest;