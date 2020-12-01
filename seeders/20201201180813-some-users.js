"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Harry",
          email: "harry@hogwarts.com",
          phone: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hermione",
          email: "hermione@hogwarts.com",
          phone: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ron",
          email: "ron@hogwarts.com",
          phone: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
