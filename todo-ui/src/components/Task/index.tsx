import React from "react";
import styles from "./Task.module.css";

function Task({ task, onComplete, onDelete }: any) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <i className="fas fa-circle"></i>
        ) : (
          <i className="far fa-circle"></i>
        )}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.text}
      </p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Task;
