function searchPhotos(event) {
    const keyword = event.target.value;
    if (event.key === 'Enter' && keyword) {
        removePhotos();
        for (let i = 0; i < 10; i++) {
            appendImageElement(keyword, i);
        }
    }
}
function run() {
    const inputElement = document.querySelector('input');
    inputElement.addEventListener('keydown', searchPhotos);
}

run();