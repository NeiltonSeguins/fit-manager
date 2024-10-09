import logo from "../../assets/logo.png";

const BarraLateral = () => {
  return (
    <aside className="sidebar">
      <img className="logo" src={logo} alt="Logotipo da poupeapp" />
      <footer>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </footer>
    </aside>
  );
};
export default BarraLateral;
