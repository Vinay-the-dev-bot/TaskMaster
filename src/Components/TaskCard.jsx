import { useDispatch } from "react-redux";
import { completeTask } from "../Strore/actions";
import { Checkbox, Text } from "@chakra-ui/react";

function TaskCard({ task, setSelectedTask }) {
  const dispatch = useDispatch();
  function handleCheckboxChange(task) {
    // dispatch({ type: "COMPLETE_TASK", payload: task.id });

    dispatch(completeTask(task));
    setSelectedTask([]);
  }
  return (
    <>
      {/* <p>{JSON.stringify(task)}</p>; */}
      <div>
        {/* <input
          type="checkbox"
          checked={task.completed}
          id={`task${task.id}`}
          onChange={() => handleCheckboxChange(task)}
        /> */}
        <Checkbox
          size="lg"
          onChange={() => handleCheckboxChange(task)}
          colorScheme="orange"
          checked={task.completed}
        >
          {task.title}
        </Checkbox>
        {/* <label htmlFor={`task${task.id}`}>{task.title}</label> */}
        <Text>{task.description}</Text>
      </div>
    </>
  );
}

export default TaskCard;
