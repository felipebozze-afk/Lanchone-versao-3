import "./Login.css";

function Login({ aoEntrar }) {
  return (
    <div className="login">
      <h2>Lanchonete Dogão e Burgão</h2>
      <form className="container" onSubmit={(evento) => { evento.preventDefault(); aoEntrar(); }}>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
  
export default Login;
