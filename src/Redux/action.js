import * as types from "./actionTypes";
import axios from "axios";

const getProducts = () => (dispatch) => {
    dispatch(
        {
            type: types.GET_PRODUCTS_REQUEST
        }
    );

    return axios.get("http://localhost:8080/furniture")
        .then((res) => {
            dispatch(
                {
                    type: types.GET_PRODUCTS_SUCCESS, payload: res.data
                }
            );
        })
        .then((err) => {
            dispatch(
                {
                    type: types.GET_PRODUCTS_FAILURE, payload: err
                }
            );
        });
};


export { getProducts };