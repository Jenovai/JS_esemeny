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