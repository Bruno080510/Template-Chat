import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Login } from './components/Login/Login';
import App from './App';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Chat",
    element: <App/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

