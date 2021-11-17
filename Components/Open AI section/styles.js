import styled from "styled-components";
export const Content =styled.div`
  font-family: var(--font-family);
  padding-bottom: 50px;

`;
export const Container =styled.div`
  width: 90%;
  margin:auto;
`;
export const Title =styled.div`
  font-size: 57px;
  font-style: normal;
  font-weight: 800;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 75px;
  letter-spacing: -0.04em;
  text-align: left;
  padding: 70px 0;
  padding-bottom: 90px;

`;
export const CardWrapper =styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Card =styled.div`
  width: 370.03px;
.card-image{
  width: 100%;
  height: 287.73px;
  img{
    height: 100%;
    width: 100%;
  }
}
  .card-body{
    color: #fff;
    background: #042C54;
    padding: 20px;
    .date{
      font-size: 13px;
      
    }
    .text{
      font-size: 25px;
      font-style: normal;
      font-weight: 800;
      line-height: 30px;
      text-align: left;
      padding-top: 10px;
      padding-bottom: 170px;
    }
    .cart-bottom-text{
      
    }
  }
`;

export const Leftside =styled.div`

`;
export const MiniWrapper =styled.div`

`;
export const MiniRow =styled.div`
  display: flex;
  .card{
    width: 327.33551025390625px;
    margin:33px 20px;
    .card-img{
    height: 130.46824645996094px;
    img{
      height: 100%;
      width: 100%;
    }
  }
    .card-body{
      color: #fff;
      background: #042C54;
      padding: 14px;
      .date{
        font-size: 13px;
      }
      .text{
        font-size: 17px;
        font-weight: 800;
        padding-top: 10px;
        padding-bottom: 30px;
        
      }
      .cart-bottom-text{
        
      }
    }
}
`;