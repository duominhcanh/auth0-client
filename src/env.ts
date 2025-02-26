export const env = {
  auth0: {
    domain: import.meta.env.VITE_AUTH0_DOMAIN || "",
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || "",
    callbackRoute: import.meta.env.VITE_AUTH0_CALLBACK_ROUTE || "",
    audience: import.meta.env.VITE_AUTH0_AUDIENCE || "",
    scope: import.meta.env.VITE_AUTH0_SCOPE || "",
  },
};
