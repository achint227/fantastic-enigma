const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductModel', {
    ProductModelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "AK_ProductModel_Name"
    },
    CatalogDescription: {
      type: "XML",
      allowNull: true
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_ProductModel_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductModel',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductModel_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_ProductModel_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductModel_ProductModelID",
        unique: true,
        fields: [
          { name: "ProductModelID" },
        ]
      },
    ]
  });
};
