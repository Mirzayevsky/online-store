import React from "react";
import {Card, CardWrapper, Container, Content, Leftside, MiniRow, MiniWrapper, Title} from "./styles";
import image1 from "./images/blog01.png"
import image2 from "./images/blog02.png"
import image3 from "./images/blog03.png"
import image4 from "./images/blog04.png"
import image5 from "./images/blog05.png"

function OpenAI (){
    return(
        <Content>
            <Container>
                <Title>A lot is happening, <br/>
                    We are blogging about it.</Title>
                <CardWrapper>
                    <Leftside>
                        <Card>
                            <div className="card-image">
                                <img src={image1}/>
                            </div>
                            <div className="card-body">
                                <div className="date">Sep 26, 2021</div>
                                <div className="text">
                                    GPT-3 and Open
                                    AI is the future. Let us exlore how it is?
                                </div>
                                <div className="cart-bottom-text">Read Full Article</div>

                            </div>
                        </Card>
                    </Leftside>
                    <MiniWrapper>
                        <MiniRow>
                            <div className="card">
                                <div className="card-img">
                                    <img src={image2}/>
                                </div>
                                <div className="card-body">
                                    <div className="date">Sep 26, 2021</div>
                                    <div className="text">
                                        GPT-3 and Open
                                        AI is the future. Let us exlore how it is?
                                    </div>
                                    <div className="cart-bottom-text">Read Full Article</div>

                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img">
                                    <img src={image3}/>
                                </div>
                                <div className="card-body">
                                    <div className="date">Sep 26, 2021</div>
                                    <div className="text">
                                        GPT-3 and Open
                                        AI is the future. Let us exlore how it is?
                                    </div>
                                    <div className="cart-bottom-text">Read Full Article</div>

                                </div>
                            </div>
                        </MiniRow>
                        <MiniRow>
                            <div className="card">
                                <div className="card-img">
                                    <img src={image4}/>
                                </div>
                                <div className="card-body">
                                    <div className="date">Sep 26, 2021</div>
                                    <div className="text">
                                        GPT-3 and Open
                                        AI is the future. Let us exlore how it is?
                                    </div>
                                    <div className="cart-bottom-text">Read Full Article</div>

                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img">
                                    <img src={image5}/>
                                </div>
                                <div className="card-body">
                                    <div className="date">Sep 26, 2021</div>
                                    <div className="text">
                                        GPT-3 and Open
                                        AI is the future. Let us exlore how it is?
                                    </div>
                                    <div className="cart-bottom-text">Read Full Article</div>

                                </div>
                            </div>
                        </MiniRow>
                    </MiniWrapper>
                </CardWrapper>
            </Container>

        </Content>
    )
}
export default OpenAI;