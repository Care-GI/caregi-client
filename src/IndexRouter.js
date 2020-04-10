import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Register from "./screens/Register";
import FormRegisterProvider from "./context/FormRegisterContext";

const IndexRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/catalogo" render={() => <Product />} />
          <Route
            exact
            path="/register"
            render={() => (
              <FormRegisterProvider>
                <Register />
              </FormRegisterProvider>
            )}
          />
        </Switch>
      </Router>
    </>
  );
};

export default IndexRouter;
