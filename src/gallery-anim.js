document.addEventListener('DOMContentLoaded', () => {
  const radios = Array.from(document.querySelectorAll('.css-gallery input[type="radio"]'));
  if (!radios.length) return;

  let idx = radios.findIndex(r => r.checked);
  if (idx < 0) idx = 0;
  let intervalId = null;
  const NEXT = () => {
    idx = (idx + 1) % radios.length;
    radios[idx].checked = true;
  };

  const start = () => { stop(); intervalId = setInterval(NEXT, 5000); };
  const stop = () => { if (intervalId) { clearInterval(intervalId); intervalId = null; } };

  start();

  const gallery = document.querySelector('.css-gallery');
  if (gallery) {
    gallery.addEventListener('mouseenter', stop);
    gallery.addEventListener('mouseleave', start);
    gallery.addEventListener('focusin', stop);
    gallery.addEventListener('focusout', start);
  }
});
