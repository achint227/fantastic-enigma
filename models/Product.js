const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    ProductID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "AK_Product_Name"
    },
    ProductNumber: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "AK_Product_ProductNumber"
    },
    Color: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    StandardCost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    ListPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    Size: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    ProductCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ProductCategory',
        key: 'ProductCategoryID'
      }
    },
    ProductModelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ProductModel',
        key: 'ProductModelID'
      }
    },
    SellStartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SellEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DiscontinuedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ThumbNailPhoto: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    ThumbnailPhotoFileName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_Product_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Product',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_Product_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_Product_ProductNumber",
        unique: true,
        fields: [
          { name: "ProductNumber" },
        ]
      },
      {
        name: "AK_Product_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_Product_ProductID",
        unique: true,
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
};
