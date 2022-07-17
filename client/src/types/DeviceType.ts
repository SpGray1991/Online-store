export interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export interface Info {
  title?: string;
  description?: string;
  number?: number;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface IBrand {
  id?: number;
  name?: string;
}
export interface IType {
  id?: number;
  name?: string;
}

export interface DeviceState {
  devices: IDevice[];
  brands: IBrand[];
  types: IType[];
  selectedType: IType;
  selectedBrand: IBrand;
  page: number;
  totalCount: number;
  limit: number;
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
  SET_PAGE = "SET_PAGE",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  SET_LIMIT = "SET_LIMIT",
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

interface SetPageAction {
  type: DeviceActionTypes.SET_PAGE;
  payload: number;
}

interface SetTotalCountAction {
  type: DeviceActionTypes.SET_TOTAL_COUNT;
  payload: number;
}

interface SetLimitAction {
  type: DeviceActionTypes.SET_LIMIT;
  payload: number;
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
  | SetSelectedBrandAction
  | SetLimitAction
  | SetPageAction
  | SetTotalCountAction;
