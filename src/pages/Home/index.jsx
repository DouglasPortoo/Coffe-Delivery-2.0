import { Header } from "../../components/Header";
import {
  CoffeeList,
  Container,
  ContainerCoffeImage,
  ContainerDetails,
  Intro,
  Items,
  List,
  Titles,
} from "./styles";
import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";
import BigCoffe from "../../assets/BigCoffe.svg";
import { Catalog } from "../../components/Catalog";
import { useContex } from "../../hooks/useContext";


export function Home() {
  const { coffess} = useContex();
  
  return (
    <Container>
      <Header />

      <Intro>
        <ContainerDetails>
          <Titles>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Titles>
          <Items>
            <ShoppingCart className="ShoppingCart" width="2rem" height="2em" />
            <p>Compra simples e segura</p>
            <Package className="Package" width="2rem" height="2em" />
            <p>Embalagem mantém o café intacto</p>
            <Timer className="Timer" width="2rem" height="2em" />
            <p>Entrega rápida e rastreada</p>
            <Coffee className="Coffee" width="2rem" height="2em" />
            <p>O café chega fresquinho até você</p>
          </Items>
        </ContainerDetails>

        <ContainerCoffeImage>
          <img src={BigCoffe} alt="" />
        </ContainerCoffeImage>
      </Intro>

      <CoffeeList>
        <p>Nossos cafés</p>

        <List>
          {coffess.map((coffee)=>(
            <Catalog 
              key={coffee.id}
              coffee={coffee}
            />
          ))}
          
        </List>
      </CoffeeList>
    </Container>
  );
}
