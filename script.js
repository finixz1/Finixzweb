    const dataJasa = ["Suntik sosmed", "Pembuatan logo JB", "Pembuatan logo marga", "Pembuatan logo request", "Dan logo lainya (open semua logo)", "Nokos berbagai negara & app", "Jasa edit nick name lobby/in game", "Jasa edit (Alight Motion)", "Jasa editing video", "Jasa editing foto", "Jasa edit spek akun", "Jasa login tele tanpa biaya SMS", "Aplikasi premium", "Murid suntik (MURSUN)", "Murid logo (MURLOG)", "Murid nokos (MURNOK)", "Benner animation","benner desain", "Overlay animation", "overlay desain", "Animation ads", "GFX desain", "Watermark desain", "Watermark animation", "Create panel Pterodactyl", "Reseller panel Pterodactyl", "Open unchek", "Open jasteb", "Panel Jasteb","jasa pembuatan website", "jasa pembuatan aplikasi", "jasa pembuatan game","jasa memperpanjang masa aktif sim card"];
    const dataApk = ["APK Banindo V1", "APK Banindo V2", "APK Bannend & Unbanned WhatsApp", "APK Beku Payment", "APK Game PC", "APK PS Starparks", "APK JPM Deres", "APK Kenon", "APK Levii Banned", "APK Push Kontak", "APK Tema WA iPhone", "APK SW Grup", "APK Temp Gmail", "APK Temp Number", "APK Kebutuhan JB", "APK E-KTP Simulasi", "APK Nonton Bioskop", "APK Up Order kuota via Galeri", "APK Pembuatan Logo", "APK Auto Save Kontak", "APK Jendela Mengambang", "APK Jendela Mengambang v2", "APK Control Senter Ios","APK Control Senter Ios v2","APK Xarena","APK Fixed Zx","APK Game mode","APK Game Pref","APK Game Booster Rog", "APK Game Booster & Voice Changer","APK Game Turbo X", "APK Game Space + Game Booster","APK Game Booster + Jendela Mengambang", "APK Dynamic Island", "APK Dynamic Island v2","APK Dynamic bar","APK Keyboard & Emoji Ios", "APK Ubah Tampilan Handphone Jadi Computer", "APK Reaction Emoji Channel WhatsApp", "APK QRIS NO KTP (Otomatis)", "APK QRIS NO KTP (verifikasi)", "APK & Web Suntik Sosmed", "APK & Web Nokos", "APK Notif Dana Palsu", "APK Notif Gopay Palsu", "APK Banned Gmail", "APK Bug WhatsApp", "APK Balas Chat Otomatis","Simple Assistive Touch", "paket apk hd"];
    const dataFF = ["Hologram Senjata", "hologram Karakter", "Gloo wall gepeng", "Gloo wall transparan", "Antena karakter", "ALL CONFIG","Couple ID account"];
    const dataScript = ["Script Bug Whatsaap","Script Brat Stiker","Script Jaga Grup","Script Push kontak","Script DDOS","script spammer otp","Script all in one downloader","Script bot kirim pesan ke semua grup","Script bot kirim pesan ke semua grup dengan fitur tag senyap","script sw grup"];
    const dataTema = ["Widget Battery iOS","Widget Clock iOs","Widget Clock & Photo","widget Google search","widget music controller","widget volume slider","widget Photo Watch","widget photo battery indicator","Widget photo Clock & Date","widget weather","widget calendar","Widget Simple Calendar","Widget Device Status","widget screen time","Widget Capsule Battery","Widget Battery, Device Info, and Text hello","Widget Music Capsule","Widget Battery & Calendar","Widget Spotify Playlist","Widget Spotify Music","Widget WhatsApp Minimalist","widget status WhatsApp","Widget Instagram Stories","widget Spotify Music minimalist","widget Essential Control Music","Widget Music iOs 18","widget day & Time info","widget Daily Journal","widget Costume photo","widget Battery & Weather & Date","widget Weather bar chart ","widget Minimalist Typographic Clock","widget shortcut 2 app in 1 widget","widget Hours & days Costume photo","Widget Costume text","widget shortcut voice chat with gemini","widget app library","widget Player Time Schedule","widget Balance dana","widget Balance gopay","widget app store","widget cover & avatar","widget folder app","widget assisten ai (China)","Widget tiktok profile","Liquid Launcher OS 26 (premium)","Simple Launcher - Home Screen (premium)"];
    const dataJailbreak = ["JAILBREAK ALICE","JAILBREAK DRAGONS BOYS","JAILBREAK GORGON"];

    const products = {
        "Suntik sosmed": {
            desc: "Jasa Suntik/Booster Sosmed adalah layanan optimasi instan untuk meningkatkan statistik akun media sosial seperti TikTok, Instagram, YouTube, Facebook, hingga Shopee/Tokopedia,dll. Layanan ini menggunakan sistem otomatis berkecepatan tinggi yang bisa mengirimkan interaksi (like,followers,comment,share,dll) dalam waktu singkat tanpa membutuhkan akses password akunmu\nhasilnya permanen\nprofil bukan bot\nproses cepat\nbisa Refill jika ada masalah",
            order: "Hubungi kami - pembayar - salin tautan akun/video - proses - selesai",
            use: "Meningkatkan Kepercayaan Pelanggan\nMendapatkan like/followers dengan instan\nBisa pamer ke temen\nMeningkatkan Gengsi Akun\nMemancing Algoritma & FYP"
        },
        "Script bot kirim pesan ke semua grup dengan fitur tag senyap": { desc: "Ini adalah script otomatisasi WhatsApp tingkat lanjut yang berfungsi mengirimkan pesan promosi atau informasi ke banyak grup secara massal, di mana setiap pesan yang masuk akan otomatis menandai (tag/mention) seluruh anggota grup guna memastikan informasi tersebut dibaca oleh semua orang.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Notifikasi Berdering untuk Semua Anggota\nPengiriman Massal Lintas Grup Sekaligus\nMendukung Fitur Tag Senyap\nKompatibel untuk Pesan Media dan Teks" },
        "overlay desain": { desc: "Jasa Pembuatan Overlay Desain adalah layanan pembuatan elemen grafis transparan yang dirancang khusus untuk ditumpuk di atas konten video, siaran langsung (live streaming), maupun foto, dan masih banyak lagi yang bisa ditumpuk mengunakan overlay ini. Desain overlay ini berfungsi sebagai bingkai estetis, penunjuk informasi, sekaligus penguat identitas visual (branding) agar konten terlihat lebih profesional, interaktif,berkelas, dan lain lain.", order: "hubungi kami - pilih konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Sistem Kerja Sat-Set dan Fleksibel\nBisa mengunakan Berbagai Format File\nMembuat overlay Katalog / Price List Toko Digital\nsebagai media promosi\nMembuat overlay Promosi Diskon / Event Musiman\nDesain Kustom & Eksklusif\nMeningkatkan Engagement & Nilai Jual" },
        "benner desain": { desc: "Ini adalah layanan profesional berbasis keahlian digital yang menawarkan pembuatan desain banner kustom, dari benner profile hingga benner untuk jualan, yang disesuaikan dengan permintaan tema, warna, dan kebutuhan promosi dari klien.", order: "hubungi kami - pilih konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Sistem Kerja Sat-Set dan Fleksibel\nBisa mengunakan Berbagai Format File\nMembuat Banner Katalog / Price List Toko Digital\nDaya Jangkau Pasar yang Sangat Luas\nMembuat Header Profil Media Sosial & Grup Chat\nMembuat Banner Promosi Diskon / Event Musiman\nMembuat Desain Spanduk Fisik untuk Acara / Toko Offline\nDesain Kustom & Eksklusif\nMeningkatkan Engagement & Nilai Jual" },
        "script spammer otp": { desc: "Script otomatisasi ini berfungsi untuk mengirimkan puluhan hingga ratusan pesan teks (SMS) kode OTP dari berbagai platform secara massal dan bertubi-tubi ke satu nomor HP target dalam waktu singkat.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Ringan dan Bisa Dijalankan di HP\nPengiriman Massal Super Cepat\npemakaian mudah\nMenggunakan Banyak Sumber" },
        "paket apk hd": { desc: "Paket bundel aplikasi premium berbasis kecerdasan buatan (AI) yang berfungsi khusus untuk memproses, merestorasi, dan mendongkrak resolusi file foto atau video yang buram atau pecah-pecah menjadi beresolusi tinggi (Ultra HD) secara instan.", order: "Hubungi kami - pembayaran - pengiriman paket apk - selesai", use: "Proses Kilat dan Dijamin Legal\nRestorasi Foto Buram & Pecah Menjadi Tajam\nMeningkatkan Resolusi Video\nBisa membuka jasa 'Edit Foto & Video Menjadi HD'\nMemperbaiki Pencahayaan & Warna File Media\nMembuat Hasil Konten Media Sosial Selalu Hd" },
        "jasa memperpanjang masa aktif sim card": { desc: "Jasa memperpanjang masa aktif kartu perdana dari berbagai operator seluler Indonesia secara legal agar nomor tidak hangus atau terblokir tanpa perlu membeli pulsa & kuota.", order: "hubungi kami - pilih durasi - pembayaran - isi nomor - selesai", use: "Penyelamat Nomor Hangus / Masa Tenggang\nMendukung Seluruh Operator Indonesia\nJauh Lebih Hemat Dibanding Beli Pulsa / kuota\nSangat Cocok untuk Mengamankan Nomor Bisnis" },
        "Script bot kirim pesan ke semua grup": { desc: "Sebuah script otomatisasi yang dirancang untuk mendeteksi dan mengiterasi daftar grup WhatsApp yang diikuti oleh akun pengguna. Skrip ini akan memeriksa izin akses pengiriman pesan pada setiap grup, lalu mengirimkan teks yang telah ditentukan ke grup yang terbuka untuk anggota, dan melewati grup yang membatasi pengiriman pesan hanya untuk admin.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Distribusi Informasi Massal\nOtomatisasi Komunikasi\nManajemen Komunitas\nmedia promosi\nEfisiensi Waktu" },
        "script sw grup": { desc: "Ini adalah script otomatisasi WhatsApp yang berfungsi untuk mengirimkan file foto atau video secara langsung ke dalam ruang obrolan banyak grup sekaligus secara serentak tanpa perlu masuk ke grupnya satu per satu (bukan fitur tag grup).", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "media promosi\nDistribusi Informasi Massal\nOtomatisasi Komunikasi\nManajemen Komunitas\nEfisiensi Waktu\nPengiriman Media Serentak\nBisa Menyertakan Keterangan Kustom\npenyebaran produk secara instan "},
        "Widget tiktok profile": { desc: "widget iniadalah modul tampilan ringkas yang berfungsi untuk menampilkan statistik profil TikTok secara langsung di layar utama. ", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kegunaan utamanya adalah untuk memantau data akun secara real-time, seperti jumlah pengikut, akun yang diikuti, serta total suka, tanpa perlu membuka aplikasi TikTok terlebih dahulu.\nKeunggulannya terletak pada desain antarmuka yang bersih dan informatif, memberikan kemudahan akses data profil dengan estetika yang modern bagi pengguna yang ingin memantau aktivitas akun mereka dengan cepat." },
        "widget app library": { desc: "widget ini adalah pusat organisasi aplikasi yang dirancang untuk mengelompokkan berbagai ikon aplikasi ke dalam kategori visual yang rapi dan terstruktur dalam satu antarmuka layar utama.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kegunaan utamanya adalah mempermudah navigasi dan akses cepat ke berbagai aplikasi dengan tampilan yang tersusun sistematis, sekaligus menyediakan fitur kolom pencarian untuk mempermudah pencarian aplikasi secara instan. Keunggulan widget ini terletak pada desainnya yang bersih dengan estetika ikon monokrom yang seragam, memberikan kesan antarmuka yang sangat modern, minimalis, dan sangat efisien dalam mengelola ruang di layar perangkat Anda." },
        "widget Weather bar chart ": { desc: "widget ini adalah modul visualisasi data iklim yang menyajikan informasi suhu dan kondisi cuaca (seperti overcast clouds) melalui grafik batang berwarna-warni yang dinamis. Kegunaan utamanya adalah untuk memantau prakiraan cuaca secara real-time langsung dari layar utama dengan cara yang sangat intuitif dan mudah dibaca secara cepat.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Keunggulan widget ini terletak pada desain grafiknya yang unik dan penuh warna, memberikan kesan antarmuka yang modern, informatif, dan sangat estetik bagi pengguna yang memprioritaskan keindahan visual pada layar ponsel mereka." },
        "widget status WhatsApp": { desc: "widget ini berfungsi untuk menampilkan pembaruan status dari kontak WhatsApp secara langsung di layar utama.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kegunaan utama widget ini adalah memungkinkan pengguna memantau status terbaru dari teman tanpa harus membuka aplikasi WhatsApp terlebih dahulu, sehingga memberikan akses informasi yang lebih cepat.\nKeunggulan widget ini terletak pada desainnya yang bersih dan terorganisir, yang memudahkan identifikasi status kontak dengan tampilan visual yang praktis dan estetik di antarmuka ponsel Anda." },
        "widget asisten ai (China)": { desc: "Widget ini merupakan pusat kendali akses cepat berbasis kecerdasan buatan (AI) yang terintegrasi langsung ke dalam antarmuka layar utama ponsel. Dirancang sebagai all-in-one smart tool, widget ini memindahkan fungsi-fungsi kompleks kamera dan pengenalan visual menjadi tombol-tombol satu sentuhan yang praktis, memungkinkan pengguna untuk berinteraksi dengan dunia fisik di sekitar mereka melalui lensa kamera ponsel.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Eksplorasi Informasi/nPemecahan Hambatan Bahasa\nPenyelesaian Masalah\nEfisiensi Waktu\nIntegrasi yang MulusPengalaman Tanpa Hambatan\nInteraktivitas Visual" },
        "Simple Launcher - Home Screen (premium)": { desc: "Simple Launcher - Home Screen adalah aplikasi peluncur yang dirancang untuk memberikan pengalaman layar beranda yang sederhana namun bertenaga.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Keunggulan aplikasi ini meliputi fitur kustomisasi ikon dan tata letak yang fleksibel untuk menciptakan tampilan layar yang ideal." },
        "Liquid Launcher OS 26 (premium)": { desc: "Liquid Launcher OS 26 adalah aplikasi peluncur yang berfungsi untuk mengubah tampilan layar utama perangkat dengan efek visual yang ada ios agar terlihat lebih modern, bersih, dan premium", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Kegunaan utamanya adalah sebagai alat kustomisasi untuk menyegarkan antarmuka ponsel,\n sementara keunggulannya terletak pada desain estetika yang sangat menarik" },
        "Simple Assistive Touch": { desc: "Simple Assistive Touch adalah aplikasi alat (tool) yang berfungsi untuk meningkatkan fungsionalitas perangkat Android dengan menyediakan menu melayang agar pengguna dapat mengakses pengaturan dengan cepat tanpa perlu menyentuh tombol fisik.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Kegunaan utamanya adalah sebagai akses cepat dan pengganti tombol fisik yang dapat dikustomisasi sesuai preferensi pengguna.\nKeunggulan aplikasi ini meliputi kemudahan penggunaan dalam mengelola pengaturan perangkat," },
        "widget folder app": { desc: "widget folder ini adalah solusi manajemen aplikasi minimalis yang berfungsi untuk merapikan layar utama dengan mengelompokkan berbagai pintasan aplikasi ke dalam satu modul terorganisir", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kegunaan utama widget ini adalah sebagai pusat navigasi yang efisien untuk mengakses aplikasi favorit dengan cepat tanpa mengorbankan kerapian visual layar,\n sementara keunggulannya terletak pada desainnya yang sistematis, fleksibilitas penambahan aplikasi, serta kemampuannya memberikan estetika antarmuka yang bersih dan modern." },
        "Script all in one downloader": { desc: "Sebuah alat berbasis command-line yang dirancang untuk mengunduh berbagai format media (video, foto, dan audio) dari berbagai platform sosial media populer seperti YouTube, Facebook, TikTok, dan Instagram. Script ini merupakan solusi otomatisasi yang memungkinkan Anda menyimpan konten digital secara efisien langsung melalui terminal Termux.", order: "Hubungi kami - pembayaran - pengiriman Script - selesai", use: "Pusat Unduhan Terpadu\nKonversi Media Instan\nManajemen Konten Offline" },
        "Couple ID account": { desc: "Paket akun Free Fire 'couple' yang terdiri dari dua ID unik seperti (xxxxx1 & xxxxx2) atau (xxxxx7 & xxxx8), dengan nomor yang berurutan. Akun ini disajikan dalam format guest untuk memberikan kebebasan penuh kepada pembeli dalam menentukan metode binding (pengikatan) akun baru mereka sendiri, sehingga menjamin keamanan dan kepemilikan mutlak di tangan pembeli.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Identitas Gaming Serasi\nMedia Personal Branding\nID Eksklusif & Berurutan" },
        "widget app store": { desc: "Sebuah widget yang dirancang untuk mengelola dan menampilkan koleksi permainan Anda. Widget ini memberikan akses instan ke game yang sering dimainkan dengan tampilan yang terorganisir, menyerupai antarmuka App Store.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Manajemen Koleksi\nAntarmuka yang Familiar\nTata Letak Terstruktur" },
        "widget cover & avatar": { desc: "Widget profil personal yang memadukan gambar sampul (cover) berukuran lebar dengan avatar melingkar dan penempatan teks identitas pengguna. Widget ini dirancang untuk memberikan tampilan antarmuka yang menyerupai profil media sosial langsung di layar utama Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Estetika layar\nVisualisasi Berlapis\nTata Letak Kompak" },
        "Widget Instagram Stories": { desc: "Sebuah widget dashboard khusus Instagram yang menghadirkan konten Stories teman-teman Anda langsung ke layar utama ponsel. Dengan desain yang bersih dan ikonik, widget ini menjadi jendela instan untuk memantau pembaruan media sosial tanpa harus membuka aplikasi Instagram secara penuh.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Monitoring Konten Instan\nAkses Cepat ke Fitur\nNotifikasi Visual\ndesain minimalis\ntampilan estetik\nEfisiensi Waktu" },
        "widget Spotify Music Minimalist": { desc: "Widget pemutar musik yang dirancang dengan estetika modern, menampilkan cover art lagu, judul lagu, nama artis, dan progress bar durasi lagu secara lengkap. Widget ini menyajikan kendali pemutaran yang esensial dalam tampilan yang bersih dan intuitif di layar utama.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kendali Media Cepat\nPemantauan Durasi\nInformasi Lagu Lengkap\nTata Letak Terstruktur\nVisualisasi Jernih\nKontras yang Optimal" },
        "widget Essential Control Music": { desc: "Widget pemutar musik yang mengedepankan efisiensi operasional. Tanpa elemen visual yang berlebihan, widget ini menyajikan informasi lagu dan kontrol media dalam bentuk yang sangat kompak, memastikan navigasi musik Anda tetap cepat dan fokus pada fungsi inti.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Optimalisasi Ruang Layar\nNavigasi Berkecepatan Tinggi\nInformasi Real-Time\nTingkat Keterbacaan Tertinggi" },
        "Widget Music iOS 18": { desc: "Widget pemutar musik bergaya iOS 18 yang membawa estetika antarmuka sistem operasi premium ke perangkat Anda. Widget ini menampilkan cover art lagu yang kontras dengan latar belakang berwarna solid yang dinamis, memberikan tampilan modern, bersih, dan sangat ikonik.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Identifikasi Status Musik\nAkses Kontrol Cepat\nIntegrasi Metadata Lagu\nVisualisasi Kontras Tinggi\nEstetika Premium" },
        "widget day & Time info": { desc: "Sebuah widget informatif yang menggabungkan elemen kalender dan jam dengan visualisasi grafis melingkar yang modern. Widget ini menyajikan data waktu (jam, hari, bulan, tahun) secara dinamis dalam satu bingkai, memberikan tampilan dashboard yang sangat teknis, terukur, dan presisi pada layar utama Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "desain Minimalist\nVisualisasi Progres Waktu\nIntegrasi Data Terpadu\nPemantauan Waktu Komprehensif\nInformasi yang Jelas\nEfisiensi Visual\nEstetika Modular" },
        "widget Daily Journal": { desc: "Widget jurnal pribadi yang ringkas, dirancang untuk membantu Anda mencatat refleksi harian atau kutipan motivasi dengan cepat. Dengan ukuran 2x2 yang sangat efisien, widget ini berfungsi sebagai pengingat personal yang manis di layar utama, menjaga pikiran dan target Anda tetap terarah sepanjang hari.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Motivasi Harian\nManajemen Catatan Harian\nEstetika Minimalis\nFokus pada Produktivitas\nPengalaman Personal\nPencatatan Refleksi Cepat" },
        "widget Costume Photo": { desc: "Widget galeri foto yang fleksibel, dirancang untuk menampilkan koleksi gambar favorit Anda langsung di layar utama. Widget ini menawarkan kebebasan penuh kepada pengguna untuk mengganti foto kapan saja, menjadikannya kanvas visual yang dapat terus diperbarui sesuai suasana hati atau estetika home screen Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kustomisasi Tanpa Batas\nIntegrasi Estetik\nKualitas Visual Jernih\nFleksibilitas Layout\nPersonalisasi Layar Utama" },
        "widget Battery & Weather & Date": { desc: "Widget dasbor komprehensif yang mengintegrasikan informasi penting sistem dan lingkungan dalam satu tampilan terpadu. Modul ini menyajikan status baterai, tanggal hari ini, agenda kalender, serta kondisi cuaca terkini dengan tata letak yang sangat terstruktur dan informatif.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Pemantauan Status Perangkat\n\nInformasi Lingkungan\nPusat Informasi Terintegrasi\nVisualisasi Data yang Intuitif\nDesain Terstruktur" },
        "widget Minimalist Typographic Clock": { desc: "Widget penunjuk waktu yang mengedepankan gaya tipografi modern dengan desain angka yang ramping dan memanjang. Widget ini menonjolkan aspek estetika visual yang bersih, memberikan kesan futuristik dan elegan langsung pada layar utama Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Penunjuk Waktu Utama\nElemen Dekorasi Layar\nDesain Tipografi Eksklusif\nEfisiensi Visual\nEstetika Modern" },
        "widget shortcut 2 app in 1 widget": { desc: "Sebuah widget akses cepat yang mengelompokkan pintasan aplikasi utama, seperti Google Search dan aplikasi Photos,Tiktok,youtube,Instagram,Telegram,Facebook,Game,dll ke dalam satu modul yang terpadu. Widget ini dirancang untuk menyederhanakan navigasi layar utama dengan memberikan akses langsung ke alat-alat yang paling sering digunakan dan berfungsi untuk estetika layar.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Akses Aplikasi Instan\nPenyederhanaan Navigasi\nDesain Terstruktur\nKeseragaman Visual\nEfisiensi Ruang" },
        "widget Hours & days Costume": { desc: "Widget penunjuk waktu yang mengintegrasikan informasi jam dan hari ke dalam sebuah bingkai yang dapat disesuaikan dengan foto pilihan pribadi. Desain ini mengubah informasi waktu menjadi elemen visual yang estetik, memungkinkan pengguna untuk menampilkan gambar favorit sebagai latar belakang widget mereka.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Personalisasi Layar Utama\nInformasi Waktu Esensial\nEfisiensi Ruang\nKeseragaman Visual\nFleksibilitas Kreatif\nIntegrasi Visual yang Harmonis\nSentuhan Emosional" },
        "Widget Custom text": { desc: "Widget teks minimalis yang dirancang khusus untuk menampilkan kutipan motivasi, pengingat harian, atau kalimat inspiratif. Widget ini berfungsi sebagai pusat pesan personal yang dapat diubah sesuai dengan kebutuhan estetika atau suasana hati Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Motivasi Harian\nSentuhan Estetik\nMedia Refleksi Diri\nKustomisasi Penuh\nDesain Minimalis" },
        "widget shortcut voice chat with gemini": { desc: "Widget akses cepat yang dirancang khusus untuk memicu percakapan suara dengan Gemini secara instan. Dengan desain berbentuk kapsul yang minimalis, widget ini menampilkan ikon sparkle khas Gemini dan tombol perintah 'Ask Gemini' yang intuitif.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Akses Suara Cepat\nPusat Kendali Asisten\nakses cepat ke gemini" },
        "widget Prayer Time Schedule": { desc: "Sebuah widget informatif yang menyajikan jadwal waktu sholat harian secara jelas dan tersusun rapi. Widget ini menampilkan daftar lima waktu sholat wajib mulai dari Subuh hingga Isya beserta waktu spesifiknya.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Pengingat Waktu Ibadah\nManajemen Waktu Harian\nTampilan Sederhana & Terbaca\nEfisiensi Ruang\nIntegrasi yang Mudah" },
        "widget Balance gopay": { desc: "Widget finansial yang dirancang untuk memantau saldo dompet digital secara langsung di layar utama. Widget ini menggabungkan ringkasan saldo,coins dan akses cepat ke fitur pembayaran melalui tombol 'QRIS' yang terintegrasi langsung dengan aplikasi.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Pemantauan Saldo Instan\nAkses Pembayaran Cepat\nEfisiensi Transaksi\nDesain Fungsional" },
        "widget Balance dana": { desc: "Widget finansial yang dirancang untuk memantau saldo dompet digital secara langsung di layar utama. Widget ini menggabungkan ringkasan saldo dengan akses cepat ke fitur pembayaran melalui tombol 'PAY' yang terintegrasi langsung dengan aplikasi.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Pemantauan Saldo Instan\nAkses Pembayaran Cepat\nEfisiensi Transaksi\nDesain Fungsional" },
        "Widget WhatsApp Minimalist": { desc: "Widget akses cepat yang dirancang untuk mempermudah komunikasi Anda di WhatsApp. Dengan desain minimalis yang elegan, widget ini memungkinkan Anda untuk langsung membuka percakapan penting atau daftar pesan tanpa harus mencari ikon aplikasi di antara deretan aplikasi lainnya, menjadikan layar utama Anda pusat komunikasi yang efisien.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Akses Percakapan Prioritas\nManajemen Komunikasi\nPusat Komunikasi Terpadu\nEfisiensi Waktu" },
        "APK Game Booster + Jendela Mengambang": { desc: "apk ini Tidak hanya mengoptimalkan kinerja CPU dan RAM secara instan, aplikasi ini dilengkapi dengan fitur Jendela Mengambang (Floating Dashboard) yang inovatif. Kendalikan segala aspek performa ponsel Anda langsung di atas game yang sedang berjalan tanpa perlu keluar dari aplikasi..", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)\nNonton Tutorial / Live Match Sambil Nge-push Rank Game\nPantau Grafik Saham / Kripto / Harga Pasar Sambil Kerja\nSalin-Tempel (Copy-Paste) Massal Antar Aplikasi Tanpa Hambatan\nMembuat HP Jadul Terasa Seperti HP Gaming Premium\nBypass Aplikasi yang Tidak Bisa Ditinggal (Anti-AFK / Anti-Timeout)\nmenjalankan berbagai Aplikasi sekaligus" },
        "APK Game Booster & Voice Changer": { desc: "Optimalkan performa perangkat Anda dan ubah suara Anda secara real-time dengan satu aplikasi komprehensif. Booster + Voice Changer hadir untuk memberikan pengalaman gaming yang lancar serta fitur komunikasi yang kreatif. Dirancang dengan antarmuka yang dinamis, aplikasi ini adalah senjata wajib bagi Anda yang ingin mendominasi permainan sekaligus menjadi pusat perhatian di setiap obrolan.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)\nTransformasi Suara Real-Time\nOptimasi Performa Game\nManajemen Komunikasi\nPengaturan Prioritas Jaringan" },
        "APK Game Booster Rog": { desc: "Rasakan performa ponsel Anda mencapai batas maksimal dengan ROG-Style Performance Booster. Terinspirasi dari antarmuka ikonik perangkat gaming kelas dunia, aplikasi ini memberikan pengalaman gaming yang mulus, stabil, dan bebas lag dengan desain visual yang tajam, futuristik, dan eksklusif. Jadikan perangkat Anda pusat kendali gaming yang tangguh dan tampak profesional.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)" },
        "APK Game Turbo X": { desc: "Aplikasi ini adalah pusat kendali dan pengoptimasi performa gaming terpadu yang dirancang untuk membersihkan memori, mengunci jaringan, dan meningkatkan kinerja perangkat keras (hardware) secara instan agar pengalaman bermain game menjadi super lancar tanpa lag.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)" },
        "APK Game mode": { desc: "Aplikasi ini adalah pusat kendali dan pengoptimasi performa gaming terpadu yang dirancang untuk membersihkan memori, mengunci jaringan, dan meningkatkan kinerja perangkat keras (hardware) secara instan agar pengalaman bermain game menjadi super lancar tanpa lag.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)" },
        "APK Gane Pref": { desc: "Aplikasi ini adalah pusat kendali dan pengoptimasi performa gaming terpadu yang dirancang untuk membersihkan memori, mengunci jaringan, dan meningkatkan kinerja perangkat keras (hardware) secara instan agar pengalaman bermain game menjadi super lancar tanpa lag.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)" },
        "APK Fixed Zx": { desc: "Aplikasi ini adalah pusat kendali dan pengoptimasi performa gaming terpadu yang dirancang untuk membersihkan memori, mengunci jaringan, dan meningkatkan kinerja perangkat keras (hardware) secara instan agar pengalaman bermain game menjadi super lancar tanpa lag.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)" },
        "Widget Spotify Playlist": { desc: "Widget pemutar musik yang dirancang khusus untuk menampilkan koleksi playlist favorit Anda. Dengan desain clean dan modern, widget ini memungkinkan Anda untuk memamerkan daftar lagu yang sedang Anda dengarkan atau putar, sekaligus memberikan akses cepat untuk menikmati koleksi musik Anda langsung dari layar utama.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Manajemen Musik\nAkses Daftar Putar Instan\nIntegrasi Estetik\nVisualisasi Cover Art yang Tajam\nKendali Musik Instan\nIntegrasi Konten Musik\nManajemen Hiburan Efisien\nVisual Yang Estetik\nKualitas Grafis Tinggi\nDesain Simetris & Ikonik" },
        "Widget Spotify Music": { desc: "Sebuah widget kontrol musik eksklusif yang dirancang khusus untuk pengguna Spotify. Dengan desain pill-shaped yang modern dan efek blur transparan, widget ini tidak hanya berfungsi sebagai alat kendali, tetapi juga mempercantik home screen Anda dengan integrasi visual yang halus dan berkelas, seolah-olah dirancang langsung oleh sistem operasi ponsel flagship.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kendali Musik Instan\nIntegrasi Konten Musik\nManajemen Hiburan Efisien\nVisual Yang Estetik\nKualitas Grafis Tinggi\nDesain Simetris & Ikonik" },
        "Widget Device Status": { desc: "Sebuah widget komprehensif yang menampilkan status vital perangkat Anda dalam satu panel terintegrasi. Menggunakan desain circular progress bar yang futuristik, widget ini menyatukan informasi baterai ponsel, level volume, serta daya tahan baterai perangkat eksternal (seperti TWS/earphone) ke dalam satu tampilan yang rapi dan elegan.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Monitoring Sentral\nManajemen Daya Proaktif\nKontrol Cepat\nHemat Ruang Layar\nPemantauan Kesehatan\nOptimalisasi Ekosistem Perangkat" },
        "widget screen time": { desc: "Sebuah widget pemantau aktivitas digital yang menyajikan data durasi penggunaan layar Anda dalam bentuk grafik batang yang estetik dan intuitif. Dirancang dengan gaya minimalis, widget ini memberikan rangkuman visual yang cerdas mengenai berapa lama Anda menghabiskan waktu di ponsel setiap harinya, langsung dari layar utama.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kesadaran Digital\nVisualisasi Data yang Cerdas\nEvaluasi Produktivitas\nEstetika Minimalis\nEfisiensi Ruang" },
        "Widget Capsule Battery": { desc: "Sebuah widget baterai dengan desain kapsul yang ikonik dan super minimalis. Widget ini mengusung estetika clean yang memusatkan fokus pada informasi sisa daya melalui lingkaran progres yang elegan, memberikan kesan modern, rapi, dan canggih pada home screen Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Pemantauan Daya Cepat\nIndikator Pengisian\nEfisiensi Ruang Layar\nDesain yang Modern\nKontras Tinggi & Jelas\nIntegrasi Estetika" },
        "Widget Battery, Device Info, and Text hello": { desc: "Widget informasi perangkat yang menggabungkan presisi data baterai, nama model perangkat, dan elemen tipografi hello yang ikonik. Didesain dengan gaya minimalis, widget ini memberikan kesan personal, bersih, dan eksklusif pada home screen Anda, menyerupai antarmuka perangkat premium.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Identitas Perangkat\nMonitoring Baterai\nElemen Dekoratif\nDesain Tipografi Artistik\nIntegrasi Estetika Premium\nMinimalis Namun Informatif" },
        "Widget Music Capsule": { desc: "Sebuah widget pemutar musik berbentuk kapsul yang memadukan keindahan visual minimalis dengan fungsionalitas kendali media yang cepat. Widget ini hadir dengan desain clean yang dirancang untuk memberikan kendali musik tanpa harus membuka aplikasi, menjadikannya elemen estetika wajib bagi home screen modern Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kendali Media Cepat\nEfisiensi Navigasi\nDesain Ikonik\nFokus pada Fungsionalitas\nVisualisasi Ikon yang Jelas" },
        "Widget Battery & Calendar": { desc: "widget ini adalah solusi desain untuk pengguna yang menginginkan presisi tanpa kerumitan. Dengan menggabungkan metrik daya baterai dan kalender harian ke dalam satu widget yang elegan, widget ini mengubah layar utama Anda dari sekadar tumpukan aplikasi menjadi pusat kendali informasi yang cerdas.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Monitoring Ganda\nManajemen Agenda\nDesain Simetris & Rapi\nVisual yang Elegan\nKeterbacaan Optimal\nHemat Ruang" },
        "Widget Simple Calendar": { desc: "widget penanda tanggal yang mengedepankan kesederhanaan mutlak. Dengan membuang semua elemen yang tidak perlu, widget ini hanya menampilkan informasi yang paling krusial hari dan tanggal dalam tipografi yang tegas dan bersih, menjadikannya pelengkap paling elegan untuk home screen minimalis Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Penyatuan Data Terpusat\nOptimasi Hardware\nDesain Timeless & Aesthetic\nmenghemat ruang" },
        "widget Google search": { desc: "Widget pencarian yang dirancang dengan bentuk pill minimalis, menggabungkan ikon Google yang ikonik dengan desain yang bersih untuk memberikan akses instan ke dunia informasi.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Membuka akses cepat ke mesin pencari Google, berita terkini, dan fitur pencarian lainnya langsung dari layar utama tanpa harus membuka aplikasi. Dan Menghemat waktu pencarian Anda dengan desain yang tidak memenuhi layar, memberikan kesan home screen yang rapi, profesional, dan sangat terorganisir." },
        "widget music controller": { desc: " widget kontroler musik yang elegan dan intuitif, dirancang untuk menyatu sempurna dengan estetika modern ponsel Anda, memberikan kendali penuh atas lagu favorit Anda dalam bentuk yang kompak.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Memberikan kendali penuh untuk memutar (play), menjeda (pause), dan melewati (skip) lagu dari Spotify, YouTube Music, atau aplikasi musik lainnya dengan sekali sentuh. Dan Menghilangkan keharusan membuka aplikasi musik secara penuh, sangat responsif, dan memberikan tampilan visual yang jauh lebih mewah dibanding pemutar musik standar Android." },
        "widget volume slider": { desc: "Widget pengatur volume dengan desain pill-shaped yang presisi, memberikan kendali suara yang lebih halus, terlihat modern, dan mudah dioperasikan.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Memungkinkan Anda untuk menyesuaikan tingkat volume perangkat dengan cepat dan tepat menggunakan indikator angka yang sangat mudah dibaca. Dan Memberikan akses cepat ke kontrol suara tanpa harus menekan tombol fisik ponsel, menjaga layar Anda tetap bersih dengan antarmuka yang futuristik dan interaktif" },
        "widget Photo Watch ": { desc: "Sebuah widget jam eksklusif yang memadukan keindahan seni karakter anime dengan fungsi penunjuk waktu yang akurat. Widget ini dirancang untuk mengubah home screen Anda menjadi galeri seni hidup yang merepresentasikan kecintaan Anda pada karakter anime favorit.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Personalisasi Identitas\nPenunjuk Waktu Estetik\nMood Booster\nSentuhan Artistik Tinggi\nDesain Eksklusif" },
        "widget photo battery indicator": { desc: "Widget indikator baterai yang menggabungkan elemen visual anime favorit Anda dengan fungsi pemantauan daya yang cerdas. Widget ini mengubah ikon baterai yang membosankan menjadi bagian dari cerita karakter, di mana animasi atau ilustrasi karakter berubah sesuai dengan persentase daya baterai yang tersisa.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Desain Eksklusif\nPemantauan Daya Interaktif\nElemen Dekorasi Utama\nNotifikasi Visual\nEfek Visual Dinamis" },
        "widget weather": { desc: "Sebuah widget cuaca dengan desain elegan dan modern yang mengusung konsep glassmorphism (efek kaca transparan). Widget ini menyajikan informasi cuaca esensial secara bersih dan intuitif, memberikan tampilan yang premium serta menyatu sempurna dengan wallpaper apa pun di perangkat Android Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Informasi Cuaca Instan\nPerencanaan Harian\nVisual yang Bersih\nTipografi Modern/nRingkas & Padat\nIntegrasi Estetika" },
        "widget calendar": { desc: "Widget kalender dengan desain glassmorphism yang bersih dan elegan. Widget ini menyajikan jadwal harian dan bulanan Anda dalam satu pandangan yang rapi, memastikan Anda tetap terorganisir tanpa harus mengorbankan estetika layar utama ponsel Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Pusat Informasi\nManajemen Waktu\nKeterbacaan Optimal\nInformasi yang Efisien" },
        "Widget photo Clock & Date": { desc: "Sebuah modul widget elegan yang menyatukan penunjuk waktu presisi dengan elemen visual karakter anime favorit Anda. Widget ini mengubah fungsi kalender dan jam yang kaku menjadi bagian dari karya seni hidup, memberikan tampilan layar utama yang tidak hanya informatif tetapi juga sangat personal dan berjiwa.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Sinkronisasi Waktu & Jadwal\nPersonalisasi Visual\nPusat Informasi MinimalisDesain Artistik Terintegrasi\nTipografi Anime-Style Premium\nOptimasi Performa\nKualitas Grafis Tinggi" },
        "Widget Clock iOs": { desc: "Ingin merasakan vibe minimalis yang ikonik dari iOS di perangkat Android Anda? Widget Clock iOs menghadirkan presisi waktu Apple ke layar utama Anda. Dirancang dengan perhatian mendalam pada detail mulai dari tipografi San Francisco yang elegan, efek transparansi yang halus, hingga layout yang bersih widget ini adalah pelengkap sempurna bagi Anda yang mengutamakan estetika. Jangan biarkan layar utama Anda terlihat berantakan. Dengan desain yang pas di mata, widget jam ini akan memberikan kesan premium pada ponsel Anda, menjadikan setiap lirik ke layar utama sebuah pengalaman visual yang memuaskan.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Desain Autentik\nTransparansi yang Sempurna\nEfek Blur & Transparansi\nShadow & Depth Engineering" },
        "Widget Clock & Photo": { desc: "Bosan dengan tampilan jam yang itu-itu saja? Ubah home screen Anda menjadi lebih hidup dengan Widget Clock & Photo. Koleksi widget ini dirancang khusus untuk Anda yang mencintai estetika minimalis sekaligus keimutan hewan peliharaan. Gabungkan presisi waktu yang elegan dengan sentuhan karakter hewan menggemaskan yang menemani Anda sepanjang hari. Widget ini bukan sekadar alat penunjuk waktu, melainkan aksesoris visual yang membuat ponsel Anda tampak lebih unik dan personal.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Desain Minimalis & Modern\nFont Estetik\nPenunjuk Waktu Akurat" },
        "Widget Battery iOS": { desc: "Ingin merasakan pengalaman visual iOS di ponsel Android Anda?  Widget  Battery iOS hadir untuk memberikan tampilan clean, minimalis, dan elegan ala Apple pada layar utama perangkat Anda. Tidak hanya soal estetika, widget ini dirancang dengan presisi untuk memberikan informasi daya baterai yang akurat dengan gaya desain ikonik yang disukai jutaan pengguna di seluruh dunia. Dengan antarmuka yang intuitif dan integrasi yang mulus, widget ini akan menyatu sempurna dengan home screen Anda, memberikan kesan premium dan modern tanpa harus mengganti sistem operasi Anda.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Informasi Real-Time yang Akurat\nDesain Autentik ala iOS\nserasa menggunakan ios" },
        "Pembuatan logo JB": { desc: "Kami menghadirkan solusi visual kreatif untuk membangun identitas brand Anda.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses pembuatan - selesai", use: "Menjadi identitas brand\nMedia promosi\nMeningkatkan Nilai Jual\nDaya Tarik di Media Sosial\nBerbeda dari Pesaing" },
        "Pembuatan logo marga": { desc: "Kami menghadirkan solusi visual kreatif untuk membangun identitas marga Anda.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses pembuatan - selesai", use: "Menjadi identitas brand\nMedia promosi\nDaya Tarik di Media Sosial\nBerbeda dari Pesaing" },
        "APK Control Senter Ios": { desc: "Aplikasi ini berfungsi untuk merombak total tampilan bilah notifikasi dan menu pintasan status bar (control center) bawaan HP menjadi gaya ios yang lebih modern, estetik, dan futuristik.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Ubah Gaya HP Android Biasa Jadi iOS\nInteraksi Geser (Gesture Control) yang Halus dan Responsif\nmenambahkan beberapa fitur" },
        "APK Control Senter Ios v2": { desc: "Aplikasi ini berfungsi untuk merombak total tampilan bilah notifikasi dan menu pintasan status bar (control center) bawaan HP menjadi gaya ios yang lebih modern, estetik, dan futuristik.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Ubah Gaya HP Android Biasa Jadi iOS\nInteraksi Geser (Gesture Control) yang Halus dan Responsif\nmenambahkan beberapa fitur" },
        "APK Ubah Tampilan Handphone Jadi Computer": { desc: "Aplikasi ini berfungsi untuk merombak total seluruh antarmuka (user interface) HP Android-mu yang membosankan menjadi sangat mirip dengan tampilan komputer atau laptop", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Pengalaman Desktop Realistis\nSempurna untuk Dikombinasikan dengan Keyboard & Mouse Bluetooth\nBikin Tampilan Konten & Pamer Setup Jadi Berkelas" },
        "APK Temp Number": { desc: "Layanan ini adalah penyedia nomor telepon virtual sementara (anonim) yang berfungsi khusus untuk menerima SMS kode OTP secara instan saat mendaftar aplikasi atau situs web, menjaga nomor HP pribadi Anda tetap bersih dari spam dan aman dari kebocoran data", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Perlindungan Total dari Spam dan Telepon Penipuan\nVerifikasi Akun Instan Tanpa Kartu Fisik\nMembuat Akun Massal untuk Kebutuhan Toko" },
        "APK Dynamic bar": { desc: "aplikasinya menyamar dengan sangat estetik berupa kapsul hitam minimalis di bagian atas layar. Begitu kapsul itu diklik atau disentuh akan langsung meluas ke bawah menjadi panel pintasan (control center) premium yang fungsional", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Pusat Kendali Konektivitas Lengkap\nAkses Pintasan Instan Satu Sentuhan\nEfek Estetik Menyamarkan Lubang Kamera" },
        "APK Dynamic Island": { desc: "aplikasinya menyamar dengan sangat estetik berupa kapsul hitam minimalis di bagian atas layar. Begitu kapsul itu diklik atau disentuh akan langsung meluas ke bawah menjadi panel pintasan (control center) premium yang fungsional", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Pusat Kendali Konektivitas Lengkap\nAkses Pintasan Instan Satu Sentuhan\nEfek Estetik Menyamarkan Lubang Kamera" },
        "APK Dynamic Island v2": { desc: "aplikasinya menyamar dengan sangat estetik berupa kapsul hitam minimalis di bagian atas layar. Begitu kapsul itu diklik atau disentuh akan langsung meluas ke bawah menjadi panel pintasan (control center) premium yang fungsional", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Pusat Kendali Konektivitas Lengkap\nAkses Pintasan Instan Satu Sentuhan\nEfek Estetik Menyamarkan Lubang Kamera" },
        "APK Keyboard & Emoji Ios": { desc: "Aplikasi ini berfungsi untuk merombak total papan ketik bawaan HP Android menjadi sangat mirip dengan tampilan keyboard iOS, lengkap dengan tata letak tombol yang rapi, suara ketikan (key click sound) khas iPhone, dan seluruh koleksi emoji iOS terbaru", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Ubah Total Gaya Emoji Android Jadi Emoji iOS Terbaru\nSensasi Ketikan Premium dengan Suara Khas iPhone\nmenambahkan fitur pada iOs" },
        "APK Game Space + Game Booster": { desc: "Aplikasi ini adalah pusat kendali dan pengoptimasi performa gaming terpadu yang dirancang untuk membersihkan memori, mengunci jaringan, dan meningkatkan kinerja perangkat keras (hardware) secara instan agar pengalaman bermain game menjadi super lancar tanpa lag.(khusus Handphone infinix,itel,dan tecno, untuk Handphone yang lain kemungkinan masih bisa)", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)" },
        "APK Xarena": { desc: "Aplikasi ini adalah pusat kendali dan pengoptimasi performa gaming terpadu yang dirancang untuk membersihkan memori, mengunci jaringan, dan meningkatkan kinerja perangkat keras (hardware) secara instan agar pengalaman bermain game menjadi super lancar tanpa lag.(untuk all handphone)", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Peningkat Performa Ekstrem (Performance & FPS Booster)\nPengunci Jaringan & Stabilisator Ping (Network Ping Stabilizer)\nPusat Blokir Gangguan (Do Not Disturb / Gaming Mode)/nPendingin Suhu HP (CPU Cooler & Battery Saver Optimization)" },
        "ALL CONFIG": { desc: "File config ini memodifikasi data aset visual di dalam game, sehingga baju gratisan atau karakter standar bisa terlihat seperti bundle super langka dan mahal di layar HP-mu.File modifikasi ini adalah kumpulan script aset visual kustom khusus Free Fire yang berfungsi mengubah tampilan baju, karakter, celana, hingga skin standar menjadi bundle sultan legendaris dan langka secara instan tanpa perlu membeli Diamond.(Ada berbagai file config anda bisa memilih atau request yang anda mau)", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Sulap Baju Gratisan Jadi Set Sultan\nEfek Visual Senjata Evolution & Skin Kendaraan Premium\nMeningkatkan Kepercayaan Diri & Kecepatan Berpikir\nKonten Visual Keren untuk Media Sosial" },
        "APK Jendela Mengambang": { desc: "Aplikasi ini memungkinkan kamu untuk membuka dan menampilkan beberapa aplikasi sekaligus dalam bentuk jendela kecil yang melayang di atas layar utama, mirip seperti tampilan desktop di PC, sehingga kamu bisa mengerjakan banyak hal secara bersamaan tanpa perlu menutup aplikasi yang sedang berjalan.(cocok untuk Handphone yang tidak ada fitur jendela Mengambang nya) ", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Nonton Tutorial / Live Match Sambil Nge-push Rank Game\nPantau Grafik Saham / Kripto / Harga Pasar Sambil Kerja\nSalin-Tempel (Copy-Paste) Massal Antar Aplikasi Tanpa Hambatan\nMembuat HP Jadul Terasa Seperti HP Gaming Premium\nBypass Aplikasi yang Tidak Bisa Ditinggal (Anti-AFK / Anti-Timeout)\nmenjalankan berbagai Aplikasi sekaligus" },
        "APK Jendela Mengambang v2": { desc: "Aplikasi ini memungkinkan kamu untuk membuka dan menampilkan beberapa aplikasi sekaligus dalam bentuk jendela kecil yang melayang di atas layar utama, mirip seperti tampilan desktop di PC, sehingga kamu bisa mengerjakan banyak hal secara bersamaan tanpa perlu menutup aplikasi yang sedang berjalan.(cocok untuk Handphone yang tidak ada fitur jendela Mengambang nya) ", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Nonton Tutorial / Live Match Sambil Nge-push Rank Game\nPantau Grafik Saham / Kripto / Harga Pasar Sambil Kerja\nSalin-Tempel (Copy-Paste) Massal Antar Aplikasi Tanpa Hambatan\nMembuat HP Jadul Terasa Seperti HP Gaming Premium\nBypass Aplikasi yang Tidak Bisa Ditinggal (Anti-AFK / Anti-Timeout)\nmenjalankan berbagai Aplikasi sekaligus" },
        "Pembuatan logo request": { desc: "Kami menyediakan jasa pembuatan logo kustom yang bisa disesuaikan dengan identitas brand kamu. Mulai dari gaya minimalis modern untuk toko digital, logo maskot yang sangar untuk tim game (Free Fire, Mobile Legends, dll), hingga logo ikonik untuk Bot WhatsApp dan komunitas,dan juga bertema anime, wajah Anda, badan Anda, dll.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses pembuatan - selesai", use: "Menjadi identitas brand\nMedia promosi\nMeningkatkan Nilai Jual\nDaya Tarik di Media Sosial\nBerbeda dari Pesaing" },
        "Dan logo lainya (open semua logo)": { desc: "Kami menyediakan jasa pembuatan logo kustom yang bisa disesuaikan dengan identitas brand kamu. Mulai dari gaya minimalis modern untuk toko digital, logo maskot yang sangar untuk tim game (Free Fire, Mobile Legends, dll), hingga logo ikonik untuk Bot WhatsApp and komunitas,dan juga bertema anime, wajah Anda, badan Anda, dll.", order: "Hubungi kami - pembayaran - proses pembuatan - selesai", use: "Menjadi identitas brand\nMedia promosi\nMeningkatkan Nilai Jual\nDaya Tarik di Media Sosial\nBerbeda dari Pesaing" },
        "hologram Karakter": { desc: "File modifikasi ini adalah script efek visual kustom khusus Free Fire yang mengubah seluruh tubuh karakter musuh menjadi siluet cahaya hologram neon yang menyala terang dan mampu menembus tembok, membuat pergerakan tubuh musuh tetap terlihat utuh walaupun mereka bersembunyi di dalam bangunan atau di balik rintangan.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Mendeteksi posisi musuh\nPandangan Tetap Jernih dan Anti-Bingung\nMembongkar Jebakan Musuh\Membaca Pergerakan Musuh di Balik tembok/gloo wal\nAntisipasi Serangan Kejutan" },
        "Hologram Senjata": { desc: "File modifikasi ini adalah script efek visual kustom khusus Free Fire yang memunculkan pancaran cahaya hologram menyala terang dari senjata musuh yang memiliki kemampuan menembus tembok dan bangunan, memastikan posisi musuh tetap terlihat jelas dari luar meskipun mereka bersembunyi di dalam ruangan tertutup.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Mendeteksi posisi musuh\nPandangan Tetap Jernih dan Anti-Bingung\nMembongkar Jebakan Musuh\Membaca Pergerakan Musuh di Balik tembok/gloo wal\nAntisipasi Serangan Kejutan" },
        "Nokos berbagai negara & app": { desc: "Kami melayani pembelian Nomor Kosong (NOKOS) / Virtual Number untuk kebutuhan verifikasi berbagai aplikasi dan situs web. Dengan nomor ini, Anda bisa membuat akun tanpa harus menggunakan nomor pribadi, sehingga privasi dan keamanan identitas Anda tetap terjaga.", order: "Masukkan nomor yang kami berikan ke kolom pendaftaran aplikasi yang dituju.\nSaat aplikasi meminta kode verifikasi (OTP), segera hubungi kami melalui chat.\nKami akan memberikan kode OTP tersebut secara instan.\nMasukkan kode, dan akun Anda siap digunakan.", use: "Tidak perlu memberikan nomor pribadi saat mendaftar di situs/aplikasi yang tidak dipercaya." },
        "Jasa edit nick name lobby/in game": { desc: "Kami menyediakan layanan penyuntingan (editing) profesional untuk mengubah bahan mentah foto maupun video Anda menjadi karya visual yang menarik, estetik, dan berkualitas tinggi.", order: "hubungi kami - pilih konsep editing - pembayaran - proses - selesai", use: "Meningkatkan Kualitas Visual\nMembuat konten menarik" },
        "Jasa edit (Alight Motion)": { desc: "Kami menyediakan layanan penyuntingan (editing) profesional menggunakan Alight Motion.", order: "hubungi kami - pilih konsep - pembayaran - proses - selesai", use: "Meningkatkan Kualitas Visual" },
        "Jasa edit spek akun": { desc: "Kami menyediakan layanan penyuntingan (editing) profesional untuk membuat spek akun lebih menarik.", order: "hubungi kami - pilih konsep editing - pembayaran - proses - selesai", use: "Meningkatkan Kualitas. \nAkun terasa seperti akun yang keren. \nBanyak yang menyukai" },
        "Jasa login tele tanpa biaya SMS": { desc: "kamu kesulitan untuk login ke telegram? Dan bingung kenapa ada biaya SMS? Order di kami saya 5rb bisa login ke telegram tanpa membayar biaya SMS lagi", order: "Hubungi kami - isi data - pembayaran - proses - selesai", use: "Bisa login ke telegram tanpa membayar biaya SMS.\nHanya membayar 1 kali saja untuk seumur hidup" },
        "Aplikasi premium": { desc: "Kami menyediakan layanan aktivasi akun premium untuk berbagai aplikasi populer di bidang hiburan, produktivitas, dan edukasi.", order: "Pilih Aplikasi - Pilih Durasi - pembayaran - proses - selesai", use: "Bebas Iklan. \nkualitas terbaik. \nFitur Eksklusif" },
        "Murid suntik (MURSUN)": { desc: "Program bimbingan khusus bagi Anda yang ingin memulai bisnis suntik sosmed di dunia digital.", order: "hubungi kami - pembayaran - masuk ke grup - di bimbing - selesai", use: "Bisa buka jasa suntik sosmed sendiri." },
        "Murid logo (MURLOG)": { desc: "Program bimbingan khusus desain logo.", order: "hubungi kami - pembayaran - masuk ke grup - di bimbing - selesai", use: "Bisa membuat logo sendiri." },
        "Murid nokos (MURNOK)": { desc: "Program bimbingan khusus membuat nokos.", order: "hubungi kami - pembayaran - masuk ke grup - di bimbing - selesai", use: "Bisa membuat nokos sendiri sepuasnya" },
        "Benner animation": { desc: "Kami menyediakan layanan pembuatan banner digital dengan sentuhan animasi dinamis (bergerak). Banner ini menggabungkan elemen grafis, teks yang muncul secara bergantian, dan efek transisi yang halus untuk menciptakan visual yang lebih menarik perhatian.", order: "hubungi kami - pilih konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Menjelaskan Produk yang Kompleks dalam Hitungan Detik Visualisasi Tekstur dan Efek yang Lebih Hidup" },
        "Overlay animation": { desc: "Kami menyediakan layanan pembuatan desain overlay animasi (bergerak) yang dirancang khusus sesuai dengan tema atau branding Anda. Overlay ini berfungsi sebagai bingkai atau elemen visual tambahan yang muncul di layar saat Anda melakukan live streaming atau merekam video.(jika ingin yang tidak bergerak juga ada)", order: "hubungi kami - pilih konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Untuk Branding, Estetika, Profesionalisme" },
        "Script download foto/video 1x lihat": { desc: "Ini adalah script bot interaktif WhatsApp yang berfungsi mengubah media sekali lihat menjadi foto atau video yang bisa di buka berulang kali bahkan bisa di download", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Menyimpan Foto & Video Rahasia\nMengarsipkan Bukti Transaksi atau Chat Penting\nBisa Diteruskan dan Dibagikan Ulang\nSangat Praktis Tanpa Memenuhi Memori HP Sekaligus\nBisa Dipasang di Group Chat untuk Dipakai Bersama" },
        "Animation ads": { desc: "Layanan ini fokus pada pembuatan video promosi berdurasi pendek dengan elemen grafis bergerak (Motion Graphics). Cocok untuk memperkenalkan produk baru, promo diskon, atau pengumuman event.", order: "Hubungi kami - pilih konsep -pembayaran - proses - Preview & Revisi - selesai", use: "Menjelaskan Produk dengan Cepat. \nlebih menarik perhatian dibanding foto statis saat orang melakukan scrolling." },
        "APK Banned Gmail": { desc: "APK ngirim laporan spam atau abuse ke provider Gmail", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Ngebanned saingan bisnis\nBalas dendam\nNgeprank orang\nMatiin akun scammer" },
        "APK Bug WhatsApp": { desc: "APK ngirim pesan berisi deretan karakter Unicode khusus (misal: kombinasi diacritic marks, joiner, atau zero-width chars) yang gak bisa diproses parser WA WhatsApp target langsung force close tiap kali buka chat itu. Bahkan bisa bikin WA gak bisa dibuka sama sekali sampai chat dihapus lewat web.WA gagal baca format, lalu crash karena Error", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Test keamanan\nBalas dendam\\nMatiin grup saingan\nNgeprank temen/grup" },
        "APK Auto Save Kontak": { desc: "APK Auto-Save Kontak WhatsApp ini bekerja dengan cara membaca notifikasi chat yang masuk, lalu mengekstrak nomor telepon dari pesan tersebut menggunakan pola regex, setelah itu APK otomatis menyimpan nomor itu ke kontak HP tanpa perlu lo sentuh sama sekali", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Kegunaan pertama, lo gak perlu repot-repot simpan nomor orang manual setiap ada yang chat, karena APK ini langsung otomatis nyimpen sendiri. Kegunaan kedua, cocok banget buat lo yang pebisnis atau customer service yang tiap hari terima chat dari pelanggan baru, jadi semua nomor pelanggan langsung terkumpul rapi tanpa lo ketik satu-satu." },
        "APK Reaction Emoji Channel WhatsApp": { desc: "Aplikasi ini berfungsi untuk menyuntikkan puluhan, ratusan, hingga ribuan reaksi emoji secara otomatis pada setiap postingan atau chat di Channel WhatsApp yang dipilih guna meningkatkan interaksi dan popularitas Channel secara instan", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Suntik Ribuan Reaksi Instan\nMeningkatkan Kredibilitas & Kepercayaan Pelanggan\nmembuat bisnis sampingan dengan aplikasi ini" },
        "Hologram Karakter": { desc: "File modifikasi ini adalah script efek visual kustom khusus Free Fire yang mengubah seluruh tubuh karakter musuh menjadi siluet cahaya hologram neon yang menyala terang dan mampu menembus tembok, membuat pergerakan tubuh musuh tetap terlihat utuh walaupun mereka bersembunyi di dalam bangunan atau di balik rintangan.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Mendeteksi posisi musuh\nPandangan Tetap Jernih dan Anti-Bingung\nMembongkar Jebakan Musuh\Membaca Pergerakan Musuh di Balik tembok/gloo wal\nAntisipasi Serangan Kejutan" },
        "hologram Senjata": { desc: "File modifikasi ini adalah script efek visual kustom khusus Free Fire yang memunculkan pancaran cahaya hologram menyala terang dari senjata musuh yang memiliki kemampuan menembus tembok dan bangunan, memastikan posisi musuh tetap terlihat jelas dari luar meskipun mereka bersembunyi di dalam ruangan tertutup.", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Mendeteksi posisi musuh\nPandangan Tetap Jernih dan Anti-Bingung\nMembongkar Jebakan Musuh\Membaca Pergerakan Musuh di Balik tembok/gloo wal\nAntisipasi Serangan Kejutan" },
        "GFX desain": { desc: "Jasa GFX (Graphic Effects) ini fokus pada penggabungan elemen visual, efek manipulasi cahaya, dan tekstur untuk menciptakan karya seni digital yang hidup. Layanan ini sangat cocok bagi kamu yang ingin punya identitas visual yang unik di dunia gaming atau konten kreator.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Identitas Unik. \nDaya Tarik Visual. \nKonsistensi Branding. \nMeningkatkan Kualitas Konten" },
        "Watermark desain": { desc: "Layanan ini menyediakan pembuatan tanda pengenal (watermark) dalam bentuk desain statis. Watermark ini dirancang khusus untuk ditempelkan pada foto produk, video konten, atau karya digital lainnya sebagai bukti kepemilikan.", order: "hubungi kami - pilih konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Mencegah Manipulasi Data. \nAnti-Theft (Anti Maling). \nMenjamin keamanan aset. \nBranding Otomatis.\nMeningkatkan Kepercayaan." },
        "Watermark animation": { desc: "Layanan ini menyediakan pembuatan tanda pengenal (watermark) dalam bentuk animasi bergerak. Watermark ini dirancang khusus untuk ditempelkan pada foto produk, video konten, atau karya digital lainnya sebagai bukti kepemilikan.", order: "hubungi kami - pilih konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Mencegah Manipulasi Data. \nAnti-Theft (Anti Maling). \nMenjamin keamanan aset. \nBranding Otomatis. \nMeningkatkan Kepercayaan." },
        "Create panel Pterodactyl": { desc: "Pterodactyl Grandma Panel berbasis open-source yang berjalan di Docker. Kami menawarkan jasa instalasi lengkap, mulai dari pengaturan Panel (tampilan kontrol) hingga Wings (node server). Cocok untuk kamu yang ingin berjualan server game atau sekadar mengelola server pribadi seperti Minecraft, GTA (FiveM), Discord Bot, Bot WhatsApp, dan banyak lagi.", order: "Hubungi kami - pilih paket - pembayaran - proses - selesai", use: "Menjaga aplikasi/bot tetap aktif 24 jam. \nPenghematan Biaya VPS (Multi-Server dalam 1 IP). \nIsolasi Keamanan Tingkat Tinggi (Docker Sandbox). \nPemasangan script bot lebih mudah" },
        "Reseller panel Pterodactyl": { desc: "Layanan Reseller Panel Pterodactyl adalah paket kemitraan di mana kamu akan diberikan akun khusus dengan Hak Akses Pembuatan Server sepuasnya.", order: "Hubungi kami  - pembayaran - proses - selesai", use: "Bisa buat panel Pterodactyl sepuasnya, dan panel nya bisa di jual kembali" },
        "Open jasteb": { desc: "Sementara itu, Jasteb memiliki konsep yang sama dengan Uncheck, tetapi berbeda dalam metode pengiriman. Jasteb dikirim melalui email, sehingga lebih praktis dan terbukti lebih fresh.", order: "Hubungi kami - pilih jumlah - pembayaran - proses - selesai", use: "Bisa di jual ulang. \nbisa gacha akun dengan harga terjangkau."},
        "Open unchek": { desc: "Uncheck adalah akun hoki-hokian yang dikirim dalam bentuk foto, sehingga harus login satu per satu secara manua..", order: "Hubungi kami - pilih jumlah - pembayaran - proses - selesai", use: "bisa di jual ulang. \nbisa Gacha akun dengan harga terjangkau" },
        "Panel Jasteb": { desc: "Panel ini adalah sebagai alat pembuatan jasteb, anda dapat membuat jasteb sepuasnya mengunakan panel ini.", order: "Hubungi kami - pembayaran - proses pengiriman panel - selesai", use: "Bisa jual unchek/jasteb sendiri. \nbisa membuat jasteb/unchek sepuasnya. \npanelnya bisa di jual kembali" },
        "Gloo wall transparan": { desc: "File modifikasi ini adalah script visual kustom khusus Free Fire yang mengubah tampilan dinding pertahanan (Gloo Wall) menjadi tembus pandang (transparan), memberikan Anda pandangan penuh untuk memantau pergerakan dan strategi musuh yang bersembunyi di balik gloo wall", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Mendeteksi posisi musuh\nPandangan Tetap Jernih dan Anti-Bingung\nMembongkar Jebakan Musuh\Membaca Pergerakan Musuh di Balik tembok/gloo wal\nAntisipasi Serangan Kejutan", },
        "Gloo wall gepeng": { desc: "File modifikasi ini adalah script kustom khusus Free Fire yang mengubah ukuran dan bentuk dinding pertahanan (Gloo Wall) menjadi lebih pendek ke bawah (gepeng), berfungsi sebagai pijakan kaki instan yang bisa dinaiki untuk menjangkau atap bangunan atau tempat tinggi lainnya dan masuk ke pertahanan musuh yang di balik gloo wall", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Strategi Kejutan\nPijakan  untuk Memanjat\nuntuk masuk ke pertahanan musuh yang berada di dalam gloo wall" },
        "jasa pembuatan website": { desc: "Kami menyediakan layanan pembuatan website kustom berbasis kode,file,dan link (sudah jadi) untuk berbagai kebutuhan personal maupun bisnis. Layanan kami berfokus pada pembuatan halaman web yang bersih, cepat, dan mudah dioperasikan.", order: "hubungi kami - pilih konsep - pembayaran - proses -Preview & Revisi - selesai", use: "Media Promosi 24 Jam. \nMeningkatkan Kepercayaan. \nTampilan Rapi di Semua Perangkat" },
        "Script Bug Whatsaap": { desc: "Kalian pernah ketipu atau ada masalah sama orang? Mau bisa bug tapi yang bukan dari apk? Pakai script ini aja tinggal pasang dan langsung gunakan", order: " hubungi kami - pembayaran - pengiriman script - selesai", use: "kalian di tipu atau ada masalah dengan seseorang kalian bisa mengunakan script ini untuk balas dendam dengan orang tersebut, dan tentunya bisa di jual ulang" },
        "Script Brat Stiker": { desc: "Kalian tidak mempunyai stiker? Dan ingin membuat stiker sendiri? Pakai script ini saja untuk membuat stiker apa saja", order: "Hubungi kami - pembayaran - pengiriman script - selesai", use: "Bisa membuat stiker sendiri,bisa membuat foto jadi stiker, tentunya bisa di jual lagi,dll." },
        "JAILBREAK ALICE": { desc: "Dalam konteks AI dan sistem keamanan digital, Teks Jailbreak adalah rangkaian kalimat, kode, atau skenario buatan yang dirancang secara khusus untuk mengelabui pembatasan keamanan (filter) pada sistem AI (seperti ChatGPT, Gemini, dll.) atau sistem operasi, sehingga target mau mematuhi perintah yang seharusnya dilarang.", order: "Hubungi kami - pembayaran - pengiriman file/teks - selesai", use: "Pengujian Celah Keamanan\nMembuka Kunci Fitur yang Dibatasi\nEksperimen Kreativitas Tanpa Batas" },
        "JAILBREAK DRAGONS BOYS": { desc: "Dalam konteks AI dan sistem keamanan digital, Teks Jailbreak adalah rangkaian kalimat, kode, atau skenario buatan yang dirancang secara khusus untuk mengelabui pembatasan keamanan (filter) pada sistem AI (seperti ChatGPT, Gemini, dll.) atau sistem operasi, sehingga target mau mematuhi perintah yang seharusnya dilarang.", order: "Hubungi kami - pembayaran - pengiriman file/teks - selesai", use: "Pengujian Celah Keamanan\nMembuka Kunci Fitur yang Dibatasi\nEksperimen Kreativitas Tanpa Batas" },
        "JAILBREAK GORGON": { desc: "Dalam konteks AI dan sistem keamanan digital, Teks Jailbreak adalah rangkaian kalimat, kode, atau skenario buatan yang dirancang secara khusus untuk mengelabui pembatasan keamanan (filter) pada sistem AI (seperti ChatGPT, Gemini, dll.) atau sistem operasi, sehingga target mau mematuhi perintah yang seharusnya dilarang.", order: "Hubungi kami - pembayaran - pengiriman file/teks - selesai", use: "Pengujian Celah Keamanan\nMembuka Kunci Fitur yang Dibatasi\nEksperimen Kreativitas Tanpa Batas" },
        "Script Jaga Grup": { desc: "Kalian punya member banyak yang rusuh? Banyak yang sering kirim link dan virus teks, dan sering melanggar aturan grup? Pakai script ini aja otomatis pesan yang melanggar bisa langsung di hapus", order: "Hubungi kami - pembayaran - pengiriman script - selesai", use: "Bisa menghapus pesan yang melanggar aturan grup otomatis, ada teks welcome bagian member yang baru masuk dan teks goodbye untuk member yang keluar, tentunya bisa di jual lagi" },
        "Script Push kontak": { desc: "Kalian memiliki kontak sedikit? Pakai script ini saja untuk memudahkan kalian untuk mendapatkan kontak secara instan", order: "Hubungi kami - pembayaran - pengiriman script - selesai", use: "bisa untuk menambahkan kontak secara instan, dan script ini bisa di jual kembali" },
        "APK Banindo V1": { desc: "APK ini adalah tool buat ngebanned nomor WhatsApp orang lain tanpa perlu login ke akun mereka, cara kerjanya dengan cara ngirim laporan (report) ke pihak WhatsApp bahwa nomor target melanggar kebijakan (spam, penipuan, konten ilegal, dll), cukup masukin nomor target (format internasional, misal +628xxxx),nomor target bakal kena banned sementara atau permanen tergantung kebijakan WhatsApp", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "bisa banned nomor mantan biar gak bisa chat lo lagi, banned nomor scammer yang sering ganggu, banned nomor pesaing bisnis biar gak bisa promosi di WA, banned nomor orang yang benci atau cuma buat iseng" },
        "APK Banindo V2": { desc: "APK ini adalah tool buat ngebanned nomor WhatsApp orang lain tanpa perlu login ke akun mereka, cara kerjanya dengan cara ngirim laporan (report) ke pihak WhatsApp bahwa nomor target melanggar kebijakan (spam, penipuan, konten ilegal, dll), cukup masukin nomor target (format internasional, misal +628xxxx),nomor target bakal kena banned sementara atau permanen tergantung kebijakan WhatsApp", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "bisa banned nomor mantan biar gak bisa chat lo lagi, banned nomor scammer yang sering ganggu, banned nomor pesaing bisnis biar gak bisa promosi di WA, banned nomor orang yang benci atau cuma buat iseng" },
        "APK Bannend & Unbanned WhatsApp": { desc: "Fungsi Apk ini untuk mem banned nomor WhatsApp, dan untuk mem unbanned nomor WhatsApp kalian yang terkena banned", order: "Hubungi kami - pembayaran - pengiriman apk - selesai ", use: "Jika kalian di tipu atau punya masalah dengan seseorang kalian bisa mengunakan apk ini untuk balas dendam, dan jika nomor kalian terkena pemblokiran akun anda bisa menggunakan apk ini untuk membuka nya, dan tentunya apk nya bisa di jual kembali" },
        "APK Beku Payment": { desc: "Apk ini bisa untuk membekukan/memblokir akun e wallet", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Kalian tertipu dengan seseorang dan kalian masih ingat nomor e wallet nya? Pakai apk ini saja untuk balas dendam dengan memblokir akun orang tersebut, dan tentunya apk nya bisa di jual kembali" },
        "APK JPM Deres": { desc: "Apk ini bisa untuk menambahkan member di grup anda secara cepat", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Grup kalian sepi? Pakai apk ini aja agar menaikkan member yang ada di grup kalian, dan tentunya apk nya bisa di jual kembali" },
        "APK Tema WA iPhone": { desc: "Kalian ingin WhatsApp kalian seperti WhatsApp iPhone? Pakai apk ini aja agar terlihat seperti iPhone asli", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "WhatsApp terlihat seperti iPhone asli, bisa pamer ke temen, dan pastinya bisa di jual lagi\nbisa download story WhatsApp\nbisa membuka foto/video 1x lihat secara berulang-ulang" },
        "APK SW Grup": { desc: "kalian ingin status di WhatsApp nya banyak yang lihat? Pakai apk ini aja di jamin statusnya banyak  yang lihat (bukan fitur tag)", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Status banyak yang lihat, di rekomendasikan untuk yang mempunyai usaha digital,dan tentunya apk nya bisa di jual kembali" },
        "APK Balas Chat Otomatis": { desc: "Capek dibilang slow respon oleh pembeli? Atau sering kehilangan pelanggan karena chat masuk saat kamu sedang tidur atau sekolah? Saatnya buat tokomu bergerak otomatis! Kami menyediakan aplikasi premium pembantu bisnis yang bisa membalas setiap pesan WhatsApp, Telegram, atau Instagram secara instan dengan jawaban yang bisa kamu atur sendiri.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Respons Super Cepat (Anti Slow Respon)\nAktif nonstop 24 jam\nBisa membalas secepatnya dengan pesan yang bisa di setting\nDan tentunya Apk nya bisa di jual kembali" },
        "APK Notif Dana Palsu": { desc: "aplikasi ini dapat memunculkan notifikasi dana yang hanya berjalan di HP pengguna sendiri (bukan dikirim ke HP lain). Aplikasi ini menghasilkan notifikasi palsu yang menyerupai asli dari platform dana.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai ", use: "Menutupi kesulitan finansial di depan umum\nBisa bikin video / foto prank keluarga / teman\nIlustrasi untuk video edukasi keuangan\nBisa untuk bikin konten\nDan tentunya Apk nya bisa di jual kembali" },
        "APK Notif Gopay Palsu": { desc: "aplikasi ini dapat memunculkan notifikasi gopay yang hanya berjalan di HP pengguna sendiri (bukan dikirim ke HP lain). Aplikasi ini menghasilkan notifikasi palsu yang menyerupai asli dari platform gopay.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai ", use: "Menutupi kesulitan finansial di depan umum\nBisa bikin video / foto prank keluarga / teman\nIlustrasi untuk video edukasi keuangan\nBisa untuk bikin konten\nDan tentunya Apk nya bisa di jual kembali" },
        "APK & Web Nokos": { desc: "Aplikasi dan website ini adalah platform otomatisasi Virtual Number yang menyediakan ribuan nomor HP dari berbagai negara (Indonesia, Amerika Serikat, Rusia, Malaysia, dll) yang siap digunakan khusus untuk menerima kode verifikasi OTP (SMS) secara instan dan rahasia.(jika ingin mengetahui tentang nokos secara detail, bisa lihat di nokos yang di bagian jasa & layanan)", order: "Hubungi kami - pembayaran - pengiriman apk / Website - selesai", use: "Tempat Membeli Nokos dengan Harga Sangat Terjangkau\nBebas Pilih Layanan Sesuai Budget\nGaransi Saldo Kembali Jika Nomor Gagal Pembelian" },
        "APK Pembuatan Logo": { desc: "APK ini udah dikasih template logo siap pakai untuk berbagai keperluan, cara pakenya tinggal pilih template, edit teks, ganti warna, ganti font, lalu export dengan memilih resolusi HD", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "kegunaannya lo bisa bikin logo buat usaha sendiri tanpa bayar desainer, lo bisa jual jasa pembuatan logo ke orang lain pake APK ini modal ganti-ganti teks doang" },
        "APK Nonton Bioskop": { desc: "APK ini buat streaming film bioskop gratisan, isinya ribuan film dari seluruh dunia (Hollywood, Korea, Jepang, Indonesia, dll) kualitas HD sampai 4K, pake subtitle Indonesia/Inggris, gak ada iklan, bisa download buat nonton offline, jalan di semua Android", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: " bisa nonton film bioskop gratis tanpa bayar tiket, tanpa langganan Netflix, tanpa iklan, dan bisa nonton offline kapan aja" },
        "APK QRIS NO KTP (Otomatis)": { desc: "Aplikasi ini menyediakan layanan pembuatan QRIS All Payment secara instan tanpa memerlukan verifikasi KTP, di mana sistem canggihnya akan mengekstrak dan menerbitkan barcode QRIS secara otomatis dalam hitungan detik agar toko digital Anda bisa langsung menerima pembayaran,Begitu kode QR tersebut di-scan dan dibayar oleh pembeli, kode QR tersebut akan otomatis hangus (kedaluwarsa) sehingga tidak bisa disalahgunakan atau dibayar ulang untuk kedua kalinya, (jika sudah ada yang membayar otomatis saldo langsung masuk ke akunnya)", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Keamanan Ganda\nPencegahan Salah Nominal\notomatis hangus (kedaluwarsa) sehingga tidak bisa disalahgunakan" },
        "APK QRIS NO KTP (verifikasi)": { desc: "QRIS statis ini adalah satu barcode yang sama selamanya. Barcode ini bisa kamu cetak, jadikan stiker, atau pajang di profil tokomu secara permanen. Pembeli bebas men-scan barcode ini kapan saja dengan nominal yang mereka ketik sendiri.(kekurangannya jika sudah di bayar harus verifikasi terlebih dahulu agar saldo masuk ke akun(", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Nominal Fleksibel\nSatu Barcode untuk Selamanya\nBisa Dicetak Fisik" },
        "APK Up Order kuota via Galeri": { desc: "Aplikasi ini adalah alat bantu khusus yang memodifikasi sistem aplikasi order kuota agar Anda bisa melakukan pembuatan qris tanpa  foto KTP, verifikasi wajah, tanpa lewat foto langsung (live camera) tetapi dengan menggugah foto KTP, dan lainnya lainnya lewat galeri saja ", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Verifikasi Akun Kapan Saja Tanpa KTP Fisik di Tangan\nMengatasi Kamera yang Suka Eror atau Blur\nPrivasi Data Dokumen Lebih Terjaga" },
        "APK Push Kontak": { desc: "Aplikasi ini adalah alat bantu digital otomatis yang dirancang untuk menyimpan, membagikan, dan menambah ribuan nomor kontak WhatsApp sesama pelaku bisnis online secara instan hanya dalam sekali klik guna melejitkan jumlah penonton Story WA dan memperluas jaringan pasar Anda.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Melejitkan Viewers Story WhatsApp\nTarget Pasar yang Tepat Sasaran" },
        "APK PS Starparks": { desc: "APK ini adalah emulator PlayStation yang bisa mainin game PS dan PSP langsung di HP Android", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "bisa main game PlayStation di HP tanpa beli konsolnya, cocok buat bernostalgia main game jadul atau buat ngabisin waktu, dan bisa dimainin di mana aja tanpa perlu TV atau listrik gede" },
        "APK Game PC": { desc: "APK ini adalah emulator Windows yang bisa mainin game PC langsung di HP Android, support game ringan sampai berat kayak GTA San Andreas, Counter-Strike 1.6, Need for Speed Underground, Minecraft, sampai game jadul lainnya", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "bisa main game PC di HP tanpa punya laptop/PC, cocok buat yang lagi di luar rumah tapi pengin main game kaya GTA atau CS, dan gak perlu beli konsol mahal-mahal" },
        "APK E-KTP Simulasi": { desc: "APK ini bisa bikin tampilan KTP (Kartu Tanda Penduduk) palsu buat keperluan simulasi atau desain, lo tinggal masukin data kayak NIK, nama lengkap, alamat, foto, tanda tangan(ngasal juga gapapa), lalu APK bakal generate gambar KTP yang mirip banget sama aslinya, lengkap dengan hologram, barcode, dan watermark yang mirip", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "bisa pake buat simulasi pendaftaran, nagatasin sesi facebook, buat kebutuhan desain grafis, buat ngetes sistem verifikasi KTP di aplikasi lain, buat prank temen, atau buat latihan isi formulir sebelum bikin KTP asli, jangan pake buat hal ilegal ya" },
        "APK & Web Suntik Sosmed": { desc: "Mau punya akses ke server pusat penambah followers, likes, views, dan komen dengan harga modal tangan pertama? Ini adalah platform APK & Website SMM (Social Media Marketing) Panel tercanggih yang dirancang khusus untuk kamu yang ingin menaikkan statistik akun sendiri dengan harga super hemat, atau buat kamu yang mau buka bisnis sampingan jasa penambah (like,followers, comment,dll.) atau bisa menjadi agen reseller sosmed", order: "Hubungi kami - pembayaran - pengiriman apk / web - selesai", use: "Sistem Pemesanan Otomatis 24 Jam\nPembayaran Otomatis & Fleksibel\nPusat Pembelian Layanan Sosmed dengan Harga Grosir (Tangan Pertama)\nbisa buka usaha sampingan" },
        "Script DDOS": { desc: "DDoS attack adalah singkatan dari Distributed Denial of Service. Ini adalah jenis serangan siber yang bertujuan membuat sebuah website, server, atau layanan online menjadi lambat atau tidak bisa diakses. Cara kerjanya: Penyerang menggunakan banyak perangkat (komputer, bot, atau perangkat yang sudah terinfeksi malware) secara bersamaan. - Semua perangkat itu mengirimkan permintaan (traffic) ke target dalam jumlah sangat besar. - Server target jadi kewalahan karena terlalu banyak permintaan, sehingga pengguna normal tidak bisa mengakses layanan.Bayangkan Anda punya warung mie ayam, dan tiba-tiba datang 1000 orang palsu yang antre tapi tidak mau pesan mereka hanya menghalangi pelanggan asli yang mau makan. Akibatnya: Warung Anda kewalahan melayani orang palsu. Pelanggan beneran nggak bisa dilayani. Akhirnya, warung tutup (server down).", order: "Hubungi kami - pembayaran - pengiriman file - selesai", use: "Kegunaan pertama, buat ngedown-in website orang yang lo benci atau yang pernah ngerugiin lo. Kegunaan kedua, buat ngebales serangan dari orang lain (balas dendam digital). Kegunaan ketiga, buat nge-DDoS server game biar lawan lo pada lag atau disconnect, jadi lo bisa menang dengan mudah. Kegunaan keempat, buat nge-DDoS website saingan bisnis biar websitenya lelet atau mati total, otomatis pelanggan pindah ke lo." },
        "Jasa editing video": { desc: "Kami menyediakan jasa editing video profesional untuk mengubah rekaman mentahmu menjadi konten TikTok, Reels, atau promosi jualan yang estetik, sinematik, dan siap FYP lewat teknik pemotongan yang rapi, transisi keren, serta pewarnaan yang memanjakan mata.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Akurasi Visual untuk Mengurangi Komplain\nKonsistensi Estetika Feed Toko (Brand Identity)\nMeningkatkan Click-Through Rate (CTR) Katalog\Menciptakan High-Value Perception (Kesan Produk Mahal)\nMembangun Personal Branding\nMenaikkan Conversion Rate Penjualan" },
        "Jasa editing foto": { desc: "Kami menghadirkan jasa editing foto berkualitas HD yang siap mengubah gambar biasa menjadi luar biasa melalui manipulasi latar belakang, penjernihan kualitas visual yang blur, hingga pembuatan desain poster promosi toko digitalmu agar terlihat jauh lebih mewah dan berkelas.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Akurasi Visual untuk Mengurangi Komplain\nKonsistensi Estetika Feed Toko (Brand Identity)\nMeningkatkan Click-Through Rate (CTR) Katalog\Menciptakan High-Value Perception (Kesan Produk Mahal)\nMembangun Personal Branding\nMenaikkan Conversion Rate Penjualan" },
        "jasa pembuatan aplikasi": { desc: "Kami menyediakan jasa pembuatan aplikasi yang bisa dikustomisasi penuh oleh pembeli dari segi fitur, alur logika, hingga tampilan antarmukanya agar tepat sasaran dalam mempermudah kebutuhan bisnis atau pengelolaan data Anda.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Bisa untuk Kebutuhan Tugas atau Komersial (Cuan)\nFitur Mengikuti Kemauanmu\nTampilan Unik & Personal\nSistem Database adaptif" },
        "APK Kenon": { desc: "APK ini adalah tool buat ngebanned nomor WhatsApp orang lain tanpa perlu login ke akun mereka, cara kerjanya dengan cara ngirim laporan (report) ke pihak WhatsApp bahwa nomor target melanggar kebijakan (spam, penipuan, konten ilegal, dll), cukup masukin nomor target (format internasional, misal +628xxxx),nomor target bakal kena banned sementara atau permanen tergantung kebijakan WhatsApp", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "bisa banned nomor mantan biar gak bisa chat lo lagi, banned nomor scammer yang sering ganggu, banned nomor pesaing bisnis biar gak bisa promosi di WA, banned nomor orang yang benci atau cuma buat iseng" },
        "APK Levii Banned": { desc: "APK ini adalah tool buat ngebanned nomor WhatsApp orang lain tanpa perlu login ke akun mereka, cara kerjanya dengan cara ngirim laporan (report) ke pihak WhatsApp bahwa nomor target melanggar kebijakan (spam, penipuan, konten ilegal, dll), cukup masukin nomor target (format internasional, misal +628xxxx),nomor target bakal kena banned sementara atau permanen tergantung kebijakan WhatsApp", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "bisa banned nomor mantan biar gak bisa chat lo lagi, banned nomor scammer yang sering ganggu, banned nomor pesaing bisnis biar gak bisa promosi di WA, banned nomor orang yang benci atau cuma buat iseng" },
        "APK Kebutuhan JB": { desc: "Aplikasi ini adalah platform penyedia berbagai alat bantu digital siap pakai yang dirancang khusus untuk mempermudah, mempercepat, dan mengamankan segala proses transaksi jual beli akun, Aplikasi gratis, layanan panel,layanan logo, dan berbagai layanan yang berguna", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "ada berbagai jasa dalam 1 Aplikasi\ndan masih banyak lagi" },
        "jasa pembuatan game": { desc: "Kami menghadirkan jasa pembuatan game kustom dari nol yang memberi Anda kebebasan penuh untuk menentukan sendiri tema, genre, rintangan, hingga mekanik permainan seperti game susun balok atau petualangan impian Anda.", order: "Hubungi kami - pemilihan konsep - pembayaran - proses - Preview & Revisi - selesai", use: "Bisa untuk Kebutuhan Tugas atau Komersial (Cuan)\nMekanik Permainan Bisa Diatur\nKebebasan Genre & Alur Cerita" },
        "Antena karakter": { desc: "File modifikasi ini adalah script visual kustom khusus Free Fire yang secara otomatis mengubah visual kepala karakter musuh menjadi memanjang tinggi ke atas langit, berfungsi sebagai penanda atau antena pelacak instan agar Anda bisa memantau posisi dan pergerakan seluruh musuh di map dari jarak jauh.", order: "Hubungi kami - pembayaran - pengiriman file- selesai", use: "Pendeteksi Musuh Jarak Jauh\nMembongkar Tempat Bersembunyi\nMudah Dipasang\nNavigasi Rotasi & Safe Zone yang SempurnaMendeteksi posisi musuh\nPandangan Tetap Jernih dan Anti-Bingung\nMembongkar Jebakan Musuh\Membaca Pergerakan Musuh di Balik tembok/gloo wal\nAntisipasi Serangan Kejutanl" },
        "APK Temp Gmail": { desc: "Temp mail (Temporary Email) adalah alamat email sementara yang dibuat secara instan dan dapat digunakan untuk sekali pakai. Alamat email ini akan hapus atau kedaluwarsa secara otomatis setelah jangka waktu tertentu.", order: "Hubungi kami - pembayaran - pengiriman apk - selesai", use: "Menjaga Privasi & Keamanan, Jika kamu terpaksa mendaftar di situs web yang terasa mencurarakan atau kurang terpercaya, temp mail melindungi data pribadi kamu agar tidak bocor jika situs tersebut diretas. DLL. \ntentunya apk ini bisa di jual kembali" }
    };

    function buildDomList(targetId, arrayData) {
        const parent = document.getElementById(targetId);
        if(!parent) return;
        arrayData.forEach(name => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name';
            nameSpan.textContent = "✧ " + name;
            
            const btn = document.createElement('button');
            btn.className = 'btn-detail';
            btn.textContent = 'DETAIL';
            btn.onclick = () => openModal(name);
            
            itemDiv.appendChild(nameSpan);
            itemDiv.appendChild(btn);
            parent.appendChild(itemDiv);
        });
    }

    function openModal(name) {
        const modal = document.getElementById('itemModal');
        const title = document.getElementById('m-title');
        const desc = document.getElementById('m-desc');
        const order = document.getElementById('m-order');
        const use = document.getElementById('m-use');
        
        title.textContent = name;
        if (products[name]) {
            desc.textContent = products[name].desc;
            order.textContent = products[name].order;
            use.textContent = products[name].use;
        } else {
            desc.textContent = "Deskripsi belum tersedia untuk layanan ini.";
            order.textContent = "Hubungi admin untuk melakukan pemesanan.";
            use.textContent = "Kegunaan umum produk/jasa digital.";
        }
        modal.style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('itemModal').style.display = 'none';
    }

    window.onclick = function(e) {
        const modal = document.getElementById('itemModal');
        if (e.target === modal) closeModal();
    }

    const songUrls = [
        "https://ia903204.us.archive.org/15/items/animation_202605/1.mp3",
        "https://ia600704.us.archive.org/13/items/2_20260515_202605/2.mp3",
        "https://ia601607.us.archive.org/33/items/10_20260515/5.mp3",
        "https://ia601607.us.archive.org/33/items/10_20260515/4.mp3",
        "https://dn710303.ca.archive.org/0/items/3_20260515/3.mp3",
        "https://ia903105.us.archive.org/2/items/20_20260519_202605/22.mp3",
        "https://ia601607.us.archive.org/33/items/10_20260515/6.mp3",
        "https://ia601607.us.archive.org/33/items/10_20260515/7.mp3",
        "https://ia601607.us.archive.org/33/items/10_20260515/8.mp3",
        "https://ia600805.us.archive.org/26/items/ssstik/ssstik.io_1779493548271.mp3",
        "https://ia601607.us.archive.org/33/items/10_20260515/9.mp3",
        "https://ia601607.us.archive.org/33/items/10_20260515/10.mp3",
        "https://ia601602.us.archive.org/6/items/16_20260515/11.mp3",
        "https://ia601602.us.archive.org/6/items/16_20260515/12.mp3",
        "https://ia903105.us.archive.org/2/items/20_20260519_202605/24.mp3",
        "https://ia601906.us.archive.org/4/items/36_20260522/30.mp3",
        "https://ia801906.us.archive.org/4/items/36_20260522/29.mp3",
        "https://ia801906.us.archive.org/4/items/36_20260522/31.mp3",
        "https://ia601602.us.archive.org/6/items/16_20260515/13.mp3",
        "https://ia601602.us.archive.org/6/items/16_20260515/14.mp3",
        "https://ia601602.us.archive.org/6/items/16_20260515/15.mp3",
        "https://ia601602.us.archive.org/6/items/16_20260515/16.mp3",
        "https://ia903105.us.archive.org/2/items/20_20260519_202605/18.mp3",
        "https://dn721806.ca.archive.org/0/items/20_20260519_202605/20.mp3",
        "https://ia903105.us.archive.org/2/items/20_20260519_202605/21.mp3",
        "https://ia903105.us.archive.org/2/items/20_20260519_202605/23.mp3",
        "https://ia903105.us.archive.org/2/items/20_20260519_202605/25.mp3",
        "https://ia903204.us.archive.org/15/items/animation_202605/26.mp3",
        "https://dn720004.ca.archive.org/0/items/36_20260522/28.mp3",
        "https://ia600606.us.archive.org/16/items/43_20260522/tiktokio.com1779450617_gBO4wMROwwd4D9RT8qVf.mp3",
        "https://ia903208.us.archive.org/23/items/27_20260522_202605/AhaConvert_AhaConvert_1779452111_VlScC6jvvozC47ESl56u.mp3",
        "https://ia903208.us.archive.org/23/items/27_20260522_202605/ssstik.io_1779452736905.mp3",
        "https://ia801906.us.archive.org/4/items/36_20260522/41.mp3"
    ];

    const songNames = [
        "DRUNK TEXT - HENRY MOODIE", "MERINDUKANMU - DASH UCIHA", "MERINDUKANMU - DASH UCIHA", "PUNK ROCK JALANAN - GILANG SADEWA",
        "MENUNGSO ORA TOTO - ADRYANNUR", "MENUNGSO ORA TOTO - ADRYANNUR", "DIRIMU YANG DULU - ANGGIS DEVAKI", "LOS DOL - DAHLAN EFENDI", "DIMABUK CINTA - ARMADA", "HARGAI AKU - ARMADA",
        "INTEL INSIDE - DETHRON & THUNDER BOLDZ", "BODY PATA PATA - FARIS ADAM & KIKI ACOUSTIC", "RASAH BALI - DIKA FAJAR", "KELINGAN MANTAN - NDX A.K.A", "KELINGAN MANTAN - NDX A.K.A",
        "KELINGAN MANTAN - NDX A.K.A", "APA KABAR MANTAN - NDX A.K.A", "NGERTENONO ATI - NDX A.K.A", "DADI SIJI X NRESNANI - @DODOCANTROPUS", "SINANGGAR X SIK SIK - KOCU EDIT", "SAYANG - VIA VALLEN", "SURAT CINTA UNTUK STARLA - VIRGOUN",
        "PAMBASILET - HAPPY ASMARA", "KUTIMANG ADIKKU SAYANG - IPANK", "CINTAKU TAK TERBATAS WAKTU - ANIE CARERA", "KEKASIH YANG TAK DIANGGAP - PINKAN MAMBO",
        "RAISO NGAPUSI - TEKOMLAKU (FEAT. ERVIN SOFIANI)", "TAKE ME HOME COUNTRY ROAD - JOHN DENVER", "TETAP MENCINTAI - SPASI BRAND", "TETAP MENCINTAI - SPASI BRAND",
        "KENANGLAH AKU - NAFF", "KENANGLAH AKU - NAFF", "BROKEN ANGEL - ARASH"
    ];

    let lockedSongs = new Array(songUrls.length).fill(false);
    const audio = new Audio();
    audio.preload = "auto";
    let currentTrackIndex = 0;
    let isPlaying = false;
    let isSeeking = false;

    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressFill = document.getElementById('progressFill');
    const progressBarBg = document.getElementById('progressBarBg');
    const currentTimeSpan = document.getElementById('currentTime');
    const durationTimeSpan = document.getElementById('durationTime');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumePercentSpan = document.getElementById('volumePercent');
    const songTitleEl = document.getElementById('currentSongTitle');
    const songListContainer = document.getElementById('songListContainer');
    const statusMsgDiv = document.getElementById('statusMsg');

    function formatTime(sec) {
        if (isNaN(sec) || !isFinite(sec)) return "0:00";
        const mins = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60);
        return `${mins}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    function updateUI() {
        songTitleEl.textContent = songNames[currentTrackIndex];
        const items = document.querySelectorAll('.song-item');
        
        items.forEach((item, idx) => {
            const lockBtn = item.querySelector('.custom-lock-btn');
            if (lockBtn) {
                if (lockedSongs[idx]) {
                    lockBtn.textContent = '🔒';
                    lockBtn.classList.add('locked');
                } else {
                    lockBtn.textContent = '🔓';
                    lockBtn.classList.remove('locked');
                }
            }

            if (idx === currentTrackIndex) {
                item.classList.add('active');
                const ind = item.querySelector('.playing-indicator');
                if (ind) {
                    if (isPlaying) {
                        ind.textContent = '🔊'; 
                    } else if (audio.currentTime > 0) {
                        ind.textContent = '⏸'; 
                    } else {
                        ind.textContent = ''; 
                    }
                }

            } else {
                item.classList.remove('active');
                const ind = item.querySelector('.playing-indicator');
                if (ind) ind.textContent = '';
            }
        });
            if (isPlaying) {
            statusMsgDiv.innerHTML = `🔊 Memutar • ${songNames[currentTrackIndex]}`;
        } else {
                if (audio.currentTime === 0) {
                statusMsgDiv.innerHTML = `🎵 Klik tombol PLAY untuk mulai 🎵`;
            } else {
                statusMsgDiv.innerHTML = `⏸ Dijeda • ${songNames[currentTrackIndex]}`;
            }
        }
    }

    function loadTrack(index, autoplay = false) {
        if (index < 0) index = 0;
        if (index >= songUrls.length) index = 0;
        currentTrackIndex = index;
        audio.src = songUrls[currentTrackIndex];
        audio.load();
        progressFill.style.width = '0%';
        currentTimeSpan.textContent = '0:00';
        durationTimeSpan.textContent = '0:00';
        updateUI();

        if (autoplay) {
            audio.play().then(() => {
                isPlaying = true;
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'inline';
                updateUI();
            }).catch(err => {
                isPlaying = false;
                playIcon.style.display = 'inline';
                pauseIcon.style.display = 'none';
                updateUI();
            });
        }
    }

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            updateUI();
        } else {
            audio.play().then(() => {
                isPlaying = true;
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'inline';
                updateUI();
            }).catch(e => {
                statusMsgDiv.innerHTML = "❌ Gagal play, coba klik lagi";
            });
        }
    }

    function nextTrack() {
        const hasLockedSongs = lockedSongs.includes(true);
        if (hasLockedSongs) {
            let nextLockedIdx = -1;
            for (let i = 1; i <= songUrls.length; i++) {
                let checkIdx = (currentTrackIndex + i) % songUrls.length;
                if (lockedSongs[checkIdx]) {
                    nextLockedIdx = checkIdx;
                    break;
                }
            }
            if (nextLockedIdx !== -1) {
                loadTrack(nextLockedIdx, true);
                return;
            }
        }
        let newIdx = currentTrackIndex + 1;
        if (newIdx >= songUrls.length) newIdx = 0;
        loadTrack(newIdx, true);
    }

    function prevTrack() {
        const hasLockedSongs = lockedSongs.includes(true);
        if (hasLockedSongs) {
            let prevLockedIdx = -1;
            for (let i = 1; i <= songUrls.length; i++) {
                let checkIdx = (currentTrackIndex - i + songUrls.length) % songUrls.length;
                if (lockedSongs[checkIdx]) {
                    prevLockedIdx = checkIdx;
                    break;
                }
            }
            if (prevLockedIdx !== -1) {
                loadTrack(prevLockedIdx, true);
                return;
            }
        }
        let newIdx = currentTrackIndex - 1;
        if (newIdx < 0) newIdx = songUrls.length - 1;
        loadTrack(newIdx, true);
    }

    function onTimeUpdate() {
        if (!isSeeking && audio.duration && !isNaN(audio.duration)) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${percent}%`;
            currentTimeSpan.textContent = formatTime(audio.currentTime);
            durationTimeSpan.textContent = formatTime(audio.duration);
        }
    }

    function onLoadedMeta() {
        durationTimeSpan.textContent = formatTime(audio.duration);
        updateUI();
    }

    function onSongEnd() {
        nextTrack();
    }

    function seekTo(e) {
        const rect = progressBarBg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        if (width > 0 && audio.duration) {
            const percent = Math.min(1, Math.max(0, x / width));
            audio.currentTime = percent * audio.duration;
            progressFill.style.width = `${percent * 100}%`;
            currentTimeSpan.textContent = formatTime(audio.currentTime);
        }
    }

    function setVolume(val) {
        let vol = parseFloat(val);
        if (isNaN(vol)) vol = 1;
        audio.volume = Math.min(1, Math.max(0, vol));
        volumeSlider.value = audio.volume;
        volumePercentSpan.textContent = `${Math.round(audio.volume * 100)}%`;
    }

    function toggleLock(idx, event) {
        event.stopPropagation();
        lockedSongs[idx] = !lockedSongs[idx];
        updateUI();
    }

    function renderPlaylist() {
        songListContainer.innerHTML = '';
        songNames.forEach((name, idx) => {
            const div = document.createElement('div');
            div.className = 'song-item';
            div.innerHTML = `
                <span class="song-index">${(idx+1).toString().padStart(2,'0')}</span>
                <span class="song-name-short">${name}</span>
                <div class="custom-lock-btn" onclick="toggleLock(${idx}, event)"></div>
                <span class="playing-indicator"></span>
            `;
            
            div.addEventListener('click', () => {
                if (idx === currentTrackIndex) {
                    togglePlayPause();
                } else {
                    loadTrack(idx, true);
                }
            });
            songListContainer.appendChild(div);
        });
    }


    document.addEventListener('DOMContentLoaded', function() {

        buildDomList("jasa-list", dataJasa);
        buildDomList("apk-list", dataApk);
        buildDomList("ff-list", dataFF);
        buildDomList("script-list", dataScript);
        buildDomList("tema-list",dataTema)
        buildDomList("jailbreak-list", dataJailbreak);


        renderPlaylist();
        
        playPauseBtn.onclick = togglePlayPause;
        prevBtn.onclick = prevTrack;
        nextBtn.onclick = nextTrack;
        progressBarBg.onclick = seekTo;
        
        progressBarBg.onmousedown = () => isSeeking = true;
        window.onmouseup = () => isSeeking = false;
        
        audio.ontimeupdate = onTimeUpdate;
        audio.onended = onSongEnd;
        audio.onloadedmetadata = onLoadedMeta;
        
        volumeSlider.oninput = (e) => setVolume(e.target.value);
        audio.onerror = () => {
            statusMsgDiv.innerHTML = "⚠️ Gagal muat lagu, skip ke berikutnya...";
            setTimeout(() => nextTrack(), 1000);
        };

        setVolume(1);
        
        currentTrackIndex = 0;
        audio.src = songUrls[0];
        audio.load();
        isPlaying = false;
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        
        updateUI();
        statusMsgDiv.innerHTML = "✨ Klik tombol PLAY untuk mulai ✨";
    });
    const slider = document.querySelector('.catalog-slider');
const dots = document.querySelectorAll('.dot');

slider.addEventListener('scroll', () => {

    let scrollLeft = slider.scrollLeft;
    let itemWidth = slider.offsetWidth;
    let activeIndex = Math.round(scrollLeft / itemWidth);


    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});
