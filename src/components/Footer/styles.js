import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 50px;
background: ${(props) => props.theme.darkPurple};
display: flex;
justify-content: center;
align-items: center;

p{
  color: ${(props) => props.theme.white};
  font-family: Poppins;
  font-weight: lighter;
  font-size: 14px;

}
`;
