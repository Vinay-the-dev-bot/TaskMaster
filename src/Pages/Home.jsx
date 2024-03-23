import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "../Components/TaskCard";
import CompletedTask from "../Components/CompletedTask";

function Home() {
  const taskss = useSelector((state) => state.tasks);
  const [tasks, setTasks] = useState(taskss);
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
      <p>Home</p>
      <p>{JSON.stringify(tasks)}</p>
      <p>PEINDI</p>
      {/* <Box>
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
      </Box> */}
      <Box>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </Box>
      <p>COMPLETED</p>
      <Box>
        <Box>
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
