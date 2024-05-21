import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Test1 from './routes/Test1';
import Test2 from './routes/Test2';
import Test3 from './routes/Test3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "test1/",
        element: <Test1 />,
      },
      {
        path: "test2/",
        element: <Test2 />,
      },
      {
        path: "test3/",
        element: <Test3 />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
