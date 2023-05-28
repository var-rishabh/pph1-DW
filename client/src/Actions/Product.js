import axios from 'axios';
import { host } from '../config/Links';
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: 'AllProductsRequest' });

        const { data } = await axios.get(`${host}/product/getAllProducts`);

        dispatch({ type: 'AllProductsSuccess', payload: data });

    } catch (error) {
        dispatch({
            type: 'AllProductsFailure',
            payload: error.response && error.response.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'ProductDetailsRequest' });

        const { data } = await axios.get(`${host}/product/${id}`);

        dispatch({ type: 'ProductDetailsSuccess', payload: data.product });

    } catch (error) {
        dispatch({
            type: 'ProductDetailsFailure',
            payload: error.response && error.response.data.message
        })
    }
}

