import * as types from "./actionType.cart";

const initialState = {
    carts: [],
    isLoading: false,
    isError: false
}

const reducerCart = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        //get CARTS
        case types.GET_CARTS_REQUEST: {
            return { ...state, isLoading: true };
        }

        case types.GET_CARTS_SUCCESS: {
            return { ...state, isLoading: false, carts: payload };
        }

        case types.GET_CARTS_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        // add CARTS
        case types.ADD_CARTS_REQUEST: {
            return { ...state, isLoading: true };
        }

        case types.ADD_CARTS_SUCCESS: {
            return { ...state, isLoading: false, carts: [...state.carts, payload] };
        }

        case types.ADD_CARTS_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        // update CARTS
        case types.UPDATE_CARTS_REQUEST: {
            return { ...state, isLoading: true };
        }

        case types.UPDATE_CARTS_SUCCESS: {
            let newTask = state.carts.map((item) => {
                return item.id === payload.id ? payload : item
            })
            return { ...state, isLoading: false, carts: newTask };
        }

        case types.UPDATE_CARTS_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        // delete CARTS
        case types.DELETE_CARTS_REQUEST: {
            return { ...state, isLoading: true };
        }

        case types.DELETE_CARTS_SUCCESS: {
            let filterTask = state.carts.filter((item) => item.id !== payload)
            return { ...state, isLoading: false, carts: filterTask };
        }

        case types.DELETE_CARTS_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        default: {
            return state
        }
    }
}


export { reducerCart }