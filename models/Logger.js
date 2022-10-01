const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Logger', {
    LogDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LogMessage: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Logger',
    schema: 'SalesLT',
    timestamps: false
  });
};
