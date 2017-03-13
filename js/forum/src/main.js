import { extend } from 'flarum/extend';
import SignUpModal from 'flarum/components/SignUpModal';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SessionDropdown from 'flarum/components/SessionDropdown';
import SettingsPage from 'flarum/components/SettingsPage';
import LogInModal from 'flarum/components/LogInModal';
import LogInButtons from 'flarum/components/LoginButtons';
import LinkButton from 'flarum/components/LinkButton';
import FieldSet from 'flarum/components/FieldSet';
import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';


app.initializers.add('ryanvade-flarum-login-redirect', function() {
  // Global login/signup buttons are removed via flarum-ext-cosmoquest-nav

  extend(SessionDropdown.prototype, 'items', function(items){
    items.remove('logOut');
    items.add('LogOut', <a href="/auth/logout" className="icon fa fa-fw fa-sign-out Button-icon">Log Out</a>)
  });

  LogInModal.prototype.content = function () {
    return [
      <div className="Modal-body">
        <div className="Form Form--centered">
          <a className="btn btn-primary" href="/auth/login">Login with Cosmoquest</a>
        </div>
       </div>,
      <div className="Modal-footer">
        <p className="LogInModal-forgotPassword">
        <a className="btn" href="/password/reset">Forgot Password?</a>
        </p>
        <p className="LogInModal-signUp">
          <a className="btn" href="/auth/register">Register with Cosmoquest</a>
        </p>
      </div>
    ];
  }

  extend(SettingsPage.prototype, 'settingsItems', function(settingsItems) {
    const user = app.session.user;
    const items = new ItemList();
    items.add('changePassword', <a className="Button" href="/user/settings">Change Password</a>);

    items.add('changeEmail',<a className="Button" href="/user/settings">Change Email</a>);

    settingsItems.replace('account', FieldSet.component({
      label: app.translator.trans('core.forum.settings.account_heading'),
      className: 'Settings-account',
      children: items.toArray()
    }));
  });
});
