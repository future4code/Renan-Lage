import styled from "styled-components";

export const DivMain = styled.div`
.title{
 text-align:center;
 width: 65%;
 color:#FFFFFF;
 font-size:40px;
 font-weight:bold;
}
.filter{
 text-align:center;
 width: 65%;
 color:#FFFFFF;
 font-weight:bold;
 font-size:20px;
}
`

export const DivHeader = styled.div`
background-color: #5C16C5;
`

export const Img = styled.img`
padding:2%;
width:10%;
`

export const DivFilter = styled.div`
margin: 2rem 0 10px 0;
`

export const DivButtons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 75%;
`

export const LabelButton = styled.label`
background-color: #FFFFFF;
margin: 0.5rem;
font-weight: bold;
height: 1.5em;
min-width: 7em;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;
border: 1px solid rgba(111, 111, 111, 0.3);
cursor: pointer;
`

export const StyledMenu = styled.div`
background-color: #2D0C5E;
min-height: 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
letter-spacing: 0.25rem;
padding: 1rem;
`

export const SpanButton = styled.span`
padding: 0 0.5rem 0 0.5rem ;
`

export const DivMovie = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

export const ImgCard = styled.img`
 width: 200px;
`

export const TextCard = styled.div`
 width: 80%;
 text-align: left;
 display: flex;
 flex-direction: column;
 .movieTitle{
  margin-bottom: 3px ;
  font-weight:  bold;
 }
 .movieDate{
  margin-bottom: 3px;
  font-weight:700;
  color:#646464;
 }
`

export const MovieCard = styled.div`
display: flex;
flex-direction: column;
width: 15rem;
margin: 1rem;
align-items: center;
cursor: pointer;
transition: 0.3s;
:hover{
 opacity: 0.7;
}
`

export const DivFooter = styled.div`
display: flex ;
justify-content: space-evenly;
padding: 1% 40%;
.menu-text{
 text-decoration:underline;
 color: #5C16C5;
 cursor: pointer;
}
.actual-text{
 text-decoration:underline;
 color: #000000;
 cursor: pointer;
}
`

