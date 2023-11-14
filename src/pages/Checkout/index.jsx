import {
  Address,
  AddressData,
  Container,
  Delivery,
  Form,
  Order,
  OrderData,
  Payment,
  SubContainer,
  TitleAdress,
  Total,
  Totalitems,
} from "./styles";
import { Header } from "../../components/Header";
import {
  MapPin,
  CurrencyDollarSimple,
  CreditCard,
  Bank,
  Money,
} from "@phosphor-icons/react";
import { Cart } from "../../components/Cart";
import { Select } from "../../components/Select";
import { useNavigate } from "react-router-dom";
import { useContex } from "../../hooks/useContext";
import { useEffect, useState } from "react";

export function Checkout() {
  const { pedido, Subimitinfos } = useContex();

  const [finalValue, setFinalValue] = useState(0);
  const [finalQuantity, setFfinalQuantity] = useState(0);

  const [cep, setCep] = useState("067-53200");
  const [rua, setRua] = useState("Rua Maria Simão Silva");
  const [numero, setNumero] = useState("127");
  const [complemento, setComplemento] = useState("Minha Casa");
  const [bairro, setBairro] = useState("Jd Kuabara");
  const [cidade, setCidade] = useState("Taboão da Serra");
  const [estado, setEstado] = useState("SP");
  const [pagamento, setPagamento] = useState("");

  const navigate = useNavigate();

  function handleSubimit() {
    const data = {
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pagamento,
    };

    Subimitinfos(data);

    navigate("/success");
  }

  useEffect(() => {
    if (pedido) {
      const finalValue = pedido.reduce(
        (acumulador, cafe) => acumulador + cafe.valor * cafe.quantity,
        0
      );
      setFinalValue(finalValue);

      const finalQuantity1 = pedido.reduce(
        (acumulador, cafe) => acumulador + cafe.quantity,
        0
      );

      setFfinalQuantity(finalQuantity1);
    }
  }, [pedido]);

  return (
    <Container>
      <Header />

      <SubContainer>
        <AddressData>
          <p>Complete seu pedido</p>

          <Address>
            <TitleAdress>
              <MapPin />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </TitleAdress>

            <Form id="form" onSubmit={handleSubimit}>
              <input
                className="input1"
                placeholder="90250-440"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                required
              />
              <input
                className="input2"
                placeholder="Rua João Daniel Martinelli"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                required
              />
              <input
                className="input3"
                placeholder="102"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
              <input
                className="input4"
                placeholder="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
               
              />
              <input
                className="input5"
                placeholder="Farrapos"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                required
              />
              <input
                className="input6"
                placeholder="Porto Alegre"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
              <input
                className="input7"
                placeholder="RS"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />
            </Form>
          </Address>

          <Payment>
            <TitleAdress>
              <CurrencyDollarSimple />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </TitleAdress>

            <div>
              <Select
                value="CARTÃO DE CRÉDITO"
                title="CARTÃO DE CRÉDITO"
                icon={CreditCard}
                className="notSelectedButton"
                onClick={(e) => setPagamento(e.target.value)}
              />
              <Select
                value="CARTÃO DE DÉBITO"
                title="CARTÃO DE DÉBITO"
                icon={Bank}
                className="notSelectedButton"
                onClick={(e) => setPagamento(e.target.value)}
              />
              <Select
                value="DINHEIRO"
                title="DINHEIRO"
                icon={Money}
                className="notSelectedButton"
                onClick={(e) => setPagamento(e.target.value)}
              />
            </div>
          </Payment>
        </AddressData>

        <OrderData>
          <p>Cafés selecionados</p>

          <Order>
            {pedido &&
              pedido.map((item, index) => <Cart key={index} pedido={item} />)}
            <Totalitems>
              <p>Total de itens</p>
              <span>{finalQuantity}</span>
            </Totalitems>
            <Delivery>
              <p>Entrega</p>
              <span>Grátis</span>
            </Delivery>
            <Total>
              <p>Total</p>
              <span>
                {finalValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </Total>
            <button
              form="form"
              type="submit"
              disabled={pedido == ""}
            >
              Confirmar pedido
            </button>
          </Order>
        </OrderData>
      </SubContainer>
    </Container>
  );
}
