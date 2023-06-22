import axios from 'axios';
import { toast } from 'react-toastify';

const token = localStorage.getItem('accessToken');

export const getProducts = () => async (dispatch) => {
    try {

        dispatch({ type: "AllProductsRequest" })

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/getAllProducts`);

        dispatch({
            type: "AllProductsSuccess",
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: "AllProductsFailure",
            payload: error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: "ProductDetailsRequest" })

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/${id}`);

        dispatch({
            type: "ProductDetailsSuccess",
            payload: data.product
        })
        toast.success("Product loaded successfully")
    } catch (error) {
        dispatch({
            type: "ProductDetailsFailure",
            payload: error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}

export const newProduct = (productData) => async (dispatch) => {
    try {

        dispatch({ type: "CreateProductRequest" })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/product/addProduct`, productData, config);

        dispatch({
            type: "CreateProductSuccess",
            payload: data
        })
        dispatch(getProducts())
        toast.success("Product created successfully")
    } catch (error) {
        dispatch({
            type: "CreateProductFailure",
            payload: error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}

export const updateProduct = (id, productData) => async (dispatch) => {
    try {

        dispatch({ type: "UpdateProductRequest" })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/product/update/${id}`, productData, config);

        dispatch({
            type: "UpdateProductSuccess",
            payload: data.success
        })
        dispatch(getProducts())
        toast.success("Product updated successfully")
    } catch (error) {
        dispatch({
            type: "UpdateProductFailure",
            payload: error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {

        dispatch({ type: "DeleteProductRequest" })

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/product/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        dispatch({
            type: "DeleteProductSuccess",
            payload: data.success
        })
        dispatch(getProducts())
        toast.success("Product deleted successfully")
    } catch (error) {
        dispatch({
            type: "DeleteProductFailure",
            payload: error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}
