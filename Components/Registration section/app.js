import React from "react";
import {Container, TextWrapper,TextBox} from "./styles";
function Regitration(){
    return(
        <Container>
            <TextWrapper>
                <div className="title">Request Early Access to Get Started</div>
                <TextBox>
                    <div className="text">
                        Request Early Access to Get Started
                    </div>
                    <button className="register-btn">Get Started</button>
                </TextBox>
            </TextWrapper>
        </Container>
    )
}
export default Regitration;