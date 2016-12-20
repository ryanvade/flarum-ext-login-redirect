import { extend } from 'flarum/extend';
import app from 'flarum/app';

import RedirectSettingsModal from 'flarum/flarum-login-redirect/components/RedirectSettingsModal';

app.initializers.add('ryanvade-flarum-login-redirect', () => {
  console.log('Inside login redirect admin main');
  app.extensionSettings['ryanvade-flarum-login-redirect'] = () => app.modal.show(new RedirectSettingsModal());
});
