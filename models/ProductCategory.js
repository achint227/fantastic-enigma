const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductCategory', {
    ProductCategoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParentProductCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ProductCategory',
        key: 'ProductCategoryID'
      }
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "AK_ProductCategory_Name"
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_ProductCategory_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductCategory',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductCategory_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_ProductCategory_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductCategory_ProductCategoryID",
        unique: true,
        fields: [
          { name: "ProductCategoryID" },
        ]
      },
    ]
  });
};
