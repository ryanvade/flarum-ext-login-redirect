import { extend } from 'flarum/extend';
import SignUpModal from 'flarum/components/SignUpModal';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SessionDropdown from 'flarum/components/SessionDropdown';

app.initializers.add('ryanvade-flarum-login-redirect', function() {
  console.log("Hello");
  extend(HeaderSecondary.prototype, 'items', function(items) {
    items.remove('logIn');
    items.remove('signUp');
    if(!items.has('session'))
    {
      console.log('Does not have session');
      items.add('SignUp', <a href="http://localhost:8888/auth/register" className="Button Button--link">Sign Up</a>);
      items.add('LogIn', <a href="http://localhost:8888/auth/login" className="Button Button--link">Log In</a>);
    }
  });

  extend(SessionDropdown.prototype, 'items', function(items){
    items.remove('logOut');
    items.add('LogOut', <a href="http://localhost:8888/auth/logout" className="icon fa fa-fw fa-sign-out Button-icon">Log Out</a>)
  });
});
