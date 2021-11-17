import styled from "styled-components";
export  const  Content =styled.div`
  padding: 20px 0;
`;
export  const  Container =styled.div`
  width: 90%;
  margin: auto;
`;
export  const SocialLinkWrapper =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export  const SocialLink = styled.div`
  width: 120px;
  margin: 120px 10px;
`;
export  const ShowcasePopUP = styled.div`
  position: relative;
  margin: 30px 0;
  padding: 70px;
  background-color: #687cde;
  background-color: #223796;
  background-image: linear-gradient(160deg, #223796 0%, #102061 50%, #2539ad 100%);


  .popup-header {
    display: flex;
    align-items: initial;
    justify-content: space-between;
    .title {
      color: #fff;
      font-weight: 600;
      font-size: 24px;
      &:before{
        content: "";
        height: 4px;
        width: 38px;
        background: var(--gradient-text);
        position: absolute;
        top: 50px;
      }
    }

    .text {
      font-size: 17px;
      color: #81AFDD;
      line-height: 34px;
    }
  }
  .popup-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
    
    .title{
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 45px;
      background: var(--gradient-text);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
     
    }
    .text{
      background: var(--gradient-text);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 16px;
    }
  }
  .popup-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .footer-card{
      padding: 0 20px;
      .title{
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        line-height: 75px;
        padding: 10px 0;
        &:before{
          content: "";
          height: 4px;
          width: 38px;
          background: var(--gradient-text);
          position: absolute;
          bottom: 240px;
        }
        
      }
      .text{
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        color: #81AFDD;
      }
    }
  }

`;



