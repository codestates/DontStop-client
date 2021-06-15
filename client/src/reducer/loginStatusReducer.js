import { ACTIONS } from "../actions";
import { initialState } from "./initialState";

const loginStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LOGINSTATUS: {
      return { loginStatus: action.payload };
    }

    default:
      return state;
  }
};

export default loginStatusReducer;
