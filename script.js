let container = document.getElementById("container")
let text = document.getElementById("title")
let rick = document.getElementById("rick")

let tablele = ["left", "center", "right"]

function lancezMoi(){
    text.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    container.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    let matchrer = Math.floor(Math.random() * 3)
    container.style.textAlign = tablele[matchrer]
    rick.style.transform = "Rotate(" +Math.floor(Math.random() * 360) + "deg)"

}

setInterval(lancezMoi, 100)