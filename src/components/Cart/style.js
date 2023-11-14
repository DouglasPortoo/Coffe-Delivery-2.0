import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
padding: 8px 4px 26px;
justify-content: space-between;
background:#F3F2F2;
border-bottom: 1px solid #E6E5E5 ;

>p{
  color:#574F4D;
  text-align: right;


font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 130%;
}
`

export const Info = styled.div`
display: flex;
align-items: center; 
gap: 20px; 

img{
width: 64px;
height: 64px;
}

`

export const Details = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;

.inputs{
  display: flex;
  gap:8px;
  align-items: center;
  
}
`