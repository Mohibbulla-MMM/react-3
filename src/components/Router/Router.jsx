import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayOut from "../MainLayOut/MainLayOut";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Course from "../Course/Course";
import Posts from "../Posts/Posts";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/course",
        loader: () => fetch("./data.json"),
        element: <Course></Course>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      // {
      //   path: "/posts/:postId",
      //   loader: ({ params }) =>
      //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      //   element: <Posts></Posts>,
      // },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default Router;
