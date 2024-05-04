import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Header from "./ui/Header";
import { Box, Button, Card } from "@mui/material";

export default function App() {
  const [showTask, setShowTask] = useState(false);

  function viewTask() {
    setShowTask(!showTask);
  }

  return (
    <div className="flex flex-col  items-center bg-gradient-to-br from-slate-100 to-slate-300 h-screen py-10 overflow-auto">
      <Card className=" px-2 sm:px-16 h-full">
        <Header>TODO LIST</Header>
        {/* ----------Q2. task b) first component----------- */}
        <TaskInput />
        <Box display="flex" justifyContent="center">
          <Button variant="contained" onClick={viewTask}>
            {showTask ? "Close Tasks" : "View Task"}
          </Button>
        </Box>
        {/* ----------Q2. task b) second component----------- */}
        {showTask && <TaskList />}
      </Card>
    </div>
  );
}
