import { useState } from "react";
import { url } from "../App";
import { Button, FormControl, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    if (email && password && name && confirmPassword) {
      if (
        (password != "" || confirmPassword != "") &&
        confirmPassword === password
      ) {
        const res = await fetch(`${url}/users/register`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            email: email,
            password: password,
          }),
        });
        const data = await res.json();
        if (data.USER) {
          toast({
            title: "Account created.",
            description: "Please login to start taking notes ",
            status: "success",
            duration: 1000,
            isClosable: true,
          });

          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast({
            title: "Account already in Use.",
            status: "error",
            duration: 1000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Passwords are Not Matching.",
          description: "Please Check both passwords once",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Enter All Fields.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <form
      id="form"
      //   border={"1px solid black"}
      className="  bg-sky-500   "
    >
      <label className="lbll">Enter Username</label>
      <input
        type="text"
        className="m-auto inpt p-2"
        placeholder="Enter User Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="lbll">Enter Email</label>
      <input
        className="inpt m-auto p-2"
        type="email"
        placeholder="Enter User Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="lbll">Enter Password</label>
      <div className="inpdiv  ">
        <input
          className="passwordInp inpt p-2"
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <label className="lbll">Confirm Password</label>
      <div className="inpdiv  ">
        <input
          className="inpt passwordInp p-2"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          id="confirmpassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <Button
        id="regButton"
        className="m-auto  "
        onClick={(e) => handleRegister(e)}
      >
        Register
      </Button>
    </form>
  );
}

export default SignupForm;
