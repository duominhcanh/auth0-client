import { env } from "@/env";
import {
  Auth0Provider,
  Auth0ProviderOptions,
  useAuth0,
} from "@auth0/auth0-react";
import { useNavigate } from "react-router";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const auth0Options: Auth0ProviderOptions = {
    domain: env.auth0.domain,
    clientId: env.auth0.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin + "/callback",
      audience: env.auth0.audience,
      scope: env.auth0.scope,
    },
    cacheLocation: "localstorage",
    useRefreshTokens: true,
    onRedirectCallback: () => {
      navigate("/");
    },
  };

  return <Auth0Provider {...auth0Options}>{children}</Auth0Provider>;
}

export const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  const authenticated = !isLoading && user && isAuthenticated;

  if (!authenticated) {
    return null;
  }

  return children;
};
