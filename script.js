(function () {
  var loader = document.getElementById('loader');
  loader.textContent = 'Redirecting…';

  // Put a URL here that YOU trust and control
  var DOWNLOAD_URL = 'https://example.com/your-file.zip';

  setTimeout(function () {
    window.location.href = DOWNLOAD_URL;
  }, 2000);
})();
