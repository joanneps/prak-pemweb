//Joanne Polama Putri Sembiring
//121140128
//Praktikum PEMWEB RB
//Pertemuan 5

let ekspresi = "";

function tambahDigit(digit) {
  ekspresi += digit;
  updateLayar();
}

function tambahOperasi(operasi) {
  ekspresi += operasi;
  updateLayar();
}

function hitungHasil() {
  try {
    const hasil = eval(ekspresi);
    ekspresi = hasil.toString();
    updateLayar();
  } catch (error) {
    ekspresi = "Error";
    updateLayar();
  }
}

function hapusSemua() {
  ekspresi = "";
  updateLayar();
}

function updateLayar() {
  document.getElementById("layar").value = ekspresi;
}