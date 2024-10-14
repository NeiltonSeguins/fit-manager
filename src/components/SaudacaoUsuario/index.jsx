import { useSelector } from "react-redux";
import { Usuario } from "./style";

const SaudacaoUsuario = () => {
  const nomeUsuario = useSelector((state) => state.usuario.nome);
  return (
    <Usuario>
      <h1>Olá, {nomeUsuario}</h1>
      <p>Veja como estão suas finanças hoje.</p>
    </Usuario>
  );
};

export default SaudacaoUsuario;
