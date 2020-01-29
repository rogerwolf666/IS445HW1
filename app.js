const pics = [

]

const button  = document.querySelector('button')
const img = document.querySelector('img')
let index = 0
button.addEventListener('click', function(){
index += 1
if  (index === pics.length)
  img.src = pics[index]

})