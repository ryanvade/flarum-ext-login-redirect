System.register('ryanvade/flarum-login-redirect/main', ['flarum/extend', 'flarum/components/SignUpModal', 'flarum/components/HeaderSecondary', 'flarum/components/SessionDropdown', 'flarum/components/ChangePasswordModal', 'flarum/components/LogInModal', 'flarum/components/LoginButtons'], function (_export) {
  'use strict';

  var extend, SignUpModal, HeaderSecondary, SessionDropdown, ChangePasswordModal, LogInModal, LogInButtons;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsSignUpModal) {
      SignUpModal = _flarumComponentsSignUpModal['default'];
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary['default'];
    }, function (_flarumComponentsSessionDropdown) {
      SessionDropdown = _flarumComponentsSessionDropdown['default'];
    }, function (_flarumComponentsChangePasswordModal) {
      ChangePasswordModal = _flarumComponentsChangePasswordModal['default'];
    }, function (_flarumComponentsLogInModal) {
      LogInModal = _flarumComponentsLogInModal['default'];
    }, function (_flarumComponentsLoginButtons) {
      LogInButtons = _flarumComponentsLoginButtons['default'];
    }],
    execute: function () {

      app.initializers.add('ryanvade-flarum-login-redirect', function () {
        // Global login/signup buttons are removed via flarum-ext-cosmoquest-nav

        extend(SessionDropdown.prototype, 'items', function (items) {
          items.remove('logOut');
          items.add('LogOut', m(
            'a',
            { href: 'https://cosmoquest.org/auth/logout', className: 'icon fa fa-fw fa-sign-out Button-icon' },
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
                { className: 'btn btn-primary', href: 'https://cosmoquest.org/auth/login' },
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
                { className: 'btn', href: 'https://cosmoquest.org/password/reset' },
                'Forgot Password?'
              )
            ),
            m(
              'p',
              { className: 'LogInModal-signUp' },
              m(
                'a',
                { className: 'btn', href: 'https://cosmoquest.org/auth/register' },
                'Register with Cosmoquest'
              )
            )
          )];
        };

        ChangePasswordModal.prototype.content = function () {
          return m(
            'div',
            { className: 'Modal-body' },
            m(
              'div',
              { className: 'Form Form--centered' },
              m(
                'p',
                { className: 'helpText' },
                'Change your passsword.'
              ),
              m(
                'div',
                { className: 'Form-group' },
                m(
                  'a',
                  { href: 'https://cosmoquest.org/password/reset', 'class': 'Button Button--primary Button--block' },
                  'Click here to change your password.'
                )
              )
            )
          );
        };
      });
    }
  };
});