const imageViewer = document.getElementById('image_viewer');
const viewerBtn = document.getElementById('viewerBtn');
const closeViewerBtn = document.getElementById('closeViewer');

function toggleViewer() {
    if (imageViewer.style.display !== 'block') {
        imageViewer.style.display = 'block';
        imageViewer.classList.remove('fade-out');
        imageViewer.classList.add('fade-in');
    } else {
        imageViewer.classList.remove('fade-in');
        imageViewer.classList.add('fade-out');
        imageViewer.addEventListener('animationend', () => {
            imageViewer.style.display = 'none';
            imageViewer.classList.remove('fade-out');
        }, {
            once: true
        });
    }
}
viewerBtn.addEventListener('click', toggleViewer);
closeViewerBtn.addEventListener('click', toggleViewer);
startSlideshow();







