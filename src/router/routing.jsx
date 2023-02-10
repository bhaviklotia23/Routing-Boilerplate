import Signup from "../components/Signup";
import Login from "../components/Login";
import Home from "../components/Home";
import About from "../components/About";

export const Router = [
  {
    path: "/",
    exact: true,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "auth",
    exact: true,
    children: [
      { path: "sign-up", element: <Signup /> },
      { path: "login", element: <Login /> },
    ],
  },
];
