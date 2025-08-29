const img = document.getElementById('img');
const btn = document.getElementById('reloadBtn');

btn.addEventListener('click', () => {
  img.classList.add('fade-out');
  setTimeout(() => {
    const newUrl = `https://picsum.photos/600/600?random=${Date.now()}`;
    img.src = newUrl;
  }, 400);
});

img.addEventListener('load', () => {
  img.classList.remove('fade-out');
});