import axios from 'axios';

const DeleteProduct = async (props) => {
  const id = props
  return axios.post('http://localhost:3001/deletprodcut', {
    id
  })
};
export default DeleteProduct;