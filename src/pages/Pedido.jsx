import { useState } from "react";
import Header from "../componentes/Header";

function Pedido({ lanches, quantidades, quantidadeCarrinho, aoNavegar, limparCarrinho }) {
  const [status, setStatus] = useState("Recebido");
  const itens = lanches.filter((lanche) => quantidades[lanche.id] > 0);
  const estados = ["Recebido", "Preparando", "Pronto", "Entregue"];

  function atualizarStatus(estado) {
    if (estado === "Entregue" && itens.length > 0) {
      const pedidoEntregue = window.confirm("Confirma que o pedido foi entregue?");

      if (!pedidoEntregue) return;

      setStatus(estado);
      limparCarrinho();
      return;
    }

    setStatus(estado);
  }

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
            <button className={status === estado ? "ativo" : ""} key={estado} onClick={() => atualizarStatus(estado)}>{estado}</button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Pedido;
