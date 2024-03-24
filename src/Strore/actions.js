export const undoTask = (task) => {
  return { type: "INCOMPLETE_TASK", payload: task._id };
};
export const completeTask = (task) => {
  return { type: "COMPLETE_TASK", payload: task._id };
};
export const addTasks = (data) => {
  return { type: "TASKS", payload: data };
};
