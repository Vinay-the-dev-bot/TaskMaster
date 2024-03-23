import { createStore } from "redux";
const task = [
  {
    id: 1,
    title: "task 1",
    // subtasks: [
    //   { subtasktitle: "subTask1", completed: false },
    //   { subtasktitle: "subTask2", completed: false },
    //   { subtasktitle: "subTask3", completed: false },
    //   { subtasktitle: "subTask4", completed: false },
    // ],
    description: "DECRIPTION 1",
    completed: false,
  },
  {
    id: 2,
    title: "task 2",
    // subtasks: [
    //   { subtasktitle: "subTask1", completed: false },
    //   { subtasktitle: "subTask2", completed: false },
    //   { subtasktitle: "subTask3", completed: false },
    //   { subtasktitle: "subTask4", completed: false },
    // ],
    description: "DECRIPTION 2",
    completed: false,
  },
  {
    id: 3,
    title: "task 3",
    // subtasks: [
    //   { subtasktitle: "subTask1", completed: false },
    //   { subtasktitle: "subTask2", completed: false },
    //   { subtasktitle: "subTask3", completed: false },
    //   { subtasktitle: "subTask4", completed: false },
    // ],
    description: "DECRIPTION 3",
    completed: false,
  },
];
const initialState = {
  name: "",
  tasks: task,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      const updatedTasks = state.tasks.filter(
        (task) => task.id != action.payload.id
      );
      return { ...state, tasks: updatedTasks };
    case "COMPLETE_TASK":
      console.log(action);
      const completedTask = state.tasks.map((task) => {
        if (task.id == action.payload) {
          console.log(task.id, action.payload);
          task.completed = true;
        }
        return task;
      });
      console.log(completedTask);
      return { ...state, tasks: completedTask };
    case "INCOMPLETE_TASK":
      console.log(action);
      const inCompletedTask = state.tasks.map((task) => {
        if (task.id == action.payload) {
          console.log(task.id, action.payload);
          task.completed = false;
        }
        return task;
      });
      console.log(inCompletedTask);
      return { ...state, tasks: inCompletedTask };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
