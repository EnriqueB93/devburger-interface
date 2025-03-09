import Select from 'react-select';
import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  padding: 10px;
  border-radius: 10px;
`;

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 28px 0;
`;

export const FilterOptions = styled.button`
  font-family: Poppins;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.purple : props.theme.darkGrey};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none'};
`;
