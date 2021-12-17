import React from 'react'
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { RecipeCardContainer, RecipeCardContent } from './RecipeCard.style';

export default function RecipeCard(props) {
 return (
  <RecipeCardContainer onClick={props.onclick}>
   <CardActionArea>
    <CardMedia
     component="img"
     height={"150px"}
     image={props.image}
     alt={props.title}
    />
    <RecipeCardContent>
     <Typography>
      {props.title}
     </Typography>
    </RecipeCardContent>
   </CardActionArea>
  </RecipeCardContainer>
 )
}
