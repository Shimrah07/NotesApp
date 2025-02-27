import { HStack, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-around"}
      p={4}
      fontSize={"xl"}
      colorPalette={"black"}
      bg="green"
      fontWeight={"bold"}
      m={4}
    >
      <Link as={RouterLink} to="/">Login</Link>
      <Link as={RouterLink} to="/notes">Notes</Link>
    </HStack>
  );
};

export default Navbar;
