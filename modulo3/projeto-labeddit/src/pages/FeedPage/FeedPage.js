import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import { PageContainer } from "./FeedPage.style";
import FeedForm from "./FeedForm";

export default function FeedPage() {
 useProtectedPage()
 
 return(
  <PageContainer>
   <FeedForm/>
  </PageContainer>
 )
}