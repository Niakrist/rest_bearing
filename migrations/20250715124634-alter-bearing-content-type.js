/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.changeColumn("bearings", "content", {
    type: Sequelize.TEXT,
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.changeColumn("bearings", "content", {
    type: Sequelize.STRING,
  });
}
