import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 160px 0px 160px;

  display: flex;
  flex-flow: column;
  align-items: center;

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      padding: 30px;
    }
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  height: 250px;

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      height: 300px;

      form {
        flex-flow: column;
      }
    }
  }
`;

export const ContainerField = styled.div`
  width: 500px;
  height: 30%;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #85858550;
  padding: 5px;
  padding-left: 15px;

  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  input,
  select {
    width: 100%;
    background: none;

    &::placeholder {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  input {
    width: 100%;
    padding-left: 10px;

    font-size: 2rem;
  }

  select {
    font-size: 1.5rem;
    font-weight: 600;
  }

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      width: 100%;
      margin-bottom: 50px;
    }
  }
`;

export const ContainerCountry = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      flex-flow: column;
    }
  }
`;
