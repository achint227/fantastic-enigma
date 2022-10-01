const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerAddress', {
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customer',
        key: 'CustomerID'
      }
    },
    AddressID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Address',
        key: 'AddressID'
      }
    },
    AddressType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_CustomerAddress_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CustomerAddress',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_CustomerAddress_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_CustomerAddress_CustomerID_AddressID",
        unique: true,
        fields: [
          { name: "CustomerID" },
          { name: "AddressID" },
        ]
      },
    ]
  });
};
