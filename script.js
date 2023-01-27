let container = document.getElementById("container")

function lancezMoi(){
    container.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
}

setTimeout(lancezMoi, 1000)