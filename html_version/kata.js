var x = setInterval(function(){
	document.getElementById("kata_kata").innerHTML = kataKata();
}, 10000);
document.getElementById("kata_kata").innerHTML = kataKata();
function kataKata(){
	var q1 = '<div id="qotesTex"><div class="quoteCon" ><div class="quotes">Quotes</div><div class="quotesJudul">';
	var q2 = '</div><div class="clear"></div><div class="quoteConSub">';
	var q3 = '</div><div class="clear"></div><div class="quotesJudul">';
	var q4 = '</b></div></div><div class="clear"></div></div>';
	var kata = [];
	kata[0]  = q1 + "Proses Menuju Sukses"
				+ q2 + "Kesuksesan adalah hasil dari kesempurnaan, kerja keras, belajar dari pengalaman, loyalitas, dan kegigihan."
				+ q3 + "Colin Powell"
				+ q2 + "Hal instan dalam kesuksesan tidaklah berlaku. Untuk mencapai apa yang diinginkan, kamu perlu mengerahkan daya dan upaya yang kamu miliki. <br>Nikmatilah proses panjangnya. Dari proses tersebut, kamu akan mendapatkan pelajaran yang berharga. Jadi, jangan menyerah, ya! Lakukan semua usaha terbaik yang kamu bisa.<b> (No. 0)"
				+ q4;
	kata[1]  = q1 + "Mewujudkan Kesuksesan"
				+ q2 + "Beberapa orang memimpikan kesuksesan, sementara yang lain bangun setiap pagi untuk mewujudkannya."
				+ q3 + "Wayne Huizenga"
				+ q2 + "Buat kamu yang masih suka malas-malasan tapi pengin sukses, ingatlah kata-kata mutiara dari Wayne Huizenga di atas ini. <br>Kalau kamu hanya bermimpi saja, kamu akan kalah langkah dengan mereka yang mau berusaha mewujudkannya.Mulai sekarang, lakukanlah usaha untuk mewujudkan keinginanmu. Jangan sampai kamu menyesal di kemudian hari karena tidak memulainya sesegera mungkin.<b> (No. 1)"
				+ q4;
	kata[2]  = q1 + "Sikap dan Kemampuan Sama Pentingnya"
				+ q2 + "Untuk sukses, sikap sama pentingnya dengan kemampuan."
				+ q3 + "Walter Scott"
				+ q2 + "Tak jarang, ada beberapa orang yang terlalu percaya diri pada kemampuannya dan merasa dirinya adalah yang terhebat. Namun, hal tersebut bisa menjadi bumerang jika tidak diimbangi dengan sikap yang baik.<br>Tanpa sikap yang baik, sehebat apapun kemampuan yang dimilikinya tidaklah ada artinya. Untuk itu, jika ingin sukses, usahakan menyeimbangkan kedua hal ini.<b> (No. 2)"
				+ q4;
	kata[3]  = q1 + "Tentang Kegagalan"
				+ q2 + "Kegagalan adalah kunci kesuksesan. Setiap kesalahan mengajarkan kita sesuatu."
				+ q3 + "Morihei Ueshiba"
				+ q2 + "Pernahkan kamu mengalami kegagalan dan kemudian memutuskan untuk menyerah mengejar tujuanmu? Kalau begitu, hayati baik-baik pesan yang disampaikan kata-kata bijak kehidupan dari Morihei Ueshiba ini.<br>Lewat kata-kata mutiara ini, Ueshiba berpesan untuk jangan takut gagal. Kegagalan merupakan sebuah proses dalam menjemput kesuksesan, dari situ kita bisa belajar dan bisa menghindari melakukan kesalahan yang sama.<b> (No. 3)"
				+ q4;
	kata[4]  = q1 + "Usaha Lebih Penting dari Hasil"
				+ q2 + "Sukses adalah sebuah perjalanan, bukan sebuah tujuan. Usaha sering lebih penting daripada hasilnya."
				+ q3 + "Arthur Ashe"
				+ q2 + "Kamu pasti pernah mendengar bahwa proses adalah bagian dari usaha yang lebih penting dibandingkan hasil. Kiranya, hal ini jugalah yang ingin disampaikan oleh Arthur Ashe lewat kata-kata mutiara di atas.<br>Sukses bukan berarti kamu bisa mencapai apa yang menjadi tujuanmu. Tetapi, bagaimana kamu melewati proses panjangnya. Jadi, entah itu mudah atau sulit, nikmatilah prosesnya.<b> (No. 4)"
				+ q4;
	kata[5]  = q1 + "Pentingnya Sebuah Persiapan"
				+ q2 + "Sebelum apapun, persiapan adalah kunci menuju kesuksesan."
				+ q3 + "Alexander Graham Bell"
				+ q2 + "Kunci untuk bisa mencapai apa yang menjadi tujuanmu hanya ada satu, yaitu persiapan. Tanpa persiapan, kamu tak akan pernah bisa sampai ke tujuan.<br>Ibarat lomba lari, di saat yang lain sudah bersiap-siap di belakang garis start, kamu malah duduk manis menontonnya. Saat yang lain berhasil sampai ke garis finish, kamu pun tak akan pernah bisa merasakannya.<b> (No. 5)"
				+ q4;
	kata[6]  = q1 + "Fondasi Sukses"
				+ q2 + "Batu fondasi untuk kesuksesan yang seimbang adalah kejujuran, karakter, integritas, keyakinan, cinta, dan kesetiaan."
				+ q3 + "Zig Ziglar"
				+ q2 + "Jika di kata-kata bijak kehidupan sebelumnya dikatakan kalau kunci sukses adalah persiapan, maka fondasi yang diperlukan adalah kejujuran, karakter, integritas, keyakinan, cinta, dan kesetiaan. Tanpa keenam hal tersebut, mungkin saja kamu bisa sukses, tapi tidak menjamin akan bertahan lama atau tidak.<br>Sama seperti membangun sebuah rumah, kan? Kamu perlu fondasi agar tidak mudah runtuh suatu hari nanti.<b> (No. 6)"
				+ q4;
	kata[7]  = q1 + "Rahasia Sukses"
				+ q2 + "Rahasia dari kesuksesan kita adalah bahwa kita tidak pernah menyerah."
				+ q3 + "Ilma Mankiller"
				+ q2 + "Sesakit dan sekeras apapun usaha yang kamu lakukan untuk menjemput kesuksesan, jalani saja dan jangan pernah berpikiran untuk mengakhirinya. Sebab jika kamu menyerah, kamu tak akan pernah bisa maju dan menikmati kesuksesan.<br>Ingatlah juga kalau kesempatan mungkin tak datang dua kali. Siapa tahu kesempatan yang kamu sia-siakan karena lebih menyerah tersebut adalah satu-satunya yang kamu miliki. Jadi, jangan sampai menyesal, ya!<b> (No. 7)"
				+ q4;
	kata[8]  = q1 + "Kesuksesan dan Kegagalan Hanyalah Sementara"
				+ q2 + "Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanyalah sementara."
				+ q3 + "Shah Rukh Khan"
				+ q2 + "Kalau kamu gagal, jangan menyerah begitu saja. Kegagalan hanya sementara, kamu masih bisa berusaha lagi untuk meraih apa yang menjadi tujuanmu.<br>Sama dengan kegagalan yang hanya sementara, kesuksesan pun juga begitu. Kalau kamu tidak berusaha untuk mempertahankannya, bukan tidak mungkin kalau suatu saat nanti kamu bisa kembali jatuh lagi.<b> (No. 8)"
				+ q4;
	kata[9]  = q1 + "Peran Kesulitan dalam Kesuksesan"
				+ q2 + "Tidak ada kesuksesan tanpa kesulitan."
				+ q3 + "Sophocles"
				+ q2 + "Kalau kamu menginginkan sesuatu, berusahalah semampumu untuk mewujudkannya. Kalau kamu pesimis karena menganggap proses yang akan dijalani sulit, jangan harap kamu bisa mewujudkannya.<br>Tidak ada keberhasilan yang instan, kamu harus bersedia untuk berusaha. Kamu harus konsisten dan jangan mudah menyerah begitu saja agar bisa sukses.<b> (No. 9)"
				+ q4;
	kata[10] = q1 + "Cintamu Adalah Hadiah"
				+ q2 + "Saat aku bersamamu, rasanya seperti sedang bermimpi sepanjang hari. Kamu adalah cahaya bintangku. Cintamu seperti sebuah hadiah."
				+ q3 + "Taeyeon feat. Dean, Starlight"
				+ q2 + "Penggalan lirik ini bisa menggambarkan rasa syukurmu karena telah menemukan orang yang tepat sebagai pendamping hidup. Hari-hari yang kamu lalui bersamanya terasa membahagiakan layaknya mimpi indah yang tak ingin diakhiri.<br>Untuk itu, jangan pernah menyakitinya, ya! Kamu harus selalu menjaga hubungan asmara yang kalian jalin dan hidup berbahagia sampai maut memisahkan.<b> (No.10)"
				+ q4;
	kata[11] = q1 + "Bersyukurlah dengan Apa yang Ada dalam Dirimu"
				+ q2 + "Tak peduli berapa banyaknya hal yang orang lain miliki, mereka semua punya kesalahan."
				+ q3 + "Reply 1988"
				+ q2 + "Adakalanya terbesit rasa rendah diri dalam dirimu saat melihat seseorang yang lebih baik darimu. Tapi, ingatlah kalau hal ini tak ada efek positifnya untuk kehidupanmu.<br>Kalau punya kebiasaan minder dengan kelebihan orang lain, kamu akan susah untuk bisa berkembang. Ingat juga kalau tak ada manusia yang sempurna. Jadi, bersyukurlah dengan apa yang sudah kamu dapatkan.<b> (No.11)"
				+ q4;
	kata[12] = q1 + "Hal Positif Membawa Kebahagiaan"
				+ q2 + "Lebih banyak tersenyum, kurangi khawatir. Lebih banyak berbelas kasih, kurangi menghakimi. Lebih bersyukur, kurangi stres. Lebih banyak mencintai, kurangi membenci."
				+ q3 + "Roy T. Bennett, The Light in the Heart"
				+ q2 + "Kalau kamu sering merasa gelisah dan merasa hidupmu nggak sebaik orang lain, coba mulai sekarang lakukanlah hal-hal positif. Singkirkan semua pikiran jelek yang hanya akan membuatmu kurang bersyukur.<br>Jika bingung bagaimana caranya untuk bisa melakukan hal yang baik bagi dirimu, coba contoh apa yang telah dikatakan oleh Roy T. Bennett lewat kata-kata bijak kehidupan ini. Jika kamu sudah terbiasa melakukan hal positif, tak mustahil kamu akan merasa bahagia.<b> (No.12)"
				+ q4;
	kata[13] = q1 + "Hidup Menjadi Harta yang Paling Berharga"
				+ q2 + "Saat kamu menyadari kalau kamu diberkati tanpa batas, kamu akan sadar bahwa hidup adalah harta yang sangat berharga."
				+ q3 + "Gift Gugu Mona"
				+ q2 + "Orang yang selalu bersyukur tidak akan pernah merasa kekurangan. Dengan bersyukur pula, kamu merasa hidup ini sangat berharga sehingga sayang jika harus dinodai dengan perbuatan-perbuatan yang merugikan.<br>Mengejar apa yang kamu inginkan memang perlu. Tapi, imbangi juga dengan rasa syukur agar kamu menjadi orang yang selalu merasa berkecukupan dan tidak serakah.<b> (No.13)"
				+ q4;
	kata[14] = q1 + "Bersyukur Lebih Baik"
				+ q2 + "Lebih baik mensyukuri apa yang kita miliki daripada menyesali apa yang tidak kita miliki."
				+ q3 + "Ridwan Mets"
				+ q2 + "Menyesal setelah melakukan kesalahan memang wajar. Tapi, menyesali apa yang tidak kamu miliki bisa menjadi racun yang akan membunuhmu perlahan.<br>Daripada melakukan hal yang akan merugikan dirimu sendiri, lebih baik bersyukurlah dengan apa yang kamu miliki meskipun hanya sedikit. Jangan bebani hidupmu dengan rasa penyesalan yang sebenarnya tak perlu.<b> (No.14)"
				+ q4;
	kata[15] = q1 + "Masih Ada Hal Lain yang Harus Disyukuri"
				+ q2 + "Jika tanganmu tak bisa menggapai bintang, bersyukurlah! Setidaknya kakimu masih berpijak di bumi."
				+ q3 + "Harly Umboh"
				+ q2 + "Kata-kata mutiara dari Harly Umboh ini memiliki pesan bahwa janganlah kamu bersedih hati saat mengalami kegagalan. Meskipun kenyataan yang berjalan tak sesuai dengan harapanmu, tetaplah bersyukur.<br>Setidaknya, kamu masih bisa hidup dengan baik. Mungkin saja masih banyak orang di luar sana yang memiliki nasib yang tak lebih baik darimu. Tetap semangat dan jangan terpuruk dalam kesedihan, ya!<b> (No.15)"
				+ q4;
	kata[16] = q1 + "Jalan Menuju Bahagia"
				+ q2 + "Bersyukurlah dan jadilah dirimu sendiri, maka kau akan bahagia."
				+ q3 + "Restu Ilahi"
				+ q2 + "Kalau kamu masih sering merasa sedih, coba renungkan apakah ada sesuatu yang salah dari dalam dirimu atau tidak. Mungkin selama ini rasa syukur dalam dirimu masih kurang.<br>Cobalah untuk berterimakasih atas apa yang telah kamu miliki sampai sekarang. Jangan renggut kebahagiaanmu sendiri dengan hal-hal negatif agar kamu bisa selalu bahagia.<b> (No.16)"
				+ q4;
	kata[17] = q1 + "Jadikan Rasa Syukur sebagai Pijakan"
				+ q2 + "Biarkan rasa syukur menjadi ‘pijakan’ di mana kamu berlutut untuk berdoa setiap malam. Dan biarkan iman menjadi jembatan yang kamu bangun untuk mengalahkan kejahatan dan menyambut kebaikan."
				+ q3 + "Maya Angelou"
				+ q2 + "Saat kamu merasa bersyukur atas sesuatu, jadikanlah hal itu untuk lebih dekat dengan Sang Pencipta. Semakin dekat kamu pada-Nya, semakin berkuranglah potensi untuk melakukan hal-hal yang tidak baik.<br>Tetaplah berbuat baik dalam keadaan apapun. Dengan begitu, hidupmu akan lebih berarti dan rasa bahagia pun akan selalu kamu rasakan.<b> (No.17)"
				+ q4;
	kata[18] = q1 + "Luangkan Waktu untuk Mengucapkan Terima Kasih"
				+ q2 + "Kita harus menemukan waktu untuk berhenti dan berterimakasih kepada orang-orang yang telah membuat perbedaan dalam hidup kita."
				+ q3 + "John F. Kennedy"
				+ q2 + "Kata-kata mutiara di atas ini mungkin bisa menggambarkan keadaan seseorang yang bisa berubah menjadi lebih baik dari sebelumnya. Berubah memang terkadang tidaklah mudah, mungkin bantuan orang lain pun dibutuhkan dalam keadaan seperti ini.<br>Kalau kamu juga pernah merasaannya, jangan lupa untuk berterimakasih kepada mereka yang selama ini telah membantu dan mendukungmu untuk jadi lebih baik.<b> (No.18)"
				+ q4;
	kata[19] = q1 + "Merasa Cukup adalah Hasil dari Bersyukur"
				+ q2 + "Sekaya apapun, tanpa rasa berkecukupan akan melelahkan. Lelah terus berlomba lari mengejar keinginan yang tak berkesudahan."
				+ q3 + "Adjie Silarus"
				+ q2 + "Mungkin kamu pernah mendengar ungkapan seseorang yang benar-benar kaya adalah yang selalu merasa kecukupan. Kalau sudah bergelimang harta tapi masih merasa kurang, ia akan terus terobsesi dengan kekayaan dan membuat hidupnya jadi melelahkan.<br>Jika ingin hidup dalam damai, jangan lupa untuk bersyukur. Bekerja keras memang tidak salah, tapi jangan terlalu terobsesi dengan hasil yang akan membuatmu merasa terus menerus kekurangan.<b> (No.19)"
				+ q4;
	kata[20] = q1 + "Biarkan Terjadi Begitu Saja"
				+ q2 + "Hidup tak harus direncakanan sedemikian rupa. Jalani saja dan biarkan terjadi."
				+ q3 + "Jenny Han, To All the Boys I’ve Loved Before"
				+ q2 + "Buat kamu yang udah pernah baca novelnya Jenny Han yang berjudul To All the Boys I’ve Loved Before pasti tahu kan sama kata-kata mutiara ini? Tapi, jangan hanya sekadar tahu aja, ya. Kalau bisa pahami betul apa maknanya.<br>Terkadang, hidup butuh yang namanya spontanitas. Kalau sudah terbiasa merencanakan apa yang akan dilakukan, kamu bakal kaget dan mungkin tidak siap jika sewaktu-waktu rencanamu berubah atau gagal karena sesuatu yang tidak diduga.<b> (No.20)"
				+ q4;
	kata[21] = q1 + "Hal yang Paling Ditakuti"
				+ q2 + "Hal yang paling kutakuti adalah diriku sendiri. Tidak tahu apa yang akan kulakukan. Tidak tahu apa yang kulakukan sekarang."
				+ q3 + "Haruki Murakami, 1Q84"
				+ q2 + "Mungkin, kata-kata bijak kehidupan dari penulis asal Jepang ini mengajakmu untuk lebih memahami diri. Dengan begitu, kamu bisa paham dengan apa yang kamu lakukan.<br>Jika tidak, kamu akan terombang-ambing oleh kebingunganmu sendiri. Hal tersebut juga bisa membuatmu hidup kurang bersemangat karena tak ada tujuan yang jelas yang ingin kamu capai.<b> (No.21)"
				+ q4;
	kata[22] = q1 + "Menyerah Bukanlah Ide Bagus"
				+ q2 + "Kamu tidak bisa kembali dan mengubah awal saat kamu memulainya, tapi kamu bisa memulainya lagi dari di mana kamu berada sekarang dan ubah akhirnya."
				+ q3 + "C.S Lewis"
				+ q2 + "Kata-kata bijak kehidupan penuh makna ini mengajakmu untuk tidak menyerah saat menemui sebuah hambatan. Meskipun kamu tak bisa kembali ke waktu di mana kamu memulainya, kamu masih bisa mengubah strategi untuk membuat tujuanmu berhasil dicapai.<br>Jadi, tak ada alasan untuk berhenti begitu saja. Kalau kamu menyerah, tak akan pernah ada kemajuan dalam hidupmu.<b> (No.22)"
				+ q4;
	kata[23] = q1 + "Jangan Rendah Diri"
				+ q2 + "Jika kamu berpikir kamu terlalu kecil untuk membuat sebuah perubahan, cobalah tidur di ruangan dengan seekor nyamuk."
				+ q3 + "Dalai Lama"
				+ q2 + "Buat kamu yang suka minder, coba resapi baik-baik pesan yang disampaikan oleh Dalai Lama lewat kata-kata mutiara ini. Jangan pernah merasa kecil, sejatinya masih ada makhluk yang lebih kecil darimu.<br>Jadi, tak ada gunanya untuk merasa rendah diri, bukan? Percaya dirilah, toh kamu tak akan pernah tahu sebelum mencobanya.<b> (No.23)"
				+ q4;
	kata[24] = q1 + "Diam Bukanlah Hal Buruk"
				+ q2 + "Diam adalah sumber dari kekuatan yang luar biasa."
				+ q3 + "Lao Tzu"
				+ q2 + "Terkadang, daripada marah-marah karena kesal, kamu justru lebih memilih untuk diam saja ketimbang membuat masalah semakin rumit. Diam bisa menjadi alat untuk mengendalikan emosi.<br>Dengan begitu, mungkin kamu bisa lebih tenang dalam menghadapi masalah. Menghadapi masalah dengan tenang akan membuatmu cepat memperoleh jalan keluar.<b> (No.24)"
				+ q4;
	kata[25] = q1 + "Buat Hidupmu Menjadi yang Terbaik"
				+ q2 + "Aku memilih untuk membuat sisa hidupku menjadi yang terbaik dalam hidupku."
				+ q3 + "Louise Hay"
				+ q2 + "Ada kalanya kamu merasa hidup ini tak berpihak padamu. Alih-alih menyesal, ada baiknya kamu memandang hidup dari sudut pandang yang berbeda.<br>Lakukanlah hal-hal yang bisa membuat hidupmu lebih baik dari sebelumnya. Dengan begitu, rasa sesal dan kesal yang kamu rasakan perlahan akan pudar.<b> (No.25)"
				+ q4;
	kata[26] = q1 + "Teruslah Bermimpi Meskipun Pernah Gagal"
				+ q2 + "Mimpimu tidak mempunyai tanggal kadaluarsa. Ambil nafas dalam dalam dan coba lagi."
				+ q3 + "KT Witten"
				+ q2 + "Banyak orang yang takut untuk bermimpi karena pernah mengalami kegagalan. Kalau kamu juga sedang merasakan keadaan seperti ini, coba hayati dan ingat terus kata-kata bijak kehidupan di atas.<br>Bermimpilah sebesar mungkin karena tak ada yang bisa membatasi. Selama masih hidup, kamu berhak bermimpi karena mimpi tak punya tanggal kadaluarsa.<b> (No.26)"
				+ q4;
	kata[27] = q1 + "Belajar Menerima Keadaan"
				+ q2 + "Saat kamu tidak menemukan solusi untuk masalahmu, mungkin bukan masalah yang harus dipecahkan, tapi kenyataan yang harus diterima."
				+ q3 + "Anonim"
				+ q2 + "Pernah nggak sih merasa punya masalah yang sepertinya nggak ada habisnya? Mencari solusi apapun ternyata sama sekali nggak membantu.<br>Nah, kata-kata mutiara di atas ini bisa mengingatkanmu untuk melupakan apa yang menjadi masalah dan terima saja kenyataan yang ada. Dengan begitu, hidupmu akan jauh lebih tenang.<b> (No.27)"
				+ q4;
	kata[28] = q1 + "Tentang Kebahagiaan, Realita, dan Ekspektasi"
				+ q2 + "Kebahagiaan sama dengan kenyataan dikurangi ekspektasi."
				+ q3 + "Tom Magliozzi"
				+ q2 + "Hampir sama seperti di atas, kutipan dari Tom Magliozzi ini mengajakmu untuk bisa menerima kenyataan agar bisa mencapai kebahagiaan. Berangan-angan memang boleh, tapi pastikan itu tidak akan menyakitimu.<br>Pun apa yang kamu harapkan tak terpenuhi, janganlah bersedih. Terimalah kenyataan dan lanjutkanlah perjalananmu untuk menjemput kebahagiaan.<b> (No.28)"
				+ q4;
	kata[29] = q1 + "Cara Memaknai Hidup"
				+ q2 + "Hiduplah secara sederhana. Bermimpilah yang besar. Bersyukur. Berilah cinta. Tertawalah yang banyak."
				+ q3 + "Paulo Coelho"
				+ q2 + "Bahagia adalah satu kata yang mudah diucapkan tapi terasa sulit untuk mencapainya. Kalau kamu sedang berusaha untuk bahagia, coba praktikkan apa yang dikatakan oleh Paulo Coelho ini<br>Sebenarnya caranya cukup sederhanya, hanya saja banyak orang yang sengaja merumitkannya dengan masalah yang mereka hadapi. Semoga kamu lekas bahagia, ya!<b> (No.29)"
				+ q4;
	kata[30] = q1 + "Tingkatkan Rasa Percaya Dirimu"
				+ q2 + "Jangan bersembunyi. Berdirilah, angkat kepalamu, dan tunjukkan kepada mereka apa yang kamu dapatkan."
				+ q3 + "Joe Mari Fadrigalan"
				+ q2 + "Kata-kata bijak kehidupan dari Joe Mari Fadrigalan ini merupakan sebuah sentilan bagi kamu yang suka minder jika harus berhadapan dengan orang lain. Padahal rasa minder adalah sebuah bumerang yang bisa menghancurkan dirimu sendiri.<br>Mulai sekarang, cobalah untuk meningkatkan rasa percaya dirimu. Tunjukkanlah kelebihanmu pada orang orang yang sering merendahkanmu.<b> (No.30)"
				+ q4;
	kata[31] = q1 + "Jangan Pedulikan Omongan Negatif Orang Lain"
				+ q2 + "Kadang, orang-orang di sekitarmu tidak mau memahami perjalananmu. Mereka tidak butuh, itu bukan untuk mereka."
				+ q3 + "Joubert Botha"
				+ q2 + "Kalau kamu sering menerima kritikan dari orang lain yang kurang membangun dan terkesan mendiktemu, janganlah dipedulikan. Hanya dirimu sendiri yang memahami apa yang akan kamu lakukan, bukan orang lain.<br>Saat kamu mengikuti apa kehendak mereka, kamu tak akan pernah bisa memenuhi keinginanmu sendiri. Toh, itu jalan hidupmu, bukan jalan hidup orang lain. Jadi, percaya dirilah dengan apa yang kamu lakukan tanpa mendengar hal negatif dari orang lain.<b> (No.31)"
				+ q4;
	kata[32] = q1 + "Rasa Takut dan Sesal Tak Ada Gunanya"
				+ q2 + "Takut itu bodoh. Begitu juga dengan rasa sesal."
				+ q3 + "Anonim"
				+ q2 + "Tak jarang, kamu akan merasa kurang percaya diri saat melakukan sesuatu. Salah satu alasannya mungkin kamu takut dengan kegagalan.<br>Kalau perasaan itu muncul di benakmu, ingatlah selalu kata-kata bijak kehidupan di atas ini. Saat kamu takut, nantinya kamu akan menyesal karena tak pernah melakukan hal yang kamu inginkan.<b> (No.32)"
				+ q4;
	kata[33] = q1 + "Terus Berusaha"
				+ q2 + "Jangan berhenti sampai kamu merasa bangga."
				+ q3 + "Anonim"
				+ q2 + "Kata-kata mutiara di atas ini mengajakmu untuk jangan terlalu cepat merasa puas atas pencapaianmu. Kalau kamu belum benar-benar merasa bangga, jangan berhenti sampai di situ saja.<br>Kerahkan segala usaha yang kamu punya untuk mencapai tujuan hidupmu. Jangan menyerah di tengah jalan kalau kamu tidak mau menyesal di kemudian hari.<b> (No.33)"
				+ q4;
	kata[34] = q1 + "Memulai untuk Jadi Luar Biasa"
				+ q2 + "Kamu tidak perlu menjadi luar biasa untuk memulai, tapi kamu harus memulai untuk menjadi luar biasa."
				+ q3 + "Zig Ziglar"
				+ q2 + "Seperti apa yang telah dijelaskan di salah satu kutipan kata-kata bijak kehidupan untuk menggapai kesuksesan sebelumnya, kunci untuk menuju sukses adalah dengan persiapan. Untuk melakukan persiapan, kamu tak perlu untuk melakukannya dengan luar biasa.<br>Berusahalah semampumu dan jangan memaksakan jika kamu tidak bisa. Lakukan pelan-pelan, nikmati prosesnya, dan raih hal yang luar biasa dari usahamu itu.<b> (No.34)"
				+ q4;
	kata[35] = q1 + "Ambillah Kesempatan Sesegera Mungkin"
				+ q2 + "Kesempatan seperti matahari terbit. Jika kamu menunggunya terlalu lama, kamu akan merindukannya."
				+ q3 + "William Arthur Ward"
				+ q2 + "Mungkin boleh dibilang kalau kata-kata mutiara ini menyadarkanmu kalau kesempatan itu tidak datang dua kali. Jika kamu menyia-nyiakannya, kamu akan merindukannya.<br>Kalau bisa datang lagi sih berarti itu rejekimu. Tapi, tak ada yang tahu kan kesempatan tersebut bisa datang lagi atau tidak? Jadi, selagi masih diberi kesempatan, gunakanlah dengan sebaik-baiknya, ya!<b> (No.35)"
				+ q4;
	kata[36] = q1 + "Jangan Takut Membuat Kesalahan"
				+ q2 + "Membuat kesalahan lebih baik daripada kesempurnaan yang palsu."
				+ q3 + "Kush and Wizdom"
				+ q2 + "Yang namanya manusia pasti nggak ada yang sempurna. Kadang, atau bahkan sering sekali kita berbuat kesalahan.<br>Kesalahan apapun itu, jangan dijadikan sebagai alasan yang dapat membuat hidupmu terpuruk. Jadikanlah kesalahan menjadi motivasi untuk bisa terus maju. Hal itu tentu lebih baik daripada sok sempurna tapi hanya berpura pura.<b> (No.36)"
				+ q4;
	kata[37] = q1 + "Jangan Pedulikan Apa yang Membuatmu Takut"
				+ q2 + "Fokuslah dengan ke mana kamu akan pergi, bukan pada ketakutanmu."
				+ q3 + "Tony Robbins"
				+ q2 + "Kata-kata mutiara satu ini mengajakmu untuk jangan terjebak dalam rasa takut. Karena hal tersebut hanya akan membatasimu untuk meraih tujuan yang sudah kamu rencanakan.<br>Fokuslah pada apa yang kamu inginkan. Berusahalan sekeras mungkin sampai kamu bisa mewujudkannya.<b> (No.37)"
				+ q4;
	kata[38] = q1 + "Ikuti Passion-mu"
				+ q2 + "Kalau kamu ingin sukses di dunia ini, kejarlah passion-mu, bukan tagihanmu."
				+ q3 + "Jen Welter"
				+ q2 + "Terkadang, daripada menggejar passion, kita justru rela melakukan pekerjaan yang sebenarnya tidak diinginkan hanya karena upahnya yang besar. Padahal banyak uang yang kita miliki nggak menjamin kebahagiaan kita.<br>Hanya dengan mengejar uang demi bisa membayar tagihan tidak akan membuat hidupmu merasa tenang. Mulai sekarang, kejarlah apa yang memang kamu cita citakan. Kerjakan sesuatu yang kamu sendiri suka melakukannya, bukan karena terpaksa.<b> (No.38)"
				+ q4;
	kata[39] = q1 + "Rencana Orang Bahagia"
				+ q2 + "Orang bahagia merencanakan aksi, bukan hasil."
				+ q3 + "Dennis Wholey"
				+ q2 + "Ingin bisa bahagia? Cobalah untuk berfokus pada proses dan jalani apa yang sudah kamu rencanakan.<br>Perkara berhasil atau tidak adalah urusan belakangan. Yang terpenting adalah kamu bisa menjalaninya dengan sepenuh hati dan itu tidak akan menyiksamu.<b> (No.39)"
				+ q4;
	kata[40] = q1 + "Jangan Takut"
				+ q2 + "Kamu masih hidup. Dan itu berarti kamu akan mencintai dan dicintai… dan pada akhirnya, tidak ada yang benar-benar penting."
				+ q3 + "Nicholas Sparks, The Best of Me"
				+ q2 + "Terkadang, ada masanya rasa depresi muncul karena kamu merasa tak ada seorang pun yang memperhatikanmu. Kalau kamu merasa seperti itu, coba ingat-ingat selalu kata-kata bijak kehidupan yang dikatakan Nicholas Sparks dalam kutipan di atas ini.<br>Selama kamu masih hidup, buang jauh-jauh pikiran negatif yang hanya akan menghancurkan dirimu sendiri. Percayalah kalau masih ada orang yang mencintaimu dan bisa kamu cintai. Pada akhirnya, pikiran buruk yang bersarang di otakmu bukanlah hal yang benar-benar penting.<b> (No.40)"
				+ q4;
	kata[41] = q1 + "Tingkatkan Keberanianmu"
				+ q2 + "Jadilah berani. Ambillah risiko. Tidak ada yang bisa mengganti pengalaman."
				+ q3 + "Paulo Coelho"
				+ q2 + "Jika kamu sering merasa kegagalan yang kamu alami adalah berasal dari rasa takutmu sendiri, mulai sekarang cobalah untuk lebih berani lagi dalam melakukan sesuatu. Pun kembali menemui kegagalan lagi, jadikanlah sebagai pembelajaran.<br>Dengan begitu, kamu jadi tahu antara mana yang harus dan tidak dilakukan dan terhindar dari kesalahan yang sama. Proses tersebut merupakan pengalaman berharga yang tak bisa digantikan dengan apapun. <b> (No.41)"
				+ q4;
	kata[42] = q1 + "Sumber Pengetahuan"
				+ q2 + "Satu-satunya sumber dari pengertahuan adalah pengalaman."
				+ q3 + "Albert Einstein"
				+ q2 + "Sekeras apapun kamu belajar, pelajaran paling berharga yang akan kamu dapat adalah dari pengalamanmu sendiri. Karena dari situ kamu bisa belajar tentang mana yang benar dan salah.<br>Kata-kata bijak kehidupan dari Albert Einstein ini nampaknya juga menggambarkan penyataan tersebut. Jadi, jangan takut untuk mencoba, jika gagal, kamu perlu mencoba lagi tanpa menyerah.<b> (No.42)"
				+ q4;
	kata[43] = q1 + "Hati Seorang Sukarelawan"
				+ q2 + "Tidak ada yang lebih kuat dari hati seorang sukarelawan."
				+ q3 + "Pearl Harbour"
				+ q2 + "Dari kata-kata mutiara satu ini mungkin kamu menangkap maksud bahwa menjadi seorang sukarelawan merupakan suatu kebaikan yang tak semua orang mampu melakukannya. Sukarelawan merupakan seseorang yang memiliki hati yang sangat tulus.<br>Dalam melakukan pekerjaannya untuk membantu orang yang membutuhkan pun juga mungkin tidak mudah dan selalu mulus. Ada banyak cobaan yang harus dihadapinya, tapi dengan hati yang tulus dan kuat, ia bisa mengatasinya.<b> (No.43)"
				+ q4;
	kata[44] = q1 + "Tentang Sebuah Kepercayaan"
				+ q2 + "Beberapa orang tidak bisa percaya pada dirinya sendiri sampai orang lain percaya padanya terlebih dulu."
				+ q3 + "Good Will Hunting"
				+ q2 + "Terkadang, rasa percaya dari seseorang untukmu justru lebih besar dari rasa percayamu untuk dirimu sendiri. Hal ini mungkin terjadi karena kamu kurang percaya diri dan kurang memahami dirimu sendiri.<br>Kamu akan menunggu orang lain agar percaya kepadamu terlebih dulu sebelum kamu percaya pada dirimu sendiri. Jika hal itu sering terjadi, mulai sekarang cobalah tanamkan rasa percaya dirimu dan jangan pernah berbohong kepada diri sendiri.<b> (No.44)"
				+ q4;
	kata[45] = q1 + "Tak Ada yang Mustahil"
				+ q2 + "Kelihatannya semua itu mustahil sampai semuanya terbukti. "
				+ q3 + "Nelson Mandela"
				+ q2 + "Jika kita belum mengusahakan sesuatu secara serius, mungkin kita menganggap hal tersebut adalah mustahil. Apalagi jika kita selalu menganggapinya dengan sikap pesimis.<br>Padahal jika kita tak menyerah dan berjuang untuk mengusahakannya, belum tentu hal tersebut mustahil untuk terjadi. Kata-kata bijak kehidupan ini bisa kamu jadikan pengingat ketika sedang merasa pesimis akan sesuatu.<b> (No.45)"
				+ q4;
	kata[46] = q1 + "Hidup Tanpa Merepotkan Orang Lain"
				+ q2 + "Dan alangkah indah kehidupan tanpa merangkak-rangkak di hadapan orang lain. "
				+ q3 + "Pramoedya Ananta Toer"
				+ q2 + "Manusia memang makhluk sosial yang tidak bisa hidup tanpa orang lain. Tapi, bukan berarti kita tidak bisa mengandalkan diri sendiri dan selalu bergantung pada orang lain.<br>Ada kalanya, kita harus bisa hidup secara mandiri dan melakukan apapun sendiri selagi masih mampu. Meminta bantuan orang lain bisa kita lakukan jika memang benar-benar dibutuhkan.<b> (No.46)"
				+ q4;
	kata[47] = q1 + "Beri Nilai Pada Usaha"
				+ q2 + "Beri nilai dari usahanya jangan dari hasilnya. Baru kita bisa menilai kehidupan. "
				+ q3 + "Albert Einstein"
				+ q2 + "Kata-kata bijak kehidupan satu ini mengajarkan kita untuk menilai sesuatu bukan dari hasilnya, melainkan dari usaha atau prosesnya. Jika hanya melihat hasil, kita tak akan pernah tahu bagaimana usaha keras yang ada di baliknya.<br>Sehingga kita tidak bisa menilai dengan lebih objektif. Hampir sama dengan pepatah jangan memandang buku dari sampulnya saja, sesuatu yang dilihat dari luar belum tentu baik seperti yang terlihat sekilas.<b> (No.47)"
				+ q4;
	kata[48] = q1 + "Makna Air Mata"
				+ q2 + "Air mata berasa asin itu karena air mata adalah garam kehidupan. "
				+ q3 + "Buya HamkaKata-kata mutiara kehidupan ini seperti menggambarkan bahwa dalam menjalani hidup, pasti air mata turut menemani langkah kita. Air mata merupakan saksi bisu ketika kita sedang berjuang dalam kehidupan.<br>Rasa air mata yang asin merupakan garam dalam kehidupan. Tanpa adanya air mata, hidup kita akan terasa hambar.<b> (No.48)"
				+ q4;
	kata[49] = q1 + "Hal Berharga dalam Kehidupan"
				+ q2 + "Yang paling berharga dan hakiki dalam kehidupan adalah dapat mencintai, dapat iba hati, dapat merasai kedukaan. "
				+ q3 + "Soe Hok Gie"
				+ q2 + "Manusia memang dianugerahi dengan perasaan cinta yang membedakannya dengan makhluk ciptaan Tuhan lainnya. Bayangkan saja jika ada seseorang tidak memiliki perasaan, hidupnya pasti datar datar saja.<br>Ia tidak akan peka terhadap kehidupan di sekitarnya dan bisa jadi tidak mendapatkan perhatian dari orang lain, karena ia tak memiliki sifat simpati maupun empati.<b> (No.49)"
				+ q4;
	kata[50] = q1 + "Jadilah Orang Baik"
				+ q2 + "Jangan hidup seperti preman. Jangan berbuat dosa. Jangan mencuri dari orang lain. Bahkan jika kamu hanya hidup untuk satu hari, jadilah orang baik. Hiduplah sebagai orang baik. Jika tidak, kamu akan menyesalinya selama sisa hidupmu."
				+ q3 + "Wise Prison Life"
				+ q2 + "Kamu tidak ingin menyesal di masa depan? Kalau begitu, ingat-ingat terus pesan dari kata-kata bijak kehidupan yang diambil dari drama Korea Wise Prison Life ini.<br>Yang namanya manusia memang tak luput dari yang namanya kesalahan. Tapi, bukan berarti kamu bisa melakukannya sesuka hati, ya. Berusahalah untuk selalu berbuat baik tanpa bosan agar tidak menyesal nantinya.<b> (No.50)"
				+ q4;
	kata[51] = q1 + "Faktor yang Bisa Mengubah Kehidupan"
				+ q2 + "Orang tidak berubah dengan waktu. Orang berubah oleh pilihan."
				+ q3 + "Pen For a Thought"
				+ q2 + "Waktu mungkin bisa mengubah orang, tapi hanya dari fisik saja. Sedangkan untuk perubahan yang lainnya, seperti sifat atau nasib, pilihanlah yang berperan penting.<br>Jika ingin berubah menjadi lebih baik, jangan hanya menunggu saja. Tapi, buatlah pilihan yang terbaik dalam hidupmu agar kamu bisa menemukan hidup yang lebih bahagia dibandingkan dengan kehidupanmu di masa lalu.<b> (No.51)"
				+ q4;
	kata[52] = q1 + "Wujudkan Keinginanmu"
				+ q2 + "Orang-orang tak bisa melakukannya sendiri, mereka ingin memberi tahumu kalau kamu tak bisa melakukannya. Jika kamu menginginkan sesuatu, pergilah untuk mendapatkannya."
				+ q3 + "The Pursuit of Happyness"
				+ q2 + "Kalau punya keinginan, segera mulai dan berusahalah untuk mewujudkannya. Jika ada orang lain yang bilang kamu tidak bisa melakukannya, abaikan saja.<br>Kegagalan atau keberhasilanmu tidak akan berpengaruh dalam kehidupan mereka. Untuk itu, lakukanlah apa yang menurutmu benar tanpa mempedulikan hal negatif dari orang lain.<b> (No.52)"
				+ q4;
	kata[53] = q1 + "Memanfaatkan Waktu"
				+ q2 + "Yang harus kita putuskan adalah apa yang harus dilakukan dengan waktu yang diberikan kepada kita."
				+ q3 + "Lord of the Rings: The Fellowship of the Ring"
				+ q2 + "Kata-kata mutiara ini mengingatkanmu untuk jangan menyia-nyiakan waktu yang telah diberikan oleh Tuhan. Kamu tidak akan tahu berapa banyak waktu yang bisa kamu miliki di dunia ini.<br>Manfaatkanlah dengan melakukan hal-hal baik. Jangan buang-buang waktumu untuk hal-hal yang tak berguna.<b> (No.53)"
				+ q4;
	kata[54] = q1 + "Setiap Masalah Pasti Punya Jalan Keluar"
				+ q2 + "Tak peduli berapa lama kamu telah bepergian ke arah yang salah, kamu bisa selalu kembali."
				+ q3 + "Anonim"
				+ q2 + "Kata-kata bijak kehidupan ini berpesan bahwa kegagalan bukanlah akhir dari segalanya. Saat gagal, masih ada jalan pulang dan memulainya dari awal lagi.<br>Jadi, tak ada alasan untuk berhenti dan menyerah begitu saja. Selama masih hidup, berusahalah sekuat tenaga untuk mencapai apa yang sudah menjadi tujuanmu.<b> (No.54)"
				+ q4;
	kata[55] = q1 + "Arti Kebahagiaan"
				+ q2 + "Terkadang arti kebahagiaan dapat terjadi karena kita melihat masa lalu dan membawanya ke masa depan untuk bercermin tentang kehidupan kita saat ini. "
				+ q3 + "Agnes Davonar"
				+ q2 + "Banyak orang yang bilang kalau bahagia itu sederhana. Ketika saat ini kita tidak merasa bahagia, mungkin kita perlu melihat lagi ke belakang dan mengingat hal apa saja yang dulu pernah membuat kita bahagia.<br>Seperti kata-kata mutiara kehidupan di atas, mungkin kebahagiaan yang dulu kita rasakan bisa menghapus rasa sedih yang ada saat ini. Kita juga bisa belajar bagaimana caranya agar bisa bahagia dari pengalaman terdahulu.<b> (No.55)"
				+ q4;
	kata[56] = q1 + "Sebuah Ironi"
				+ q2 + "Aku mengira bahwa salah satu dari sekian banyak ironi kehidupan adalah melakukan sesuatu yang salah di momen yang tepat. "
				+ q3 + "Charlie Chaplin"
				+ q2 + "Manusia memang tidak pernah luput dari kesalahan. Namun, setidaknya kita harus bisa mengontrol diri agar tidak membuat kesalahan dalam kesempatan yang baik.<br>Hal tersebut bisa menjadi fatal dan dapat merusak suasana. Kutipan ini bisa kamu jadikan sebagai kata-kata mutiara kehidupan dan pembinaan diri untuk bisa bersikap lebih baik lagi.<b> (No.56)"
				+ q4;
	kata[57] = q1 + "Indahnya Kehidupan"
				+ q2 + "Kehidupan adalah bunga dan cinta adalah madunya. "
				+ q3 + "Victor Hugo"
				+ q2 + "Jika kita bisa memaknai kehidupan, kita akan menemukan di mana letak keindahannya. Terutama jika kehidupan kita dipenuhi oleh rasa cinta, tentunya hidup akan jauh lebih berwarna.<br>Kata-kata bijak kehidupan ini menggambarkan bahwa kehidupan dan cinta merupakan perpaduan yang sempurna dan merupakan satu kesatuan yang tak bisa dipisahkan.<b> (No.57)"
				+ q4;
	kata[58] = q1 + "Pengingat untuk Selalu Bersyukur"
				+ q2 + "Jangan terlalu mengejar kehidupan, materi, nanti kita lupa hakikat hidup ini sendiri, dan lupa melaluinya penuh kesyukuran. "
				+ q3 + "Tere Liye"
				+ q2 + "Hidup tak melulu tentang mengejar materi, jangan sampai hanya sibuk dengan materi namun lupa bagaimana mensyukuri apa yang telah kita dapatkan. Kata-kata bijak kehidupan ini bisa menjadi pengingat kita untuk selalu bersyukur.<br>Dengan bersyukur, kita bisa menjauhkan perasangka buruk dan bisa menilai segala sesuatu dengan positif. Hidup pun menjadi lebih bermakna jika kita tahu bagaimana caranya bersyukur.<b> (No.58)"
				+ q4;
	kata[59] = q1 + "Pentingnya Menjaga Kebaikan"
				+ q2 + "Seseorang harus menjaga kebaikannya. Karena itu adalah investasi yang baik bagi kehidupan. "
				+ q3 + "Soeharto"
				+ q2 + "Kata-kata bijak kehidupan manusia satu ini mengajak kita untuk selalu berbuat baik dan mempertahankan kebaikan yang ada di hidup kita. Berbuat baik tak pernah ada salahnya.<br>Semua perbuatan yang kita lakukan akan mendapat balasannya. Untuk itu, jika kita terbiasa berbuat baik, kelak kita juga akan diperlakukan baik oleh orang lain.<b> (No.59)"
				+ q4;
	kata[60] = q1 + "Ketika Mencintai Seorang Wanita"
				+ q2 + "Saat kamu mencintai seorang wanita, dia menjadi sebuah minuman. Dia menjadi bulan. Dia menjadi lagu. Kemudian dia berubah menjadi duniamu."
				+ q3 + "Flower Boy Ramen Shop"
				+ q2 + "Saat belum saling mencintai, mungkin kamu menganggap pasanganmu dulu adalah orang yang biasa-biasa saja. Namun, setelah cinta tumbuh, kamu menganggapnya sebagai bagian yang penting dari hidupmu.<br>Kehilangannya sama saja dengan kehilangan separuh hidupmu. Kiranya, hal inilah yang digambarkan oleh kata-kata mutiara dari salah satu judul drama Korea ini.<b> (No.60)"
				+ q4;
	kata[61] = q1 + "Hanya Butuh Momen"
				+ q2 + "Untuk merasakan cinta lagi, kamu hanya membutuhkan sebuah momen."
				+ q3 + "It’s Okay, That’s Love"
				+ q2 + "Buat kamu yang pernah gagal dalam urusan percintaan, jangan bersedih. Mungkin kamu belum menemukan orang yang tepat saja.<br>Untuk bisa bertemu dengan seseorang yang mampu mencintaimu dengan tulus hanya butuh waktu. Jadi, tidak ada alasan untuk terus menerus bersedih, ya! Kamu harus tetap semangat!<b> (No.61)"
				+ q4;
	kata[62] = q1 + "Tidak Ditakdirkan Bersama"
				+ q2 + "Beberapa orang ditakdirkan untuk saling jatuh cinta, tapi tidak ditakdirkan untuk bersama."
				+ q3 + "500 Days of Summer"
				+ q2 + "Tak sedikit pasangan yang telah menjalin hubungan asmara dalam waktu yang lama, namun akhirnya harus berpisah. Seperti apa yang disampaikan oleh kata-kata mutiara ini, keduanya mungkin pernah ditakdirkan untuk jatuh cinta, namun tidak ditakdirkan untuk bisa hidup bersama selamanya.<br>Kalau kamu juga mengalami kejadian semacam ini, janganlah terlalu larut dalam kesedihan. Mungkin saja dia bukan orang yang tepat untuk mendampingimu. Percayalah kalau Tuhan sudah mempersiapkan seseorang yang tepat untuk menjadi jodohmu.<b> (No.62)"
				+ q4;
	kata[63] = q1 + "Ingin Segera Memulai Sisa Hidup"
				+ q2 + "Saat kamu menyadari kalau kamu ingin menghabiskan sisa hidupmu dengan seseorang, kamu ingin sisa hidupmu bisa dimulai secepat mungkin."
				+ q3 + "When Harry Met Sally"
				+ q2 + "menemukan seseorang yang tepat untuk menemani menjalani sisa hidupmu memang membahagiakan. Saat kamu mulai menjalin hubungan dengan seseorang dan merasa kalau dia adalah jodohmu, kamu pun tak ingin melewati sehari pun tanpanya.<br>Untuk itu, kamu patut bersyukur karena telah memilikinya. Perlakukanlah dia sebaik mungkin agar hubungan kalian bisa bertahan hingga maut memisahkan.<b> (No.63)"
				+ q4;
	kata[64] = q1 + " Cinta dan Kesabaran"
				+ q2 + "Kesabaran adalah tanda dari cinta sejati. Jika kamu benar-benar mencintai seseorang, kamu akan menjadi lebih sabar dengan orang tersebut."
				+ q3 + "Thich Nhat Hanh"
				+ q2 + "Mencintai seseorang sejatinya adalah mampu menerima bagaimanapun keadaannya, baik kelebihan maupun kelemahannya. Kalau kamu mencintai kekasihmu, kamu harus sabar dan mau menerima segala sesuatu yang ada pada dirinya.<br>Memang, terkadang ada tingkah lakunya yang membuat kamu kesal. Tapi, janganlah melampiaskan kekesalanmu padanya. Kalau ada masalah, bicarakanlah baik-baik dengan kepala dingin agar tidak ada yang memicu berakhirnya hubunganmu dengan sang kekasih.<b> (No.64)"
				+ q4;
	kata[65] = q1 + "Kebaikan dalam Cinta"
				+ q2 + "Mencari cinta adalah baik, tapi memberi cinta lebih baik. "
				+ q3 + "William Shakespeare"
				+ q2 + "Manusia memang tak bisa hidup tanpa cinta, oleh karena itu banyak orang yang mencari cinta agar hidupnya bisa lebih bermakna. Hidup bersama orang tersayang memang menjadi keinginan banyak orang.<br>Namun, selain mencari cinta ada baiknya kita juga bisa memberi cinta. Kata-kata bijak kehidupan cinta ini mengajarkan untuk bisa saling memberi dan menerima agar hidup menjadi lebih seimbang.<b> (No.65)"
				+ q4;
	kata[66] = q1 + "Jangan Melukai Seseorang yang Dicintai"
				+ q2 + "Cinta itu burung yang indah, yang mengemis untuk ditangkap tapi menolak tuk dilukai. "
				+ q3 + "Khalil Gibran"
				+ q2 + "Kata-kata mutiara cinta sejati ini menjadi pengingat untukmu agar tak menyia-nyiakan atau melukai seseorang yang kamu cintai. Karena perasaan ini datang dengan tulus, baiknya cinta dijaga dengan baik.<br>Melukainya hanya akan membuat orang yang kamu sayangi pergi meninggalkanmu. Tentunya, hal ini bukanlah hal yang diinginkan dalam menjalani sebuah hubungan.<b> (No.66)"
				+ q4;
	kata[67] = q1 + "Cinta adalah Memandang ke Arah yang Sama"
				+ q2 + "Cinta tidak berupa tatapan satu sama lain, tetapi memandang keluar bersama ke arah yang sama."
				+ q3 + "B.J. Habibie"
				+ q2 + "Siapa yang tidak tersentuh dengan kisah cinta B.J. Habibie bersama istrinya, Hasri Ainun Besari. Kisah romantisnya bahkan diangkat ke dalam film layar lebar yang banyak menarik perhatian. Mungkin kamu juga salah satunya.<br>Rasa sayangnya terhadap istri menjadi panutan banyak orang. Kata-kata bijak tentang cinta sejati ini bisa kamu jadikan sebagai inspirasi agar bisa menjalin hubungan yang romantis bersama pasanganmu.<b> (No.67)"
				+ q4;
	kata[68] = q1 + "Proses Menuju Cinta yang Suci"
				+ q2 + "Bahwasanya cinta yang bersih dan suci (murni) itu tidaklah tumbuh dengan sendirinya. "
				+ q3 + "Buya Hamka"
				+ q2 + "Cinta yang baik tumbuh karena adanya usaha dari kedua sejoli. Hal tersebut tidak bisa tumbuh dengan sendirinya tanpa ada perjuangan di dalamnya.<br>Kalau kamu banyak mendengar orang bilang cinta harus rela berkorban, hal itu ada benarnya juga. Kamu harus berjuang agar cintamu bisa tetap bertahan.<b> (No.68)"
				+ q4;
	kata[69] = q1 + "Tujuan Cinta"
				+ q2 + "Cinta bukanlah bertahan seberapa lama. Tetapi seberapa jelas dan ke arah mana. "
				+ q3 + "Emha Ainun Nadjib"
				+ q2 + "Tujuan dalam sebuah hubungan adalah kejelasan statusnya akan dibawa ke mana. Hubungan yang sudah terjalin lama tak menjamin keberhasilannya.<br>Tak sedikit hubungan yang harus berakhir walalupun telah terjalin begitu lama akibat tak jelas statusnya akan dibawa ke arah mana. Kata-kata bijak kehidupan tentang cinta ini mungkin bisa kamu jadikan pegangan untuk menghindari rasa sedih dan galau karena status.<b> (No.69)"
				+ q4;
	kata[70] = q1 + "Tumbuhkan Rasa Percaya Diri pada Sahabatmu"
				+ q2 + "Kalau kamu mau memakai gaun seperti itu, kamu harus memakainya dengan percaya diri."
				+ q3 + "Me Before You"
				+ q2 + "Saat temanmu merasa kurang percaya diri, tugasmu adalah menyuntikkan sugesti-sugesti positif untuk membangkitkan kepercayaan dirinya. Kamu harus selalu ada untuknya, terutama saat dirinya sedang berada dalam kondisi yang membutuhkan dukungan.<br>Misalnya saja ia ingin pergi ke suatu acara dan kurang percaya diri dengan gaun yang dipakainya, kamu harus menyemangatinya. Sejatinya, kalau ia memakainya dengan percaya diri, gaun itu akan nampak bagus di tubuhnya.<b> (No.70)"
				+ q4;
	kata[71] = q1 + "Sebuah Pertemanan yang Luar Biasa"
				+ q2 + "Dia adalah temanku karena kami berdua tahu bagaimana rasanya membuat orang cemburu pada kami."
				+ q3 + "Clueless"
				+ q2 + "Bagaimana hebatnya persahabatan yang kamu miliki? Mungkin saking luar biasanya, orang lain bisa jadi cemburu atas kedekatanmu dengan sahabat.<br>Kiranya, kata-kata bijak kehidupan tentang bersahabatan yang diambil dari film Clueless ini bisa menggambarkan keluarbiasaan persahabatan kalian. Jaga selalu kebersamaan dan kekompakan kalian, ya! <b> (No.71)"
				+ q4;
	kata[72] = q1 + "Teman Sejati Tak Akan Berbohong"
				+ q2 + "Hanya teman sejati yang benar-benar jujur."
				+ q3 + "Shrek"
				+ q2 + "Kamu pasti tahu kan kalau dibohongi itu sakit? Kalau kamu adalah teman yang baik, kamu tak akan pernah sekali pun berusaha membohongi seseorang yang menjadi temanmu.<br>Kalau temanmu juga berlaku demikian, berarti ia adalah teman sejatimu. Untuk itu, jangan pernah khianati kepercayaannya padamu kalau kamu tidak ingin kehilangannya.<b> (No.72)"
				+ q4;
	kata[73] = q1 + "Hadiah Terbaik"
				+ q2 + "Aku tidak akan menukarnya dengan apapun. Tidak pernah, tidak, tidak pernah. Persahabatanmu adalah hadiah terbaik yang pernah ada."
				+ q3 + "Tigger, Winnie the Pooh"
				+ q2 + "Persahabatan bukanlah barang yang jika sudah bosan bisa ditukar dengan hal lain. Memiliki sahabat adalah salah satu hal yang wajib kamu syukuri karena tidak semua orang bisa memiliki sahabat baik.<br>Tak jarang ada orang yang memilih untuk hidup sendiri tanpa teman karena ia tak mudah percaya dengan orang lain. Untuk itu, persahabatan merupakan hadiah terbaik yang kamu dapatkan dalam hidup. Setidaknya, itulah yang digambarkan oleh kata-kata bijak kehidupan di atas ini.<b> (No.73)"
				+ q4;
	kata[74] = q1 + "Teman adalah Saudara"
				+ q2 + "Kami adalah keluarga, kamu tetap bersama."
				+ q3 + "Toy Story"
				+ q2 + "Saking dekatnya kamu dengan sahabatmu, mungkin kamu bisa menganggapnya sebagai keluargamu sendiri. Kamu mungkin tidak bisa memilih lahir dari keluarga mana, tapi teman bisa menjadi keluarga yang bisa kamu pilih.<br>Seorang sahabat bisa menjadi kakak yang sangat perhatian padamu dan bisa menjadi seorang adik yang membutuhkan perhatianmu. Saking dekatnya hubungan yang kamu miliki dengannya, kamu pun tak akan sanggup untuk menyakitinya selayaknya yang kamu lakukan terhadap saudaramu.<b> (No.74)"
				+ q4;
	kata[75] = q1 + "Arti Sahabat"
				+ q2 + "Apakah sahabat itu? Satu jiwa yang berada dalam dua tubuh yang berbeda. "
				+ q3 + "Aristoteles"
				+ q2 + "Sahabat yang baik memang bukan sesuatu yang bisa kamu temukan dengan mudah. Tapi jika sudah menemukannya, langkah kalian akan selalu berjalan seiringan.<br>Kata-kata bijak kehidupan tentang persahabatan ini menggambarkan sepasang sahabat merupakan dua orang yang berbeda namun memiliki satu jiwa yang sama.<b> (No.75)"
				+ q4;
	kata[76] = q1 + "Gunanya Sahabat"
				+ q2 + "Meskipun candaanmu tak lucu, sahabat yang setia selalu saja tertawa. Meskipun masalahmu tak pelik, mereka tetap merasa simpati. "
				+ q3 + "Arnold H. Glasgow"
				+ q2 + "Sahabat adalah seseorang yang selalu ada dalam keadaan apapun. Mereka selalu bersedia mendengarkan keluh kesahmu dan mendengarkan masalahmu walaupun sebenarnya tak terlalu kompleks.<br>Jika menemukan sahabat yang seperti itu, tugasmu adalah jangan menyia-nyiakannya. Balaslah sikap baiknya, kalau perlu kamu harus bisa lebih baik darinya.<b> (No.76)"
				+ q4;
	kata[77] = q1 + "Cinta Seorang Sahabat"
				+ q2 + "Sahabat menunjukkan cintanya disaat ada masalah, bukan saat yang bahagia. "
				+ q3 + "Euripides"
				+ q2 + "Seperti yang sudah dibahas sebelumnya, seorang sahabat akan selalu punya waktu untukmu tak peduli apapun keadaannya. Entah itu dalam keadaan suka maupun duka.<br>Terutama pada saat kamu sedang menghadapi masalah. Ia akan ada di dekatmu untuk menunjukkan cintanya dengan cara mendukungmu.<b> (No.77)"
				+ q4;
	kata[78] = q1 + "Bersama Teman Jauh Lebih Baik"
				+ q2 + "Berjalan dalam kegelapan lebih baik jika bersama teman, daripada berjalan sendirian dalam terang. "
				+ q3 + "Helen Keller"
				+ q2 + "Kata-kata mutiara tentang persahabatan ini menyadarkan kita betapa pentingnya kehadiran seorang teman. Meskipun hidup kita baik-baik saja, tetap ada yang kurang jika kita tidak memiliki teman.<br>Walaupun kita sedang dirundung masalah, jika memiliki seorang teman di samping kita, maka kita akan lebih nyaman karena bisa menghadapinya bersama-sama.<b> (No.78)"
				+ q4;
	kata[79] = q1 + "Cara Menghitung Umur dan Kehidupan"
				+ q2 + "Hitunglah umurmu dengan teman, bukan tahun. Hitunglah hidupmu dengan senyum, bukan air mata. "
				+ q3 + "John Lennon"
				+ q2 + "Kira-kira apa ya maksud dari kata-kata mutiara ini? Mungkin yang dimaksud adalah meskipun sudah berumur banyak, kalau tak punya teman maka tak ada artinya.<br>Sedangkan, jika dalam hidup hanya dipenuhi dengan air mata dan sedikit senyuman, mungkin hidupmu juga kurang bermakna.<b> (No.79)"
				+ q4;
	kata[80] = q1 + "Di Balik Kesulitan"
				+ q2 + "Di balik kesulitan tumbuh keajaiban."
				+ q3 + "Jean de Bruyere"
				+ q2 + "Tak jarang, saat menemukan kesulitan kamu akan dibuatnya menyerah. Sebelum menyerah, ada baiknya kamu bertahan dan terus berusaha semampu yang kamu bisa.<br>Karena di balik kesulitan bisa jadi terdapat sebuah keajaiban. Keajaiban tersebut yang nantinya akan mengantarkanmu untuk menjemput kesuksesan.<b> (No.80)"
				+ q4;
	kata[81] = q1 + "Ingat Terus Kebahagiaan yang Pernah Dirasakan"
				+ q2 + "Bahkan jika kebahagiaan sedikit melupakanmu, kamu jangan pernah benar-benar melupakannya."
				+ q3 + "Jacques Prevert"
				+ q2 + "Saat membaca kata-kata bijak kehidupan di atas, apakah kamu mendapatkan sebuah pelajaran berharga? Kata-kata mutiara ini mungkin bisa mengajarkanmu untuk jangan pernah melupakan kebahagiaan meskipun keadaanmu sedang terpuruk.<br>Mengingat rasa bahagia yang pernah kamu rasakan dulu mungkin bisa menjadi obat dari kesedihanmu. Kamu pun juga bisa memanfaatkannya sebagai hal yang membuatmu untuk lebih termotivasi dan keluar dari kesedihan yang sedang dirasakan.<b> (No.81)"
				+ q4;
	kata[82] = q1 + "Kesempatan dalam Tantangan"
				+ q2 + "Kesempatan untuk menemukan kekuatan yang lebih baik dalam diri kita muncul ketika hidup terlihat sangat menantang. "
				+ q3 + "Joseph Campbell"
				+ q2 + "Mungkin kamu pernah mendengar bahwa agar bisa berkembang, kamu harus bisa keluar dari zona nyaman. Setidaknya, kata-kata bijak kehidupan dari Joseph Campbell ini juga bisa menggambarkan keadaan seperti itu.<br>Dengan keluar dari zona nyaman dan melakukan sesuatu yang lebih menantang, kamu akan lebih kuat untuk menjalani kehidupan. Masalah yang dulunya kamu anggap berat pun, mungkin sekarang bisa kamu atasi dengan mudah.<b> (No.82)"
				+ q4;
	kata[83] = q1 + "Tentang Memulai"
				+ q2 + "Perjalanan menempuh seribu mil dimulai dengan satu langkah."
				+ q3 + "Lao Tzu"
				+ q2 + "Kamu tak akan pernah bisa berhasil kalau tidak pernah memulai melakukan usaha untuk mewujudkan keinginanmu. Seperti yang Lao Tzu katakan, kamu tak akan pernah bisa menempuh perjalanan jauh kalau tidak mulai melangkah.<br>Jika ingin meraih tujuanmu, mulailah untuk mengusahannya. Tak perlu buru-buru, kamu bisa memulainya dari hal yang kecil dulu. Lama kelamaan, tujuanmu pun pasti akan terwujud.<b> (No.83)"
				+ q4;
	kata[84] = q1 + "Semangat Menggapai Tujuan"
				+ q2 + "Aku tak bisa mengubah arah angin. Tapi aku bisa menyesuaikan layar untuk selalu mencapai tujuan."
				+ q3 + "Jimmy Dean"
				+ q2 + "Kata-kata bijak kehidupan ini mungkin bisa menggambarkan kalau takdir memang tak bisa dihidari, tapi kamu bisa melakukan upaya apapun untuk mewujudkan apa yang menjadi keinginan atau tujuanmu.<br>Percayalah kamu bisa melakukannya. Hambatan yang kamu hadapi hanyalah hal kecil yang masih bisa kamu atasi.<b> (No.84)"
				+ q4;
	kata[85] = q1 + "Mimpi untuk Mencapai Tujuan"
				+ q2 + "Bermimpilah dalam hidup, jangan hidup dalam mimpi. "
				+ q3 + "Andrea Hirata"
				+ q2 + "Kata-kata mutiara semangat hidup ini adalah sebuah pengingat untuk bisa berusaha lebih keras dalam mencapai sebuah tujuan. Bermimpi merupakan cara kita untuk mengetahui tujuan apa yang hendak dicapai.<br>Tapi, jangan terlalu terlena dengan mimpi, karena itu bisa menghambat perjuanganmu. Sebaliknya, berusahalah mewujudkan mimpi yang sudah kamu inginkan agar bisa menjadi kenyataan.<b> (No.85)"
				+ q4;
	kata[86] = q1 + "Sukses Berawal dari Kegagalan"
				+ q2 + "Sukses berjalan dari satu kegagalan ke kegagalan lain, tanpa kita kehilangan semangat. "
				+ q3 + "Abraham Lincoln"
				+ q2 + "Setiap orang terkadang membutuhkan kata-kata motivasi sukses sebagai penyemangat dalam memperjuangkan sesuatu. Salah satunya adalah kutipan tentang kegagalan.<br>Kegagalan bukanlah akhir dari segalanya. Dari kegagalan yang dialami, kita bisa mengambil pelajaran agar tak melakukan kesalahan yang sama di masa depan.<b> (No.86)"
				+ q4;
	kata[87] = q1 + "Cara Membangkitkan Semangat Seseorang"
				+ q2 + "Jika kau harus berteriak, lakukanlah untuk membangkitkan semangat seseorang. "
				+ q3 + "Ralph Waldo Emerson"
				+ q2 + "Membangkitkan semangat seseorang ada banyak caranya. Ketika melihat orang terdekatmu sedang mengalami kesulitan dan jadi kurang semangat, lakukanlah apapun untuk membuatnya bangkit dari keterpurukan.<br>Seperti kata-kata bijak kehidupan ini, walaupun harus berteriak, ya berteriaklah. Karena, kehilangan semangat sama saja dengan membuat hidup ini menjadi kurang berarti.<b> (No.87)"
				+ q4;
	kata[88] = q1 + "Jangan Patah Semangat"
				+ q2 + "Selama masih ada kesempatan, jangan pernah matikan semangat untuk raih kemenangan. "
				+ q3 + "Bambang Pamungkas"
				+ q2 + "Kesempatan tak datang berkali-kali. Selama masih ada, berjuang keraslah untuk mencapai tujuan yang kamu inginkan.<br>Jangan pernah patah semangat sebelum berhasil. Jika gagal, berjuanglah terus dan jadikan kegagalan sebagai pengalaman yang bisa kamu ambil hikmahnya untuk bisa sukses di masa depan.<b> (No.88)"
				+ q4;
	kata[89] = q1 + "Membangun Semangat"
				+ q2 + "Sesekali berhentilah sekedar untuk bersantai. Bukan untuk terlena, namun membangun semangat untuk perjuangan berikutnya."
				+ q3 + "Abdullah Gymnastiar"
				+ q2 + "Bersantai adalah suatu kenikmatan yang bisa kamu rasakan, terutama jika sebelumnya kamu telah bekerja keras. Namun, jangan bersantai secara berlebihan.<br>Seperti kata-kata bijak kehidupan ini, dengan berhenti bersantai kamu bisa membangkitkan semangat untuk melanjutkan perjuangan demi meraih tujuan.<b> (No.89)"
				+ q4;
	kata[90] = q1 + "Hiduplah dengan Damai"
				+ q2 + "Orang yang paling dibenci oleh Allah adalah yang suka bertengkar."
				+ q3 + "Hadis Riwayat Bukhari dan Muslim"
				+ q2 + "Bermasalah dengan orang memang terkadang tak bisa dihindari. Hal tersebut mungkin terjadi lantaran kesalahpahaman.<br>Alangkah baiknya, selesaikan masalah tersebut dengan cara yang damai. Jangan diselesaikan dengan pertengkaran yang bisa memicu kekerasan. Ingatlah kata-kata bijak kehidupan di atas ini, bahwa pertengkaran adalah salah satu hal yang dibenci oleh Allah.<b> (No.90)"
				+ q4;
	kata[91] = q1 + "Hal yang Dilihat Allah"
				+ q2 + "Allah tidak melihat bentuk rupa dan harta benda kalian, tapi Dia melihat hati dan amal kalian. "
				+ q3 + "Nabi Muhammad SAW"
				+ q2 + "Kutipan ini bisa kamu jadikan kata-kata bijak kehidupan yang bisa mengingatkanmu untuk selalu berbuat baik dan menjalankan apa yang telah diperintahkan oleh agama.<br>Segala bentuk materi tidak ada artinya jika hati dan amalmu tidak baik. Karena yang dilihat Allah hanyalah perlakuan dan amal yang kamu lakukan selama hidup.<b> (No.91)"
				+ q4;
	kata[92] = q1 + "Mengejar Ilmu"
				+ q2 + "Bukanlah ilmu yang seharusnya mendatangimu, tetapi kamulah yang harus mendatangi ilmu itu. "
				+ q3 + "Imam Malik"
				+ q2 + "Sampai kapanpun, yang namanya ilmu tak akan pernah mendatangimu. Jika ingin mendapatkannya, kamu harus menjemputnya, bukan menunggu. Karena menuggunya adalah bagai menegakkan benang basah, sia-sia.<br>Jika ingin menjadi orang yang bermanfaat bagi kehidupan, setidaknya kamu harus berilmu. Tapi, janganlah cepat puas sehingga kamu menjadi sombong. Kalau dirasa ilmumu berguna bagi orang lain, kamu wajib untuk membaginya.<b> (No.92)"
				+ q4;
	kata[93] = q1 + "Tak Selamanya Hidup itu Sulit"
				+ q2 + "Sesungguhnya sesudah kesulitan itu ada kemudahan. Sesungguhnya sesudah kesulitan itu ada kemudahan. "
				+ q3 + "Surat Asy Syarh ayat 5-6"
				+ q2 + "Saat menemui hambatan, ingatlah selalu kata-kata mutiara di atas ini. Ayat dalam Alquran ini mengajakmu untuk jangan mudah menyerah karena di balik kesulitan sesungguhnya ada kemudahan.<br>Teguhkanlah pendirianmu, kerahkan segala daya dan upaya yang kamu miliki untuk menjalaninya. Jika kamu menyerah, maka hidupmu tidak akan pernah ada kemajuan.<b> (No.93)"
				+ q4;
	kata[94] = q1 + "Cara Membalas Kejahatan"
				+ q2 + "Dan balaslah kejahatan itu dengan kebaikan."
				+ q3 + "Surat Ar Ra’d ayat 22"
				+ q2 + "Jika ingin membalas dendam kepada orang yang berbuat jahat padamu, balaslah dengan kebaikan seperti yang telah tertulis di kata-kata bijak kehidupan di atas ini. Membalasnya dengan kejahatan hanya akan membuat masalah tak akan ada ujungnya.<br>Karena orang tersebut juga bisa membalasnya lagi, kamu pun mengulangi untuk membalasnya juga. Kalau dibalasnya dengan kebaikan, artinya kamu sudah ikhlas dan orang yang berlaku jahat padamu pun mungkin tidak akan mengulangi perbuatannya lagi.<b> (No.94)"
				+ q4;
	kata[95] = q1 + "Jangan Lupa untuk Selalu Bersyukur"
				+ q2 + "Kita semua diberkahi oleh Allah lewat berbagai cara. Ingatlah selalu hal ini dan bersyukurlah."
				+ q3 + "Anonim"
				+ q2 + "Jika kamu masih hidup hingga detik ini tanpa kekurangan suatu apapun, jangan lupa untuk bersyukur kepada-Nya. Allah telah memberimu keberkahan yang tidak terhitung jumlahnya.<br>Kalau kamu mulai kurang bersyukur, ingatlah selalu kata-kata mutiara di atas ini. Bersyukur akan membuatmu merasa bahagia dan tak pernah merasa kekurangan.<b> (No.95)"
				+ q4;
	kata[96] = q1 + "Mengajarkan Hal yang Benar"
				+ q2 + "Agama tidak melarang sesuatu perbuatan kalau perbuatan itu tidak merusak jiwa. Agama tidak menyuruh kalau suruhan tidak membawa selamat dan bahagia jiwa. "
				+ q3 + "Buya Hamka"
				+ q2 + "Kata-kata bijak kehidupan Islam ini menyadarkan kita bahwa agama hanya mengajarkan hal yang baik untuk kita. Agama merupakan tuntunan dalam menjalani kehidupan.<br>Manusia memang tak luput dari kesalahan dan dosa. Namun, dengan menjalankan perintah agama, kita bisa mengontrol diri sendiri untuk tidak melakukan kesalahan yang merugikan.<b> (No.96)"
				+ q4;
	kata[97] = q1 + "Keimanan Berpengaruh pada Nikmat Sabar"
				+ q2 + "Kemampuan merasakan nikmat sabar tergantung sejauh mana keimanan kita terhadap takdir yang Allah tetapkan. "
				+ q3 + "Abdullah Gymnastiar"
				+ q2 + "Kadar keimanan setiap orang memang berbeda beda. Ketika mengalami kesulitan, kita dituntut untuk bisa sama menghadapinya.<br>Bagi manusia yang tergolong beriman, mereka akan menemukan nikmat dari rasa sabar yang dimilikinya. Kata-kata bijak kehidupan ini bisa menjadi pengingat agar bisa selalu taat pada perintah-Nya.<b> (No.97)"
				+ q4;
	kata[98] = q1 + "Hiduplah seperti Pohon yang Berbuah"
				+ q2 + "Hiduplah kamu bersama manusia sebagaimana pohon yang berbuah, mereka melemparinya dengan batu, tetapi ia membalasnya dengan buah. "
				+ q3 + "Abu Hamid Al Ghazali"
				+ q2 + "Kata-kata mutiara ini mengajarkan kita untuk selalu rendah hati dan sabar. Meskipun terkadang ada orang yang entah sengaja atau tidak melukai hati kita, jangan pernah berpikiran untuk membalasnya dengan kejahatan juga.<br>Balaslah perlakukannya dengan kebaikan. Karena jika kita dendam, masalah tersebut tak akan pernah selesai dan kita hanya akan selalu memiliki prasangkan buruk saja.<b> (No.98)"
				+ q4;
	kata[99] = q1 + "Ungkapan Syukur Untuk Allah"
				+ q2 + "Bila tak kunyatakan keindahan-Mu dalam kata, kusimpan kasih-Mu dalam dada."
				+ q3 + "Jalaludin Rumi"
				+ q2 + "<b> (No.99)"
				+ q4;
	return kata[Math.round(Math.random()*(kata.length-1))];
}