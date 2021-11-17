import React from "react";
import styled from "styled-components";
import {Container, FooterButton, FooterContent, Link, LinkWrapper, Main, Title} from "./styles";
function Footer (){
    return(
        <Container>
            <Title>Do you want to step in to the future before others</Title>
            <FooterButton>Request Early Access</FooterButton>
           <FooterContent>
               <Main>
                   <div className="logo"></div>
                   <div className="text">
                       Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                   </div>
               </Main>
               <LinkWrapper>
                   <div className="link-content">
                       <div className="title">Links</div>
                       <div className="link">Overons</div>
                       <div className="link">Social Media</div>
                       <div className="link">Counters</div>
                       <div className="link">Contact</div>
                   </div>
                   <div className="link-content">
                       <div className="title">Links</div>
                       <div className="link">Overons</div>
                       <div className="link">Social Media</div>
                       <div className="link">Counters</div>
                       <div className="link">Contact</div>
                   </div>
                   <div className="link-content">
                       <div className="title">Links</div>
                       <div className="link">Overons</div>
                       <div className="link">Social Media</div>
                       <div className="link">Counters</div>
                       <div className="link">Contact</div>
                   </div>
               </LinkWrapper>
           </FooterContent>
        </Container>
    )
}
export default Footer;
