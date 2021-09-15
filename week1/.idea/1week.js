function addk() {
    var imgarea = document.getElementById("areaimg");
    imgarea.removeChild(imgarea.childNodes[0]);
    var kui = document.createElement("img");
    kui.width = "500";
    kui.src = "imges/葵半身照.jpg";
    imgarea.appendChild(kui);
}
function addet() {
    var imgarea = document.getElementById("areaimg");
    imgarea.removeChild(imgarea.childNodes[0]);
    var et7 = document.createElement("img");
    et7.width = "500";
    et7.src = "imges/蔚来正面.jpg";
    imgarea.appendChild(et7);
}
function addxi() {
    var imgarea = document.getElementById("areaimg");
    imgarea.removeChild(imgarea.childNodes[0]);
    var xiaobai = document.createElement("img");
    xiaobai.width = "500";
    xiaobai.src = "imges/小白与小青.jpg";
    imgarea.appendChild(xiaobai);
}