const square = document.querySelector(".square")

var i = 0
var z = 4

function moveUpDown(){
    i += z
    if(i === 400 || i ===0){
        z *= -1
    }
    square.style.top = `${i}px`
}


square.addEventListener("click", ()=>{
    setInterval(moveUpDown, 50)
    square.style.left = "1000px"
    square.style.transform = "rotate(360deg)"
})

square.addEventListener("transitionend", ()=>{
    if(square.offsetLeft === 1000){
        square.style.left = "500px"
        square.style.transform = "rotate(0)"
    }else{
        square.style.left = "1000px"
        square.style.transform = "rotate(360deg)"
    }
})