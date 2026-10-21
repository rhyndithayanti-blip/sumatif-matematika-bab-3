/**
 * Aset Gambar Vektor SVG Edukatif untuk Soal Tes Sumatif Matematika Kelas 4
 * Materi: Pola Gambar dan Pola Bilangan
 * Kurikulum Merdeka - SD Negeri 3 Loloan Timur
 */

// 1. Pola Gambar Batang Korek Api Segitiga (Pola 1: 3 batang, Pola 2: 5 batang, Pola 3: 7 batang, Pola 4: ?)
export const SVG_POLA_KOREK_API_SEGITIGA = `<svg viewBox="0 0 520 140" width="100%" height="130" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="140" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
  
  <!-- Pola 1 (1 Segitiga = 3 batang) -->
  <g transform="translate(25, 25)">
    <!-- Alas -->
    <line x1="10" y1="80" x2="60" y2="80" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="60" cy="80" r="4.5" fill="#DC2626"/>
    <!-- Sisi Kiri -->
    <line x1="10" y1="80" x2="35" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="35" cy="35" r="4.5" fill="#DC2626"/>
    <!-- Sisi Kanan -->
    <line x1="60" y1="80" x2="35" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="10" cy="80" r="4.5" fill="#DC2626"/>
    <text x="35" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Pola 1 (3 batang)</text>
  </g>

  <!-- Panah 1 -->
  <path d="M115 65 L135 65 M130 59 L136 65 L130 71" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Pola 2 (2 Segitiga Gandeng = 5 batang) -->
  <g transform="translate(145, 25)">
    <line x1="10" y1="80" x2="55" y2="80" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="55" cy="80" r="4.5" fill="#DC2626"/>
    <line x1="55" y1="80" x2="100" y2="80" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="100" cy="80" r="4.5" fill="#DC2626"/>
    <!-- Segitiga 1 -->
    <line x1="10" y1="80" x2="32.5" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="32.5" cy="35" r="4.5" fill="#DC2626"/>
    <line x1="55" y1="80" x2="32.5" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <!-- Segitiga 2 -->
    <line x1="55" y1="80" x2="77.5" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="77.5" cy="35" r="4.5" fill="#DC2626"/>
    <line x1="100" y1="80" x2="77.5" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="10" cy="80" r="4.5" fill="#DC2626"/>
    <text x="55" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Pola 2 (5 batang)</text>
  </g>

  <!-- Panah 2 -->
  <path d="M265 65 L285 65 M280 59 L286 65 L280 71" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Pola 3 (3 Segitiga Gandeng = 7 batang) -->
  <g transform="translate(295, 25)">
    <line x1="5" y1="80" x2="45" y2="80" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="45" cy="80" r="4" fill="#DC2626"/>
    <line x1="45" y1="80" x2="85" y2="80" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="85" cy="80" r="4" fill="#DC2626"/>
    <line x1="85" y1="80" x2="125" y2="80" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="125" cy="80" r="4" fill="#DC2626"/>
    <!-- Segitiga 1, 2, 3 puncak -->
    <line x1="5" y1="80" x2="25" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="25" cy="35" r="4" fill="#DC2626"/>
    <line x1="45" y1="80" x2="25" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <line x1="45" y1="80" x2="65" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="65" cy="35" r="4" fill="#DC2626"/>
    <line x1="85" y1="80" x2="65" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <line x1="85" y1="80" x2="105" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="105" cy="35" r="4" fill="#DC2626"/>
    <line x1="125" y1="80" x2="105" y2="35" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
    <circle cx="5" cy="80" r="4" fill="#DC2626"/>
    <text x="65" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Pola 3 (7 batang)</text>
  </g>

  <!-- Panah 3 -->
  <path d="M440 65 L460 65 M455 59 L461 65 L455 71" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Pola 4 (Tanda Tanya) -->
  <g transform="translate(470, 40)">
    <rect x="0" y="0" width="40" height="50" rx="8" fill="#EEF2F6" stroke="#3B82F6" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="20" y="34" text-anchor="middle" font-size="24" font-weight="extrabold" fill="#2563EB">?</text>
    <text x="20" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Pola 4</text>
  </g>
</svg>`;

// 2. Pola Susunan Kelereng Bersusun (2, 4, 6, 8, ...)
export const SVG_POLA_LINGKARAN_KELERENG = `<svg viewBox="0 0 520 140" width="100%" height="130" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="140" rx="12" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
  
  <!-- Pola 1 (2 kelereng: 1 kolom isi 2) -->
  <g transform="translate(30, 25)">
    <circle cx="20" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="20" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="17" cy="32" r="3" fill="#A7F3D0" opacity="0.8"/>
    <circle cx="17" cy="59" r="3" fill="#A7F3D0" opacity="0.8"/>
    <text x="20" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Pola 1 (2)</text>
  </g>

  <path d="M85 60 L105 60 M100 55 L106 60 L100 65" stroke="#86EFAC" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Pola 2 (4 kelereng: 2x2) -->
  <g transform="translate(120, 25)">
    <circle cx="15" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="40" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="15" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="40" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <text x="27.5" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Pola 2 (4)</text>
  </g>

  <path d="M195 60 L215 60 M210 55 L216 60 L210 65" stroke="#86EFAC" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Pola 3 (6 kelereng: 3x2) -->
  <g transform="translate(230, 25)">
    <circle cx="15" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="40" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="65" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="15" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="40" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="65" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <text x="40" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Pola 3 (6)</text>
  </g>

  <path d="M330 60 L350 60 M345 55 L351 60 L345 65" stroke="#86EFAC" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Pola 4 (8 kelereng: 4x2) -->
  <g transform="translate(365, 25)">
    <circle cx="15" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="39" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="63" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="87" cy="35" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="15" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="39" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="63" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <circle cx="87" cy="62" r="10" fill="#10B981" stroke="#047857" stroke-width="2"/>
    <text x="51" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Pola 4 (8)</text>
  </g>

  <g transform="translate(480, 45)">
    <circle cx="15" cy="15" r="16" fill="#DCFCE7" stroke="#16A34A" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="15" y="22" text-anchor="middle" font-size="18" font-weight="extrabold" fill="#15803D">?</text>
    <text x="15" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Pola 5</text>
  </g>
</svg>`;

// 3. Pola Gambar Ubin Persegi Membesar (1, 4, 9, 16, ...)
export const SVG_POLA_UBIN_PERSEGI = `<svg viewBox="0 0 520 150" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  
  <!-- Pola 1 (1 ubin) -->
  <g transform="translate(30, 30)">
    <rect x="15" y="45" width="22" height="22" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5" rx="3"/>
    <text x="26" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E293B">Pola 1 (1)</text>
  </g>

  <path d="M85 65 L105 65" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>

  <!-- Pola 2 (2x2 = 4 ubin) -->
  <g transform="translate(115, 30)">
    <rect x="10" y="26" width="20" height="20" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5" rx="2"/>
    <rect x="32" y="26" width="20" height="20" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5" rx="2"/>
    <rect x="10" y="48" width="20" height="20" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5" rx="2"/>
    <rect x="32" y="48" width="20" height="20" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5" rx="2"/>
    <text x="31" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E293B">Pola 2 (4)</text>
  </g>

  <path d="M185 65 L205 65" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>

  <!-- Pola 3 (3x3 = 9 ubin) -->
  <g transform="translate(215, 30)">
    <!-- Baris 1 -->
    <rect x="5" y="10" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <rect x="25" y="10" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <rect x="45" y="10" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <!-- Baris 2 -->
    <rect x="5" y="30" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <rect x="25" y="30" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <rect x="45" y="30" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <!-- Baris 3 -->
    <rect x="5" y="50" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <rect x="25" y="50" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <rect x="45" y="50" width="18" height="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2" rx="2"/>
    <text x="34" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E293B">Pola 3 (9)</text>
  </g>

  <path d="M295 65 L315 65" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>

  <!-- Pola 4 (4x4 = 16 ubin) -->
  <g transform="translate(325, 20)">
    <!-- 4x4 matrix -->
    <g fill="#3B82F6" stroke="#1E40AF" stroke-width="1">
      <rect x="4" y="5" width="16" height="16" rx="1.5"/><rect x="22" y="5" width="16" height="16" rx="1.5"/><rect x="40" y="5" width="16" height="16" rx="1.5"/><rect x="58" y="5" width="16" height="16" rx="1.5"/>
      <rect x="4" y="23" width="16" height="16" rx="1.5"/><rect x="22" y="23" width="16" height="16" rx="1.5"/><rect x="40" y="23" width="16" height="16" rx="1.5"/><rect x="58" y="23" width="16" height="16" rx="1.5"/>
      <rect x="4" y="41" width="16" height="16" rx="1.5"/><rect x="22" y="41" width="16" height="16" rx="1.5"/><rect x="40" y="41" width="16" height="16" rx="1.5"/><rect x="58" y="41" width="16" height="16" rx="1.5"/>
      <rect x="4" y="59" width="16" height="16" rx="1.5"/><rect x="22" y="59" width="16" height="16" rx="1.5"/><rect x="40" y="59" width="16" height="16" rx="1.5"/><rect x="58" y="59" width="16" height="16" rx="1.5"/>
    </g>
    <text x="39" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E293B">Pola 4 (16)</text>
  </g>

  <!-- Panah ke 5 -->
  <path d="M415 65 L435 65" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>

  <!-- Pola 5 (?) -->
  <g transform="translate(445, 35)">
    <rect x="0" y="0" width="55" height="55" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="27.5" y="36" text-anchor="middle" font-size="24" font-weight="extrabold" fill="#1D4ED8">?</text>
    <text x="27.5" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E293B">Pola 5</text>
  </g>
</svg>`;

// 4. Pola Gambar Bintang Mengecil (15, 12, 9, ...)
export const SVG_POLA_BINTANG_MENURUN = `<svg viewBox="0 0 500 130" width="100%" height="120" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="500" height="130" rx="12" fill="#FEFCE8" stroke="#FEF08A" stroke-width="1.5"/>
  <defs>
    <g id="star-icon">
      <polygon points="10,1 12.5,7 19,7.5 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.5 7.5,7" fill="#EAB308" stroke="#CA8A04" stroke-width="1"/>
    </g>
  </defs>

  <!-- Susunan 1: 15 Bintang (3 baris x 5 kolom) -->
  <g transform="translate(20, 20)">
    <rect x="-5" y="-5" width="115" height="75" rx="6" fill="#FEF9C3" stroke="#FDE047" stroke-width="1"/>
    <!-- 3 baris x 5 -->
    <use href="#star-icon" x="2" y="2"/><use href="#star-icon" x="24" y="2"/><use href="#star-icon" x="46" y="2"/><use href="#star-icon" x="68" y="2"/><use href="#star-icon" x="90" y="2"/>
    <use href="#star-icon" x="2" y="24"/><use href="#star-icon" x="24" y="24"/><use href="#star-icon" x="46" y="24"/><use href="#star-icon" x="68" y="24"/><use href="#star-icon" x="90" y="24"/>
    <use href="#star-icon" x="2" y="46"/><use href="#star-icon" x="24" y="46"/><use href="#star-icon" x="46" y="46"/><use href="#star-icon" x="68" y="46"/><use href="#star-icon" x="90" y="46"/>
    <text x="52" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#854D0E">Susunan 1 (15 bintang)</text>
  </g>

  <!-- Susunan 2: 12 Bintang (3 baris x 4 kolom) -->
  <g transform="translate(165, 20)">
    <rect x="-5" y="-5" width="95" height="75" rx="6" fill="#FEF9C3" stroke="#FDE047" stroke-width="1"/>
    <use href="#star-icon" x="2" y="2"/><use href="#star-icon" x="24" y="2"/><use href="#star-icon" x="46" y="2"/><use href="#star-icon" x="68" y="2"/>
    <use href="#star-icon" x="2" y="24"/><use href="#star-icon" x="24" y="24"/><use href="#star-icon" x="46" y="24"/><use href="#star-icon" x="68" y="24"/>
    <use href="#star-icon" x="2" y="46"/><use href="#star-icon" x="24" y="46"/><use href="#star-icon" x="46" y="46"/><use href="#star-icon" x="68" y="46"/>
    <text x="42" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#854D0E">Susunan 2 (12 bintang)</text>
  </g>

  <!-- Susunan 3: 9 Bintang (3 baris x 3 kolom) -->
  <g transform="translate(290, 20)">
    <rect x="-5" y="-5" width="75" height="75" rx="6" fill="#FEF9C3" stroke="#FDE047" stroke-width="1"/>
    <use href="#star-icon" x="2" y="2"/><use href="#star-icon" x="24" y="2"/><use href="#star-icon" x="46" y="2"/>
    <use href="#star-icon" x="2" y="24"/><use href="#star-icon" x="24" y="24"/><use href="#star-icon" x="46" y="24"/>
    <use href="#star-icon" x="2" y="46"/><use href="#star-icon" x="24" y="46"/><use href="#star-icon" x="46" y="46"/>
    <text x="32" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#854D0E">Susunan 3 (9 bintang)</text>
  </g>

  <!-- Susunan 4 (?) -->
  <g transform="translate(395, 20)">
    <rect x="0" y="0" width="75" height="65" rx="8" fill="#FFFBEB" stroke="#D97706" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="37.5" y="40" text-anchor="middle" font-size="26" font-weight="extrabold" fill="#B45309">?</text>
    <text x="37.5" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#854D0E">Susunan 4</text>
  </g>
</svg>`;

// 5. Pola Segitiga Bertingkat (1, 3, 6, 10, ...)
export const SVG_POLA_SEGITIGA_TINGKAT = `<svg viewBox="0 0 520 140" width="100%" height="130" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="140" rx="12" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1.5"/>
  <defs>
    <circle id="dot-purple" r="6" fill="#9333EA" stroke="#6B21A8" stroke-width="1.5"/>
  </defs>

  <!-- Suku 1: 1 lingkaran -->
  <g transform="translate(25, 25)">
    <use href="#dot-purple" x="25" y="55"/>
    <text x="25" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#581C87">Pola 1 (1)</text>
  </g>

  <!-- Suku 2: 1 + 2 = 3 lingkaran -->
  <g transform="translate(90, 25)">
    <use href="#dot-purple" x="30" y="35"/>
    <use href="#dot-purple" x="20" y="55"/>
    <use href="#dot-purple" x="40" y="55"/>
    <text x="30" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#581C87">Pola 2 (3)</text>
  </g>

  <!-- Suku 3: 1 + 2 + 3 = 6 lingkaran -->
  <g transform="translate(170, 25)">
    <use href="#dot-purple" x="35" y="15"/>
    <use href="#dot-purple" x="25" y="35"/><use href="#dot-purple" x="45" y="35"/>
    <use href="#dot-purple" x="15" y="55"/><use href="#dot-purple" x="35" y="55"/><use href="#dot-purple" x="55" y="55"/>
    <text x="35" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#581C87">Pola 3 (6)</text>
  </g>

  <!-- Suku 4: 1 + 2 + 3 + 4 = 10 lingkaran -->
  <g transform="translate(265, 25)">
    <use href="#dot-purple" x="45" y="5"/>
    <use href="#dot-purple" x="35" y="22"/><use href="#dot-purple" x="55" y="22"/>
    <use href="#dot-purple" x="25" y="39"/><use href="#dot-purple" x="45" y="39"/><use href="#dot-purple" x="65" y="39"/>
    <use href="#dot-purple" x="15" y="56"/><use href="#dot-purple" x="35" y="56"/><use href="#dot-purple" x="55" y="56"/><use href="#dot-purple" x="75" y="56"/>
    <text x="45" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#581C87">Pola 4 (10)</text>
  </g>

  <!-- Pola 5 (?) -->
  <g transform="translate(390, 30)">
    <rect x="0" y="0" width="90" height="55" rx="8" fill="#F3E8FF" stroke="#7E22CE" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="45" y="36" text-anchor="middle" font-size="24" font-weight="extrabold" fill="#6B21A8">?</text>
    <text x="45" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#581C87">Pola 5</text>
  </g>
</svg>`;

// 6. Pola Kartu Bilangan dengan Kotak Kosong (12, 17, 22, 27, [?], 37)
export const SVG_POLA_KARTU_BILANGAN = `<svg viewBox="0 0 520 130" width="100%" height="120" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="130" rx="12" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1.5"/>

  <!-- Kartu 1 -->
  <g transform="translate(20, 30)">
    <rect width="60" height="70" rx="8" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
    <text x="30" y="44" text-anchor="middle" font-size="20" font-weight="bold" fill="#1E3A8A">12</text>
  </g>
  <text x="92" y="65" font-size="14" font-weight="bold" fill="#64748B">+5</text>

  <!-- Kartu 2 -->
  <g transform="translate(105, 30)">
    <rect width="60" height="70" rx="8" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
    <text x="30" y="44" text-anchor="middle" font-size="20" font-weight="bold" fill="#1E3A8A">17</text>
  </g>
  <text x="177" y="65" font-size="14" font-weight="bold" fill="#64748B">+5</text>

  <!-- Kartu 3 -->
  <g transform="translate(190, 30)">
    <rect width="60" height="70" rx="8" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
    <text x="30" y="44" text-anchor="middle" font-size="20" font-weight="bold" fill="#1E3A8A">22</text>
  </g>
  <text x="262" y="65" font-size="14" font-weight="bold" fill="#64748B">+5</text>

  <!-- Kartu 4 -->
  <g transform="translate(275, 30)">
    <rect width="60" height="70" rx="8" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
    <text x="30" y="44" text-anchor="middle" font-size="20" font-weight="bold" fill="#1E3A8A">27</text>
  </g>
  <text x="347" y="65" font-size="14" font-weight="bold" fill="#64748B">+5</text>

  <!-- Kartu 5 (?) -->
  <g transform="translate(360, 30)">
    <rect width="60" height="70" rx="8" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5" stroke-dasharray="3,3"/>
    <text x="30" y="46" text-anchor="middle" font-size="26" font-weight="extrabold" fill="#B45309">?</text>
  </g>
  <text x="432" y="65" font-size="14" font-weight="bold" fill="#64748B">+5</text>

  <!-- Kartu 6 -->
  <g transform="translate(445, 30)">
    <rect width="60" height="70" rx="8" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
    <text x="30" y="44" text-anchor="middle" font-size="20" font-weight="bold" fill="#1E3A8A">37</text>
  </g>
</svg>`;

// 7. Pola Penataan Meja & Kursi Rapat (1 meja = 4 kursi, 2 meja = 6 kursi, 3 meja = 8 kursi)
export const SVG_POLA_MEJA_KURSI = `<svg viewBox="0 0 520 150" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="150" rx="12" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5"/>

  <!-- 1 Meja (4 kursi) -->
  <g transform="translate(25, 25)">
    <!-- Meja -->
    <rect x="25" y="30" width="40" height="40" rx="6" fill="#D97706" stroke="#92400E" stroke-width="2"/>
    <!-- Kursi Atas, Bawah, Kiri, Kanan -->
    <circle cx="45" cy="18" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="45" cy="82" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="13" cy="50" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="77" cy="50" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <text x="45" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350F">1 Meja (4 Kursi)</text>
  </g>

  <!-- 2 Meja Digabung (6 kursi) -->
  <g transform="translate(145, 25)">
    <rect x="25" y="30" width="75" height="40" rx="6" fill="#D97706" stroke="#92400E" stroke-width="2"/>
    <line x1="62.5" y1="30" x2="62.5" y2="70" stroke="#78350F" stroke-width="1.5" stroke-dasharray="2,2"/>
    <!-- Kursi -->
    <circle cx="43" cy="18" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="81" cy="18" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="43" cy="82" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="81" cy="82" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="13" cy="50" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="112" cy="50" r="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <text x="62.5" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350F">2 Meja (6 Kursi)</text>
  </g>

  <!-- 3 Meja Digabung (8 kursi) -->
  <g transform="translate(305, 25)">
    <rect x="25" y="30" width="115" height="40" rx="6" fill="#D97706" stroke="#92400E" stroke-width="2"/>
    <line x1="63" y1="30" x2="63" y2="70" stroke="#78350F" stroke-width="1.5" stroke-dasharray="2,2"/>
    <line x1="101" y1="30" x2="101" y2="70" stroke="#78350F" stroke-width="1.5" stroke-dasharray="2,2"/>
    <!-- Kursi Atas & Bawah -->
    <circle cx="44" cy="18" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="82" cy="18" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="120" cy="18" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="44" cy="82" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="82" cy="82" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="120" cy="82" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <!-- Kursi Ujung -->
    <circle cx="13" cy="50" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <circle cx="152" cy="50" r="7" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <text x="82" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350F">3 Meja (8 Kursi)</text>
  </g>
</svg>`;

// 8. Pola Balok Susun Menurun (20, 16, 12, ...)
export const SVG_POLA_BALOK_SUSUN = `<svg viewBox="0 0 500 130" width="100%" height="120" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="500" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Tumpukan 1: 20 Balok (4 kolom x 5 tinggi) -->
  <g transform="translate(30, 20)">
    <rect x="0" y="5" width="80" height="70" rx="4" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
    <text x="40" y="46" text-anchor="middle" font-size="20" font-weight="extrabold" fill="#FFFFFF">20</text>
    <text x="40" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Susunan I</text>
  </g>

  <!-- Panah Minus 4 -->
  <text x="135" y="58" font-size="13" font-weight="bold" fill="#EF4444">-4</text>
  <path d="M125 65 L155 65 M150 60 L156 65 L150 70" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>

  <!-- Tumpukan 2: 16 Balok -->
  <g transform="translate(170, 20)">
    <rect x="0" y="18" width="70" height="57" rx="4" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
    <text x="35" y="52" text-anchor="middle" font-size="20" font-weight="extrabold" fill="#FFFFFF">16</text>
    <text x="35" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Susunan II</text>
  </g>

  <!-- Panah Minus 4 -->
  <text x="265" y="58" font-size="13" font-weight="bold" fill="#EF4444">-4</text>
  <path d="M255 65 L285 65 M280 60 L286 65 L280 70" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>

  <!-- Tumpukan 3: 12 Balok -->
  <g transform="translate(300, 20)">
    <rect x="0" y="32" width="60" height="43" rx="4" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
    <text x="30" y="60" text-anchor="middle" font-size="19" font-weight="extrabold" fill="#FFFFFF">12</text>
    <text x="30" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Susunan III</text>
  </g>

  <!-- Panah ke 4 -->
  <path d="M375 65 L405 65" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>

  <!-- Susunan V (?) -->
  <g transform="translate(420, 20)">
    <rect x="0" y="15" width="55" height="60" rx="8" fill="#F0F9FF" stroke="#0284C7" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="27.5" y="52" text-anchor="middle" font-size="22" font-weight="extrabold" fill="#0369A1">?</text>
    <text x="27.5" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Susunan V</text>
  </g>
</svg>`;
