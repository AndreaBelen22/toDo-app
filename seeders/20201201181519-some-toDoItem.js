"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "toDoItems",
      [
        {
          task: "Practice Quidditch",
          deadline: "ASAP",
          important: true,
          toDoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Feed Crookshanks",
          deadline: "every morning",
          important: true,
          toDoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Break up with Lila",
          deadline: "ASAP",
          important: false,
          toDoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Kill the basilisc",
          deadline: "before it kills everyone",
          important: true,
          toDoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Plan a way to access the Restricted Section",
          deadline: "ASAP",
          important: false,
          toDoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Find Scabbers, he's missing again",
          deadline: "now",
          important: false,
          toDoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("toDoItems", null, {});
  },
};
