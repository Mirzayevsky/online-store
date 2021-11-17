import React from "react";
import {Container, Content, ShowcasePopUP, SocialLink, SocialLinkWrapper,} from "./styles"
import image3 from "./image/atlassian.png"
import image2 from "./image/slack.png"
import image1 from "./image/google.png"
import image4 from "./image/shopify.png"
import image5 from "./image/dropbox.png"


function Showcase (){
    return(
        <Content>
            <Container>
                <SocialLinkWrapper>
                    <SocialLink>
                        <img src={image1}/>
                    </SocialLink>
                    <SocialLink>
                        <img src={image2}/>
                    </SocialLink>
                    <SocialLink>
                        <img src={image3}/>
                    </SocialLink>
                    <SocialLink>
                        <img src={image5}/>
                    </SocialLink>
                    <SocialLink>
                        <img src={image4}/>
                    </SocialLink>
                </SocialLinkWrapper>
                <ShowcasePopUP>
                    <div className="popup-header">
                        <div className="title">What is GPT-3</div>
                        <div className="text">
                            We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                            His <br/> defective nor convinced residence own. Connection has put impossible own apartments <br/> boisterous.
                            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
                        </div>
                    </div>
                    <div className="popup-section">
                        <div className="title">The possibilities are beyond<br/> your imagination</div>
                        <div className="text">Explore The Library</div>
                    </div>
                    <div className="popup-footer">
                        <div className="footer-card">
                            <div className="title">Chatbots</div>
                            <div className="text">
                                We so opinion friends me message as delight.
                                Whole front do of plate heard oh ought.
                            </div>
                        </div>
                        <div className="footer-card">
                            <div className="title">Knowledgebase</div>
                            <div className="text">
                                At jointure ladyship an insisted so
                                humanity he. Friendly bachelor entrance to on by.
                                As put impossible own apartments b
                            </div>
                        </div>
                        <div className="footer-card">
                            <div className="title">Education</div>
                            <div className="text">
                                At jointure ladyship an insisted so humanity he.
                                Friendly bachelor entrance to on by.
                                As put impossible own apartments b
                            </div>
                        </div>
                    </div>
                </ShowcasePopUP>
            </Container>
        </Content>
    )
}
export  default Showcase;