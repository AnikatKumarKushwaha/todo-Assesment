import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slice/toDoSlice";

export default function TaskInput() {
  //////// Q1. Task a) using useState //////////////

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  ///////// Q4 Add Task ///////////////////////
  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          text: input,
          completed: false,
        })
      );
      setInput("");
    }
  };

  //handel add todo by clicking enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="flex justify-center items-end py-10 gap-4">
      <TextField
        id="standard-basic"
        label="Add list"
        variant="standard"
        className=" w-52 sm:w-96"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        className="h-10 w-16 sm:w-28"
        onClick={handleAddTodo}
      >
        Add
      </Button>
    </div>
  );
}
