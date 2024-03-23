import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "../Components/TaskCard";
import CompletedTask from "../Components/CompletedTask";
import { undoTask } from "../Strore/actions";

function Home() {
  const taskss = useSelector((state) => state.tasks);
  const [tasks, setTasks] = useState(taskss);

  const [selectedTask, setSelectedTask] = useState(tasks[0]);
  // const task = {
  //   title: "task 2",
  //   subtasks: [
  //     { subtasktitle: "subTask1", completed: false },
  //     { subtasktitle: "subTask2", completed: false },
  //     { subtasktitle: "subTask3", completed: false },
  //     { subtasktitle: "subTask4", completed: false },
  //   ],
  //   description: "DECRIPTION 2",
  //   completed: false,
  // };

  return (
    <>
      <p>{JSON.stringify(tasks)}</p>
      {/* <p>Home</p>
      <p>{JSON.stringify(tasks)}</p>
      <p>Tasks</p>
      <Box className="taskContainer">
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </Box>
      <p>COMPLETED</p>
      <Box>
        <Box className="completedContainer">
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <CompletedTask task={task} />
            ))}
        </Box>
      </Box> */}
      <p>Tasks</p>
      <Box border={"1px solid black"} className="flex w-4/5 m-auto">
        <Box className="flex w-1/4 p-5 flex-col gap-5">
          {/* <p>{JSON.stringify(selectedTask)}</p> */}
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              // <Text key={task.id} task={task} />
              <Button
                className="w-3/4 m-auto "
                onClick={() => setSelectedTask(task)}
              >
                {task.title}
              </Button>
            ))}
        </Box>
        <Box>
          {selectedTask.id ? (
            <TaskCard setSelectedTask={setSelectedTask} task={selectedTask} />
          ) : null}
        </Box>
      </Box>

      <p>COMPLETED</p>
      <Box border={"1px solid black"} className="flex w-4/5 m-auto">
        <Box className="flex flex-col gap-5">
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <CompletedTask task={task} />
            ))}
        </Box>
      </Box>
    </>
  );
}

export default Home;

{
  /* <Box>
        {tasks
          .filter((task) => !task.completed)
          .map((task, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                id={`task${index}`}
                onChange={() => handleCheckboxChange(task)}
              />
              <label htmlFor={`task${index}`}>{task.title}</label>
            </div>
          ))}
      </Box> */
}
