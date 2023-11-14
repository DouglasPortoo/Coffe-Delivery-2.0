import { Select } from "../Select";
import { InputNumber } from "../InputNumber";
import { TrashSimple } from "@phosphor-icons/react";
import { Container, Info, Details } from "./style";
import { useContex } from "../../hooks/useContext";
import { useState,useEffect } from "react";

export function Cart({ pedido }) {
  const { img, nome, quantity, id, valor } = pedido;
  const { addToCart,Remove } = useContex();

  const [sumItemsInCart, setSumItemsInCart] = useState(quantity);

  const [valorReal, setvalorReal] = useState(sumItemsInCart*valor);

  function quantityPlus() {
    setSumItemsInCart((prevent) => prevent + 1);
    
  }

  function quantityMinus() {
    setSumItemsInCart((prevent) => prevent - 1);
    
  }

  function handeleRemove(index) {
    Remove(index);
  }

  useEffect(() => {
    function handlelistaDePedido() {
      addToCart(pedido,sumItemsInCart);
    }
    handlelistaDePedido()
    setvalorReal(sumItemsInCart*valor)
  }, [sumItemsInCart])
  

  return (
    <Container>
      <Info>
        <img src={img} alt={nome} />

        <Details>
          <p>{nome}</p>
          <div className="inputs">
            <InputNumber
              sumItemsInCart={sumItemsInCart}
              onClickPlus={() => quantityPlus()}
              onClickMinus={() => quantityMinus()}
            />
            <Select
              title="Remover"
              icon={TrashSimple}
              onClick={() => handeleRemove(id)}
            />
          </div>
        </Details>
      </Info>

      <p>
        {valorReal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
    </Container>
  );
}
