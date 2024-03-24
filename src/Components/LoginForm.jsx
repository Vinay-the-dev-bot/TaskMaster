import { useState } from "react";
import { url } from "../App";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Box, Button, useToast } from "@chakra-ui/react";
import LoadingToast from "./LoadingToast";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (data.token) {
      setIsLoading(false);
      toast({
        title: "Successfully Logged In.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      dispatch({
        type: "LOGIN",
        payload: { username: data.user.username, token: data.token },
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setIsLoading(false);
      toast({
        title: `${data.msg}`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {isLoading && <LoadingToast message={"Logging in"} />}
      <Box className="" id="loginForm">
        <form
          id="form"
          className="flex bg-sky-500 w-3/5 justify-center flex-col gap-2"
        >
          <label>Enter Email</label>
          <input
            className="p-2"
            type="email"
            placeholder="Enter User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter Password</label>
          <input
            className="p-2"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button id="loginButton" onClick={(e) => handleLogin(e)}>
            Login
          </Button>
        </form>
      </Box>
    </>
  );
}
export default LoginForm;
