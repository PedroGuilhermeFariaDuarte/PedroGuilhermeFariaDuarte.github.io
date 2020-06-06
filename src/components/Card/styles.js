import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 30px;
  overflow: hidden;
  cursor: pointer;

  & {
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      width: 80%;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 50%;
  background: red;
  background-image: url(${(props) => props.urlImage});
  background-size: contain;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 14px 20px 20px 15px;

  display: flex;
  flex-flow: column;
  align-items: flex-start;

  h1,
  p {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
    font-size: 1.5rem;

    span {
      font-weight: normal;
    }
  }
`;
