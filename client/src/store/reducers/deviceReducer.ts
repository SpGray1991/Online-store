import {
  DeviceAction,
  DeviceActionTypes,
  DeviceState,
} from "../../types/DeviceType";

const initialState: DeviceState = {
  devices: [],
  types: [],
  brands: [],
  selectedType: {},
  selectedBrand: {},
  page: 1,
  totalCount: 0,
  limit: 3,
};

export const deviceReducer = (
  state = initialState,
  action: DeviceAction
): DeviceState => {
  switch (action.type) {
    case DeviceActionTypes.GET_DEVICES:
      return {
        ...state,
        devices: action.payload,
      };

    case DeviceActionTypes.SET_DEVICES:
      return { ...state, devices: action.payload };

    case DeviceActionTypes.GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };

    case DeviceActionTypes.SET_BRANDS:
      return { ...state, brands: action.payload };

    case DeviceActionTypes.GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case DeviceActionTypes.SET_TYPES:
      return { ...state, types: action.payload };

    case DeviceActionTypes.GET_SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload,
      };

    case DeviceActionTypes.SET_SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload,
      };

    case DeviceActionTypes.GET_SELECTED_BRAND:
      return {
        ...state,
        selectedBrand: action.payload,
      };

    case DeviceActionTypes.SET_SELECTED_BRAND:
      return {
        ...state,
        selectedBrand: action.payload,
      };

    case DeviceActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case DeviceActionTypes.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };

    default:
      return state;
  }
};
