import React from "react";
import {Container, ImageWrapper, TextBox} from "./styles";
import img1 from "./images/possibility.png";

function Technology(){
    return(
        <Container>
            <ImageWrapper>
                <div className="image-container">
                    <img src={img1}/>
                </div>
            </ImageWrapper>
            <TextBox>
                <div className="sub-title">Request Early Access to Get Started</div>
                <div className="title">
                    The possibilities are <br/> beyond your imagination
                </div>
                <div className="text">
                    Yet bed any for travelling assistance
                    indulgence unpleasing. Not <br/> thoughts all exercise blessing.
                    Indulgence way everything joy <br/> alteration boisterous the attachment.
                    Party we years to order <br/> allow asked of.
                </div>
                <div className="text-bottom">
                    Request Early Access to Get Started
                </div>
            </TextBox>
        </Container>
    )
}
export default Technology;