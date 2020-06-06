import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Input } from '@rocketseat/unform';

// Components
import Card from '../../components/Card';

// Style
import {
  Container,
  ContainerSearch,
  ContainerField,
  ContainerCountry,
} from './style';

// Services
import api from '../../services/axios';

function Home({ history }) {
  const [country, setCountry] = useState([]);
  let time = null;

  function handlerMoreInfo(nameCountry) {
    try {
      sessionStorage.setItem('country', nameCountry);
      history.push('/details');
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handlerGetCountry(countryFilter = 'all') {
    try {
      if (countryFilter.trim() === '') {
        countryFilter = 'all';
      }

      const responseAPI = await api.get(
        `${countryFilter}/?fields=name;flag;capital;region;population;`
      );

      if (responseAPI.status !== 200 || !responseAPI.data.length) return;

      setCountry(responseAPI.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    handlerGetCountry();
  }, []);

  // Debounce Function
  function handlerNameCountry({ target }) {
    clearTimeout(time);
    time = setTimeout(async () => {
      if (target.value.trim() == '') {
        return await handlerGetCountry();
      }

      await handlerGetCountry(`name/${target.value}`);
    }, 1000);
  }
  return (
    <Container>
      <ContainerSearch>
        <Form>
          <ContainerField>
            <AiOutlineSearch size={30} />
            <Input
              name="country"
              placeholder="Search for a country..."
              onChange={handlerNameCountry}
              className="Input_DarkMode"
            />
          </ContainerField>
          <ContainerField style={{ width: '230px' }}>
            <select
              name="filter"
              onChange={({ target }) =>
                handlerGetCountry(`region/${target.value}`)
              }
            >
              <option value="" selected>
                Filter by Region
              </option>

              <option value="africa">Africa</option>

              <option value="america">America</option>

              <option value="asia">Asia</option>

              <option value="europe">Europe</option>

              <option value="oceania">Oceania</option>
            </select>
          </ContainerField>
        </Form>
      </ContainerSearch>

      <ContainerCountry>
        {!country.length ? (
          <h1>Not found an country :(</h1>
        ) : (
          country.map((count, index) => (
            <Card
              key={index}
              data={count}
              callback={() => handlerMoreInfo(count.name)}
            />
          ))
        )}
      </ContainerCountry>
    </Container>
  );
}

export default Home;
