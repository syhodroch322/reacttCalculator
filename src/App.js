import Header from "./components/Header";
import RouterLayout from "./components/route/router-layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RouterLayout />
    </BrowserRouter>
  );
};

export default App;
