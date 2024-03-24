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

        <Box className="w-2/5 m-auto gap-5 flex flex-col items-center ">
          {isLogin ? (
            <>
              <Text className="w-fit">Dont Have an Account</Text>
              <Button className="w-fit" onClick={() => setIsLogin(false)}>
                Register
              </Button>
            </>
          ) : (
            <>
              <Text>Already Have an Account</Text>
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