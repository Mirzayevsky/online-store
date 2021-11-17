import styled from "styled-components";
export  const Navbar = styled.div`
  width: 100%;
  background: var(--color-footer);
  font-family: var(--font-family);
`;
export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 40px 0;
`;
export const NavbarBrand = styled.div`
   color: #fff;
  font-size: 21px;
  font-weight: 500;
  cursor: pointer;
`;
export const LinkWrapper = styled.div`
  color: #fff;
  display: flex;
  margin-left: 50px;
`;
export const Link = styled.div`
  font-size: 17px;
  margin-left: 40px;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  margin-left: auto;
  button{
    color: #ffffff;
    margin: 0 10px;
    font-size: 17px;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  .sign-in-btn{
    background: transparent;
  }
  .sign-up-btn{
    height:40px;
    width: 120px;
    background: #FF4820;
  }
  
`;
