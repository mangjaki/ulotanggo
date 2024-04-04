let data = ["Alfredo","David","Felix"];

data.forEach(showMahasiswa);

function showMahasiswa(value,index){
    console.log(value);
    //listMhs.innerHTML = "<li>" + value + "</li>";
    listMhs.innerHTML += `<li>${value}</li>`;
}

let npm = document.getElementById("npm");
//tampilkan data localstorage ke dalam elemen <p id="npm">
npm.innerHTML = localStorage.getItem("npm");
//tampilkan data localstorage ke dalam elemen <p id="nama">
nama.innerHTML =localStorage.getItem("nama");

//simpan ke data ke localStorage
localStorage.setItem("email","ujang@gaming.com");

let hobi = ["baca", "game", "coding"];
localStorage.setItem("hobi",hobi);
localStorage.setItem("myhobi",JSON.stringify(hobi));
//data object
let mhs = {"npm": 2226240003, nama: "yantok"};
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);
//kombinasi array dan objek
let nilai = [
    {kode_mk: "SI0001",nama_mk: "Pemrograman Web"},
    {kode_mk: "SI0002",nama_mk: "PAB"},
];
// tampilkan nama_mk pemrograman web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);
//simpan nilai ke dalam localstorage
localStorage.setItem("nilai",JSON.stringify(nilai));
// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for(const[index,data] of lsNilai.entries()){
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    //TAMPILKAN DATA MK nya ke dalan <ul id="listMk">
    document.getElementById("listMk").innerHTML += `<li>${data.nama_mk}</li>`;
}

