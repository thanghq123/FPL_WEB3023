const pFooter = document.querySelector('footer #text-footer');
const textDrop = document.querySelector('#text-drop');
pFooter.ondragstart = (e) => {
    console.log(e.target);
    e.dataTransfer.setData('text', e.target.id);
}

textDrop.ondragover = (e) => {
    e.preventDefault();
}

textDrop.ondrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    console.log(data);
    // console.log(document.querySelector('#'+data));
    textDrop.appendChild(document.querySelector('#' + data));
}

const getLocationBtn = document.querySelector('#get-location-btn');
console.log(navigator.geolocation.getCurrentPosition(showLocation, showError));
function showLocation(position) {
    console.log(position.coords);
}

function showError(err) {
    console.log(err);
}