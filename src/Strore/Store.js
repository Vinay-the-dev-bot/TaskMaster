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
    description:
      "DECRIPTION 1DECRIPTION E   1DECRIPTION 1DECRIPTION 1DECRIPTPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION ION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1DECRIPTION 1",
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

const user = localStorage.getItem("username");
const token = localStorage.getItem("token");
const initialState = {
  username: user || "",
  tasks: [],
  completedTasks: [],
  unCompletedTasks: [],
  token: token || "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, completed: false }],
      };

    case "TASK_EDIT":
      const editedTasks = state.tasks.map((task) => {
        if (task._id == action.payload._id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.completed = false;
        }
        return task;
      });
      return {
        ...state,
        tasks: editedTasks,
      };
    case "DELETE_TASK":
      console.log("dateleTask", action);
      const updatedTasks = state.tasks.filter(
        (task) => task._id != action.payload._id
      );
      return { ...state, tasks: updatedTasks };
    case "COMPLETE_TASK":
      const completedTask = state.tasks.map((task) => {
        if (task._id == action.payload) {
          console.log(task._id, action.payload);
          task.completed = true;
        }
        return task;
      });
      console.log(completedTask);
      return { ...state, tasks: completedTask };
    case "INCOMPLETE_TASK":
      console.log(action);
      const inCompletedTask = state.tasks.map((task) => {
        if (task._id == action.payload) {
          console.log(task._id, action.payload);
          task.completed = false;
        }
        return task;
      });
      console.log(inCompletedTask);
      return { ...state, tasks: inCompletedTask };
    case "LOGIN":
      console.log(action);
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      };
    case "LOGOUT":
      return { ...state, username: "", token: "", task: [] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
