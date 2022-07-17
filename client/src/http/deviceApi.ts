import { $authHost, $host } from "./index";

import { IBrand, IDevice, IType } from "../types/DeviceType";

export const createType = async (type: IType) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand: IBrand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async (device: IDevice) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevices = async (
  type_id?: number | null,
  brand_id?: number | null,
  page?: number,
  limit?: number
) => {
  const { data } = await $host.get("api/device", {
    params: {
      type_id,
      brand_id,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneDevice = async (id: string | undefined) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
