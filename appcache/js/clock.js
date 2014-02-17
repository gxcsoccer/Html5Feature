/* clock.js */
setInterval(function() {
  document.getElementById('clock').value = new Date().toLocaleTimeString();
}, 1000);