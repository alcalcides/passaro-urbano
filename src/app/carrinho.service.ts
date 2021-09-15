import { ItemCarrinho } from "./shared/item-carrinho.model"

export default class CarrinhoService {
  public items: ItemCarrinho[] = []

  public exibirItens(): ItemCarrinho[] {
    return this.items;
  }
}
