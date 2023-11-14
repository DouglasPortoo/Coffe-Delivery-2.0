import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
margin-left: 280px;
margin-right: 280px;   
`

export const SubContainer = styled.div`
display:flex ;
justify-content: space-between; 
margin-top: 80px;
gap:102px;

`

export const Order = styled.div`

width: 100%;
>p{
color: #C47F17;
font-family: Baloo 2;
font-size: 32px;
font-weight: 800;
line-height: 130%;
}

>span{
color: var(--base-subtitle, #403937);
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 130%;
}

`
export const OrderInfo = styled.div`
width: 100%;
display: flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 32px;

border-radius: 6px 36px;
border: 1px solid #DBAC2C;

margin-top: 40px;

p{
  color:#574F4D;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}


strong{

  color:#574F4D;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}

svg{
border-radius: 999px;
padding: 7px;
}
`
export const Local = styled.div`
display: flex;
gap:12px;

.MapPin{
  background:#8047F8 ;
  color:#FAFAFA;
}

`
export const Time = styled.div`
display: flex;
gap:12px;

.Timer{
  background:#DBAC2C ;
  color:#FAFAFA;
}
`
export const Payment = styled.div`
display: flex;
gap:12px;

.CurrencyDollar{
  background: #C47F17 ;
  color:#FAFAFA;
}
`
export const Illustration = styled.div`
width: 100%;
display: flex;
justify-content: center;

`
