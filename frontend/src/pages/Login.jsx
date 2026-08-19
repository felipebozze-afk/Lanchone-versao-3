import LoginFormulario from "../componentes/Login";

function Login({ aoEntrar }) {
  return (
    <main className="pagina-login">
      <LoginFormulario aoEntrar={aoEntrar} />
    </main>
  );
}

export default Login;
