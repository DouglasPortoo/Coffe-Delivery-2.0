import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
margin-left: 280px;
margin-right: 280px; 

`
export const SubContainer = styled.div`

display: flex;
gap:32px;
`

export const AddressData = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
width: 100%;

>p{
color: #403937;

font-family: Baloo 2;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 130%;

margin-top: 40px;
margin-bottom: 15x;
}
`
export const Address = styled.div`
padding: 40px;

display: flex;
flex-direction: column;
gap:32px;

border-radius: 6px;
background:#F3F2F2;
`
export const TitleAdress = styled.div`
display: flex;
gap:8px;

>svg{
color:#C47F17;
width: 22px;
height: 22px;
}

>div>p{
color:#403937;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 130%;
}

span{
color:#574F4D;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; 
}
`

export const Form = styled.form`
display: grid;
grid-template-columns: 1fr 1fr 100px;
grid-template-rows: repeat(4, 1fr);
gap:16px;

input{
padding: 12px;

border-radius: 4px;
border:#E6E5E5;
background: #EDEDED;
}

.input1{
grid-column: 1/2;
}

.input2{
  grid-column: 1/4;
}
.input3{
  grid-column: 1/2;
}
.input4{
  grid-column: 2/4;
}
.input5{
  grid-column: 1/2;
}
.input6{
  grid-column: 2/3;
}
.input7{
  grid-column: 3/3;
}

`
export const Payment = styled.div`
padding: 40px;

display: flex;
flex-direction: column;
gap:32px;

border-radius: 6px;
background:#F3F2F2;

svg{
color:#8047F8;
width: 22px;
height: 22px;
}

>div{
  display: flex;
  gap: 10px;
}

input{
padding: 12px;

border:#E6E5E5;
background: #EDEDED;
border-radius: 6px;
background: #E6E5E5;

}

.notSelectedButton{
    width: 100%;
    height: 51px;
  
}

.selectedButton{
    width: 100%;
    height: 51px;
    border: 1px solid #8047F8;
    background: #EBE5F9;
  
}
`
export const OrderData = styled.div`

width: 900px;
display: flex;
flex-direction: column;
gap: 15px;

>p{
color: #403937;

font-family: Baloo 2;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 130%;

margin-top: 40px;
margin-bottom: 15x;
}
`
export const Order = styled.div`
padding: 40px;

display: flex;
flex-direction: column;
gap:24px;

border-radius: 6px 44px;
background:#F3F2F2;

svg{
  color:#8047F8
}

>button{

padding: 12px 8px;

border-radius: 6px;
background:#DBAC2C;
border: none;
color: #FFF;

font-size: 14px;
font-weight: 700;
line-height: 160%; 
text-transform: uppercase;
}
`

export const Totalitems = styled.div`
display: flex;
justify-content: space-between;

color: #574F4D;
text-align: right;
font-family: Roboto;
font-weight: 400;
line-height: 130%;

>p{
font-size: 14px;
}

>span{
font-size: 16px;
}
`

export const Delivery = styled.div`
display: flex;
justify-content: space-between;

color: #574F4D;
text-align: right;
font-family: Roboto;
font-weight: 400;
line-height: 130%;

>p{
font-size: 14px;
}

>span{
font-size: 16px;
}
`

export const Total = styled.div`
display: flex;
justify-content: space-between;

color: var(--base-subtitle, #403937);
text-align: right;

font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 130%; 


`