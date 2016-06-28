import SignUpModal from 'flarum/components/SignUpModal'

app.initializers.add('ryanvade-flarum-login-redirect', function() {
  extend(SignUpModal.prototype, 'view', function(vdom) {
    console.log(vdom);
  });
});
