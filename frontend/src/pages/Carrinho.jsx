import Header from "../componentes/Header";

const formatarPreco = (valor) => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function Carrinho({ lanches, quantidades, alterarQuantidade, quantidadeCarrinho, limparCarrinho, aoNavegar }) {
  const itens = lanches.filter((lanche) => quantidades[lanche.id] > 0);
  const total = itens.reduce((soma, item) => soma + item.preco * quantidades[item.id], 0);

  return (
    <div className="app">
      <Header titulo="Carrinho de Compras" subtitulo="Confira o seu pedido" quantidadeCarrinho={quantidadeCarrinho} limparCarrinho={limparCarrinho} aoNavegar={aoNavegar} />
      <section className="pagina-carrinho">
        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : itens.map((item) => (
          <article className="item-carrinho" key={item.id}>
            <img src={item.imagem} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <p>{item.categoria} · {formatarPreco(item.preco)}</p>
            </div>
            <div className="quantidade-carrinho">
              <button onClick={() => alterarQuantidade(item.id, -1)}>-</button>
              <strong>{quantidades[item.id]}</strong>
              <button onClick={() => alterarQuantidade(item.id, 1)}>+</button>
            </div>
            <strong>{formatarPreco(item.preco * quantidades[item.id])}</strong>
          </article>
        ))}
        <div className="total-carrinho">Total: {formatarPreco(total)}</div>
        <div className="acoes-carrinho">
          <button onClick={limparCarrinho} disabled={quantidadeCarrinho === 0}>Limpar</button>
          <button onClick={() => aoNavegar("pedido")} disabled={quantidadeCarrinho === 0}>Finalizar pedido</button>
        </div>
      </section>
    </div>
  );
}

export default Carrinho;
