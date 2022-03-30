let pixels = document.querySelectorAll('.pixel');
let eraser = document.querySelector('.eraser');
let chosenColor = document.querySelector('.chosen-color');

for (let pixel of pixels) {
  pixel.onclick = function () {
    if (eraser.checked) {
      pixel.style.backgroundColor = 'white';
      }  else {
        pixel.style.backgroundColor = chosenColor.value;
        }
  } 
  
}