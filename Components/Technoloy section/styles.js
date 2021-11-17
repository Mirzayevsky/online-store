import styled from "styled-components";
export const Container = styled.div`
  width: 90%;
  margin:80px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: var(--font-family);
  background: #040C18;
`;

export const ImageWrapper = styled.div`
.image-container{
  height: 502.0545349121094px;
  width: 467.30908203125px;
  img{
    width: 100%;
    height: 100%;
  }
}
`;
export const TextBox = styled.div`
  margin-top: 140px;
    .sub-title{
      color: #71E5FF;
      font-size: 16px;
    }
  
  .title{
    font-size: 32px;
    font-weight: 800;
    font-family: var(--font-family);
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 45px;
    padding: 20px 0;
  }
  .text{
    color: #71E5FF;
    font-size: 15px;
    line-height: 30px;
  }
  .text-bottom{
    color: #FF8A71;
    font-size: 15px;
    line-height: 30px;
    padding-top: 20px;
    
  }
`;