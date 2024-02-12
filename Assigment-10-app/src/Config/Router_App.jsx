import React from 'react'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
  } from "react-router-dom";
import { Product } from '../Components/Product';
import { Product_Details } from '../Components/Product_Details';

const Router_App = () => {
const router = createBrowserRouter(

createRoutesFromElements(
<Route>
<Route path='' element={<Product/>}/>
<Route path='product/:id' element={<Product_Details/>}/>


</Route>

)


)

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export  {Router_App}