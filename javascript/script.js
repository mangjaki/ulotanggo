document.getElementById("welcome").innerHTML = "Selamat Datang";
document.getElementById("nama").innerHTML = "<b>YantokGeming</b>";
document.getElementById("email").innerHTML = "YantokGeming96@gmail.com";

console.log("Hanya bisa di lihat di console");

//Variable
let nama = "";
let email = "";
let data = [];

//FUNCTION
function tampil() {
  console.log("Button ditekan");
  // simpan value txtNama ke dalam variable "nama"
  nama = document.getElementById("txtNama").value;
  email = document.getElementById("txtEmail").value;
  console.log(nama);
  //ubah konten <p id="nama">
  document.getElementById("nama").innerHTML = nama;
  document.getElementById("email").innerHTML = email;
  //simpan ke dalam array
  data.push(nama);
  console.log(data);
}
