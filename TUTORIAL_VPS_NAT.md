# 🚀 TUTORIAL LENGKAP RUN BOT ASISTEN ELXZ BUILD v5 DI VPS NAT / UBUNTU / DEBIAN

Panduan ini dibuat khusus buat Anda yang menggunakan **VPS NAT** (atau VPS biasa / dedicated) agar bot bisa online 24 jam nonstop di background tanpa mati menggunakan **PM2** atau **Screen**.

---

## DAFTAR ISI
1. Persiapan Awal di VPS NAT
2. Install Node.js (v18 / v20 LTS) & Git
3. Upload / Download Source Code ke VPS NAT
4. Pengaturan Token & Akun di `config.js`
5. Cara Push / Upload Mesin Build ke GitHub
6. Menjalankan Bot 24 Jam Nonstop dengan PM2
7. Perintah Wajib Maintenance & Cek Log

---

## 1. Persiapan Login ke VPS NAT

Buka terminal SSH (bisa pakai **Termux** di HP, **JuiceSSH**, atau **PuTTY** di PC).

Contoh koneksi VPS NAT (karena ada port forwarding khusus):
```bash
ssh root@ip_domain_vps -p port_ssh_nat
```
*Contoh:* `ssh root@103.145.22.1 -p 22022`

Masukkan password root VPS Anda.

---

## 2. Update Sistem & Install Node.js + Git

Jalankan perintah ini satu per satu:

```bash
# Update paket VPS
apt update && apt upgrade -y

# Install tools penting
apt install -y git curl wget unzip build-essential

# Install Node.js v20 LTS (Rekomendasi)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Cek apakah node & npm sudah terpasang
node -v
npm -v
```

---

## 3. Masukkan Source Code ke VPS NAT

Anda bisa upload file zip langsung via SFTP / SCP, atau download langsung dari web ini:

### Opsi A: Download Langsung via Wget (Paling Cepat)
```bash
# Buat folder khusus bot
mkdir -p /root/elxz_bot && cd /root/elxz_bot

# Download file zip bot
wget https://ais-pre-7uuqca3mfqjczffuyofsmr-298700204950.asia-southeast1.run.app/ASISTEN_ELXZ_BUILD_v5.zip

# Ekstrak file zip
unzip ASISTEN_ELXZ_BUILD_v5.zip

# Masuk ke folder bot
cd ASISTEN_ELXZ_BUILD_v5

# Install dependensi npm (Telegraf, Express, Axios)
npm install
```

---

## 4. Edit `config.js` (HANYA INI YANG PERLU DIUBAH, TANPA .ENV!)

Buka file `config.js` menggunakan editor nano:
```bash
nano config.js
```

Sesuaikan bagian penting berikut:
```javascript
module.exports = {
  // 1. ID TELEGRAM OWNER (Ambil dari bot @userinfobot di Telegram)
  OWNER_NAME: 'Elxz',
  OWNER_ID: '8907034834', // Ganti dengan ID angka Anda!
  OWNER_USERNAME: 'ElxzStore',

  // 2. TOKEN BOT TELEGRAM (Ambil dari @BotFather)
  BOT_TOKEN: '7123456789:AAFxz...', 
  BOT_USERNAME: 'AsistenElxzBuildBot',

  // 3. GITHUB ACTIONS ENGINE (Untuk kompilasi APK)
  GITHUB_TOKEN: 'ghp_xxxxxxxxxxxxxxxxxxxxxx', // Token GitHub Anda (lihat Bab 5)
  GITHUB_OWNER: 'UsernameGitHubAnda',
  GITHUB_REPO: 'asisten-elxz-builder',
  GITHUB_BRANCH: 'main',

  // 4. 3 CHANNEL WAJIB JOIN (F-SUB)
  // Masukkan username channel Anda (Bot WAJIB jadi Admin di channel ini)
  CHANNELS_REQUIRED: [
    { id: '@channel1_anda', name: '📢 CHANNEL 1', url: 'https://t.me/channel1_anda' },
    { id: '@channel2_anda', name: '📢 CHANNEL 2', url: 'https://t.me/channel2_anda' },
    { id: '@channel3_anda', name: '📢 CHANNEL 3', url: 'https://t.me/channel3_anda' }
  ],

  // Port express keep-alive (VPS NAT bebas pakai port apa saja, misal 3000)
  PORT: 3000
};
```
*Simpan file di nano:* Tekan **CTRL + O**, lalu **ENTER**, lalu **CTRL + X**.

---

## 5. Cara Push / Upload ke GitHub (Untuk Mesin GitHub Actions)

Karena kompilasi APK butuh cloud server Android SDK & Flutter dari GitHub Actions, Anda harus meng-upload folder `.github` ke repository GitHub Anda:

### Langkah A: Ambil GitHub Personal Access Token (PAT)
1. Buka [github.com/settings/tokens](https://github.com/settings/tokens) di browser.
2. Klik **Generate new token (classic)**.
3. Beri nama note: `Bot Token`.
4. Centang checklist:
   - ✅ **repo** (Full control of private repositories)
   - ✅ **workflow** (Update GitHub Action workflows)
5. Klik **Generate token** di bawah.
6. **Copy token yang berawalan `ghp_...`**. Simpan ini ke `GITHUB_TOKEN` di `config.js`.

### Langkah B: Buat Repo di GitHub & Push dari VPS NAT
Jalankan perintah ini langsung di dalam folder bot di VPS:

```bash
# Inisialisasi git di VPS
git init
git config --global user.name "UsernameGitHubAnda"
git config --global user.email "emailanda@gmail.com"

# Tambahkan seluruh file
git add .
git commit -m "Deploy Asisten Elxz Build v5"
git branch -M main

# Hubungkan ke repository GitHub Anda
# Ganti Username dan NamaRepo sesuai milik Anda:
git remote add origin https://GITHUB_TOKEN_ANDA@github.com/UsernameGitHubAnda/asisten-elxz-builder.git

# Push ke GitHub
git push -u origin main --force
```
*Sekarang folder `.github/workflows/web2apk.yml` dan `flutter_build.yml` sudah aktif di GitHub Anda!*

---

## 6. Jalankan Bot Nonstop 24 Jam dengan PM2 (Biar Gak Mati Pas VPS Ditutup)

Jangan jalankan pakai `node index.js` biasa karena kalau jendela terminal ditutup bot akan mati. Gunakan **PM2**:

```bash
# Install PM2 secara global
npm install -g pm2

# Jalankan bot dengan nama 'elxz-bot'
pm2 start index.js --name "elxz-bot"

# Agar bot otomatis nyala lagi jika VPS NAT restart / reboot
pm2 startup
pm2 save
```

Cek status bot apakah sudah online:
```bash
pm2 status
```
Jika statusnya bertuliskan **online** berwarna hijau, selamat! Bot Anda sudah aktif 24 jam nonstop!

---

## 7. Perintah Berguna Maintenance di VPS NAT

- **Melihat Log Pesan / Error Bot secara Real-Time:**
  ```bash
  pm2 logs elxz-bot
  ```
  *(Tekan CTRL + C untuk keluar dari log tanpa mematikan bot)*

- **Restart Bot (misal habis edit `config.js`):**
  ```bash
  pm2 restart elxz-bot
  ```

- **Stop Bot:**
  ```bash
  pm2 stop elxz-bot
  ```

- **Jika Ingin Tes Manual Sementara:**
  ```bash
  pm2 stop elxz-bot
  node index.js
  ```

---
🔥 **SELESAI!** Bot Telegram ASISTEN ELXZ BUILD v5 Anda sekarang sudah berjalan stabil di VPS NAT dengan tombol Disco kelap-kelip, Live Build Monitor, Activity Logger, dan fitur Build APK otomatis.
