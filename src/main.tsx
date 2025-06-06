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
import Test10 from './routes/Test10';
import Test11 from './routes/Test11';
import Test12 from './routes/Test12';
import Test13 from './routes/Test13';
import Test14 from './routes/Test14';
import Test15 from './routes/Test15';
import Test16 from './routes/Test16';
import Test17 from './routes/Test17';
import Test18 from './routes/Test18';
import Test19 from './routes/Test19';
import Test20 from './routes/Test20';
import Test21 from './routes/Test21';
import Test22 from './routes/Test22';

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
      {
        path: "Test10/",
        element: <Test10 />,
      },
      {
        path: "Test11/",
        element: <Test11 />,
      },
      {
        path: "Test12/",
        element: <Test12 />,
      },
      {
        path: "Test13/",
        element: <Test13 />,
      },
      {
        path: "Test14/",
        element: <Test14 />,
      },
      {
        path: "Test15/",
        element: <Test15 />,
      },
      {
        path: "Test16/",
        element: <Test16 />,
      },
      {
        path: "Test17/",
        element: <Test17 />,
      },
      {
        path: "Test18/",
        element: <Test18 />,
      },
      {
        path: "Test19/",
        element: <Test19 />,
      },
      {
        path: "Test20/",
        element: <Test20 />,
      },
      {
        path: "Test21/",
        element: <Test21 />,
      },
      {
        path: "Test22/",
        element: <Test22 />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
