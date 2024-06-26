import {
  Box,
  Button,
  Divider,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  MenuDivider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "../Components/TaskCard";
import CompletedTask from "../Components/CompletedTask";
import AddTask from "../Components/AddTask";
import { url } from "../App";
import { useNavigate } from "react-router";
import { addTasks } from "../Strore/actions";

function DashBoard() {
  const navigate = useNavigate();
  const storeState = useSelector((state) => state);
  const token = useSelector((state) => state.token);
  const taskss = useSelector((state) => state.tasks);
  const [tasks, setTasks] = useState(taskss);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inCompletedTasks, setInCompletedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  useEffect(() => {
    var compTasks = [];
    if (tasks.length > 0) {
      compTasks = tasks.filter((task) => task.completed);
    }
    const cmptdtask = taskss.filter((task) => task.completed);
    const incmptdtask = taskss.filter((task) => !task.completed);
    setCompletedTasks(cmptdtask);
    setInCompletedTasks(incmptdtask);
    setTasks(taskss);
  }, [taskss]);

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetch(`${url}/tasks`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      const compTasks = data.filter((task) => task.completed);
      setCompletedTasks(compTasks);
      dispatch(addTasks(data));
    };
    const token2 = localStorage.getItem("token");
    if (token2) {
      getTasks();
    }
  }, []);

  return (
    <>
      <Text className="text-3xl py-5 text-center">Tasks</Text>
      {/* {storeState.username ? (
        <Box border={"1px solid black"} className="flex w-4/5 m-auto">
          {tasks.length > 0 ? (
            <Box className="flex w-1/4 p-5 flex-col gap-5">
              {tasks
                .filter((task) => !task.completed)
                .map((task) => (
                  <Button
                    key={task._id}
                    className="w-3/4 m-auto "
                    onClick={() => setSelectedTask(task)}
                  >
                    {task.title}
                  </Button>
                ))}
            </Box>
          ) : (
            <Text className="w-full   p-5">
              Start Adding tasks by clicking on Add Task Button
            </Text>
          )}
          <Box className="flex flex-col w-3/4 justify-around">
            {selectedTask && selectedTask._id ? (
              <TaskCard setSelectedTask={setSelectedTask} task={selectedTask} />
            ) : null}
          </Box>
        </Box>
      ) : (
        <>
          <Box className="flex p-5 w-1/2 m-auto">
            <Text className="w-fit">Please Login to start taking Notes</Text>
            <Button
              onClick={() => navigate("/login")}
              className="w-fit m-auto"
              colorScheme="blue"
            >
              LOGIN
            </Button>
          </Box>
        </>
      )} */}
      {storeState.username ? (
        <Box
          flexDirection={{ md: "row", base: "column" }}
          alignItems={{ md: "start", base: "center" }}
          shadow={"  rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          className="flex w-4/5 m-auto rounded-2xl"
        >
          {inCompletedTasks.length > 0 ? (
            <Box
              width={{ md: "25%", base: "90%" }}
              className="flex w-1/4 p-5 flex-col gap-5"
            >
              {inCompletedTasks.map((task) => (
                <Button
                  colorScheme={selectedTask._id == task._id ? "green" : "blue"}
                  padding={"0 20px"}
                  key={task._id}
                  className="w-3/4   mx-auto "
                  onClick={() => setSelectedTask(task)}
                >
                  {task.title}
                </Button>
              ))}
            </Box>
          ) : (
            <Text className="w-full   p-5">
              Start Adding tasks by clicking on Add Task Button
            </Text>
          )}
          <Box
            width={{ md: "75%", base: "90%" }}
            className="flex flex-col w-3/4 justify-around"
          >
            {selectedTask && selectedTask._id ? (
              <TaskCard setSelectedTask={setSelectedTask} task={selectedTask} />
            ) : null}
          </Box>
        </Box>
      ) : (
        <>
          <Box className="flex p-5 w-1/2 m-auto">
            <Text className="w-fit">Please Login to start taking Notes</Text>
            <Button
              onClick={() => navigate("/login")}
              className="w-fit m-auto"
              colorScheme="blue"
            >
              LOGIN
            </Button>
          </Box>
        </>
      )}
      <Divider width={"80% "} margin={"auto"} />
      <Text className="text-3xl py-5 text-center">COMPLETED TASKS</Text>
      <Box
        className="flex w-4/5 m-auto  rounded-2xl"
        shadow={"  rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
      >
        <Box className="flex  p-5 gap-5">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <CompletedTask key={task._id} task={task} />
            ))
          ) : (
            <Text>Please complete tasks</Text>
          )}
        </Box>
      </Box>
      {storeState.username && (
        <Box position="fixed" bottom="2rem" right="2rem" zIndex="1000">
          <Button
            padding={"0 50px "}
            onClick={onOpen}
            colorScheme="blue"
            size="lg"
          >
            Add A Task
          </Button>
        </Box>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="m-auto">Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddTask onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DashBoard;
