safari.application.addEventListener('beforeNavigate', function(e) {
  if (!e.target || !e.url) { return; }

  console.log('beforeNavigate e.target.url:', e.target.url);
  console.log('beforeNavigate e.url:', e.url);

  if (e.url.match(/^http\:/)) {
      var upgradedURL = e.url.replace(/^http\:/, 'https:');

      console.log('upgrading e.target.url to:', upgradedURL);

      e.preventDefault();
      e.target.url = upgradedURL;
  }

}, true);
