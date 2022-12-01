const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// this is the function to init the category //

Category.init(

  {
    // define the columns
    // by their id 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    // their name 
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
  
);

module.exports = Category;
