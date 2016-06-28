import { extend } from 'flarum/extend';
import SignUpModal from 'flarum/components/SignUpModal';
import HeaderSecondary from 'flarum/components/HeaderSecondary';

app.initializers.add('ryanvade-flarum-login-redirect', function() {
  console.log("Hello");
  extend(HeaderSecondary.prototype, 'items', function(items) {
    items.remove('logIn');
    items.remove('signUp');
    items.remove('logOut');
    items.add('SignUp', <a href="http://localhost:8888/auth/register" className="Button Button--link">Sign Up</a>);
    items.add('LogIn', <a href="http://localhost:8888/auth/login" className="Button Button--link">Log In</a>);
  });
});
