import { extend } from 'flarum/extend';
import SignUpModal from 'flarum/components/SignUpModal';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SessionDropdown from 'flarum/components/SessionDropdown';
import ChangePasswordModal from 'flarum/components/ChangePasswordModal'
import LogInModal from 'flarum/components/LogInModal';
import LogInButtons from 'flarum/components/LoginButtons';

app.initializers.add('ryanvade-flarum-login-redirect', function() {
  console.log("Hello");
  extend(HeaderSecondary.prototype, 'items', function(items) {
    items.remove('logIn');
    items.remove('signUp');
    if(!items.has('session'))
    {
      console.log('Does not have session');
      items.add('SignUp', <a href="http://localhost/auth/register" className="Button Button--link">Sign Up</a>);
      items.add('LogIn', <a href="http://localhost/auth/login" className="Button Button--link">Log In</a>);
    }else
    {
      console.log('Has Session');
    }
  });

  extend(SessionDropdown.prototype, 'items', function(items){
    items.remove('logOut');
    items.add('LogOut', <a href="http://localhost/auth/logout" className="icon fa fa-fw fa-sign-out Button-icon">Log Out</a>)
  });

  LogInModal.prototype.content = function () {
    return [
      <div className="Modal-body">
        <div className="Form Form--centered">
          <a className="btn btn-primary" href="http://localhost/auth/login">Login with Cosmoquest</a>
        </div>
       </div>,
      <div className="Modal-footer">
        <p className="LogInModal-forgotPassword">
        <a className="btn" href="http://localhost/password/reset">Forgot Password?</a>
        </p>
        <p className="LogInModal-signUp">
          <a className="btn" href="http://localhost/auth/register">Register with Cosmoquest</a>
        </p>
      </div>
    ];
  }

  ChangePasswordModal.prototype.content = function() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <p className="helpText">Change your passsword.</p>
          <div className="Form-group">
            <a href="/password/reset" class='Button Button--primary Button--block'>Click here to change your password.</a>
          </div>
        </div>
      </div>
    );
  }
});
