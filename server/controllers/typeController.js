const { Type } = require("../db/models/models");
const ApiError = require("../error/ApiError");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.query().insert({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.query();
    return res.json(types);
  }
}

module.exports = new TypeController();
