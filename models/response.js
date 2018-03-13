module.exports = (sequelize, DataTypes) => {
  const response = sequelize.define('response', {
    formName: DataTypes.STRING,
    question: DataTypes.STRING,
    response: DataTypes.STRING,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return response;
};
