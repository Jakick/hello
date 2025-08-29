function findTokens() {
  const sources = [
    localStorage,
    sessionStorage,
    document.cookie,
    window.name,
    location.hash
  ];
  
  sources.forEach(source => {
    console.log('Checking:', source);
    // Look for JWT patterns, API keys, etc.
  });
}
