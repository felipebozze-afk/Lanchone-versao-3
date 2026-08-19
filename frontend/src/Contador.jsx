function Contador({ id, preco, quantidade, alterarQuantidade }) {
  const precoAtualizadoFormatado = (preco * quantidade).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  return (
    <div className="contador">
      <p>Quantidade: {quantidade}</p>
      <p>Preço atualizado: {precoAtualizadoFormatado}</p>
      <div className="contador-botoes">
        <button onClick={() => alterarQuantidade(id, 1)}>Adicionar</button>
        <button onClick={() => alterarQuantidade(id, -1)}>Remover</button>
      </div>
    </div>
  );
}

export default Contador;
