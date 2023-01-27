let container = document.getElementById("container")

function lancezMoi(){
    console.log("coucou")
    container.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
}

setInterval(lancezMoi, 100)