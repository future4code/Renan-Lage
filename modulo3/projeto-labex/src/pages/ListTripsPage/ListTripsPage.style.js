import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const ContainerButtons = styled.div`
display: flex;
margin-top: 1%;
button{
 margin-right: 5%;
}
`

export const ContainerCard = styled.div`
margin-top:2%;
width: 80%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 2rem;
p{
 margin: 2%;
}
`