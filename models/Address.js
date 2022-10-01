const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    AddressID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AddressLine1: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    AddressLine2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    StateProvince: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CountryRegion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PostalCode: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_Address_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Address',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_Address_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Address_AddressLine1_AddressLine2_City_StateProvince_PostalCode_CountryRegion",
        fields: [
          { name: "AddressLine1" },
          { name: "AddressLine2" },
          { name: "City" },
          { name: "StateProvince" },
          { name: "PostalCode" },
          { name: "CountryRegion" },
        ]
      },
      {
        name: "IX_Address_StateProvince",
        fields: [
          { name: "StateProvince" },
        ]
      },
      {
        name: "PK_Address_AddressID",
        unique: true,
        fields: [
          { name: "AddressID" },
        ]
      },
    ]
  });
};
