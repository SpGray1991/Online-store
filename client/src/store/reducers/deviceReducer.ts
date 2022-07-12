import {
  DeviceAction,
  DeviceActionTypes,
  DeviceState,
} from "../../types/DeviceType";

const initialState: DeviceState = {
  devices: [],
  types: [],
  brands: [],
};

export const deviceReducer = (
  state = initialState,
  action: DeviceAction
): DeviceState => {
  switch (action.type) {
    case DeviceActionTypes.GET_DEVICES:
      return {
        devices: action.payload,
        types: [],
        brands: [],
      };

    case DeviceActionTypes.SET_DEVICES:
      return { ...state, devices: [...state.devices, ...action.payload] };

    case DeviceActionTypes.GET_BRANDS:
      return {
        devices: [],
        types: [],
        brands: action.payload,
      };

    case DeviceActionTypes.SET_BRANDS:
      return { ...state, brands: [...state.brands, ...action.payload] };

    case DeviceActionTypes.GET_TYPES:
      return {
        devices: [],
        types: action.payload,
        brands: [],
      };

    case DeviceActionTypes.SET_TYPES:
      return { ...state, types: [...state.types, ...action.payload] };

    default:
      return state;
  }
};
