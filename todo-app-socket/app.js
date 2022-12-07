const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const PORT = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

let todoList = [];

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("addTodo", (todo) => {
    todoList.unshift(todo);
    socket.emit("todos", todoList);
  });

  socket.on("viewComments", (id) => {
    for (let i = 0; i < todoList.length; i++) {
      if (id === todoList[i].id) {
        socket.emit("commentsReceived", todoList[i]);
      }
    }
  });
  socket.on("updateComment", (data) => {
    const { user, todoID, comment } = data;
    for (let i = 0; i < todoList.length; i++) {
      if (todoID === todoList[i].id) {
        todoList[i].comments.push({ name: user, text: comment });
        socket.emit("commentsReceived", todoList[i]);
      }
    }
  });

  socket.on("deleteTodo", (id) => {
    todoList = todoList.filter((todo) => todo.id !== id);
    socket.emit("todos", todoList);
    // sendNotification("<TEMPLATE_ID>");
  });

  socket.on("disconnect", () => {
    socket.disconnect();
    console.log("🔥: A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.json(todoList);
});

http.listen(PORT, () => {
  console.log(`Server listening on http://localhost:4000 `);
});
