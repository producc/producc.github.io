if (location.protocol !== 'https:') {
  // Redirect to the HTTPS version of the website
  location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
