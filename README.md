# ASISTEN ELXZ BUILD v5

Bot Telegram otomatis untuk membuat (compile) APK dari URL Website (**Web2APK**) maupun source code **Flutter** menggunakan runner cloud **GitHub Actions**.

Dibuat khusus untuk **Owner: Elxz**.

---

## 🌟 Fitur Unggulan v5:
1. **Style Menu /start Disco & Tombol Warna-Warni**:
   - Tampilan tombol menu inline keyboard bertema disco dengan emoji vibrant kelap-kelip tanpa lag.
   - Dilengkapi dukungan media video pembuka `banner.mp4` atau media foto custom.
2. **Sistem Verifikasi Wajib Join 3 Channel (Force Subscription)**:
   - Pengguna wajib bergabung ke 3 channel yang ditentukan sebelum bisa mengakses fitur bot.
   - Bot wajib menjadi Admin di ketiga channel tersebut untuk pengecekan status keanggotaan real-time.
   - Tombol verifikasi instan tanpa delay `[ 🟢 SAYA SUDAH JOIN (VERIFIKASI) 🟢 ]`.
3. **Log Build Monitor Otomatis (Upload ZIP & "Mau Build Juga? Gas!")**:
   - Setiap pengguna mengirim file `.zip`, bot otomatis mendeteksi nama file, ukuran MB, ID user, nama pengirim, dan waktu.
   - Bot menampilkan kartu **BUILD MONITOR LOG** interaktif dengan tombol `[ 🚀 GAS BUILD APK SEKARANG! 🚀 ]`.
4. **Auto-Send APK Tanpa Perintah Manual**:
   - Fitur lama `/sendapk <id>` telah dihapus sepenuhnya.
   - Bot sekarang langsung memantau build secara otomatis di background, mengunduh file APK begitu selesai, dan mengirimkannya langsung ke chat Telegram beserta ukuran file dan link release.
5. **Auto-Refund Saldo Jika Build Gagal**:
   - Apabila proses kompilasi di GitHub Actions gagal atau dibatalkan, saldo 1 kredit pengguna langsung dikembalikan secara otomatis.
6. **Auto-Publish GitHub Release**:
   - APK yang berhasil dibuat akan otomatis diterbitkan ke tab **Releases** di repository GitHub Anda dengan link unduhan permanen.
7. **Database Lengkap (Migrasi garzxxiterz)**:
   - Terintegrasi penuh dengan sistem `users.json`, `credits.json`, `buyers.json`, `resellers.json`, `redeem.json`, `banned.json`, `groups.json`, dan `buildhistory.json`.
8. **Siap Pakai di Web Panel (Pterodactyl / Koyeb / VPS)**:
   - Dilengkapi server web internal Express port 3000 agar bot tidak ditidurkan / dimatikan oleh sistem panel.
   - Tidak memerlukan SDK Android atau Flutter lokal di panel (semua kompilasi dikerjakan gratis oleh GitHub Actions).

---

## 🚀 Cara Pemasangan di Panel Pterodactyl:
1. Siapkan Repository di GitHub (misal: `https://github.com/Username/asisten-elxz-builder`).
2. Masukkan folder `.github/workflows/web2apk.yml` dan `.github/workflows/flutter_build.yml` ke repository tersebut.
3. Buat **GitHub Personal Access Token (PAT)** di:
   - *GitHub -> Settings -> Developer settings -> Personal access tokens (classic)*
   - Centang: `repo`, `workflow`, `write:packages`.
4. Buka file `config.js` atau atur file `.env` di panel Anda:
   ```env
   BOT_TOKEN="token_bot_anda_dari_botfather"
   OWNER_ID="id_telegram_elxz"
   GITHUB_TOKEN="token_pat_github_anda"
   GITHUB_OWNER="username_github_anda"
   GITHUB_REPO="nama_repo_builder_anda"
   PORT=3000
   ```
5. Jalankan perintah:
   ```bash
   npm install
   node index.js
   ```
6. Bot siap digunakan 24/7!
