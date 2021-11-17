import styled from "styled-components";


export  const Content = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  button{
  outline: none;
  border: none;
  }
  background: var(--color-footer);
`;
export  const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
export  const TextBox = styled.div`
`;
export  const ImageWrapper = styled.div`
  width: 50%;
  .image-wrapper{
    width: 575px;
    height: 575px;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
export  const Title = styled.div`
  font-size: 59px;
  font-weight: 800;
  font-family: var(--font-family);
  line-height: 75px;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 80px;
  
`;

export  const Text = styled.div`
  color: var(--Global-text-color);
  font-size: 18px;
  font-family: manrope;
  line-height: 27px;
  padding: 22px 0;
`;

export  const InputWrapper = styled.div`
  padding: 20px 0;
 .get-started-input{
   color: #fff;
   height: 50px;
   width: 320px;
   outline: none;
   border: 0;
   background: #052D56;
   border: 0;
   text-align: center;
 }
  .get-started-btn{
    height: 52px;
    width: 174px;
    background: #FF4820;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
  }
  
`;

export  const LastRequests = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  .image-wrapper{
    height: 36px;
    img{
      height: 100%;
    }
    
  }
  .requests-text{
    color: #fff;
    font-style: normal;
    font-size: 13px;
    line-height: 38px;
    margin-left: 20px;
  }
`;