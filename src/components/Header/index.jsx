import { Cart, Container, Location, Pins } from "./styles";
import { ShoppingCart, MapPin  } from "@phosphor-icons/react"
import Logo from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom";


export function Header(){

  const navigate = useNavigate()

  return(
    <Container>
      <img src={Logo} alt="logo" onClick={()=>navigate("/")}/>
      <Pins>
        <Location>
          <MapPin/>
          <p>São Paulo, SP</p>
        </Location>
        <Cart onClick={()=>navigate("/checkout")}> 
          <ShoppingCart />
        </Cart>
      </Pins>
    </Container>
  )
}