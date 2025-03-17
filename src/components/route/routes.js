import Calculator from "../Calculator/Calculator";
import Stopwatch from "../StopWatch";
import ToDoList from "../ToDoList";

const routes = [
  { path: "/todo", element: <ToDoList /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/stopwatch", element: <Stopwatch /> },
];

export default routes;
