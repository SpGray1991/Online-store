const Knex = require("knex");
const connection = require("../knexfile.js");
const { Model } = require("objection");

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class User extends Model {
  static get tableName() {
    return "user";
  }

  static get relationMappings() {
    return {
      basket: {
        relation: Model.HasOneRelation,
        modelClass: Basket,
        join: {
          from: "user.id",
          to: "basket.user_id",
        },
      },
      rating: {
        relation: Model.HasManyRelation,
        modelClass: Rating,
        join: {
          from: "user.id",
          to: "rating.user_id",
        },
      },
    };
  }
}

class Basket extends Model {
  static get tableName() {
    return "basket";
  }

  static get relationMappings() {
    return {
      basket_device: {
        relation: Model.HasManyRelation,
        modelClass: BasketDevice,
        join: {
          from: "basket.id",
          to: "basket_device.basket_id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "basket.user_id",
          to: "user.id",
        },
      },
    };
  }
}

class BasketDevice extends Model {
  static get tableName() {
    return "basket_device";
  }

  static get relationMappings() {
    return {
      device: {
        relation: Model.BelongsToOneRelation,
        modelClass: Device,
        join: {
          from: "basket_device.device_id",
          to: "device.id",
        },
      },
      basket: {
        relation: Model.BelongsToOneRelation,
        modelClass: Basket,
        join: {
          from: "basket_device.basket_id",
          to: "basket.id",
        },
      },
    };
  }
}

class Rating extends Model {
  static get tableName() {
    return "rating";
  }

  static get relationMappings() {
    return {
      device: {
        relation: Model.BelongsToOneRelation,
        modelClass: Device,
        join: {
          from: "rating.device_id",
          to: "device.id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "rating.user_id",
          to: "user.id",
        },
      },
    };
  }
}

class Device extends Model {
  static get tableName() {
    return "device";
  }

  static get relationMappings() {
    return {
      device_info: {
        relation: Model.HasManyRelation,
        modelClass: DeviceInfo,
        join: {
          from: "device.id",
          to: "device_info.device_id",
        },
      },
      rating: {
        relation: Model.HasManyRelation,
        modelClass: Rating,
        join: {
          from: "device.id",
          to: "rating.device_id",
        },
      },
      basket_device: {
        relation: Model.HasManyRelation,
        modelClass: BasketDevice,
        join: {
          from: "device.id",
          to: "basket_device.device_id",
        },
      },
      type: {
        relation: Model.BelongsToOneRelation,
        modelClass: Type,
        join: {
          from: "device.type_id",
          to: "type.id",
        },
      },
      brand: {
        relation: Model.BelongsToOneRelation,
        modelClass: Brand,
        join: {
          from: "device.brand_id",
          to: "brand.id",
        },
      },
    };
  }
}

class DeviceInfo extends Model {
  static get tableName() {
    return "device_info";
  }

  static get relationMappings() {
    return {
      device: {
        relation: Model.BelongsToOneRelation,
        modelClass: Device,
        join: {
          from: "device_info.device_id",
          to: "device.id",
        },
      },
    };
  }
}

class Type extends Model {
  static get tableName() {
    return "type";
  }

  static get relationMappings() {
    return {
      device: {
        relation: Model.HasManyRelation,
        modelClass: Device,
        join: {
          from: "type.id",
          to: "device.type_id",
        },
      },
      brand: {
        relation: Model.ManyToManyRelation,
        modelClass: Brand,
        join: {
          from: "type.id",
          through: {
            from: "type_brand.type_id",
            to: "type_brand.brand_id",
          },
          to: "brand.id",
        },
      },
    };
  }
}

class Brand extends Model {
  static get tableName() {
    return "brand";
  }

  static get relationMappings() {
    return {
      device: {
        relation: Model.HasManyRelation,
        modelClass: Device,
        join: {
          from: "brand.id",
          to: "device.brand_id",
        },
      },
      type: {
        relation: Model.HasOneThroughRelation,
        modelClass: Type,
        join: {
          from: "brand.id",
          through: {
            from: "type_brand.brand_id",
            to: "type_brand.type_id",
          },
          to: "type.id",
        },
      },
    };
  }
}

module.exports = {
  Device,
  DeviceInfo,
  User,
  Type,
  Brand,
  BasketDevice,
  Rating,
  Basket,
};
