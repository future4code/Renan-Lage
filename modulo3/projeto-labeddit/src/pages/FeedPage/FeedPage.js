import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { PageContainer } from "./FeedPage.style";
import FeedForm from "./FeedForm";
import FeedCard from "./FeedCard"
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../services/post"

export default function FeedPage() {
 useProtectedPage()
 const history = useNavigate()
 const [posts, setPosts] = useState([])
 const [loading, setLoading] = useState(false)

 useEffect(() => {
  getPosts(setPosts)
 }, [])

 const showPosts = posts.map((post) => {
  return (<FeedCard
   key={post.id}
   user={post.username}
   title={post.title}
   body={post.body}
   voteSum={post.voteSum}
  />)
 })

 return (
  <PageContainer>
   <FeedForm />
   {showPosts}
  </PageContainer>
 )
}