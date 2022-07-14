import { Dispatch } from "redux";
import { IUser, UserAction, UserActionTypes } from "../../types/UserType";

export const setUser = (user: IUser[]) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.SET_USER,
      payload: user,
    });
  };
};

export const setIsAuth = (isAuth: boolean) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.SET_AUTH,
      payload: isAuth,
    });
  };
};
