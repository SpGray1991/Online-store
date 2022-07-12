/* export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: any[];
  overview: string;
  tagline: string;
} */

export interface IDevice {
  id: number;
}

export interface IBrand {
  id: number;
}
export interface IType {
  id: number;
}

/* export interface MovieCardProps {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
} */

export interface DeviceState {
  devices: IDevice[];
  brands: IBrand[];
  types: IType[];
}

export enum DeviceActionTypes {
  GET_DEVICES = "GET_DEVICES",
  SET_DEVICES = "SET_DEVICES",
  GET_BRANDS = "GET_BRANDS",
  SET_BRANDS = "SET_BRANDS",
  GET_TYPES = "GET_TYPES",
  SET_TYPES = "SET_TYPES",
}

interface GetDevicesAction {
  type: DeviceActionTypes.GET_DEVICES;
  payload: IDevice[];
}

interface SetDevicesAction {
  type: DeviceActionTypes.SET_DEVICES;
  payload: IDevice[];
}

interface GetBrandsAction {
  type: DeviceActionTypes.GET_BRANDS;
  payload: IBrand[];
}

interface SetBrandsAction {
  type: DeviceActionTypes.SET_BRANDS;
  payload: IBrand[];
}

interface GetTypesAction {
  type: DeviceActionTypes.GET_TYPES;
  payload: IType[];
}

interface SetTypesAction {
  type: DeviceActionTypes.SET_TYPES;
  payload: IType[];
}

export type DeviceAction =
  | GetDevicesAction
  | SetDevicesAction
  | GetBrandsAction
  | SetBrandsAction
  | GetTypesAction
  | SetTypesAction;
