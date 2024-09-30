const blade = document.querySelector('#blade');


let angle = 0;

let pixel_array = [];

for (let i = 0; i < 100; i++){
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel_array.push(pixel);
  blade.appendChild(pixel);
}


window.addEventListener("hall_effect", _ => {
  console.log("ex")
})



function render(){
  // draw the blade rotating at the rpm speed
  blade.style.transform = `rotate(${angle}deg)`;
  angle += 5+Math.random();
  requestAnimationFrame(render);




  if (angle > 360){
    angle = 0;
    for(let i = 0; i < pixel_array.length; i++){
      pixel_array[i].style.backgroundColor = `rgb(255,0,0)`;
    }

    window.dispatchEvent("hall_effect")
  }

  for(let i = 0; i < pixel_array.length; i++){
    pixel_array[i].style.backgroundColor = `rgb(100,100,0)`;
  }



}

render();


// while(true) {
//   for (let i = 0; i < pixel_array.length; i++){
//     pixel_array[i].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
//   }
// }