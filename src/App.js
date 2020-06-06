import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Routes
import Home from './routers/Home';
import Details from './routers/Details';

// Global Styles
import GlobalStyle from './css/globals';

// Components
import Header from './components/Header';

function App() {
  let darkmode = false;

  function handlerSetDarkMode() {
    if (!darkmode) {
      document.querySelector('#darkMode').setAttribute('class', 'darkMode');
      darkmode = true;
    } else {
      document.querySelector('#darkMode').removeAttribute('class');
      darkmode = false;
    }

    sessionStorage.setItem('darkmode', darkmode);
  }

  return (
    <>
      <GlobalStyle />
      <Header
        className="normal"
        callback={() => handlerSetDarkMode(darkmode)}
      />
      <BrowserRouter>
        <div id="darkMode">
          <Home />
          <Details />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
