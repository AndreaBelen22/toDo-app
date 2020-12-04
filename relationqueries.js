const { user, todoitem, toDoLists, tag } = require("./models");

async function listsWithUsers() {
  const lists = await todolist.findAll({
    include: { model: user, attributes: ["name"] },
  });

  return lists.map((list) => list.get({ plain: true }));
}

//listsWithUsers().then(lists => console.log(lists));

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todolist, attributes: ["name"] },
  });
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then(users => console.log(users));

async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [toDoLists] });
  return result.get({ plain: true });
}

getUserWithList(1).then((user) => console.log("user by id with lists", user));

async function imporantTodos() {
  const todos = await todoitem.findAll({
    where: { important: true },
    include: { model: todolist, attributes: ["name"] },
  });
  return todos.map((item) => item.get({ plain: true }));
}

//imporantTodos().then((items) => console.log("important todoItems", items));

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todolist,
        attributes: ["name"],
        include: { model: todoitem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}

//fullUserById(1).then((user) => console.log("User with tasks", user));

async function itemsWithTags() {
  const items = await todoitem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}
