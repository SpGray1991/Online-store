import {
  DeviceAction,
  DeviceActionTypes,
  DeviceState,
} from "../../types/DeviceType";

const initialState: DeviceState = {
  devices: [
    {
      id: 1,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
    {
      id: 2,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
    {
      id: 3,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
    {
      id: 4,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
    {
      id: 5,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
    {
      id: 6,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
    {
      id: 7,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
    {
      id: 8,
      name: "Iphone 12 pro",
      price: 47000,
      rating: 5,
      img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8492_0_1_637780305226353417.webp",
    },
  ],
  types: [
    { id: 1, name: "Холодильники" },
    { id: 2, name: "Cмартфоны" },
    { id: 3, name: "Ноутбуки" },
    { id: 4, name: "Телевизоры" },
  ],
  brands: [
    { id: 1, name: "Samsung" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Lenovo" },
    { id: 4, name: "Asus" },
  ],
  selectedType: {},
  selectedBrand: {},
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
        selectedType: {},
        selectedBrand: [],
      };

    case DeviceActionTypes.SET_DEVICES:
      return { ...state, devices: [...state.devices, ...action.payload] };

    case DeviceActionTypes.GET_BRANDS:
      return {
        devices: [],
        types: [],
        brands: action.payload,
        selectedType: {},
        selectedBrand: [],
      };

    case DeviceActionTypes.SET_BRANDS:
      return { ...state, brands: [...state.brands, ...action.payload] };

    case DeviceActionTypes.GET_TYPES:
      return {
        devices: [],
        types: action.payload,
        brands: [],
        selectedType: {},
        selectedBrand: [],
      };

    case DeviceActionTypes.SET_TYPES:
      return { ...state, types: [...state.types, ...action.payload] };

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

    default:
      return state;
  }
};
