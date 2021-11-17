import styled from "styled-components";
export  const  Container = styled.div`
  width: 90%;
  margin:100px auto;
  margin-top: 160px;
  font-family: var(--font-family);

`;
export  const  TextWrapper = styled.div`
  width: 100%;
  height: 172.65px;
  border-radius: 15px;
  background: var(--gradient-bar);
  .title{
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
    margin-left: 70px;
    padding-top: 50px;
  }
  
`;
export  const  TextBox = styled.div`
  display: flex;
  position: relative;
  .text{
    font-weight: 800;
    font-size: 30px;
    line-height: 45px;
    margin-left: 70px;
  }
  
  .register-btn{
    color: #fff;
    background: #000;
    width: 189.14px;
    height: 59.4px;
    border-radius: 40px;
    outline: none;
    border: none;
    position: absolute;
    top: -25px;
    right: 30px;
  }
`;

