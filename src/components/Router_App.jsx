import React from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Layout from './Layout'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
   
  } from "react-router-dom";


  const router = createBrowserRouter(
    createRoutesFromElements(
        
      <Route path="/" element={<Layout />}>
          <Route path=""  element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
     
  ))

const Router_App = () => {
    return <RouterProvider router={router} />;
}

export default Router_App



