let isDarkMode = false;

function toggleDarkMode() {
  isDarkMode = !isDarkMode;

  // Store the dark mode preference in local storage
  localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');

  // Apply dark mode styles
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Check if the user has a dark mode preference in local storage
if (localStorage.getItem('darkMode') === 'true') {
  toggleDarkMode();
}

export { isDarkMode, toggleDarkMode };
