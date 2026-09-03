/**
 * =================================================================
 * KONFIGURASI UTAMA ASISTEN ELXZ BUILD v5
 * Engine: Flutter Build Bot v5.0.0
 * Owner: Elxz
 * =================================================================
 * SEMUA PENGATURAN DAPAT DIISI LANGSUNG DI SINI TANPA MEMERLUKAN .env
 */

const path = require('path');

module.exports = {
  // ==================== INFORMASI OWNER ====================
  OWNER_NAME: 'elnicholl',
  OWNER_ID: '7571009414', // GANTI dengan ID Telegram Anda (contoh: '592819201')
  OWNER_USERNAME: 'elnicholl',
  BOT_USERNAME: 'elxzbuildbot', // Ganti dengan username bot Telegram Anda tanpa @

  // ==================== KREDENSIAL TELEGRAM ====================
  // Token dari @BotFather
  BOT_TOKEN: '8903285716:AAFqZnHovKkko4Hjh1dAmj0C4v1w9-PONKE',

  // ==================== CHANNEL LOG & LIVE MONITOR ====================
  // ID atau username channel untuk kirim postingan LIVE BUILD MONITOR
  // (PENTING: Bot WAJIB jadi Admin di channel ini agar bisa edit pesan real-time!)
  // Contoh: '@channel_live_monitor' atau ID angka '-100xxxxxxxxxx'
  BUILD_LOG_CHANNEL: '@informasichnlel',

  // ID Channel/Group khusus untuk kirim kartu log aktivitas bot publik (opsional)
  ACTIVITY_LOG_CHANNEL: '@informasichnlel',

  // ==================== GITHUB ACTIONS ENGINE (BUILD BIASA) ====================
  // Personal Access Token (PAT) GitHub dengan scope: repo, workflow, write:packages
  GITHUB_TOKEN: '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',
  GITHUB_OWNER: 'elxiters-docker', // Username akun GitHub Anda
  GITHUB_REPO: 'asisten-elxz-genetic-builder', // Nama repository tempat file .github/workflows/ berada
  GITHUB_BRANCH: 'main',

  // ==================== GITHUB ACTIONS ENGINE (BUILD GENETIK) ====================
  // Repo & token terpisah untuk profil Build Genetik
  GENETIC_GITHUB_TOKEN: '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',
  GENETIC_GITHUB_OWNER: 'elxiters-docker',
  GENETIC_GITHUB_REPO: 'asisten-elxz-genetic-builder',
  GENETIC_GITHUB_BRANCH: 'main',

  // Estimasi durasi kompilasi (dalam detik) jika dijalankan secara live/simulasi (default 180s = 3 Menit)
  BUILD_ESTIMATED_SECONDS: 180, 

  // ==================== 3 CHANNEL WAJIB JOIN (FORCE SUB) ====================
  // User WAJIB bergabung ke 3 channel ini sebelum bisa menggunakan bot.
  // PENTING: Bot WAJIB ditambahkan sebagai ADMINISTRATOR di ke-3 channel ini!
  FORCE_SUB_ENABLED: true,
  CHANNELS_REQUIRED: [
    {
      id: '@elxzchannel', // Username atau ID channel 1
      name: '📢 ＣＨＡＮＮＥＬ  ＵＰＤＡＴＥ  １',
      url: 'https://t.me/elxzchannel'
    },
    {
      id: '@informasipenukaranell', // Username atau ID channel 2
      name: '📢 ＣＨＡＮＮＥＬ  ＴＥＳＴＩＭＯＮＩ  ２',
      url: 'https://t.me/informasipenukaranell'
    },
    {
      id: '@informasichnlel', // Username atau ID channel 3
      name: '📢 ＣＨＡＮＮＥＬ  ＩＮＦＯ  ＡＰＫ  ３',
      url: 'https://t.me/informasichnlel'
    }
  ],

  // ==================== PENGATURAN SALDO & ROLE ====================
  DEFAULT_FREE_CREDITS: 28, // Default saldo pengguna baru (28 credit sesuai tampilan)
  CREDIT_PER_BUILD: 1,

  // ==================== SERVER KEEP-ALIVE (PTERODACTYL / KOYEB) ====================
  PORT: 3000
};
