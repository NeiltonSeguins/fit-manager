import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--cor-neutra-dark-medium);
  border-radius: var(--border-radius-m);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: var(--cor-neutra-medium);
  border-radius: var(--border-radius-m) 0 0 var(--border-radius-m);
  padding: var(--padding-l);
  max-width: 400px;
  color: var(--cor-neutra-light);
`;

export const Title = styled.h1`
  font-size: var(--fonte-xxl);
  color: var(--cor-neutra-light);
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: var(--fonte-md);
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  border: none;
  text-align: start;
  padding: 0;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: var(--fonte-md);
  margin-bottom: 8px;
`;

export const InputText = styled.input`
  width: 95%;
  padding: var(--padding-xs);
  font-size: var(--fonte-md);
  background-color: var(--cor-neutra-dark-medium);
  border: none;
  border-radius: var(--border-radius-s);
  color: var(--cor-neutra-light);

  &:focus {
    outline: none;
    border-color: var(--cor-neutra-light);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type="radio"] {
    margin-right: 10px;
    margin-bottom: 8px;
  }

  label {
    font-size: 1rem;
  }
`;

export const SelectGroup = styled.select`
  width: 100%;
  padding: var(--padding-xs);
  font-size: var(--fonte-md);
  color: var(--cor-neutra-light);
  background-color: var(--cor-neutra-dark-medium);
  border: none;
  border-radius: 5px;
  appearance: none;
  outline: none;
`;

export const SelectOption = styled.option`
  color: var(--cor-neutra-dark);
  background-color: var(--cor-neutra-light);
  padding: var(--padding-xs);
`;

export const Illustration = styled.img`
  max-width: 500px;
  margin-left: 50px;
`;
