import Calculator from "../Calculator/Calculator";
import MiniStore from "../MiniStore/MiniStore";
import Stopwatch from "../StopWatch";
import ToDoList from "../ToDoList";

const routes = [
  { path: "/todo", element: <ToDoList /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/stopwatch", element: <Stopwatch /> },
  { path: "/ministore", element: <MiniStore /> },
];

export default routes;
