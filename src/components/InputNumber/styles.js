import styled from "styled-components";

export const Counter = styled.div`
display: flex;
height: 38px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 6px;
border-radius: 6px;
background:#E6E5E5;

p{
color: #272221;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 130%; 

}
svg{
  cursor: pointer;
  color:#8047F8;

  :hover{
    color: #4B2995;
  }
}
`