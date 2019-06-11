import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'paytown.auth0.com',
  clientID: 'IO2LsCwzTteaU0Fjx1E3rogmqRJh332V',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Can\'t get that profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could not login');
      }
    });
  }); 
};
