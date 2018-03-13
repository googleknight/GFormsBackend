module.exports = (sequelize, DataTypes) => {
  const formdetail = sequelize.define('formdetail', {
    formName: DataTypes.STRING,
    question: DataTypes.STRING,
    required: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return formdetail;
};
