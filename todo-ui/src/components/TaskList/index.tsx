import React from "react";
import styles from "./TaskList.module.css";
import Task from "../Task";

function TaskList({ tasks, onComplete, onDelete }: any) {
  const taskNumber = tasks.length;
  const completedTasks = tasks.filter((task: any) => task.completed).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create Tasks: </p>
          <span>{taskNumber}</span>
        </div>
        <div className={styles.textPurple}>
          <p>Compleated Tasks: </p>
          <span>
            {completedTasks} of {taskNumber}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task: any) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;
