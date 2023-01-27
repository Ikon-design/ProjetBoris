let container = document.getElementById("container")
let text = document.getElementById("title")
let rick = document.getElementById("rick")

let tablele = ["left", "center", "right"]
console.log(tablele)
function lancezMoi(){
    let sound = new Audio("sound.mp3")
    sound.play()
    text.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    container.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    let matchrer = Math.floor(Math.random() * 3)
    container.style.textAlign = tablele[matchrer]
    rick.style.transform = "Rotate(" + Math.floor(Math.random() * 360) + "deg)"
    text.style.fontSize = Math.floor(Math.random() * 250) + "px"
}

setInterval(lancezMoi, 200)