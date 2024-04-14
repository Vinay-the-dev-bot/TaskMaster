import { useDispatch, useSelector } from "react-redux";
import { addSubTasks, completeSubTask, completeTask } from "../Strore/actions";
import { Checkbox, Text, Box, useToast, Button, Input } from "@chakra-ui/react";
import { url } from "../App";
import { useRef, useState } from "react";

function TaskCard({ task, setSelectedTask }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const token = useSelector((state) => state.token);
  const subTaskInp = useRef(null);
  const [subTask, setSubTask] = useState("");
  const handleAddSubTask = async (e) => {
    e.preventDefault();
    if (subTask == "") {
      toast({
        title: "Plase add step name",
        status: "warning",
        duration: 1000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }
    const res = await fetch(`${url}/tasks/${task._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        type: "ADD_SUBTASK",
        subTask: { title: subTask, completed: false },
      }),
    });
    const data = await res.json();
    if (data.msg == "Task Edited") {
      dispatch(addSubTasks(task, subTask));
      toast({
        title: "Step Added",
        status: "success",
        duration: 1000,
        position: "top-right",
        isClosable: true,
      });
      setSubTask("");
    }
  };
  async function handleTaskComplete(task) {
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
  const handleSubTaskComplete = (e, task, index) => {
    dispatch(completeSubTask(task, index));
    var ind = 0;
    task.subTasks.forEach((subTask) => {
      if (subTask.completed) ind++;
    });
    if (ind === task.subTasks.length && task.subTasks.length > 0) {
      setSelectedTask("");
    }
  };
  return (
    <>
      <Box
        alignItems={{ base: "center" }}
        className="flex w-4/5 m-auto py-5 flex-col justify-around"
      >
        <Checkbox
          onChange={() => handleTaskComplete(task)}
          colorScheme="orange"
          defaultChecked={task.completed}
          size="lg"
        >
          {task.title}
        </Checkbox>

        <Text>{task.description}</Text>

        <Box
          paddingLeft={{ md: "20px", base: "30px" }}
          className="flex ml-5 flex-col  w-fit"
        >
          {task.subTasks.length > 0 &&
            task.subTasks.map((subTask, index) => (
              <Checkbox
                defaultChecked={subTask.completed}
                onChange={(e) => handleSubTaskComplete(e, task, index)}
                colorScheme="green"
              >
                {index + 1}
                {"   "}. {subTask.title}
              </Checkbox>
            ))}
        </Box>
        <form
          className="flex-col  border justify-between "
          onSubmit={handleAddSubTask}
        >
          <Button
            onClick={() => {
              subTaskInp.current.focus();
            }}
            width={{ base: "100%", md: "fit-content" }}
            padding={"0 20px "}
          >
            Add Steps
          </Button>
          <Input
            value={subTask}
            onChange={(e) => {
              setSubTask(e.target.value);
            }}
            ref={subTaskInp}
            border={"none"}
          />
          <Button
            width={{ base: "100%", md: "fit-content" }}
            onClick={handleAddSubTask}
          >
            ADD
          </Button>
        </form>
      </Box>
    </>
  );
}

export default TaskCard;
