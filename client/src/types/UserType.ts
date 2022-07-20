export interface IUser {
  id: number;
}

export interface UserState {
  user: IUser[];
  isAuth: boolean;
}

export enum UserActionTypes {
  GET_USER = "GET_USER",
  SET_USER = "SET_USER",
  GET_AUTH = "GET_AUTH",
  SET_AUTH = "SET_AUTH",
}

interface GetUserAction {
  type: UserActionTypes.GET_USER;
  payload: IUser[];
}

interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser[];
}

interface GetAuthAction {
  type: UserActionTypes.GET_AUTH;
  payload: boolean;
}

interface SetAuthAction {
  type: UserActionTypes.SET_AUTH;
  payload: boolean;
}

export type UserAction =
  | GetUserAction
  | SetUserAction
  | GetAuthAction
  | SetAuthAction;
