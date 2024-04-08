export const undoTask = (task) => {
  return { type: "INCOMPLETE_TASK", payload: task._id };
};
export const completeTask = (task) => {
  return { type: "COMPLETE_TASK", payload: task._id };
};
export const addTasks = (data) => {
  return { type: "TASKS", payload: data };
};
export const addSubTasks = (task, subTask) => {
  return {
    type: "ADD_SUB_TASK",
    payload: { id: task._id, subTask: subTask },
  };
};

export const completeSubTask = (task, index) => {
  return {
    type: "COMPLETE_SUB_TASK",
    payload: { id: task._id, index },
  };
};
