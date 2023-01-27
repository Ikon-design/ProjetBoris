let container = document.getElementById("container")
let text = document.getElementById("title")
let rick = document.getElementById("rick")

let tablele = ["left", "center", "right"]

function lancezMoi(){
    text.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    container.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    let matchrer = Math.random(3)
    console.log(matchrer)
    console.log(tablele)
    console.log(tablele[matchrer])
    container.style.textAlign = tablele[matchrer].toString()
}

setInterval(lancezMoi, 100)