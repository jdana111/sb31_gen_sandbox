import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Root from './routes/root';
import Test1 from './routes/Test1';
import Test2 from './routes/Test2';
import Test3 from './routes/Test3';
import Test4 from './routes/Test4';
import Test5 from './routes/Test5';

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
      {
        path: "test4/",
        element: <Test4 />,
      },
      {
        path: "test5/",
        element: <Test5 />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
