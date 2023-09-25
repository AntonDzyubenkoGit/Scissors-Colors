function checkMode(setIsDarkMode) {
  const checkMode = localStorage.getItem('scissor_mode');

  if (checkMode === 'true') {
    setIsDarkMode(false);
    document.body.classList = 'dark';
  } else {
    setIsDarkMode(true);
    document.body.classList = '';
  }
}

export default checkMode;
