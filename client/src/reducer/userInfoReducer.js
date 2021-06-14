import { SET_USER_INFO } from "../action/auth";
import { initialState } from "./initialState";

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, userInfo: action.payload };
        default:
            return state;
    }
};

export default userInfoReducer;
