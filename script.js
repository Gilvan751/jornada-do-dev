/* var versa = document.createElement("p");
versa.innerHTML = "versa";
document.getElementById("nissan").appendChild(versa);
var sentra = document.createElement("p");
sentra.innerHTML = "sentra";
document.getElementById("nissan").appendChild(sentra);
//document.getElementById("nissan").removeChild(sentra);
var numero = document.createElement("p");
numero.innerHTML = "soma";
document.getElementsByClassName("total").appendChild(numero);
//document.getElementsByClassName("total").removeChild(); */


function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));
