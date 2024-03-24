import { useDispatch, useSelector } from "react-redux";
import { completeTask } from "../Strore/actions";
import { Checkbox, Text, Box, useToast } from "@chakra-ui/react";
import { url } from "../App";

function TaskCard({ task, setSelectedTask }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const token = useSelector((state) => state.token);
  async function handleCheckboxChange(task) {
    const res = await fetch(`${url}/tasks/complete/${task._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (data.msg == "Task Completed") {
      dispatch(completeTask(task));
      toast({
        title: "Task Completed",
        status: "success",
        duration: 1000,
        position: "top-right",
        isClosable: true,
      });
    }
    setSelectedTask([]);
  }
  return (
    <>
      <Box className="flex w-4/5 m-auto flex-col justify-around">
        <Checkbox
          onChange={() => handleCheckboxChange(task)}
          colorScheme="orange"
        >
          {task.title}
        </Checkbox>

        <Text>{task.description}</Text>
      </Box>
    </>
  );
}

export default TaskCard;
