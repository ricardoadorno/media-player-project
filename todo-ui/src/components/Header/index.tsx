import React from "react";
import styles from "./Header.module.css";

function Header({ onAddTask }: { onAddTask: (taskText: string) => void }) {
  const [taskText, setTaskText] = React.useState("");

  function handleAddTask(e: React.SyntheticEvent) {
    e.preventDefault();
    onAddTask(taskText);
    setTaskText("");
  }

  return (
    <>
      <header className={styles.header}>Todo List App</header>
      <form onSubmit={handleAddTask} className={styles.todo}>
        <input
          type="text"
          placeholder="Add a new todo"
          className={styles.input}
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          Add <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </>
  );
}

export default Header;
