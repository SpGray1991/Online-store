const { Brand } = require("../db/models/models");
class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.query().insert({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.query();
    return res.json(brands);
  }
}

module.exports = new BrandController();
