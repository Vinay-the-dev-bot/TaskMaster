import { useState } from "react";
// import { url } from "../App";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormControl,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { url } from "../App";

const AddTask = ({ onClose }) => {
  const token = useSelector((state) => state.token);
  const [title, setTitle] = useState("");
  const toast = useToast();
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTasks = async (e) => {
    if (title == "") {
      toast({
        title: "Plase add title",
        status: "warning",
        duration: 1000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }
    e.preventDefault();
    const res = await fetch(`${url}/tasks/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (data.msg == "TASK ADDED") {
      dispatch({ type: "ADD_TASK", payload: data.tsk });
      toast({
        title: "Task Added",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      onClose();
      // navigate("/dashboard");
    }
  };

  return (
    <>
      <FormControl className="  flex flex-col gap-5">
        <Input
          type="text"
          placeholder="Enter task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          type="text"
          placeholder="Enter Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          className="w-full mb-5"
          colorScheme="green"
          onClick={(e) => handleAddTasks(e)}
        >
          Add Task
        </Button>
      </FormControl>
    </>
  );
};

export default AddTask;
