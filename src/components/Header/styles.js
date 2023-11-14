import styled from "styled-components";

export const Container = styled.div`
  height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  >img{
    width: 84.952px;
    height: 40px;
    cursor: pointer;
  }

`
export const Pins = styled.div`
display: flex;
gap:12px;
align-items: center;
`
export const Location = styled.div`
display: flex;
align-items: center;

gap:4px;
padding: 8px;
border-radius: 6px;
background: var(--brand-purple-light, #EBE5F9);

>svg{
  color:#8047F8;
  width: 22px;
  height: 22px;
}
`
export const Cart = styled.button`
border: none;
border-radius: 6px;
background: var(--brand-yellow-light, #F1E9C9);
padding: 8px;

>svg{
  color:#C47F17;
  width: 22px;
  height: 22px;
}
`