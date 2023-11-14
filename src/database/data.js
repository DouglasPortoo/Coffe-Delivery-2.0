import expresso_tradicional from "../assets/coffies/expresso_tradicional.png";
import americano from "../assets/coffies/americano.svg";
import expresso_cremoso from "../assets/coffies/expresso_cremoso.svg";
import cafe_gelado from "../assets/coffies/cafe_gelado.svg";
import cafe_com_leite from "../assets/coffies/cafe_com_leite.svg";
import latte from "../assets/coffies/latte.svg";
import capuccino from "../assets/coffies/capuccino.svg";
import macchiato from "../assets/coffies/macchiato.svg";
import mochaccino from "../assets/coffies/mochaccino.svg";
import chocolate_quente from "../assets/coffies/chocolate_quente.svg";
import cubano from "../assets/coffies/cubano.svg";
import havaiano from "../assets/coffies/havaiano.svg";
import arabe from "../assets/coffies/arabe.svg";
import irlandes from "../assets/coffies/irlandes.svg";

export const DATABASE = [
  {
    id: 1,
    img: expresso_tradicional,
    tags: ["tradiconal"],
    nome: "Expresso Tradicional",
    descricao: "O tradicional café feito com água quente e grãos moídos",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    img: americano,
    tags: ["tradiconal"],
    nome: "Expresso Americano",
    descricao: "Expresso diluído, menos intenso que o tradicional",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 3,
    img: expresso_cremoso,
    tags: ["tradiconal"],
    nome: "Expresso Cremoso",
    descricao: "Café expresso tradicional com espuma cremosa",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 4,
    img: cafe_gelado,
    tags: ["tradiconal", "gelado"],
    nome: "Expresso Gelado",
    descricao: "Bebida preparada com café expresso e cubos de gelo",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 5,
    img: cafe_com_leite,
    tags: ["tradiconal", "com leite"],
    nome: "Café com Leite",
    descricao: "Meio a meio de expresso tradicional com leite vaporizado",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 6,
    img: latte,
    tags: ["tradiconal", "com leite"],
    nome: "Latte",
    descricao:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 7,
    img: capuccino,
    tags: ["tradiconal", "com leite"],
    nome: "Capuccino",
    descricao:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 8,
    img: macchiato,
    tags: ["tradiconal", "com leite"],
    nome: "Macchiato",
    descricao: "Café expresso misturado com um pouco de leite quente e espuma",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 9,
    img: mochaccino,
    tags: ["tradiconal", "com leite"],
    nome: "Mocaccino",
    descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 10,
    img: chocolate_quente,
    tags: ["tradiconal", "com leite"],
    nome: "Chocolate Quente",
    descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 11,
    img: cubano,
    tags: ["especial", "alcoolico", "gelado"],
    nome: "Cubano",
    descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 12,
    img: havaiano,
    tags: ["especial"],
    nome: "Havaiano",
    descricao: "Bebida adocicada preparada com café e leite de coco",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 13,
    img: arabe,
    tags: ["especial"],
    nome: "Árabe",
    descricao: "Bebida preparada com grãos de café árabe e especiarias",
    valor: 9.9,
    quantity: 1,
  },
  {
    id: 14,
    img: irlandes,
    tags: ["especial", "alcoolico"],
    nome: "Irlandês",
    descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    valor: 9.9,
    quantity: 1,
  },
];
