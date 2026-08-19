import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Pedido from "./pages/Pedido";
import "./App.css";

const lanches = [
  { id: 1, nome: "X-Salada", preco: 12.9, categoria: "Lanches", imagem: "/Imagens/xsalada.jpg" },
  { id: 2, nome: "Porção de franguinho", preco: 22.9, categoria: "Porções", imagem: "/Imagens/porção de frango.jpg" },
  { id: 3, nome: "Refrigerante", preco: 5.5, categoria: "Bebidas", imagem: "/Imagens/refrigerante.jpg" },
  { id: 4, nome: "Cervejinha", preco: 9, categoria: "Bebidas", imagem: "/Imagens/cervejinha.jpg" },
  { id: 5, nome: "X-Bacon", preco: 16.9, categoria: "Lanches", imagem: "/Imagens/xsalada.jpg" },
  { id: 6, nome: "Batata frita", preco: 14.9, categoria: "Porções", imagem: "/Imagens/batata frita.jpg" },
  { id: 7, nome: "Suco natural", preco: 7.5, categoria: "Bebidas", imagem: "/Imagens/suco natural.jpg" },
  { id: 8, nome: "Combo Burgão", preco: 29.9, categoria: "Combos", imagem: "/Imagens/xsalada.jpg" },
];

function App() {
  const navigate = useNavigate();
  const [quantidades, setQuantidades] = useState(() =>
    Object.fromEntries(lanches.map((lanche) => [lanche.id, 0])),
  );

  const quantidadeCarrinho = Object.values(quantidades).reduce(
    (total, quantidade) => total + quantidade,
    0,
  );

  function alterarQuantidade(id, variacao) {
    setQuantidades((quantidadesAtuais) => ({
      ...quantidadesAtuais,
      [id]: Math.max(0, quantidadesAtuais[id] + variacao),
    }));
  }

  function adicionarAoCarrinho(lanche) {
    const novaQuantidade = quantidades[lanche.id] + 1;
    alterarQuantidade(lanche.id, 1);
    setTimeout(() => alert(`${novaQuantidade} ${lanche.nome} adicionado ao carrinho`), 0);
  }

  function limparCarrinho() {
    setQuantidades(Object.fromEntries(lanches.map((lanche) => [lanche.id, 0])));
  }

  const propriedadesComuns = {
    aoNavegar: (pagina) => navigate(`/${pagina}`),
    quantidadeCarrinho,
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login aoEntrar={navigate} />} />
      <Route
        path="/home"
        element={
          <Home
            {...propriedadesComuns}
            lanches={lanches}
            quantidades={quantidades}
            alterarQuantidade={alterarQuantidade}
            adicionarAoCarrinho={adicionarAoCarrinho}
            limparCarrinho={limparCarrinho}
          />
        }
      />
      <Route
        path="/carrinho"
        element={
          <Carrinho
            {...propriedadesComuns}
            lanches={lanches}
            quantidades={quantidades}
            alterarQuantidade={alterarQuantidade}
            limparCarrinho={limparCarrinho}
          />
        }
      />
      <Route
        path="/pedido"
        element={<Pedido {...propriedadesComuns} lanches={lanches} quantidades={quantidades} limparCarrinho={limparCarrinho} />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
