System.register('ryanvade/flarum-login-redirect/main', ['flarum/extend', 'flarum/components/SignUpModal', 'flarum/components/HeaderSecondary', 'flarum/components/SessionDropdown', 'flarum/components/SettingsPage', 'flarum/components/LogInModal', 'flarum/components/LoginButtons', 'flarum/components/LinkButton', 'flarum/components/FieldSet', 'flarum/utils/ItemList', 'flarum/components/Button'], function (_export) {
  'use strict';

  var extend, SignUpModal, HeaderSecondary, SessionDropdown, SettingsPage, LogInModal, LogInButtons, LinkButton, FieldSet, ItemList, Button;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsSignUpModal) {
      SignUpModal = _flarumComponentsSignUpModal['default'];
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary['default'];
    }, function (_flarumComponentsSessionDropdown) {
      SessionDropdown = _flarumComponentsSessionDropdown['default'];
    }, function (_flarumComponentsSettingsPage) {
      SettingsPage = _flarumComponentsSettingsPage['default'];
    }, function (_flarumComponentsLogInModal) {
      LogInModal = _flarumComponentsLogInModal['default'];
    }, function (_flarumComponentsLoginButtons) {
      LogInButtons = _flarumComponentsLoginButtons['default'];
    }, function (_flarumComponentsLinkButton) {
      LinkButton = _flarumComponentsLinkButton['default'];
    }, function (_flarumComponentsFieldSet) {
      FieldSet = _flarumComponentsFieldSet['default'];
    }, function (_flarumUtilsItemList) {
      ItemList = _flarumUtilsItemList['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }],
    execute: function () {

      app.initializers.add('ryanvade-flarum-login-redirect', function () {
        // Global login/signup buttons are removed via flarum-ext-cosmoquest-nav

        extend(SessionDropdown.prototype, 'items', function (items) {
          items.remove('logOut');
          items.add('LogOut', m(
            'a',
            { href: '/auth/logout', className: 'icon fa fa-fw fa-sign-out Button-icon' },
            'Log Out'
          ));
        });

        LogInModal.prototype.content = function () {
          return [m(
            'div',
            { className: 'Modal-body' },
            m(
              'div',
              { className: 'Form Form--centered' },
              m(
                'a',
                { className: 'btn btn-primary', href: '/auth/login' },
                'Login with Cosmoquest'
              )
            )
          ), m(
            'div',
            { className: 'Modal-footer' },
            m(
              'p',
              { className: 'LogInModal-forgotPassword' },
              m(
                'a',
                { className: 'btn', href: '/password/reset' },
                'Forgot Password?'
              )
            ),
            m(
              'p',
              { className: 'LogInModal-signUp' },
              m(
                'a',
                { className: 'btn', href: '/auth/register' },
                'Register with Cosmoquest'
              )
            )
          )];
        };

        extend(SettingsPage.prototype, 'settingsItems', function (settingsItems) {
          var user = app.session.user;
          var items = new ItemList();
          items.add('changePassword', m(
            'a',
            { className: 'Button', href: '/user/settings' },
            'Change Password'
          ));

          items.add('changeEmail', m(
            'a',
            { className: 'Button', href: '/user/settings' },
            'Change Email'
          ));

          settingsItems.replace('account', FieldSet.component({
            label: app.translator.trans('core.forum.settings.account_heading'),
            className: 'Settings-account',
            children: items.toArray()
          }));
        });
      });
    }
  };
});