let container = document.getElementById("container")
let text = document.getElementById("title")
let rick = document.getElementById("rick")

let tablele = ["left", "center", "right"]

function lancezMoi(){
    let sound = document.createElement("audio")
    sound.src = "./sound.mp3"
    text.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    container.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    let matchrer = Math.floor(Math.random() * 3)
    container.style.textAlign = tablele[matchrer]
    console.log("Rotate(" + Math.floor(Math.random() * 360) + "deg)")
    rick.style.transform = "Rotate(" + Math.floor(Math.random() * 360) + "deg)"
    text.style.fontSize = Math.floor(Math.random() * 250) + "px"
    document.body.insertBefore(sound, rick)
}

setInterval(lancezMoi, 100)