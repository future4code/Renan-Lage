import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import { PageContainer } from "./FeedPage.style";
import FeedForm from "./FeedForm";
import FeedCard from "./FeedCard"
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls"
import posts from "../../constants/posts.js"

export default function FeedPage() {
 useProtectedPage()
 const history = useNavigate()
 const postsCard = posts.map((post) => {
  return (<FeedCard
   user={post.username}
   title={post.title}
   body={post.body}
  />)
 })
 return (
  <PageContainer>
   <FeedForm />
   {posts.length}
   {postsCard}

  </PageContainer>
 )
}