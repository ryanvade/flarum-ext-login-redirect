'use strict';

System.register('flarum/flags/components/RedirectSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, RedirectSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      RedirectSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(RedirectSettingsModal, _SettingsModal);

        function RedirectSettingsModal() {
          babelHelpers.classCallCheck(this, RedirectSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (RedirectSettingsModal.__proto__ || Object.getPrototypeOf(RedirectSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(RedirectSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'RedirectSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return 'Login Redirect Settings';
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Login Settigns'
              ),
              m(
                'div',
                { className: 'helpText' },
                'The URL and description to be used for login buttons.'
              ),
              m(
                'div',
                { className: 'TagSettingsModal-rangeInput' },
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.loginURL', '/api/login') }),
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.loginText', 'Login') })
              )
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Logout Settigns'
              ),
              m(
                'div',
                { className: 'helpText' },
                'The URL and description to be used for logout buttons.'
              ),
              m(
                'div',
                { className: 'TagSettingsModal-rangeInput' },
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.logoutURL', '/api/logout') }),
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.logoutText', 'Logout') })
              )
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Register Settigns'
              ),
              m(
                'div',
                { className: 'helpText' },
                'The URL and description to be used for register buttons.'
              ),
              m(
                'div',
                { className: 'TagSettingsModal-rangeInput' },
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.registerURL', '/api/register') }),
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.registerText', 'Register') })
              )
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Password Reset Settigns'
              ),
              m(
                'div',
                { className: 'helpText' },
                'The URL and description to be used for password reset buttons.'
              ),
              m(
                'div',
                { className: 'TagSettingsModal-rangeInput' },
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.passwordResetURL', '/api/password/reset') }),
                m('input', { className: 'FormControl', bidi: this.setting('flarum-login-redirect.passwordResetText', 'Reset your password.') })
              )
            )];
          }
        }]);
        return RedirectSettingsModal;
      }(SettingsModal);

      _export('default', RedirectSettingsModal);
    }
  };
});;
'use strict';

System.register('flarum/flags/main', ['flarum/extend', 'flarum/app', 'flarum/flarum-login-redirect/components/RedirectSettingsModal'], function (_export, _context) {
  "use strict";

  var extend, app, RedirectSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumFlarumLoginRedirectComponentsRedirectSettingsModal) {
      RedirectSettingsModal = _flarumFlarumLoginRedirectComponentsRedirectSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('ryanvade-flarum-login-redirect', function () {
        console.log('Inside login redirect admin main');
        app.extensionSettings['ryanvade-flarum-login-redirect'] = function () {
          return app.modal.show(new RedirectSettingsModal());
        };
      });
    }
  };
});