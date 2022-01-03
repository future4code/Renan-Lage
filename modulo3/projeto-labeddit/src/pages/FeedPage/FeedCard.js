import React from "react";
import { CardContainer, User, ButtonContainer } from "./FeedPage.style";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { VolunteerActivismRounded } from "@mui/icons-material";

export default function FeedCard({ user, title, body, voteSum }) {
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
     <ButtonContainer>
      <ArrowUpwardIcon/>
      <Typography>{voteSum ? voteSum : "0" }</Typography>
      <ArrowDownwardIcon />
     </ButtonContainer>
    </CardContent>
   </Card>
  </CardContainer>
 )
}