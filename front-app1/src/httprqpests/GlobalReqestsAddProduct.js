import axios from 'axios';

const GlobalReqestsAddProduct = async (props) => {
  const newProdcut = props;
  return  axios.post('http://localhost:3001/ProductCreat', {
    newProdcut
  })
};


export default GlobalReqestsAddProduct;