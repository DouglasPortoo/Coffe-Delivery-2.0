import { Actions, Button, Buy, Container, Tag, Tags } from "./styles";

import { InputNumber } from "../InputNumber";

import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useContex } from "../../hooks/useContext";
import { useState, useEffect } from "react";

export function Catalog({ coffee }) {
  const { pedido } = useContex();
  const { id, nome, img, valor, descricao, tags, quantity } = coffee;
  const { addToCart } = useContex();
  const [sumItemsInCart, setSumItemsInCart] = useState(quantity);
  const [valorReal, setvalorReal] = useState(sumItemsInCart * valor);

  function quantityPlus() {
    setSumItemsInCart((prevent) => prevent + 1);
  }

  function quantityMinus() {
    setSumItemsInCart((prevent) => prevent - 1);
  }

  function handlelistaDePedido() {
    addToCart(coffee, sumItemsInCart);
  }

  useEffect(() => {
    setvalorReal(sumItemsInCart * valor);
  }, [sumItemsInCart, valor]);

  useEffect(() => {
    if (pedido.length > 0) {
      const existItemToCart = pedido.find((item) => item.id === id);
      if (existItemToCart) {
        const updateCartQuantity = [existItemToCart].map((items) => items.quantity);
        setSumItemsInCart(...updateCartQuantity);
      }
    }
  }, [pedido]);

  return (
    <>
      <Container>
        <img src={img} alt={"imagem do " + name} />
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <h2>{nome}</h2>
        <span>{descricao}</span>
        <Buy>
          <p>
            {valorReal.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Actions>
            <InputNumber
              sumItemsInCart={sumItemsInCart}
              onClickPlus={() => quantityPlus()}
              onClickMinus={() => quantityMinus()}
            />
            <Button onClick={() => handlelistaDePedido()}>
              <ShoppingCartSimple />
            </Button>
          </Actions>
        </Buy>
      </Container>
    </>
  );
}
