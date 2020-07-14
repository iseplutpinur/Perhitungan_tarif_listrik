<?php
function validasiAngka(){
	$input = $_POST["j_alat"];
	$var = "/^[0-9]*$/";
	if (!preg_match($var, $input)) {
		echo "
		<script>
			alert('Data tidak sesuai ketentuan, Hanya menerima inputan angka');
			document.location.href='index.php';
		</script>
		";
	}elseif ($_POST["j_alat"] > 100 || $_POST["j_alat"] < 1 ) {
		echo "
		<script>
			alert('Data melebihi kapasitas maksimal, Hanya menerima inputan 1 - 100');
			document.location.href='index.php';
		</script>
		";		
	}
}
require 'variable.php';
?>
<!DOCTYPE html>
<html>
<head>
<?= $header; ?>
</head>
<body>
	<div class="clear"></div>
	<div class="header"><a href="index.php" style="text-decoration: none; color: white;"><?= $judul; ?></a></div>
	<div class="clear"></div>
	<div class="navbar">
	<form action="" method="post" id="jml_alat">
		<label for="j_alat" class="label">Jumlah Alat: </label>
		<?php if (isset($_POST["submit"])) : ?>
		<?php $btnReset = true; ?>
		<input min="1" max="100" value="<?= $_POST["j_alat"]; ?>" type="number" id="j_alat" name="j_alat" required="" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
		<?php else : ?>
		<input min="1" max="100" placeholder="Masukan angka saja" type="number" id="j_alat" name="j_alat" required="" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
		<?php endif ?>
		<button type="submit" id="submit" name="submit">Submit</button>
		<?php if ($btnReset) {
			echo "<a href=\"index.php\" class=\"btn-reset\">Reset</a>";
		} ?>
	</form>
	<div class="clear"></div>
	</div>
	<?php if (isset($_POST["submit"])) : ?>
		<?php validasiAngka(); ?>
		<div class="container">
		<form action="hasil.php" method="post">
			<?php for ($i=1; $i<= $_POST["j_alat"]; $i++) :?>
				<div class="inputan">
					<h1>Alat <?= $i; ?></h1>
					<div class="form-group">
						<label for="nama<?= $i; ?>">Nama alat: </label><br>
						<input type="text" id="nama<?= $i; ?>" name="nama[]" required="" placeholder="Nama alat listrik">
					</div>
					<div class="form-group">
						<label for="waktu<?= $i; ?>">Durasi penggunaan alat dalam 1 hari: </label><br>
						<input min="1" max="24" type="number" id="waktu<?= $i; ?>" name="waktu[]" required="" placeholder="Berapa jam digunakan dalam sehari">
					</div>
					<div class="form-group">
						<label for="tegangan<?= $i; ?>">Konsumsi alat dalam Satuan Wat: </label><br>
						<input min="1" type="number" id="tegangan<?= $i; ?>" name="tegangan[]" required="" placeholder="Tegangan listrik alat tersebut">
					</div>
				</div>
			<?php endfor ?>
		<div class="clear"></div>
	</div>
	<div class="clear"></div>
	<div class="foother">
			<label for="tarif" class="label">Tarif: </label>
			<input min="1"  type="number" id="tarif" name="tarif" required="" placeholder="Tarif listrik perKWh Rp.">
			<label for="pemakaian" class="label">Pemakaian: </label>
			<input min="1" type="number" id="pemakaian" name="pemakaian" required="" placeholder="Listrik Dalam Berapa hari">
			<input type="text" id="jml_alat" name="jml_alat" value="<?= $_POST["j_alat"]; ?>" hidden="hidden">
			<button type="submit" id="enter" name="enter">Submit</button>
		</form>
		<div class="clear"></div>
	</div>
	<?php endif ?>
		<div class="clear"></div>
<script language="JavaScript" src="asset/js/kata2.js"></script>
<?= $copyright; ?>
</body>
</html>
