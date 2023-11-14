import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import Motoboy from "../../assets/Motoboy.svg";
import {
  Container,
  Illustration,
  Local,
  Order,
  OrderInfo,
  Payment,
  SubContainer,
  Time,
} from "./style";
import { Header } from "../../components/Header";
import { useContex } from "../../hooks/useContext";

export function Success() {

  const {data} = useContex();
  return (
    <Container>
      <Header></Header>
      <SubContainer>
        <Order>
          <p>Uhul! Pedido confirmado.</p>
          <strong>Agora é só aguardar que logo o café chegará até você</strong>
          <OrderInfo>
            <Local>
              <MapPin className="MapPin" width="2rem" height="2em" />
              <p>
                Entrega em <strong>{data.rua}, {data.numero}</strong>
                <div>
                  <p> {data.bairro} - {data.cidade}, {data.estado}</p>
                </div>
              </p>
            </Local>
            <Time>
              <Timer className="Timer" width="2rem" height="2em" />
              <div>
                <p>Previsão de entrega </p>
                <strong>20 min - 30 min</strong>
              </div>
            </Time>
            <Payment>
              <CurrencyDollar className="CurrencyDollar" width="2rem" height="2em" />
              <div>
                <p>Pagamento na entrega</p>
                <strong>{data.pagamento}</strong>
              </div>
            </Payment>
          </OrderInfo>
        </Order>

        <Illustration>
          <img src={Motoboy} alt="" />
        </Illustration>
      </SubContainer>
    </Container>
  );
}
