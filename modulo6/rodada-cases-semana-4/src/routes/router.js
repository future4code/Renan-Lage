import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageDetails } from "../pages/detailPage/detailPage";
import ErrorPage from "../pages/errorPage/errorPage";
import HomePage from "../pages/homePage/homePage";


export default function Router() {

 return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/detail' element={<PageDetails />} />
    <Route path='*' element={<ErrorPage />} />
   </Routes>
  </BrowserRouter>
 )
}