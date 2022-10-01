var DataTypes = require("sequelize").DataTypes;
var _Address = require("./Address");
var _Customer = require("./Customer");
var _CustomerAddress = require("./CustomerAddress");
var _Logger = require("./Logger");
var _Product = require("./Product");
var _ProductCategory = require("./ProductCategory");
var _ProductDescription = require("./ProductDescription");
var _ProductModel = require("./ProductModel");
var _ProductModelProductDescription = require("./ProductModelProductDescription");
var _SalesOrderDetail = require("./SalesOrderDetail");
var _SalesOrderHeader = require("./SalesOrderHeader");

function initModels(sequelize) {
  var Address = _Address(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var CustomerAddress = _CustomerAddress(sequelize, DataTypes);
  var Logger = _Logger(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductCategory = _ProductCategory(sequelize, DataTypes);
  var ProductDescription = _ProductDescription(sequelize, DataTypes);
  var ProductModel = _ProductModel(sequelize, DataTypes);
  var ProductModelProductDescription = _ProductModelProductDescription(sequelize, DataTypes);
  var SalesOrderDetail = _SalesOrderDetail(sequelize, DataTypes);
  var SalesOrderHeader = _SalesOrderHeader(sequelize, DataTypes);

  Address.belongsToMany(Customer, { as: 'CustomerID_Customers', through: CustomerAddress, foreignKey: "AddressID", otherKey: "CustomerID" });
  Customer.belongsToMany(Address, { as: 'AddressID_Addresses', through: CustomerAddress, foreignKey: "CustomerID", otherKey: "AddressID" });
  ProductDescription.belongsToMany(ProductModel, { as: 'ProductModelID_ProductModels', through: ProductModelProductDescription, foreignKey: "ProductDescriptionID", otherKey: "ProductModelID" });
  ProductModel.belongsToMany(ProductDescription, { as: 'ProductDescriptionID_ProductDescriptions', through: ProductModelProductDescription, foreignKey: "ProductModelID", otherKey: "ProductDescriptionID" });
  CustomerAddress.belongsTo(Address, { as: "Address", foreignKey: "AddressID"});
  Address.hasMany(CustomerAddress, { as: "CustomerAddresses", foreignKey: "AddressID"});
  SalesOrderHeader.belongsTo(Address, { as: "BillToAddress", foreignKey: "BillToAddressID"});
  Address.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "BillToAddressID"});
  SalesOrderHeader.belongsTo(Address, { as: "ShipToAddress", foreignKey: "ShipToAddressID"});
  Address.hasMany(SalesOrderHeader, { as: "ShipToAddress_SalesOrderHeaders", foreignKey: "ShipToAddressID"});
  CustomerAddress.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerID"});
  Customer.hasMany(CustomerAddress, { as: "CustomerAddresses", foreignKey: "CustomerID"});
  SalesOrderHeader.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerID"});
  Customer.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "CustomerID"});
  SalesOrderDetail.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(SalesOrderDetail, { as: "SalesOrderDetails", foreignKey: "ProductID"});
  Product.belongsTo(ProductCategory, { as: "ProductCategory", foreignKey: "ProductCategoryID"});
  ProductCategory.hasMany(Product, { as: "Products", foreignKey: "ProductCategoryID"});
  ProductCategory.belongsTo(ProductCategory, { as: "ParentProductCategory", foreignKey: "ParentProductCategoryID"});
  ProductCategory.hasMany(ProductCategory, { as: "ProductCategories", foreignKey: "ParentProductCategoryID"});
  ProductModelProductDescription.belongsTo(ProductDescription, { as: "ProductDescription", foreignKey: "ProductDescriptionID"});
  ProductDescription.hasMany(ProductModelProductDescription, { as: "ProductModelProductDescriptions", foreignKey: "ProductDescriptionID"});
  Product.belongsTo(ProductModel, { as: "ProductModel", foreignKey: "ProductModelID"});
  ProductModel.hasMany(Product, { as: "Products", foreignKey: "ProductModelID"});
  ProductModelProductDescription.belongsTo(ProductModel, { as: "ProductModel", foreignKey: "ProductModelID"});
  ProductModel.hasMany(ProductModelProductDescription, { as: "ProductModelProductDescriptions", foreignKey: "ProductModelID"});
  SalesOrderDetail.belongsTo(SalesOrderHeader, { as: "SalesOrder", foreignKey: "SalesOrderID"});
  SalesOrderHeader.hasMany(SalesOrderDetail, { as: "SalesOrderDetails", foreignKey: "SalesOrderID"});

  return {
    Address,
    Customer,
    CustomerAddress,
    Logger,
    Product,
    ProductCategory,
    ProductDescription,
    ProductModel,
    ProductModelProductDescription,
    SalesOrderDetail,
    SalesOrderHeader,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
