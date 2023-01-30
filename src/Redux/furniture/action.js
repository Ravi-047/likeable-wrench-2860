import * as types from "./actionTypes";
import axios from "axios";

const getProducts = () => async (dispatch) => {
    dispatch(
        {
            type: types.GET_PRODUCTS_REQUEST
        }
    );

    try {
        const res = await axios.get("https://rentapi-d55v.onrender.com/furniture");
        dispatch(
            {
                type: types.GET_PRODUCTS_SUCCESS, payload: res.data
            }
        );
    } catch (error) {
        dispatch(
            {
                type: types.GET_PRODUCTS_FAILURE, payload: error
            }
        );
    }
};


export { getProducts };