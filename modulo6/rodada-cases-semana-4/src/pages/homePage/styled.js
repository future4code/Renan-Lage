import styled from "styled-components";

export const DivMain = styled.div`
`

export const DivHeader = styled.div`
background-color: #5C16C5;
`

export const Img = styled.img`
padding:2%;
width:10%;
`

export const DivText = styled.div`
display: flex;
flex-direction: column;
text-align: center;
width: 50%;
@media(max-width: 650px) {
 margin-top: 2rem;
 width: 100%;
 text-align: start;
}
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
 min-height: 50px;
 text-align: left;
 padding: 5px 0;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`

export const MovieCard = styled.div`
display: flex;
flex-direction: column;
width: 15rem;
margin: 1rem;
align-items: center;
padding: 0.5em;
cursor: pointer;
transition: 0.3s;
:hover{
 opacity: 0.7;
}
`

