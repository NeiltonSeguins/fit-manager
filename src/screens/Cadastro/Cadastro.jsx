import React, { useState } from "react";
import {
  Section,
  Container,
  Title,
  Description,
  Form,
  Fieldset,
  Label,
  InputText,
  RadioGroup,
  RadioInput,
  Illustration,
  SectionWrapper,
} from "./style";
import Botao from "../../components/Botao";
import ilustracao from "../../assets/ilustracao-cadastro.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setNomeUsuario,
  defineObjetivoFinanceiro,
  atualizarRendaMensal,
} from "../../redux/slices/usuarioSlice";

const Cadastro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [renda, setRenda] = useState("");
  const [objetivoFinanceiro, setObjetivoFinanceiro] = useState("");

  const aoSubmeterFormulario = (evento) => {
    evento.preventDefault();

    dispatch(setNomeUsuario(nome));
    dispatch(atualizarRendaMensal(parseInt(renda)));
    dispatch(defineObjetivoFinanceiro(objetivoFinanceiro));

    navigate("/home");
  };

  return (
    <Section>
      <SectionWrapper>
        <Container>
          <Title>Configuração financeira</Title>
          <Description>
            Boas-vindas à plataforma que protege seu bolso! Antes de começar,
            precisamos de algumas informações sobre sua rotina financeira. Vamos
            lá?
          </Description>
          <Form>
            <Fieldset>
              <Label htmlFor="nome">Nome</Label>
              <InputText
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="renda">Renda mensal total</Label>
              <InputText
                type="text"
                name="renda"
                value={renda}
                onChange={(e) => setRenda(e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <Label>Selecione seu objetivo financeiro:</Label>
              <RadioGroup>
                <RadioInput>
                  <input
                    type="radio"
                    name="objetivo"
                    id="economizar"
                    value="economizar"
                    checked={objetivoFinanceiro === "economizar"}
                    onChange={(e) => setObjetivoFinanceiro(e.target.value)}
                  />
                  <Label htmlFor="economizar">Economizar</Label>
                </RadioInput>
                <RadioInput>
                  <input
                    type="radio"
                    name="objetivo"
                    id="investir"
                    value="investir"
                    checked={objetivoFinanceiro === "investir"}
                    onChange={(e) => setObjetivoFinanceiro(e.target.value)}
                  />
                  <Label htmlFor="investir">Investir</Label>
                </RadioInput>
                <RadioInput>
                  <input
                    type="radio"
                    name="objetivo"
                    id="controle-gastos"
                    value="controlar-gastos"
                    checked={objetivoFinanceiro === "controlar-gastos"}
                    onChange={(e) => setObjetivoFinanceiro(e.target.value)}
                  />
                  <Label htmlFor="controle-gastos">Controlar gastos</Label>
                </RadioInput>
              </RadioGroup>
            </Fieldset>
          </Form>
          <Botao variante="primario" aoClicar={aoSubmeterFormulario}>
            Ir para o app
          </Botao>
        </Container>
        <Illustration
          src={ilustracao}
          alt="ilustração da tela de cadastro. Um avatar mexendo em alguns gráficos"
        />
      </SectionWrapper>
    </Section>
  );
};

export default Cadastro;
