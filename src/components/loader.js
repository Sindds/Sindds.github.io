function hideLoader() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    if (loader) {
        loader.classList.add('loader-hidden');
        
        if (content) {
            content.classList.remove('content-hidden');
            content.classList.add('content-visible');
        }
        
        loader.addEventListener('transitionend', () => {
            loader.remove();
        });
    }
}
window.addEventListener('load', () => {
    setTimeout(hideLoader, 820);
});

setTimeout(hideLoader, 5000);