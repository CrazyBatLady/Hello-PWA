
this.onload(run()); 
function run() {
  'use strict';

  if ('serviceWorker' in this.navigator) {
    this.navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { this.console.log('Service Worker Registered'); });
  }
}
if ('serviceWorker' in this.navigator) {
  this.navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
    this.console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    this.console.log('Service worker registration failed, error:', error);
  });
}