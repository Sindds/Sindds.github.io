function hideLoader() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    if (!loader) return;

    loader.classList.add('loader-hidden');

    if (content) {
        content.classList.remove('content-hidden');
        content.classList.add('content-visible');
    }

    setTimeout(() => {
        loader.remove();
    }, 500); // синхронно с opacity transition
}

window.addEventListener('load', () => {
    setTimeout(hideLoader, 800);
});