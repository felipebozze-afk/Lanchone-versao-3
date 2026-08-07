import { useState } from "react";
import Header from "../componentes/Header";

function Pedido({ lanches, quantidades, quantidadeCarrinho, aoNavegar }) {
  const [status, setStatus] = useState("Recebido");
  const itens = lanches.filter((lanche) => quantidades[lanche.id] > 0);
  const estados = ["Recebido", "Preparando", "Pronto", "Entregue"];

  return (
    <div className="app">
      <Header titulo="Pedidos para a Cozinha" subtitulo="Acompanhamento do pedido" quantidadeCarrinho={quantidadeCarrinho} aoNavegar={aoNavegar} />
      <section className="painel-pedido">
        <article className="pedido-cozinha">
          <header><h3>PEDIDO #001</h3><p>Mesa: 03</p></header>
          <ul>
            {itens.map((item) => <li key={item.id}><strong>{quantidades[item.id]}x</strong> {item.nome}</li>)}
            {itens.length === 0 && <li>Nenhum item no pedido.</li>}
          </ul>
          <p><strong>Status:</strong> <span>{status}</span></p>
        </article>
        <div className="status-pedido">
          {estados.map((estado) => (
            <button className={status === estado ? "ativo" : ""} key={estado} onClick={() => setStatus(estado)}>{estado}</button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Pedido;
