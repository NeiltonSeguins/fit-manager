const Transacao = ({ transacao }) => {
  return (
    <li className="transacao">
      <div
        className={`transacao-titulo ${
          transacao.tipo === "entrada" ? "receita" : "despesa"
        }`}
      >
        <h3>{transacao.nome}</h3>
        <span>R$ {transacao.valor}</span>
      </div>
      <div className="transacao-saldo">
        <p>{transacao.data}</p>
      </div>
    </li>
  );
};

export default Transacao;
