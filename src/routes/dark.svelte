<script>
    let isDarkMode = false;
  
    function toggleDarkMode() {
      isDarkMode = !isDarkMode;
  
      // Store the dark mode preference in local storage
      localStorage.setItem('darkMode', isDarkMode);
    }
  
    // Check if the user has a dark mode preference in local storage
    if (localStorage.getItem('darkMode') === 'true') {
      isDarkMode = true;
    }
</script>

<button on:click={toggleDarkMode}>
    {#if isDarkMode}
      Diable Dark Mode
    {:else}
      Enable Dark Mode
    {/if}
</button>

{#if isDarkMode}
  <link rel="stylesheet" type="text/css" href="dark-mode.css">
{:else}
  <link rel="stylesheet" type="text/css" href="light-mode.css">
{/if}