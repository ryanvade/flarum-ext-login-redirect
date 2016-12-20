import SettingsModal from 'flarum/components/SettingsModal';

export default class RedirectSettingsModal extends SettingsModal {
  className() {
    return 'RedirectSettingsModal Modal--small';
  }

  title() {
    return 'Login Redirect Settings';
  }

  form() {
    return [
      <div className="Form-group">
        <label>Login Settigns</label>
        <div className="helpText">
          The URL and description to be used for login buttons.
        </div>
        <div className="TagSettingsModal-rangeInput">
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.loginURL', '/api/login')}/>
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.loginText', 'Login')}/>
        </div>
      </div>,
      <div className="Form-group">
        <label>Logout Settigns</label>
        <div className="helpText">
          The URL and description to be used for logout buttons.
        </div>
        <div className="TagSettingsModal-rangeInput">
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.logoutURL', '/api/logout')}/>
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.logoutText', 'Logout')}/>
        </div>
      </div>,
      <div className="Form-group">
        <label>Register Settigns</label>
        <div className="helpText">
          The URL and description to be used for register buttons.
        </div>
        <div className="TagSettingsModal-rangeInput">
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.registerURL', '/api/register')}/>
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.registerText', 'Register')}/>
        </div>
      </div>,
      <div className="Form-group">
        <label>Password Reset Settigns</label>
        <div className="helpText">
          The URL and description to be used for password reset buttons.
        </div>
        <div className="TagSettingsModal-rangeInput">
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.passwordResetURL', '/api/password/reset')}/>
          <input className="FormControl" bidi={this.setting('flarum-login-redirect.passwordResetText', 'Reset your password.')}/>
        </div>
      </div>
    ];
  }
}
