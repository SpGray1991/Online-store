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

export interface ModalProps {
  show: boolean;
  onHide: any;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface IBrand {
  id: number;
  name: string;
}
export interface IType {
  id: number;
  name: string;
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
  selectedType: any;
  selectedBrand: any;
}

export enum DeviceActionTypes {
  GET_DEVICES = "GET_DEVICES",
  SET_DEVICES = "SET_DEVICES",
  GET_BRANDS = "GET_BRANDS",
  SET_BRANDS = "SET_BRANDS",
  GET_TYPES = "GET_TYPES",
  SET_TYPES = "SET_TYPES",
  GET_SELECTED_TYPE = "GET_SELECTED_TYPE",
  SET_SELECTED_TYPE = "SET_SELECTED_TYPE",
  GET_SELECTED_BRAND = "GET_SELECTED_BRAND",
  SET_SELECTED_BRAND = "SET_SELECTED_BRAND",
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

interface GetSelectedTypeAction {
  type: DeviceActionTypes.GET_SELECTED_TYPE;
  payload: IType;
}
interface SetSelectedTypeAction {
  type: DeviceActionTypes.SET_SELECTED_TYPE;
  payload: IType;
}

interface GetSelectedBrandAction {
  type: DeviceActionTypes.GET_SELECTED_BRAND;
  payload: {};
}
interface SetSelectedBrandAction {
  type: DeviceActionTypes.SET_SELECTED_BRAND;
  payload: {};
}

export type DeviceAction =
  | GetDevicesAction
  | SetDevicesAction
  | GetBrandsAction
  | SetBrandsAction
  | GetTypesAction
  | SetTypesAction
  | GetSelectedTypeAction
  | SetSelectedTypeAction
  | GetSelectedBrandAction
  | SetSelectedBrandAction;
