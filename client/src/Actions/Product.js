import axios from 'axios';

export const getAllProducts = ( currentPage = 1) => async (dispatch) => {
    try {
        dispatch({ type: 'AllProductsRequest' });

        const { data } = await axios.get(`/api/v1/products?page=${currentPage}`);

        dispatch({ type: 'AllProductsSuccess', payload: data });

    } catch (error) {
        dispatch({
            type: 'AllProductsFailure',
            payload: error.response && error.response.data.message
        })
    }
}

export const getMoreProducts = ( currentPage = 1) => async (dispatch) => {
    try {
        dispatch({ type: 'MoreProductsRequest' });

        const { data } = await axios.get(`/api/v1/products?page=${currentPage}`);

        dispatch({ type: 'MoreProductsSuccess', payload: data });

    } catch (error) {
        dispatch({
            type: 'MoreProductsFailure',
            payload: error.response && error.response.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'ProductDetailsRequest' });

        const { data } = await axios.get(`/api/v1/product/${id}`);

        dispatch({ type: 'ProductDetailsSuccess', payload: data.product });

    } catch (error) {
        dispatch({
            type: 'ProductDetailsFailure',
            payload: error.response && error.response.data.message
        })
    }
}

