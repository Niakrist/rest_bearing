"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("bearings", "size", {
      type: Sequelize.STRING,
      allowNull: true, // Поле необязательное
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("bearings", "size");
  },
};
