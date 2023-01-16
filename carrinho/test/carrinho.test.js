import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe('Testes do Carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maca', 0.5, 1);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErrCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErrCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);
    expect(carrinho.frete).toBe(10);
  });

  it('Deve calcular o total', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maca', 1, 5);
    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.calculaTotal()).toBe(25);
  });

  it('Deve finalizar as compras', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maca', 1, 5);
    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });
});