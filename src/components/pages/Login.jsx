import { Heading, Input, Box, VStack } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <>
      <Heading textAlign={"center"} mb={4}>
        {" "}
        Login Page{" "}
      </Heading>

      <VStack w={"300px"} m={"auto"} p={4} bg="gray" color={"white"} borderRadius={4} >
        <Input type="text" placeholder="Enter Username" />
        <Input type="password" placeholder="Enter Password" />
      </VStack>
    </>
  );
};

export default Login;
