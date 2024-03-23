import { useDispatch } from "react-redux";
import { completeTask } from "../Strore/actions";
import { Text } from "@chakra-ui/react";

function TaskCard({ task }) {
  const dispatch = useDispatch();
  function handleCheckboxChange(task) {
    // dispatch({ type: "COMPLETE_TASK", payload: task.id });
    dispatch(completeTask(task));
  }
  return (
    <>
      {/* <p>{JSON.stringify(task)}</p>; */}
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          id={`task${task.id}`}
          onChange={() => handleCheckboxChange(task)}
        />
        <label htmlFor={`task${task.id}`}>{task.title}</label>
        <Text strikethrough>{task.description}</Text>
      </div>
    </>
  );
}

export default TaskCard;
