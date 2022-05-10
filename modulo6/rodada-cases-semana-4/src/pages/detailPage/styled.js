import styled from "styled-components";

export const DivMain = styled.div`
.title{
 padding:10px 0 0 30px;
}
`

export const DivHeader = styled.div`
background-color: #5C16C5;
`

export const Img = styled.img`
padding:2%;
width:10%;
cursor: pointer;
`

export const CastContainer = styled.div`
display: flex;
overflow: hidden;
overflow-x: scroll;
scrollbar-color: gray silver;
scrollbar-width: thin;
margin: 1rem;
margin-top: 3rem;
`

export const Trailer = styled.iframe`
 margin:10px 0 0 30px;
`

export const RecommendationContainer = styled.div`
display: flex;
overflow-x: scroll;
padding: 1em;
min-height: 15rem;
scrollbar-color: gray silver;
scrollbar-width: thin;

`

// movieInfo
export const DivInfo = styled.div`
background-color: #2D0C5E;
min-height: 25rem;
padding: 1rem;
display: flex;
flex-direction: row;
p{
 color: #DDDDDD;
 margin: 0;
}
 h2, h4{
 color: #FFFFFF;
 margin: 0;
} 
.popularity{
 padding-bottom:35px;
}
`
export const DivText = styled.div`
margin-left: 33px;
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 100px;
`

export const DivTitle = styled.div`
margin-bottom: 0.5rem;
h2{
margin-right: 0.50em;
}
`

export const DivSubTiltle = styled.div`
 display: flex ;
 padding-bottom:17px;
 .genrePara{
  padding: 0 3px;
 }
`

export const DivSinopse = styled.div`
padding-bottom: 15px;
h2{
 padding-bottom: 8px;
}
`

export const DivCrew = styled.div`
align-items:center;
height:70px;
display: grid;
grid-template-columns: 9em 9em 9em ;
grid-template-rows: 5em 5em;
flex-wrap: wrap;
`

// movieCast
export const CardCaststyle = styled.div`
box-shadow: 0 1px 2px gray;
margin: 0 10px 0 10px;
min-width: 175px;
max-width: 175px;
height: 20rem;
padding: 0.5em;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 7px;
transition: 0.5s;
border: 1px solid rgba(195, 195, 195, 0.5);
img{
 border-radius: 3px;
 width: 165px;
}
p{
 margin: 0;
}
p:nth-child(1){
 font-weight: bold;
}
`

export const CardText = styled.div`
 height: 18%;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 0.50em;
`

// mocvieRecommendation

export const CardRecommendation = styled.div`
margin:0 15px 0 15px;
min-height: 15rem;
p{
 margin: 0;
}
p:nth-child(1){
 font-size: 700;
 font-weight: bolder;
}
p:nth-child(2){
 color: gray;
 font-size: 700;
}
.card-text{
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 min-height: 15%;
 padding: 2px;
}
img{
 width: 180px;
 height: 270px;
 border-radius: 3px;
 box-shadow: 1px 1px 2px gray;
 transition: 0.3s;
 cursor: pointer;
 :hover{
  opacity: 0.85;
 }
}
`
