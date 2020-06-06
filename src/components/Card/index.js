import React from 'react';

// Style
import { Container, Header, Content } from './styles';

function Card({ width = null, height = null, ...rest }) {
  return (
    <Container onClick={() => rest.callback()}>
      <Header urlImage={rest.data.flag} />
      <Content>
        <h1>{rest.data.name}</h1>
        <p>
          Population: <span>{rest.data.population}</span>
        </p>
        <p>
          Region: <span>{rest.data.region}</span>
        </p>
        <p>
          Capital: <span>{rest.data.capital}</span>
        </p>
      </Content>
    </Container>
  );
}

export default Card;
