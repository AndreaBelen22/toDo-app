"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class toDoLists extends Model {
    static associate(models) {
      toDoLists.belongsTo(models.user);
      toDoLists.hasMany(models.toDoItem);
    }
  }
  toDoLists.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "toDoLists",
    }
  );
  return toDoLists;
};
