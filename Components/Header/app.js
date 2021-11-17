import React from "react";
import {Container, Content, ImageWrapper, InputWrapper, LastRequests, Text, TextBox, Title} from "./styles";
import Ai from "./images/ai.png";
import People from "./images/people.png";
function Header (){
    return(
        <Content>
            <Container>
                <TextBox>
                    <Title>Let's Build Something amazing with GTP-3 Open AI</Title>
                    <Text>
                            Yet bed any travelling assistance indulgence unpleasing.
                            Not thoughts all exercise blessing. indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of
                    </Text>
                    <InputWrapper>
                        <input placeholder="Your Email Address" className="get-started-input"/>
                        <button className="get-started-btn">Get Started</button>
                    </InputWrapper>
                    <LastRequests>
                        <div className="image-wrapper">
                            <img src={People} />
                        </div>
                        <div className="requests-text">1,600 people requested access a visit in last 24 hours</div>
                    </LastRequests>
                </TextBox>
                <ImageWrapper>
                    <div className="image-wrapper">
                        <img src={Ai}/>
                    </div>
                </ImageWrapper>
            </Container>
        </Content>
    )
}
export  default  Header;