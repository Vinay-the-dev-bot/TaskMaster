import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignUpForm";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import "./CSS/Login.css";
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className={`card ${isLogin ? "login" : "signup"}`}>
        <div className="inner-box">
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>

        <Box
          className="m-auto  flex flex-col text-center p-3 items-center "
          width={{ base: "80%", md: "40%" }}
        >
          {isLogin ? (
            <>
              <Text
                // className="w-fit p-5"
                width={{ base: "100%", md: "fit-content" }}
              >
                Don't Have an Account
              </Text>
              <Button className="w-fit" onClick={() => setIsLogin(false)}>
                Register
              </Button>
            </>
          ) : (
            <>
              <Text className="p-5">Already Have an Account</Text>
              <Button className="w-fit" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </>
          )}
        </Box>
        {/* </Button> */}
      </div>
    </div>
  );
}

export default Login;
