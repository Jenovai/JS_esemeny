function kesz(){
    console.log("Az oldal betöltése befejezödött.");
}

function myFunction(){
    let nev = prompt("Add meg a nevedet")
    let udv = document.getElementById('udvozles')
    udv.innerHTML = "Üdvözöllek " + nev
}

function nagyit(){
    let kep = document.querySelector("img")
    kep.style.width = "150px"
}

function normal(){
    let normal_kep = document.querySelector("img")
    normal_kep.style.width = "50px"
}

let szoveg = document.getElementById("szoveg")
szoveg.style.border = "black 5px solid"
szoveg.style.backgroundColor = "rgba(179, 179, 179, 0.7)"
szoveg.style.color = "red"
szoveg.style.width = "80%"
szoveg.style.margin = "auto"