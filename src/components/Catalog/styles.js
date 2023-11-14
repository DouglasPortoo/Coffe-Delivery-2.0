import styled from "styled-components";

export const Container = styled.div`
width: 256px;

padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;

background:#F3F2F2;
border-radius: 6px 36px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
  width: 120px;
  height: 120px;
  margin-top: -20px;
  margin-bottom: 20px ;
}


h2{
color:#403937;
font-family: Baloo 2;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 130%;
margin-bottom: 8px;
margin-top: 20px;
}

span{
color:#8D8686;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%;
text-align: center;
margin-bottom: 33px;
}
`

export const Tags = styled.div`
display: flex;
gap:5px;
justify-content: center;
align-items: center;

flex-wrap: wrap;
`

export const Tag = styled.p`
display: flex;

justify-content: center;
align-items: center;

border-radius: 100px;
background: #F1E9C9;
color:#C47F17;

padding: 4px 8px;
`
export const Buy = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 200px;
gap: 20px;

>p{
  color: #574F4D;

font-family: Baloo 2;
font-size: 24px;
font-style: normal;
font-weight: 800;
line-height: 130%;
}
`
export const Actions = styled.div`
display: flex;
gap:8px
`


export const Button = styled.button`
display: flex;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 6px;
background:#4B2995;
border:none;
color:white;
`


