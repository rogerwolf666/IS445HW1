var pics = [
"imgs/kitty_bed.JPG",
"imgs/kitty_basket.JPG",
"imgs/kitty_laptop.jpg",
"imgs/kitty_door.jpg",
"imgs/kitty_sink.JPG",
"imgs/kitty_wall.jpg"
];

var btn  = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
if  (counter === 6){
  counter = 0
}
  img.src = pics[counter]
  counter = counter + 1;
});