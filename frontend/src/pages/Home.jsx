import Header from "../componentes/Header";
import Calculadora from "../componentes/Calculadora";
import Funcionario from "../Funcionario";


const funcionarios = [
  { id: 101, nome: "Gordão", cargo: "Atendente" },
  { id: 102, nome: "Thalita", cargo: "Cozinheira" },
  { id: 103, nome: "Bianca", cargo: "Caixa" },
];

function Home({ lanches, quantidades, alterarQuantidade, adicionarAoCarrinho, quantidadeCarrinho, limparCarrinho, aoNavegar }) {
  return (
    <div className="app">
      <Header titulo="Lanchonete Dogão e Burgão" subtitulo="O melhor do planeta" quantidadeCarrinho={quantidadeCarrinho} limparCarrinho={limparCarrinho} aoNavegar={aoNavegar} />
      <Calculadora lanches={lanches} quantidades={quantidades} alterarQuantidade={alterarQuantidade} adicionarAoCarrinho={adicionarAoCarrinho} />
      {funcionarios.map((funcionario) => (
        <Funcionario key={funcionario.id} nome={funcionario.nome} cargo={funcionario.cargo} />
      ))}
    </div>
  );
}

export default Home;
