import styled from "styled-components";
export  const Container = styled.div`
  width: 90%;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;
export  const Content = styled.div`
.title{
  font-size: 34px;
  font-weight: 800;
  line-height: 45px;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 30px;

}
  .sub-title{
    color: #FF8A71;
    padding: 30px 0;

  }
`;
export  const RightContent = styled.div`
  width: 50%;
.text-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
 
  .sub-title{
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    font-family: var(--font-family);
    line-height: 28px;
    
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
    background: var(--Global-text-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
    line-height: 24px;
    width: 60%;
   
  }
}
`;