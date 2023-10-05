import { ItemCesta } from "./item-cesta";
import { Produto } from "./produto";

export interface Cesta {
  total: number
  itens: ItemCesta[];
}
