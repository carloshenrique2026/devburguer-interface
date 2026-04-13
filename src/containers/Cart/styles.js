import styled from 'styled-components';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza tudo horizontalmente */
  justify-content: center;
`;

export const Banner = styled.div`
    background: url('${Texture}');
    width: 100%;          /* ocupa toda largura */
    margin-bottom: 20px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center; /* centraliza horizontal */
  align-items: center;     /* centraliza vertical */

`;

export const Title = styled.div`
  color: green; /* cor do título */
  text-align: center;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column; /* ou row se quiser lado a lado */
  align-items: center;   /* centraliza horizontal */
  justify-content: center;
  width: 100%;
  max-width: 800px; /* limita largura */
`;