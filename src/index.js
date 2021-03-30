import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Admin from "layouts/Admin.js";
import Landing from "views/Landing.js";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? (
            <Redirect to="/admin" component={Admin} />
          ) : (
            <Route path="/" component={Landing} />
          )}
        </Route>
        <Route path="/admin" component={Admin} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Auth0Provider
    domain="dev-rm3u1yq4.auth0.com"
    clientId="OgdvG5snvJGpeIrW9FKXbB5D9UmSQufP"
    redirectUri={window.location.origin}
    organization={localStorage.getItem("organization_id")}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
