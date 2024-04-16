let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function() {
    console.log("tombolditekan");
    if(localStorage.getItem("testimoni")) {
        //add localstorage dengan key testimoni
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
        
    }else {
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    }
    localStorage.setItem("testimoni", JSON.stringify(data));
    getData();
});

function getData() {
    list.innerHTML = "";
    if(localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        for (const [index,row] of data.entries()) {
            list.innerHTML += `<li>${row.nama} ${row.testimoni}</li>`;
        }
    }
}

getData();
