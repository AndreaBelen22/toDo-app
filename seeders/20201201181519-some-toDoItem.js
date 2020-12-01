"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Practice Quidditch",
          deadline: "ASAP",
          important: true,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Feed Crookshanks",
          deadline: "every morning",
          important: true,
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Break up with Lila",
          deadline: "ASAP",
          important: false,
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Kill the basilisc",
          deadline: "before it kills everyone",
          important: true,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Plan a way to access the Restricted Section",
          deadline: "ASAP",
          important: false,
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Find Scabbers, he's missing again",
          deadline: "now",
          important: false,
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
