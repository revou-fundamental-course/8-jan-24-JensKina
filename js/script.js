// js/script.js
function hitungLuas() {
    var sisi = parseFloat(document.getElementById('sisi').value);
    var luas = sisi * sisi;
    document.getElementById('luas').textContent = luas.toFixed(2);
    document.getElementById('keliling').textContent = "";
}

function hitungKeliling() {
    var sisi = parseFloat(document.getElementById('sisi').value);
    var keliling = 4 * sisi;
    document.getElementById('keliling').textContent = keliling.toFixed(2);
    document.getElementById('luas').textContent = "";
}

function tampilkanBiodata() {
    var nama = document.getElementById('nama').value;
    var status = document.getElementById('status').value;

    console.log('Nama: ' + nama);
    console.log('Status: ' + status);
}

function submitForm() {
    alert("");
}

