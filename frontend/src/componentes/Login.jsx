import { useState } from "react";
import "./Login.css";

function Login({ aoEntrar }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function enviarFormulario(evento) {
    evento.preventDefault();

    try {
      const enderecoApi = import.meta.env.VITE_API_URL ?? "http://localhost:3001";
      const resposta = await fetch(`${enderecoApi}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });
      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.mensagem ?? "Usuário ou senha incorretos.");
        return;
      }

      localStorage.setItem("usuario", dados.usuario);
      setErro("");
      aoEntrar(dados.rota);
    } catch {
      setErro("Não foi possível conectar ao servidor.");
    }
  }

  return (
    <div className="login">
      <h2>Lanchonete Dogão e Burgão</h2>
      <form className="container" onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(evento) => setUsuario(evento.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
        />
        <button type="submit">Entrar</button>
        {erro && <p role="alert">{erro}</p>}
      </form>
    </div>
  );
}
  
export default Login;
