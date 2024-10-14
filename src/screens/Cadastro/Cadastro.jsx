import React from "react";
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

const Cadastro = () => {
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
              <InputText type="text" name="nome" />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="renda">Renda mensal total</Label>
              <InputText type="text" name="renda" />
            </Fieldset>
            <Fieldset>
              <Label>Selecione seu objetivo financeiro:</Label>
              <RadioGroup>
                <RadioInput>
                  <input type="radio" name="objetivo" id="economizar" />
                  <Label htmlFor="economizar">Economizar</Label>
                </RadioInput>
                <RadioInput>
                  <input type="radio" name="objetivo" id="investir" />
                  <Label htmlFor="investir">Investir</Label>
                </RadioInput>
                <RadioInput>
                  <input type="radio" name="objetivo" id="controle-gastos" />
                  <Label htmlFor="controle-gastos">Controlar gastos</Label>
                </RadioInput>
              </RadioGroup>
            </Fieldset>
          </Form>
          <Botao variante="primario">Ir para o app</Botao>
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
