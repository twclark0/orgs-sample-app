import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const AuthWrapper = ({ children }) => {
  const curOrganization = localStorage.getItem("organization_id");
  const options = {
    domain: "dev-rm3u1yq4.auth0.com",
    clientId: "OgdvG5snvJGpeIrW9FKXbB5D9UmSQufP",
    redirectUri: window.location.origin,
    ...(curOrganization ? { organization: curOrganization } : null)
  };
  return <Auth0Provider {...options}>{children}</Auth0Provider>;
};
