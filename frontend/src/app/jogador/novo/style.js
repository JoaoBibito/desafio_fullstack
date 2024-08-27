import {styled} from "styled-components";
export const Main = styled.main`
  background-color: white;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
`;
export const Form = styled.form`
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
  background-color: white;
`;
export const Select = styled.select`
  width: 100%;
  background-color: white;
  padding: 0.5em;
`;
export const Input = styled.input`
  padding: 0.5em;
`;
export const Button = styled.button`
  padding: 5px;
  width: 80px;
  margin-left: auto;
  color: white;
`;
