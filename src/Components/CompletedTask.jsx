import { useDispatch } from "react-redux";
import { undoTask } from "../Strore/actions";
import { Text } from "@chakra-ui/react";
function TaskCard({ task }) {
  const dispatch = useDispatch();
  function handleCheckboxChange(task) {
    // dispatch({ type: "INCOMPLETE_TASK", payload: task.id });
    dispatch(undoTask(task));
  }
  return (
    <>
      {/* <p>{JSON.stringify(task)}</p>; */}
      <div key={task.id}>
        <input
          type="checkbox"
          id={`task${task.id}`}
          onChange={() => handleCheckboxChange(task)}
        />
        <label htmlFor={`task${task.id}`}>{task.title}</label>
        <Text style={{ textDecorationLine: "line-through" }}>
          {task.description}
        </Text>
      </div>
    </>
  );
}

export default TaskCard;
