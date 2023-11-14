import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
margin-left: 280px;
margin-right: 280px; 

`

export const Intro = styled.div`
height: 544px;

display: flex;
justify-content: space-between;
align-items: center;


`
export const ContainerDetails = styled.div`
display: flex;
flex-direction: column;
gap: 66px;
`
export const Titles = styled.div`
width: 588px; 
display: flex;
flex-direction: column;
gap:16px;

>h1{
font-family: 'Baloo 2', cursive;
font-size: 48px;
font-style: normal;
font-weight: 800;
line-height: 130%; 
}
`
export const Items = styled.div`

display: grid;
grid-template-columns: 30px auto 30px auto;
grid-template-rows: 32px;
gap:22px;
align-items: center;

>p{
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 130%;
}

>svg{
border-radius: 999px;
padding: 7px;
}

.ShoppingCart{
  background:#C47F17 ;
  color:#FAFAFA;
}

.Package{
  background:#574F4D;
  color:#FAFAFA;
}

.Timer{
  background:#DBAC2C ;
  color:#FAFAFA;
}

.Coffee{
  background:#8047F8 ;
  color:#FAFAFA;
}


`
export const ContainerCoffeImage = styled.div`
>img{
  background-color: transparent;
}
`

export const CoffeeList = styled.div`

display: flex;
flex-direction: column;
gap: 54px;

>p{
  font-family: 'Baloo 2', cursive;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
}
`

export const List = styled.div`
display: grid;
grid-template-columns: repeat(5,256px);
justify-content: space-between;
row-gap:60px
`

