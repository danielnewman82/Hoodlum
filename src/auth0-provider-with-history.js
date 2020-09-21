import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const onRedirectCallback = (appState) => {
    useHistory.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="dev-voamfjoa.us.auth0.com"
      clientId="K0VmrctjLtGOExfSh2rtSX17hjtBB7qJ"
      redirectUri={"http://localhost:3000/street"}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;