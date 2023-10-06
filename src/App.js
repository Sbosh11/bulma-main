//import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CaseStudies from "./components/CaseStudies";
//import Contact from "./components/Contact";
import Brands from './components/Brands';

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Brands",
        element: <Brands />,
      },
      {
        path: "/Casestudies",
        element: <CaseStudies />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
