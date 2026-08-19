function Funcionario({ nome, cargo }) {
  return (
    <section className="employee-section">
      <p className="employee-name">Nome: {nome}</p>
      <p className="employee-role">Cargo: {cargo}</p>
    </section>
  );
}

export default Funcionario;
