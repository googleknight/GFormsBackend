module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('responses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formName: {
      type: Sequelize.STRING,
    },
    question: {
      type: Sequelize.STRING,
    },
    response: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('responses'),
};
