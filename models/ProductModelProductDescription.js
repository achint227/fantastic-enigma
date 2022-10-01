const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductModelProductDescription', {
    ProductModelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ProductModel',
        key: 'ProductModelID'
      }
    },
    ProductDescriptionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ProductDescription',
        key: 'ProductDescriptionID'
      }
    },
    Culture: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_ProductModelProductDescription_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductModelProductDescription',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductModelProductDescription_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductModelProductDescription_ProductModelID_ProductDescriptionID_Culture",
        unique: true,
        fields: [
          { name: "ProductModelID" },
          { name: "ProductDescriptionID" },
          { name: "Culture" },
        ]
      },
    ]
  });
};
