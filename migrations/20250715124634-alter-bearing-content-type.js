/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("bearings", "content", {
      type: Sequelize.TEXT,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("bearings", "content", {
      type: Sequelize.STRING,
    });
  },
};
