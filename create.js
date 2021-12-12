const block = document.querySelector(".circle-block")

for(var j = 0; j <396; j++){
    console.log(j);
    var circle = document.createElement("div")
    circle.classList.add("circle")
    block.append(circle)
}
