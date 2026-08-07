import "./Header.css";

function Header({ titulo, subtitulo, quantidadeCarrinho, limparCarrinho, aoNavegar }) {
  return (
    <div className="titulo">
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <nav className="navegacao">
        <button onClick={() => aoNavegar("home")}>Cardápio</button>
        <button onClick={() => aoNavegar("carrinho")}>Carrinho ({quantidadeCarrinho})</button>
        <button onClick={() => aoNavegar("pedido")}>Cozinha</button>
      </nav>
      <div className="carrinho">
        <span>Carrinho ({quantidadeCarrinho})</span>
        {limparCarrinho && <button onClick={limparCarrinho} disabled={quantidadeCarrinho === 0}>Limpar carrinho</button>}
      </div>
    </div>
  );
}
  
export default Header;
