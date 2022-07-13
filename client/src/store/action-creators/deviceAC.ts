import { Dispatch } from "redux";
import {
  IType,
  DeviceAction,
  DeviceActionTypes,
  IBrand,
} from "../../types/DeviceType";

/* export const getFilms = () => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.API_FILMS });
      const response = await filmApi.popularFilms();
      dispatch({
        type: FilmActionTypes.API_FILMS_SUCCESS,
        payload: response.results,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.API_FILMS_ERROR,
        payload: "Произошла ошибка при загрузке фильмов!",
      });
    }
  };
};
 */
export const setSelectedType = (type: IType) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionTypes.SET_SELECTED_TYPE,
      payload: type,
    });
  };
};

export const setSelectedBrand = (brand: IBrand) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionTypes.SET_SELECTED_BRAND,
      payload: brand,
    });
  };
};
