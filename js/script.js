let video = document.querySelector('#user-webcam');
navigator.getUserMedia == navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, stream => {
        video.srcObject = stream;
    }, () => {
        alert('Kamu tidak memberikan izin!');
    })
}

let cetakHasil = () => {
    let img = document.createElement('img');
    let imgContainer = document.querySelector('#img-container');
    let width = video.offsetWidth,
        height = video.offsetHeight,
        canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    img.src = canvas.toDataURL('image/png')
    imgContainer.appendChild(img);
}

let takePict = document.querySelector('#take-picture');
takePict.addEventListener('click', cetakHasil)