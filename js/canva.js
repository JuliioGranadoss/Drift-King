const canvas = document.getElementById('galleryCanvas');
const ctx = canvas.getContext('2d');
const images = ['../imagenes/img1.jpeg', '../imagenes/img2.jpeg', '../imagenes/img3.jpeg'];
let currentIndex = 0;

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth * 0.6; 
    canvas.height = canvas.width * 0.75; 
    drawImage(); 
}

function drawImage() {
    const img = new Image();
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = images[currentIndex];
}

function applyFilter() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function changeImage() {
    applyFilter();
    currentIndex = (currentIndex + 1) % images.length;
    drawImage();
}

function startGallery() {
    resizeCanvas(); 
    setInterval(changeImage, 5000);
}

window.addEventListener('resize', resizeCanvas); 
startGallery();
