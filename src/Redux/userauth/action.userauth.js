import axios from "axios";
import * as types from "./actionType.userauth";


const registerUser = (payload) => async (dispatch) => {
    dispatch({ type: types.REGISTER_REQUEST });
    try {
        const res = await axios.post("https://rentapi-d55v.onrender.com/user", payload);
        console.log(res.data);
        dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });

    } catch (error) {
        dispatch({ type: types.REGISTER_FAILURE, payload: error })
    }
}


const loginUser = () => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    try {
        const res = await axios.get(`https://rentapi-d55v.onrender.com/user`);
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: types.LOGIN_FAILURE, payload: error });
    }
}




export { registerUser, loginUser }