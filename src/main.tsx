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
import Test01 from './routes/Test01';
import Test02 from './routes/Test02';
import Test03 from './routes/Test03';
import Test04 from './routes/Test04';
import Test05 from './routes/Test05';
import Test06 from './routes/Test06';
import Test07 from './routes/Test07';
import Test08 from './routes/Test08';
import Test09 from './routes/Test09';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Test01/",
        element: <Test01 />,
      },
      {
        path: "Test02/",
        element: <Test02 />,
      },
      {
        path: "Test03/",
        element: <Test03 />,
      },
      {
        path: "Test04/",
        element: <Test04 />,
      },
      {
        path: "Test05/",
        element: <Test05 />,
      },
      {
        path: "Test06/",
        element: <Test06 />,
      },
      {
        path: "Test07/",
        element: <Test07 />,
      },
      {
        path: "Test08/",
        element: <Test08 />,
      },
      {
        path: "Test09/",
        element: <Test09 />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
