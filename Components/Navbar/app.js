import React from "react";
import {ButtonWrapper, Container, Link, LinkWrapper, Navbar, NavbarBrand} from "./styles"

function Navigationbar (){
    return(
        <Navbar>
            <Container>
                <NavbarBrand>GPT-3</NavbarBrand>
                <LinkWrapper>
                    <Link>Home</Link>
                    <Link>What is GPT?</Link>
                    <Link>Open AI</Link>
                    <Link>Case Studies</Link>
                    <Link>Library</Link>
                </LinkWrapper>
                <ButtonWrapper>
                    <button className="sign-in-btn">Sign-in</button>
                    <button className="sign-up-btn">Sign-up</button>
                </ButtonWrapper>
            </Container>

        </Navbar>
    )
}
export  default Navigationbar;