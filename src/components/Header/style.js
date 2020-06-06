import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 150px;
  padding: 20px 160px 20px 160px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      padding: 20px;
      justify-content: center;

      h1 {
        font-size: 2rem;
        margin-right: 50px;
      }
    }
  }
`;

export const ContainerDarkMod = styled.div`
  width: 160px;
  height: auto;
  cursor: pointer;

  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    user-select: none;
  }

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      p {
        font-weight: 800;
      }
    }
  }
`;
