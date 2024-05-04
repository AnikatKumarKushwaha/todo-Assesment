import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, removeTodo, toggleTodo } from "../Redux/Slice/toDoSlice";

function createData(done, todo, remove) {
  return { done, todo, remove };
}

export default function TaskList() {
  ////////////// Q3. use Redux task /////////////////
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  ////////////// Q2. task a) use useEffect /////////////////
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  console.log(todos);

  ////////////// Q4. task c) delete /////////////////
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };
  ////////////// Q5. task a) Toggle /////////////////
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const rows = todos.map((item) =>
    createData(
      <FormControlLabel
        control={
          <Checkbox
            checked={item.completed}
            onChange={() => handleToggleTodo(item.id)}
          />
        }
      />,
      <div className={` ${item.completed ? "line-through" : "none"}`}>
        {item.text}
      </div>,
      <IconButton aria-label="delete" onClick={() => handleRemoveTodo(item.id)}>
        <DeleteIcon color="error" />
      </IconButton>
    )
  );
  if (todos.length === 0) {
    return (
      <div className=" w-full h-40 flex flex-col justify-center items-center text-xl font-semibold text-stone-700">
        No Todo Data 🥲
        <div className="text-stone-400 text-sm">Add some!</div>
      </div>
    );
  }
  return (
    <div className="overflow-auto mb-10">
      <Paper className="mt-5">
        <TableContainer component={Paper} style={{ maxHeight: 400 }}>
          {/* Set a fixed height for TableContainer */}
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Complete</TableCell>
                <TableCell align="center" width={300}>
                  ToDo
                </TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.done}</TableCell>
                  <TableCell align="center" width={300} className="break-all">
                    {row.todo}
                  </TableCell>
                  <TableCell align="center">{row.remove}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
