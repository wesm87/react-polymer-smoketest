
export default new Promise((resolve) => {
  const entry = document.createElement('script');
  entry.async = true;
  entry.src = './app.js';
  entry.onload = () => resolve();
  document.head.appendChild(entry);
});
