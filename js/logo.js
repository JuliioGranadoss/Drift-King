document.addEventListener("DOMContentLoaded", function () {

    var svg = document.querySelector('#volante');
    var bbox = svg.getBBox();
    var centroX = bbox.x + bbox.width / 2;
    var centroY = bbox.y + bbox.height / 2;

    console.log('Centro del SVG:', centroX, centroY);

    svg.style.transformOrigin = `${centroX}px ${centroY}px`;

    var animacionVolante = anime({
        targets: '#volante',
        rotate: '2turn',
        duration: 5000,
        complete: function (anim){
            animacionVolante.restart();
        }
    });
});