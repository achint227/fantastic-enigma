const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductDescription', {
    ProductDescriptionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_ProductDescription_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProductDescription',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductDescription_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductDescription_ProductDescriptionID",
        unique: true,
        fields: [
          { name: "ProductDescriptionID" },
        ]
      },
    ]
  });
};
