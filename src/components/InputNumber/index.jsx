import { Minus, Plus } from "@phosphor-icons/react";
import { Counter } from "./styles";


export function InputNumber({ sumItemsInCart,onClickPlus,onClickMinus}) {
 

  return (
    <Counter>
      <Minus onClick={onClickMinus} />
      <p>{sumItemsInCart}</p>
      <Plus  onClick={onClickPlus}/>
    </Counter>
  );
}
