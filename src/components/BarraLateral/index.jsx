import logo from "../../assets/logo.png";
import { Imagem, Rodape, Sidebar } from "./style";

const BarraLateral = () => {
  return (
    <Sidebar>
      <Imagem src={logo} alt="Logotipo da poupeapp" />
      <Rodape>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </Rodape>
    </Sidebar>
  );
};
export default BarraLateral;
