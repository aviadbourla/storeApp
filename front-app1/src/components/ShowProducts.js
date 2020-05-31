import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GetProductsReqest from '../httprqpests/GetProductsReqest'
import CustomizedDialogs from './CustomizedDialogs'
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';
import * as actions from '../Redux/index';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    margin: 'auto',
    padding: '4rem'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
  card: {
    margin: '10px 10px',
    width: '283.250px',
    height: '462.922px',
  },
  mainproduct: {
    marginTop: '5px'
  },
  image: {
    width: "100%",
    height: "70%",
    backgroundSize: 'cover'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  title: {
    display: 'block',
    textAlign: 'center',
    fontFamily: 'Baloo Bhaina 2',
    fontSize: '0.8rem'
  },
  price: {
    textAlign: 'center',
    marginTop: '4px',
    fontWeight: 'bold',
    fontFamily: 'Baloo Bhaina 2',
    fontSize: '1.2rem'
  },
  button: {
    background: '#563d7c',
    color: 'white',
    border: '0.5px solid black',
    padding: '6px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '0 auto',
    display: 'block',
    width: '50%'
  },
  filterproducts: {
    width: '80%',
    margin: 'auto',
    marginTop: '2rem',
    textAlign: 'center'
  },
  slide: {
    width: '220px',
    height: '20px',
    margin: 'auto',
    padding: '20px'
  },
  sliderdiv: {
    width: '270px',
    height: '40px',
    margin: '1rem 1rem',
  },
  showdialog: {
    marginBottom: '2rem'
  },

  sliderDescription: {
    textAlign: 'center'
  },
}));


function valuetext(value) {
  return `${value}$`;
}

const ShowProducts = (props) => {

  const classes = useStyles();
  const [productArr, setproductArr] = useState([])
  const [Cart, SetProductToCart] = useState([])
  const [sumproducts, setsumproducts] = useState(0)
  const [value, setValue] = React.useState([10, 70]);
  const [eror, setEror] = React.useState(false);

  useEffect(() => {
    GetProducts()
  }, [])

  const GetProducts = async () => {
    try {
      const respone = await GetProductsReqest()
      const Prodacts = respone.data;
      setproductArr(Prodacts);
    } catch (error) {
       setEror(true);
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterdProducts = productArr.filter((product) => { return (product.price < value[1]) && (product.price > value[0]) })

  return (
    <div>
      {!eror ?
        <div>
          <div className={classes.filterproducts}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Price Range </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <div className={classes.sliderDescription}>
                  <p> price range selected</p>
                  <p>ILS{value[0]} - ILS{value[1]} </p>
                </div>
                <div className={classes.sliderdiv}>
                  <Slider
                    className={classes.slide}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                  />
                </div>

              </Select>
            </FormControl>

          </div>
          <Grid
            container
            item xs={12}
            spacing={3}
            className={classes.root}
          >
            {filterdProducts.map((product) => (
              <div className={classes.card}>
                <img src={`${product.imagePath}`} alt="fifa" className={classes.image} />
                <div className={classes.mainproduct} >
                  <div className={classes.title} > {product.title} </div>
                  <div className={classes.price} > {product.price + "$"} </div>
                  <button className={classes.button}
                    onClick={() => {
                      Cart.push(product);
                      SetProductToCart(Cart);
                      console.log(Cart);
                      setsumproducts(sumproducts + product.price)
                      props.AddToProductTocart(product)
                      console.log(props.amount)
                    }}>Add to cart</button>
                </div>
              </div>
            ))}
          </Grid>
          <div className={classes.showdialog}>
            <CustomizedDialogs cart={Cart} sum={sumproducts} />
          </div>
          {console.log(props.cart)}
          {console.log(props.totalPrice)}
          {console.log(props)}
        </div> : <div> <h1> 404 </h1> </div>}


    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalPrice: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddToProductTocart: (product) => dispatch(actions.AddToProductTocart(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProducts);
