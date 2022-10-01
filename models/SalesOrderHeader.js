const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderHeader', {
    SalesOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RevisionNumber: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DueDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ShipDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    OnlineOrderFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    SalesOrderNumber: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "AK_SalesOrderHeader_SalesOrderNumber"
    },
    PurchaseOrderNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AccountNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'CustomerID'
      }
    },
    ShipToAddressID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Address',
        key: 'AddressID'
      }
    },
    BillToAddressID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Address',
        key: 'AddressID'
      }
    },
    ShipMethod: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CreditCardApprovalCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SubTotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    TaxAmt: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    Freight: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    TotalDue: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_SalesOrderHeader_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SalesOrderHeader',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesOrderHeader_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "AK_SalesOrderHeader_SalesOrderNumber",
        unique: true,
        fields: [
          { name: "SalesOrderNumber" },
        ]
      },
      {
        name: "IX_SalesOrderHeader_CustomerID",
        fields: [
          { name: "CustomerID" },
        ]
      },
      {
        name: "PK_SalesOrderHeader_SalesOrderID",
        unique: true,
        fields: [
          { name: "SalesOrderID" },
        ]
      },
    ]
  });
};
