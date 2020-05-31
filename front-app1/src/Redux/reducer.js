import * as actionTypes from "../Redux/actionTypes";

const initalState = {
    connected: false,
    cart: [],
    totalPrice: 0,
};

const AddToProductTocart = (state, action) => {
    const newprocut = action.product
    return {
        ...state,
           cart: state.cart.concat(newprocut),
           totalPrice: state.totalPrice + newprocut.price
     }
};

const login = (state, action) => {
    return {
        ...state,
        connected: true
    }
};

const logout = (state, action) => {
    return {
        ...state,
        connected: false
    }
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN: return login(state, action);
        case actionTypes.LOG_OUT: return logout(state, action);
        case actionTypes.ADD_PRODUCT: return AddToProductTocart(state, action);
        default: return state;
    }
}


export default reducer;