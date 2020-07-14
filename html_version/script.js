// Query builder ==========================================
function getById(x){
	return document.getElementById(x);
}

function getByClass(x){
	return document.getElementsByClassName(x);
}

function getByTagName(x){
	return document.getElementsByClassName(x);
}

function showById(x){
	getById(x).removeAttribute("style");
}

function hideById(x){
	getById(x).setAttribute("style", "display: none;");
}
//=========================================================

//=========================================================
var inputanHtml = '';
function inputanHtmlFun(){
	inputanHtml = '';
	for (var i = 1; i <= 99; i++){
		inputanHtml += '<div class="inputan" id="inputanKe' + i + '" style="">';
		inputanHtml += '<h1><b>Alat ' + i +'</b></h1>';
		inputanHtml += '<div class="form-group">';
		inputanHtml += '<label for="ip_nama' + i + '">Nama alat: </label><br>';
		inputanHtml += '<input type="text" id="ip_nama' + i + '" placeholder="Nama alat listrik" onkeyup="namaAlatIn(' + i + ', this.value)" onclick="namaAlatIn(' + i + ', this.value)">';
		inputanHtml += '<span class="redtext" id="alertNama' + i + '" style="display: none;"></span>';
		inputanHtml += '</div>';
		inputanHtml += '<div class="form-group">';
		inputanHtml += '<label for="ip_waktu' + i + '">Durasi penggunaan alat dalam 1 hari: </label><br>';
		inputanHtml += '<input type="number" id="ip_waktu' + i + '" placeholder="Berapa jam digunakan dalam sehari" onkeyup="duraAlatIn(' + i + ', this.value)" onclick="duraAlatIn(' + i + ', this.value)" onkeypress="return event.charCode >= 48 && event.charCode <= 57">';
		inputanHtml += '<span class="redtext" id="alertDura' + i + '" style="display: none;"></span>';
		inputanHtml += '</div>';
		inputanHtml += '<div class="form-group">';
		inputanHtml += '<label for="ip_teg' + i + '">Konsumsi alat dalam Satuan Wat: </label><br>';
		inputanHtml += '<input type="number" id="ip_teg' + i + '" placeholder="Tegangan listrik alat tersebut" onkeyup="tegaAlatIn(' + i + ', this.value)" onclick="tegaAlatIn(' + i + ', this.value)" onkeypress="return event.charCode >= 48 && event.charCode <= 57">';
		inputanHtml += '</div>';
		inputanHtml += '</div>';
	}
	inputanHtml += '<div class="clear"></div>';
	getById("kolomInputan").innerHTML = inputanHtml;
}

inputanHtmlFun();

var nama_alat = [];
var tega_alat = [];
var dura_alat = [];
var j_alat = getById("j_alat");
var mainDisplay = getById("mainDisplay");
j_alat.addEventListener("keyup", function(){jumlahAlat();});
j_alat.addEventListener("click", function(){jumlahAlat();});
jumlahAlat();
function jumlahAlat(){
	if (j_alat.value > 0 && j_alat.value < 100) {
		showById("mainDisplay");
		for (var i = 1; i <= 99; i++){
			if (i <= j_alat.value) {
				showById("inputanKe" + i);
				hideById("alertNamaJml");
			} else {
				hideById("inputanKe" + i);
				hideById("alertNama" + i);
				hideById("alertNamaJml");
			}
		}
	} else if (j_alat.value < 1){
		hideById("mainDisplay");
		hideById("alertNamaJml");
	} else if (j_alat.value > 99){
		showById("alertNamaJml");
		getById("alertNamaJml").innerHTML = "Jumlah alat yang di hitung maksimal 99";
		hideById("mainDisplay");
	}
	hideById("hasilDisplay");
}

function resetJmlAlat(){
	hideById("mainDisplay");
	hideById("hasilDisplay");
	j_alat.value = 0;
	inputanHtmlFun();
}
function namaAlatIn(x, y){
	if (y == ""){
		nama_alat[x] = "Alat " + x;
		showById("alertNama" + x);
		getById("alertNama" + x).innerHTML = "Kolom Nama alat harus di isi, Jika tidak di isi maka akan dinamai <b>Alat " + x +"</b>";
	} else {
		hideById("alertNama" + x);
		nama_alat[x] = y;
	}
}
function tegaAlatIn(x, y){
	if (Number(y) >= 0) tega_alat[x] = Number(y);
	else tega_alat[x] = 0;
}
function duraAlatIn(x, y){
	if (Number(y) <= 24 && Number(y) > 0) {
		dura_alat[x] = Number(y);
		hideById("alertDura" + x);
	} else if ( Number(y) > 24) {
		dura_alat[x] = 24;
		showById("alertDura" + x);
		getById("alertDura" + x).innerHTML = "Waktu penggunaan alat tidak boleh lebih dari 24 jam dalam satu hari, Akan di hitung menjadi 24 jam";
	} else {
		dura_alat[x] = 1;
		showById("alertDura" + x);
		getById("alertDura" + x).innerHTML = "Waktu penggunaan alat tidak boleh kurang dari 1 jam dalam satu hari, Akan di hitung menjadi 1 jam";
	}
}


// Hitung =================================================
var pakai = getById("pemakaian");
var tarif = getById("tarif");
var tabelHasil = '';
function hitung(){
	pakai = getById("pemakaian");
	tarif = getById("tarif");
	if (cekPakaiDanTarif()) {
		cekValMain();
		hideById("mainDisplay");
		showById("hasilDisplay");
		tabelHasil = '';
		hitungAct();
	}
}

function hitungAct(){
	var total = [];
	var totalPerHari = [];
	var totalbiaya = 0;
	for(var i = 1; i <= j_alat.value; i++){
		total[i] = (((tega_alat[i])*dura_alat[i])/1000)*tarif.value;
		totalPerHari[i] = total[i];
		total[i] *= pakai.value;
		totalbiaya += total[i];
	}
	tabelHasil += '<div class="container2">';
	tabelHasil += '<table>';
	tabelHasil += '<thead>';
	tabelHasil += '<tr class="title centers">';
	tabelHasil += '<td rowspan="2">No</td>';
	tabelHasil += '<td rowspan="2">Nama</td>';
	tabelHasil += '<td rowspan="2">Tegangan</td>';
	tabelHasil += '<td colspan="2">Pemakaian</td>';
	tabelHasil += '<td colspan="2">Tarif</td>';
	tabelHasil += '</tr>';
	tabelHasil += '<tr class="title centers">';
	tabelHasil += '<td>1 Hari</td>';
	tabelHasil += '<td>' + pakai.value + ' Hari</td>';
	tabelHasil += '<td>1 Hari</td>';
	tabelHasil += '<td>' + pakai.value + ' Hari</td>';
	tabelHasil += '</tr>';
	tabelHasil += '</thead>';
	tabelHasil += '<tbody>';

	for(var i = 1; i <= j_alat.value; i++){
		tabelHasil += '<tr>';
		tabelHasil += '<td class="centers">' + i + '</td>';
		tabelHasil += '<td>' + nama_alat[i] + '</td>';
		tabelHasil += '<td>' + tega_alat[i] + '</td>';
		tabelHasil += '<td>' + dura_alat[i] + ' Jam</td>';
		tabelHasil += '<td>' + dura_alat[i]*pakai.value + ' Jam</td>';
		tabelHasil += '<td class="right">Rp. ' + totalPerHari[i] + '</td>';
		tabelHasil += '<td class="right">Rp. ' + total[i] + '</td>';
		tabelHasil += '</tr>';
	}

	tabelHasil += '</tbody>';
	tabelHasil += '<thead>';
	tabelHasil += '<tr class="title">';
	tabelHasil += '<td colspan="7">';
	tabelHasil += 'Total Tarif Listrik Perhari Rp. ' + (totalbiaya/pakai.value) + '<br>';
	tabelHasil += 'Total Biaya Listrik Selama 33 Hari Rp. ' + totalbiaya;
	tabelHasil += '</td>';
	tabelHasil += '</tr>';
	tabelHasil += '</thead>';
	tabelHasil += '</table>';
	tabelHasil += '<button class="btn" onclick="jumlahAlat()">&laquo; Kembali</button>';
	tabelHasil += '<div class="clear"></div>';
	tabelHasil += '</div>';
	getById("hasilDisplay").innerHTML = tabelHasil;
}

function cekPakaiDanTarif(){
	if (Number(tarif.value) <= 0 || tarif.value == "" ){
		getById("alertNamaPem").innerHTML = "Kolom tarif harus di isi dan tidak boleh bernilai nol";
		showById("alertNamaPem");
		return false;
	} else if (Number(pakai.value) <= 0 || pakai.value == "" ){
		getById("alertNamaPem").innerHTML = "Kolom pemakaian harus di isi dan tidak boleh bernilai nol";
		showById("alertNamaPem");
		return false;
	} else {
		hideById("alertNamaPem");
		return true;
	}
}

function cekValMain(){
	for(var i = 1; i <= j_alat.value; i++){
		if (dura_alat[i] == undefined || dura_alat[i] == "") dura_alat[i] = 0;
		if (tega_alat[i] == undefined || tega_alat[i] == "") tega_alat[i] = 0;
		if (nama_alat[i] == undefined || nama_alat[i] == "") nama_alat[i] = "Alat " + i;
	}
}