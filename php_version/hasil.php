<?php 
	if (!isset($_POST["jml_alat"])) {
		header('Location: index.php');
	}
	require 'variable.php';
?>
<?php
	$baris = $_POST["jml_alat"];
	$totalbiaya  = 0;
	$nomor = 0;
	// pengooperasian
	for ($i=0; $i < $baris; $i++) { 
		$total[$i] = ($_POST["tegangan"][$i]*$_POST["waktu"][$i])/1000;
		$total[$i] *= $_POST["tarif"]; // pemakaian harian
		$tarifPerHari[$i] = $total[$i];
		$total[$i] *= $_POST["pemakaian"];
		$totalJam[$i] = $_POST["waktu"][$i] * $_POST["pemakaian"];
		$totalbiaya += $total[$i];
	}
 ?>
<!DOCTYPE html>
<html>
<head>
<?= $header; ?>
</head>
<body>
	<div class="header"><a href="index.php" style=" color: white; text-decoration: none;"><?= $judul; ?></a></div>
	<div class="clear"></div>
	<div class="navbar">
	<form action="index.php" method="post" id="jml_alat">
		<label for="j_alat" class="label">Jumlah Alat: </label>
		<input min="1" max="100" value="<?= $baris; ?>" type="number" id="j_alat" name="j_alat" required="" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
		<button type="submit" id="submit" name="submit">Submit</button>
		<a href="index.php" class="btn-reset">Reset</a>
	</form>
	<div class="clear"></div>
	</div>

	<div class="container2">
	<table>
		<tr class="title centers">
			<td rowspan="2">No</td>
			<td rowspan="2">Nama</td>
			<td rowspan="2">Tegangan</td>
			<td colspan="2">Pemakaian</td>
			<td colspan="2">Tarif</td>
		</tr>
		<tr class="title centers">
			<td>1 Hari</td>
			<td><?= $_POST["pemakaian"]; ?> Hari</td>
			<td>1 Hari</td>
			<td><?= $_POST["pemakaian"]; ?> Hari</td>
		</tr>
	<?php for ($i=0; $i < $baris; $i++) : $nomor++;?>
			<?php if ($nomor%2 == 0) :?>
			<tr id="genap">
			<?php else: ?>
			<tr id="ganjil">
			<?php endif ?>
			<td class="centers"><?= $nomor; ?></td>
			<td><?= $_POST["nama"][$i]; ?></td>
			<td><?= $_POST["tegangan"][$i]; ?> Wat</td>
			<td><?= $_POST["waktu"][$i]; ?> Jam</td>
			<td><?= $totalJam[$i]; ?> Jam</td>

			<td>Rp.<?= $tarifPerHari[$i]; ?></td>
			<td>Rp.<?= $total[$i]; ?></td>
		</tr>
	<?php endfor ?>
	<tr class="title">
		<td colspan="7">
			Total Tarif Listrik Perhari Rp. <?= $totalbiaya/$_POST["pemakaian"]; ?><br>
			Total Biaya Listrik Selama <?= $_POST["pemakaian"]; ?> Hari Rp. <?= $totalbiaya; ?>	
			</td>
	</tr>
	</table>
	</div>
	<div class="clear"></div>
<script language="JavaScript" src="asset/js/kata2.js"></script>
<?= $copyright; ?>
</body>
</html>
