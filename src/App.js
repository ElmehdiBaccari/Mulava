import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MulavaListPage from './pages/mulava-list-page';
import MulavaFormPage from './pages/mulava-form-page';

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Mulava List
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/mulava/new"
        >
          Add Mulava
        </NavLink>
      </div>
      <Route exact path="/" component={MulavaListPage} />
      <Route path="/mulava/new" component={MulavaFormPage} />
      <Route path="/mulava/edit/:_id" component={MulavaFormPage} />
    </Container>
  );
};

export default App;
