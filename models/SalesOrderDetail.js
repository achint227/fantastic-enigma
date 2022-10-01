const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderDetail', {
    SalesOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SalesOrderHeader',
        key: 'SalesOrderID'
      }
    },
    SalesOrderDetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderQty: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    UnitPriceDiscount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    LineTotal: {
      type: DataTypes.DECIMAL(38,6),
      allowNull: false
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_SalesOrderDetail_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SalesOrderDetail',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesOrderDetail_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_SalesOrderDetail_ProductID",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "PK_SalesOrderDetail_SalesOrderID_SalesOrderDetailID",
        unique: true,
        fields: [
          { name: "SalesOrderID" },
          { name: "SalesOrderDetailID" },
        ]
      },
    ]
  });
};
