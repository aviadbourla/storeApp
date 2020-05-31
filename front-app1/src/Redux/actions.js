import * as actionTypes from "./actionTypes";

export const login = () => {
    return {
        type: actionTypes.LOG_IN
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};

export const AddToProductTocart = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        product: product
    };
};


