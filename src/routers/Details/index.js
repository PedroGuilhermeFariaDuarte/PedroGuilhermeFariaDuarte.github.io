import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import Details from '../../pages/Details';

export default () => <Route path="/details" exact={true} component={Details} />;
