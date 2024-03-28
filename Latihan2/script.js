let data = ["Alfredo","David","Felix"];

data.forEach(showMahasiswa);

function showMahasiswa(value,index){
    console.log(value);
    //listMhs.innerHTML = "<li>" + value + "</li>";
    listMhs.innerHTML += `<li>${value}</li>`;
}