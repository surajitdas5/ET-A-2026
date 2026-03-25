import { RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import router from "./Router";


function App() {
  return <RouterProvider router={router} />
}

export default App
