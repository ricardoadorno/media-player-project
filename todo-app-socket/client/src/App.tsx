import Todo from "./Todo/Todo";
import TodoApp from "./Todo/TodoApp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/app" element={<TodoApp socket={socket} />} />
      </Routes>
    </Router>
  );
}

export default App;
