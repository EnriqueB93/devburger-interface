import styled from 'styled-components';

import Background from '../../assets/bg.svg';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
`;

export const Banner = styled.div`
  width: 100vw;
  height: 190px;

  background-color: #1f1f11f1;
  background-image: url('${Texture}');
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
  }
`;

export const Title = styled.h2`
  font-family: Poppins;
  line-height: 48px;
  text-align: center;
  font-weight: 800;
  font-size: 32px;
  color: #61a120;
  position: relative;
  padding: 20px 0;
  margin-bottom: 40px;

  &::after {
    content: '';
    height: 4px;
    width: 56px;
    background-color: #9758a6;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 28px);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  padding: 40px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
