import Select from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const Form = styled.form`
  background-color: ${(props) => props.theme.black};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 30px;
  width: 100%;
  max-width: 362px;
`;

export const InputGrup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 12px 10px;
  border-radius: 5px;
  border: none;
`;
export const LabelInput = styled.label`
  font-family: Poppins;
  color: ${(props) => props.theme.white};
`;

export const LabelUpload = styled.label`
  display: flex;
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.white};
  padding: 12px;
  border-radius: 5px;
  color: ${(props) => props.theme.white};

  > svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.white};
  }

  input {
    display: none;
  }
`;
export const SelectCategory = styled(Select)``;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.darkRed};
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;
export const ContainerCheckbox = styled.div`
  display: flex;
  gap: 10px;

  input {
    cursor: pointer;
    width: 18px;
  }
`;
