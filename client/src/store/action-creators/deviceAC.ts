import { Dispatch } from "redux";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceApi";
import {
  IType,
  DeviceAction,
  DeviceActionTypes,
  IBrand,
  IDevice,
} from "../../types/DeviceType";

export const setTypes = () => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    const response: IType[] = await fetchTypes();
    dispatch({
      type: DeviceActionTypes.SET_TYPES,
      payload: response,
    });
  };
};

export const setBrands = () => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    const response: IBrand[] = await fetchBrands();
    dispatch({
      type: DeviceActionTypes.SET_BRANDS,
      payload: response,
    });
  };
};

export const setDevices = (
  type_id?: number | null,
  brand_id?: number | null,
  page?: number,
  limit?: number
) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    const response = await fetchDevices(type_id, brand_id, page, limit);

    const res: IDevice[] = response.results;
    const count: number = response.total;
    console.log("TEST", count);

    dispatch({
      type: DeviceActionTypes.SET_DEVICES,
      payload: res,
    });
    dispatch({
      type: DeviceActionTypes.SET_TOTAL_COUNT,
      payload: count,
    });
  };
};

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

export const setPage = (page: number) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionTypes.SET_PAGE,
      payload: page,
    });
  };
};

export const setLimit = (limit: number) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionTypes.SET_LIMIT,
      payload: limit,
    });
  };
};

export const setTotalCount = (totalCount: number) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionTypes.SET_TOTAL_COUNT,
      payload: totalCount,
    });
  };
};
