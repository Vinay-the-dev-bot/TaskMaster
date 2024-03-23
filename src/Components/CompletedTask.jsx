import { useDispatch } from "react-redux";
import { undoTask } from "../Strore/actions";
import { Box, Button, Text } from "@chakra-ui/react";
function TaskCard({ task }) {
  const dispatch = useDispatch();
  function handleCheckboxChange(task) {
    // dispatch({ type: "INCOMPLETE_TASK", payload: task.id });
    dispatch(undoTask(task));
  }
  return (
    <>
      {/* <p>{JSON.stringify(task)}</p>; */}
      {/* <div key={task.id}>
        <input
          type="checkbox"
          id={`task${task.id}`}
          onChange={() => handleCheckboxChange(task)}
        />
        <label htmlFor={`task${task.id}`}>{task.title}</label>
        <Text textDecoration={"line-through"}>{task.description}</Text>
      </div> */}
      <Box onClick={() => dispatch(undoTask(task))}>
        <Button textDecoration={"line-through"}>{task.title}</Button>
      </Box>
    </>
  );
}

export default TaskCard;
