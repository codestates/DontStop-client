import { IS_LOGIN } from "../action/auth";
import { initialState } from "./initialState";

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN:
            return { ...state, isLogin: action.payload };
        default:
            return state;
    }
};

export default loginReducer;
