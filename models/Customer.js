const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    CustomerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NameStyle: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MiddleName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Suffix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CompanyName: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    SalesPerson: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    EmailAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PasswordHash: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    PasswordSalt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "AK_Customer_rowguid"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Customer',
    schema: 'SalesLT',
    timestamps: false,
    indexes: [
      {
        name: "AK_Customer_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Customer_EmailAddress",
        fields: [
          { name: "EmailAddress" },
        ]
      },
      {
        name: "PK_Customer_CustomerID",
        unique: true,
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};
