const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../db/models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brand_id, type_id, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.query().insert({
        name,
        price,
        brand_id,
        type_id,
        img: fileName,
      });

      if (info) {
        const infoArr = JSON.parse(info);

        await infoArr.map(async (i) => {
          await DeviceInfo.query().insert({
            title: i.title,
            description: i.description,
            device_id: device.id,
          });
        });
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brand_id, type_id, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!brand_id && !type_id) {
      devices = await Device.query().offset(offset).limit(limit).page(page);
    }
    if (brand_id && !type_id) {
      devices = await Device.query()
        .where("brand_id", "=", brand_id)
        .offset(offset)
        .limit(limit)
        .page(page);
    }
    if (!brand_id && type_id) {
      devices = await Device.query()
        .where("type_id", "=", type_id)
        .offset(offset)
        .limit(limit)
        .page(page);
    }
    if (brand_id && type_id) {
      devices = await Device.query()
        .where("type_id", "=", type_id)
        .where("brand_id", "=", brand_id)
        .offset(offset)
        .limit(limit)
        .page(page);
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.query().findById(id);

    const info = Array.from(
      await DeviceInfo.query().where("device_id", "=", id)
    );

    device["info"] = info;

    return res.json(device);
  }
}

module.exports = new DeviceController();
