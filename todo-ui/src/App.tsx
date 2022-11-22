import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

type Tasks = {
  task: {
    id: string;
    text: string;
    completed: boolean;
  }[];
};

// TODO type's
function App() {
  const [tasks, setTasks] = React.useState<Tasks[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  React.useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskText: string) {
    const newTasks: any = [
      ...tasks,
      { id: Date.now().toString(), text: taskText },
    ];
    setTasksSave(newTasks);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks!.map((task: any) => {
      if (id === task.id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksSave(updatedTasks);
  }

  function setTasksSave(tasks: any) {
    setTasks(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks!.filter((task: any) => id !== task.id);
    setTasksSave(remainingTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onComplete={toggleTaskCompleted}
        onDelete={deleteTask}
      />
    </>
  );
}

export default App;
