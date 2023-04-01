'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {through: 'orderProduct'})
    }

  }
  Product.init({
    prod_type: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    instock: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};