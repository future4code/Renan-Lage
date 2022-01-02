import React from "react";
import { CardContainer, User } from "./FeedPage.style";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function FeedCard({ user, title, body }) {
 return (
  <CardContainer>
   <Card>
    <CardContent>
     <User>
      <AccountCircleIcon />
      <Typography variant="h6" >{user}</Typography>
     </User>
     <Typography variant="h6" >{title}</Typography>
     <Typography variant="body1" >{body}</Typography>
    </CardContent>
   </Card>
  </CardContainer>
 )
}