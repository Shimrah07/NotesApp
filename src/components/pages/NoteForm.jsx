import React, {useState} from "react";
import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const NoteForm = () => {


const dispatch = useDispatch();

const [notes, setNotes] = useState("");

const handleChange = (e) => {
  setNotes(e.target.value)
  console.log(e.target.value)
}




  return (
    <>
      <Heading textAlign={"center"} mb={5}>
        Collaborative Notes
      </Heading>
      <VStack
        w={"500px"}
        m={"auto"}
        p={4}
        bg="gray"
        color={"white"}
        borderRadius={4}
      >
        <Input type="text" placeholder="Enter Notes Here..." value={notes} onChange={handleChange} />
        <Button onClick={() => dispatch()}>Add Notes!</Button>
      </VStack>
    </>
  );
};

export default NoteForm;
