import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Admin from "layouts/Admin.js";
import Landing from "views/Landing.js";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthWrapper from "components/AuthWrapper/AuthWrapper";

ReactDOM.render(
  <Auth0Provider
    domain="dev-rm3u1yq4.auth0.com"
    clientId="OgdvG5snvJGpeIrW9FKXbB5D9UmSQufP"
    redirectUri={window.location.origin}
  >
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" exact component={Landing} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  </Auth0Provider>,
  document.getElementById("root")
);
