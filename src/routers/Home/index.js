import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import Home from '../../pages/Home';

export default () => <Route path="/" exact={true} component={Home} />;
