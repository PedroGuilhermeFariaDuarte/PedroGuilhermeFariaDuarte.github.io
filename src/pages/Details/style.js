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
      padding: 50px;
      overflow-x: hidden;
    }
  }
`;

export const ButtonBack = styled.button.attrs({
  type: 'button',
})`
  width: 160px;
  height: 65px;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  align-self: flex-start;
  margin-bottom: 30px;
  font-size: 1.5rem;

  display: flex;
  flex-flow: row;
  align-items: center;

  svg {
    margin-right: 3px;
  }

  cursor: pointer;
`;

export const Container_CountryInfo = styled.div`
  width: 100%;
  height: 550px;

  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      heigth: auto;
      flex-flow: column;
      justify-content: center;
    }
  }
`;

export const CountryFlag = styled.div`
  width: 50%;
  height: 78%;
  background: #dddd;
  background-image: url(${(props) => props.urlImage});
  background-size: contain;
  background-repeat: no=repeat;

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      width: 100%;
      border: 1px solid blue;
    }
  }
`;

export const CountryInfo = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-flow: row;
  justify-content: space-between;
  position: relative;

  div {
    width: 50%;
    height: 80%;
    padding: 125px 30px 100px 70px;
    p {
      font-size: 2rem;
      margin-bottom: 10px;

      span {
        font-weight: normal;
      }
    }
  }

  div.principal {
    width: 50%;
    h1,
    p {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 5px;
      font-size: 1.5rem;
    }
  }

  .CountryBorders {
    width: 100%;
    height: 50px;
    position: absolute;
    margin-top: 50px;

    display: flex;
    flex-flow: row;
    jusitfy-content: space-around;
    aling-items: center;
  }

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      width: 100%;
      flex-flow: column;
      justify-content: flex-start;

      div {
        height: auto;
      }
    }
  }
`;
