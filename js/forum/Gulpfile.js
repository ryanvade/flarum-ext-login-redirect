var flarum = require('flarum-gulp');

flarum({
  modules: {
    'ryanvade/flarum-login-redirect': [
      'src/**/*.js'
    ]
  }
});
