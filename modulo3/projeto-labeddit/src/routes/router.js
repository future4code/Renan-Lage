import React from "react";
import {
 Routes,
 Route
} from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErroPage from "../pages/ErrorPage/ErrorPage"

export default function Router() {
 return (
   <Routes>
    <Route path="/" element={<FeedPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/cadastro" element={<SignUpPage />} />
    <Route path="/post/:id" element={<PostPage />} />
    <Route path="*" element={<ErroPage/>}/>
   </Routes>
 )
}