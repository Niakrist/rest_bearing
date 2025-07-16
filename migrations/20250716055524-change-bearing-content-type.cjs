"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("bearings", "content", {
      type: Sequelize.TEXT,
      allowNull: true, // Или false, в зависимости от ваших требований
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("bearings", "content", {
      type: Sequelize.STRING,
      allowNull: true, // Соответствует исходному значению
    });
  },
};
