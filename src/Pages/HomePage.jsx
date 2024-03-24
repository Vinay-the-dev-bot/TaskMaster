import { Text, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function HomePage() {
  const state = useSelector((state) => state);
  return (
    <>
      <Box className="flex items-center justify-around">
        <Box className="w-2/5 flex justify-center">
          <Image
            className="w-4/5 rounded-2xl"
            height={"90%"}
            src="https://www.kindpng.com/picc/m/391-3916045_task-management-task-management-icon-hd-png-download.png"
            alt="task"
          />
          {/* <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" /> */}
        </Box>
        <Box className="w-2/5 flex   flex-col gap-10">
          <Text className="text-3xl">Welcome to</Text>
          <Text className="text-5xl" as={"span"}>
            Task
            <Text as={"span"} color={"red"}>
              Master
            </Text>
          </Text>
          <Text className="text-3xl text-wrap">
            A Simple, but effective task management App
          </Text>
          {state.username ? (
            <Link to="/dashboard">
              <Button colorScheme="blue">DashBoard</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button colorScheme="blue">LOGIN</Button>
            </Link>
          )}
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
