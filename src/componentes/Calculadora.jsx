import CardProd from "../CardProd";

function Calculadora({ lanches, quantidades, alterarQuantidade, adicionarAoCarrinho }) {
  const itens = lanches.map((lanche) => ({ ...lanche, quantidade: quantidades[lanche.id] }));
  const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  const formatarPreco = (valor) => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <>
      <h2>Cardápio</h2>
      <div className="produtos">
        {itens.map((item) => (
          <CardProd key={item.id} {...item} alterarQuantidade={alterarQuantidade} adicionarAoCarrinho={adicionarAoCarrinho} />
        ))}
      </div>
      <div className="resumo-pedido">
        <h2>Resumo do pedido</h2>
        {itens.map((item) => <p key={item.id}>{item.nome}: {item.quantidade} item(ns) - {formatarPreco(item.preco * item.quantidade)}</p>)}
        <h3>Total: {formatarPreco(total)}</h3>
      </div>
    </>
  );
}

export default Calculadora;
