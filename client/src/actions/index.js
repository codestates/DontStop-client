export const ACTIONS = {
  // User
  SET_USERINFO: "SET_USERINFO",
  TOGGLE_LOGINSTATUS: "TOGGLE_LOGINSTATUS",
};

// -------------User--------------- //

export const setUserInfo = (email, password, accessToken) => {
  return {
    type: ACTIONS.SET_USERINFO,
    payload: { email, password, accessToken },
  };
};

export const toggleLoginStatus = (loginStatus) => {
  return {
    type: ACTIONS.TOGGLE_LOGINSTATUS,
    payload: { loginStatus },
  };
};
