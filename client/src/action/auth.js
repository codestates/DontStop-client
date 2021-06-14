export const IS_LOGIN = "IS_LOGIN";
export const SET_USER_INFO = "LOGIN_USER_INFO";

export const setLoginStatus = (boolean) => {
    return {
        type: IS_LOGIN,
        payload: boolean,
    };
};

export const setUserInfo = (userInfo) => {
    return {
        type: SET_USER_INFO,
        payload: userInfo,
    };
};
