import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'paytown.auth0.com',
  clientID: 'IO2LsCwzTteaU0Fjx1E3rogmqRJh332V',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid'
});

export const login = () => {
  auth0.authorize();
};
