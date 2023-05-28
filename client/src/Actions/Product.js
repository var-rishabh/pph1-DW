import axios from 'axios';
import { host } from '../config/Links';
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: 'AllProductsRequest' });

        const response = await axios.get(`${host}/product/getAllProducts`);
        dispatch({ type: 'AllProductsSuccess', payload: response.data.data });

    } catch (error) {
        dispatch({
            type: 'AllProductsFailure',
            payload: error.response?.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'ProductDetailsRequest' });

        const response = await axios.get(`${host}/product/${id}`);

        dispatch({ type: 'ProductDetailsSuccess', payload: response.data.data });

    } catch (error) {
        dispatch({
            type: 'ProductDetailsFailure',
            payload: error.response?.data.message
        })
    }
}

