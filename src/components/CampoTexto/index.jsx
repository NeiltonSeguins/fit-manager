import React from "react";
import { Input } from "./style";

const CampoTexto = ({ nome, tipo, placeholder }) => {
  return <Input name={nome} type={tipo} placeholder={placeholder} />;
};

export default CampoTexto;
