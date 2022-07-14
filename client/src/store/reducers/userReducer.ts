import { UserAction, UserActionTypes, UserState } from "../../types/UserType";

const initialState: UserState = {
  user: [],
  isAuth: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USER:
      return {
        user: action.payload,
        isAuth: false,
      };

    case UserActionTypes.SET_USER:
      return { ...state, user: [...state.user, ...action.payload] };

    case UserActionTypes.GET_AUTH:
      return {
        user: [],
        isAuth: action.payload,
      };

    case UserActionTypes.SET_AUTH:
      return { ...state, isAuth: action.payload };

    default:
      return state;
  }
};
