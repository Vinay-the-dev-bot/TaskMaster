export const undoTask = (task) => {
  return { type: "INCOMPLETE_TASK", payload: task.id };
};
export const completeTask = (task) => {
  return { type: "COMPLETE_TASK", payload: task.id };
};
