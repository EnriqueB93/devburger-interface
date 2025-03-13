import styled from 'styled-components';

export const Container = styled.div``;

export const ImageProduct = styled.img`
  height: 100px;
  border-radius: 10px;
  padding: 12px;
`;

export const EditButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.darkWhite};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};

    > svg {
      fill: ${(props) => props.theme.white};
    }
  }
`;
