import axios from "axios";
import * as types from "./actionType.cart"


const getCarts = () => async (dispatch) => {
    dispatch({ type: types.GET_CARTS_REQUEST });
    try {
        const res = await axios.get(`https://rentapi-d55v.onrender.com/cart`);
        dispatch({ type: types.GET_CARTS_SUCCESS, payload: res.data });
    } catch {
        dispatch({ type: types.GET_CARTS_FAILURE });
    }
}


const addCarts = (payload) => async (dispatch) => {
    dispatch({ type: types.ADD_CARTS_REQUEST });
    try {
        const res = await axios.post(`https://rentapi-d55v.onrender.com/cart`, payload);
        dispatch({ type: types.ADD_CARTS_SUCCESS, payload: res.data });
    } catch {
        dispatch({ type: types.ADD_CARTS_FAILURE });
    }
}

const updateCarts = (id, payload) => async (dispatch) => {
    dispatch({ type: types.UPDATE_CARTS_REQUEST });
    try {
        const res = await axios.patch(`https://rentapi-d55v.onrender.com/cart/${id}`, payload);
        dispatch({ type: types.UPDATE_CARTS_SUCCESS, payload: res.data });
    } catch {
        dispatch({ type: types.UPDATE_CARTS_FAILURE });
    }
}

const deleteCarts = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_CARTS_REQUEST });
    try {
        await axios.delete(`https://rentapi-d55v.onrender.com/cart/${id}`);
        dispatch({ type: types.DELETE_CARTS_SUCCESS, payload: id });
    } catch {
        dispatch({ type: types.DELETE_CARTS_FAILURE });
    }
}



export { getCarts, addCarts, updateCarts, deleteCarts }