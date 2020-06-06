import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

// Style
import {
  Container,
  ButtonBack,
  Container_CountryInfo,
  CountryFlag,
  CountryInfo,
} from './style';

// Services
import api from '../../services/axios';

function Details({ history }) {
  const [country, setCountry] = useState({});
  const [selectedCountry] = useState(sessionStorage.getItem('country'));

  function handlerBackPage() {
    history.goBack();
  }

  function handlerParse(data) {
    if (!data) return;

    let description = '';
    for (let i = 0; i < data.length; i++) {
      description += data[i].name;

      if (i + 1 != data.length) {
        description += ', ';
      }
    }

    return description;
  }

  useEffect(() => {
    async function handlerGetCountry() {
      try {
        const responseAPI = await api.get(
          `name/${selectedCountry}/?fields=name;nativeName;flag;capital;region;population;subregion;regionalBlocs;topLevelDomain;currencies;languages;`
        );

        if (responseAPI.status !== 200 || !responseAPI.data.length) return;

        const [data_country] = responseAPI.data;
        setCountry(data_country);
      } catch (error) {
        console.log(error.message);
      }
    }

    handlerGetCountry();
  }, []);

  return (
    <Container>
      <ButtonBack onClick={() => handlerBackPage()}>
        <BsArrowLeft size={30} />
        Back
      </ButtonBack>
      <Container_CountryInfo>
        <CountryFlag urlImage={country.flag} />
        <CountryInfo>
          <div className="principal">
            <h1>{country.name}</h1>
            <p>
              Native Name: <span>{country.nativeName} </span>
            </p>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span>{country.capital} </span>
            </p>
            <dv className="CountryBorders">
              <p>
                Border Countries:{' '}
                <span>{handlerParse(country.regionalBlocs)} </span>
              </p>
            </dv>
          </div>
          <div>
            <p>
              Top Level Domain: <span>{country.topLevelDomain} </span>
            </p>
            <p>
              Currencies: <span>{handlerParse(country.currencies)} </span>
            </p>
            <p>
              Languages: <span>{handlerParse(country.languages)}</span>
            </p>
          </div>
        </CountryInfo>
      </Container_CountryInfo>
    </Container>
  );
}

export default Details;
