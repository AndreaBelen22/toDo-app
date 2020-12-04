const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const toDoList = require("./models").toDoLists;
const User = require("./models").user;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.post("/user", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

app.post("/user", async (req, res, next) => {
  try {
    const email = req.body.email;
    console.log(req.body);
    if (!email || email === " ") {
      res.status(400).send("Email address can't be null!");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});
app.post("/toDoLists", async (req, res, next) => {
  try {
    const newList = await toDoList.create(req.body);
    res.json(newList);
  } catch (e) {
    next(e);
  }
});

app.get("/toDoLists", async (req, res, next) => {
  const todoLists = await toDoList.findAll();
  res.json(todoLists);
});

app.put("/toDoLists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToUpdate = await toDoList.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send("List not found :(");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/user/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not found :(");
    } else {
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/user/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/toDoLists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToUpdate = await toDoList.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send("List not found");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});
app.delete("/user/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, { include: [toDoList] });
    if (!user) {
      res.status(404).send("User not found :(");
    } else {
      user.TodoLists.forEach(async (list) => await list.destroy());
      res.status(204).send("No content");
    }
  } catch (e) {
    next(e);
  }
});
app.delete("/user/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const toDelete = await toDoList.findByPk(listId);
    if (!toDelete) {
      res.status(404).send("List not found");
    } else {
      const deleted = await toDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`I'm running in port: ${PORT}`));
