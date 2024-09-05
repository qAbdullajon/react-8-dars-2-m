import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from '../App'
import { Home, Products, SingleProducts, Settings, Details, SingleDetails, Cabinet } from '../pages'

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/product/:id' element={<SingleProducts />} />
        <Route path='/product/:id/settings' element={<Settings />} />
        <Route path='/product/:id/settings/details' element={<Details />} />
        <Route path='/product/:id/settings/details/:id' element={<SingleDetails />} />

        <Route path='/cabinet' element={<Cabinet />}>
          <Route path='/cabinet/settings' element={<Settings />} />
          <Route path='/cabinet/settings/details' element={<Details />} />
          <Route path='/cabinet/settings/details/:id' element={<SingleDetails />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default index