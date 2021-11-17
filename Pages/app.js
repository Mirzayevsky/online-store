import React from "react"
import  {Container} from "./styles"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Navigationbar from "../Components/Navbar/app";
import Header from "../Components/Header/app";
import Showcase from "../Components/Showcase/app";
import TextSection from "../Components/Text section/app";
import Technology from "../Components/Technoloy section/app";
import Regitration from "../Components/Registration section/app";
import OpenAI from "../Components/Open AI section/app";


function MainPage (){
    return(
       <Container>
           <BrowserRouter>
               <Navigationbar/>
               <Header/>
               <Showcase/>
               <TextSection/>
               <Technology/>
               <Regitration/>
               <OpenAI/>
           </BrowserRouter>
       </Container>
    )
}
export  default  MainPage;