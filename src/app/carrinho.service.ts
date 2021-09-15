import { Oferta } from './shared/oferta.model';
import { ItemCarrinho } from './shared/item-carrinho.model';

class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id
    );
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade++;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  public totalCarrinhoCompras(): number {
    return this.itens.reduce(
      (acc, current) => (acc += current.quantidade * current.valor),
      0
    );
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho);

    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id
    );

    if(itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade++;
    }

  }

  public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho);

    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id
    );

    if(itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade--;
      if(itemCarrinhoEncontrado.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado) , 1);
      }
    }

  }

}

export { CarrinhoService };
