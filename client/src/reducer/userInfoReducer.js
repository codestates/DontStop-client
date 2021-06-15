import { initialState } from "./initialState";
import { ACTIONS } from "../actions/index";

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERINFO: {
      return { userInfo: action.payload };
    }
    default:
      return state;
  }
};

export default userInfoReducer;
