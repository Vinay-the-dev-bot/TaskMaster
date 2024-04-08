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
  console.log(action);
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
    case "ADD_SUB_TASK":
      const updatedSubTasks = state.tasks.map((task) => {
        if (task._id == action.payload.id) {
          task.subTasks.push({
            title: action.payload.subTask,
            completed: false,
          });
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedSubTasks,
      };
    case "COMPLETE_SUB_TASK":
      const updatedCompletedSubTasks = state.tasks.map((task) => {
        if (task._id === action.payload.id) {
          const subTasksUpdated = task.subTasks.map((subTask, index) => {
            if (index == action.payload.index) {
              subTask.completed = !subTask.completed;
            }
            return subTask;
          });
          var ind = 0;
          subTasksUpdated.forEach((subTask) => {
            if (subTask.completed) ind++;
          });
          if (ind === subTasksUpdated.length && subTasksUpdated.length > 0) {
            task.completed = true;
          }
          task.subTasks = subTasksUpdated;
        }
        return task;
      });
      console.log(updatedCompletedSubTasks);
      return {
        ...state,
        tasks: updatedCompletedSubTasks,
      };
    case "TASK_EDIT":
      const editedTasks = state.tasks.map((task) => {
        if (task._id == action.payload._id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.subTasks.forEach((subTask) => (subTask.completed = false));
          task.completed = false;
        }
        console.log(task);
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
