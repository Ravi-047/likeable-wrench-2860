import * as types from "./actionType.userauth";

const initialState = {
    user: [],
    isAuth: false,
    isLoading: false,
    isError: false
}

const reducerAuth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        //Register user
        case types.REGISTER_REQUEST: {
            return { ...state, isLoading: true };
        }
        case types.REGISTER_SUCCESS: {
            return { ...state, isLoading: false, user: [...state.user, payload] };
        }
        case types.REGISTER_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        // Login user
        case types.LOGIN_REQUEST: {
            return { ...state, isLoading: true };
        }
        case types.LOGIN_SUCCESS: {
            return { ...state, isLoading: false, user: payload, isAuth: true };
        }
        case types.LOGIN_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        default: {
            return state;
        }
    }
}


export { reducerAuth }