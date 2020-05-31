import axios from 'axios';

const UpdateProduct = async (props) => {
    const newproduct = props
    try {
        const response = await axios.post('http://localhost:3001/updateproduct', {
            newproduct
        });
        console.log(response);
        return response
    }
    catch (error) {
        console.log(error);
    }
};


export default UpdateProduct;