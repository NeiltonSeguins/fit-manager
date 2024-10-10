import { SearchIcon, CampoTexto } from "..";
import { Label } from "./style";

const BarraPesquisa = () => {
  return (
    <Label htmlFor="search">
      <SearchIcon />
      <CampoTexto
        nome="search"
        tipo="text"
        placeholder="Procure seu dinheiro"
      />
    </Label>
  );
};

export default BarraPesquisa;
