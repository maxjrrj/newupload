import Breadcrumb from "react-bootstrap/Breadcrumb";
import styled from "styled-components"
import iconeSeta from "../../../Images/iconeSeta.svg"

export const BreadcrumbItem = styled.div`
font-size: 3vh;
cursor:pointer;
` 
export const BreadcrumbBar = styled.div`
display:flex;
align-items: center;
padding: 1vh 1vw;
border: 1px solid black;
width: 100%;
box-shadow: 0.1vh 0.1vw 0.25vw;
background-color: white;
`


export const ContainerBreadcrumb = styled.div`
display:flex;
align-items:center;
justify-content: center;
height:100%;
width:100%;
padding: 2vh 2vw;


`

export const ImgIcon = styled.img`
margin: 0 1vw;

`