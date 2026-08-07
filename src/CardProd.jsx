import Contador from "./Contador";

function CardProd({ id, nome, preco, categoria, quantidade, alterarQuantidade, adicionarAoCarrinho, imagem }) {
  const precoFormatado = preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  return (
    <div className="product-item">
      <img src={imagem} alt={nome} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
      <h3 className="product-name">{nome}</h3>
      <p className="product-category">Categoria: {categoria}</p>
      <p className="product-price">Preço: {precoFormatado}</p>
      <Contador id={id} preco={preco} quantidade={quantidade} alterarQuantidade={alterarQuantidade} />
      <button className="adicionar-carrinho" onClick={() => adicionarAoCarrinho({ id, nome })}>Adicionar ao carrinho</button>
    </div>
  );
}

export default CardProd;
