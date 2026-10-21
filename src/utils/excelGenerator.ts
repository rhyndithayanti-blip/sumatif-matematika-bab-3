import * as XLSX from 'xlsx';
import { ExamResult } from '../types';
import { CONFIG } from '../config';

/**
 * Format tanggal Indonesia (cth: 20 Oktober 2026)
 */
function getIndonesianDate(): string {
  const bulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const now = new Date();
  return `${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;
}

/**
 * Ekspor Rekapitulasi Nilai Siswa ke Format Microsoft Excel Asli (.xlsx)
 * Lengkap dengan Identitas Sekolah, Statistik, Kop, dan Tabel Nilai yang Rapi
 */
export function exportResultsToExcel(results: ExamResult[], customFilename?: string): boolean {
  try {
    const total = results.length;
    const lulus = results.filter((r) => r.status === 'Lulus' || r.nilai >= CONFIG.KKTP).length;
    const belumLulus = total - lulus;
    const rataRata =
      total > 0
        ? (results.reduce((acc, r) => acc + (Number(r.nilai) || 0), 0) / total).toFixed(1)
        : '0';

    // Buat data Sheet 1: Rekap Nilai
    const sheetData: any[][] = [
      ['PEMERINTAH KABUPATEN JEMBRANA'],
      ['DINAS PENDIDIKAN KEPEMUDAAN DAN OLAHRAGA'],
      [CONFIG.SEKOLAH.toUpperCase()],
      [CONFIG.ALAMAT_SEKOLAH],
      [],
      ['DAFTAR REKAPITULASI HASIL TES SUMATIF KURIKULUM MERDEKA'],
      [
        `Mata Pelajaran: ${CONFIG.MATA_PELAJARAN}`,
        '',
        `Kelas: ${CONFIG.KELAS}`,
        '',
        `KKTP: ${CONFIG.KKTP}`,
        '',
        `Tanggal Unduh: ${getIndonesianDate()}`,
      ],
      [
        `Kepala Sekolah: ${CONFIG.KEPALA_SEKOLAH} (NIP: ${CONFIG.NIP_KEPALA_SEKOLAH})`,
        '',
        '',
        `Guru Mata Pelajaran: ${CONFIG.GURU} (NIP: ${CONFIG.NIP_GURU})`,
      ],
      [],
      [
        'RINGKASAN HASIL TES:',
        `Total Peserta: ${total} Siswa`,
        `Jumlah Lulus: ${lulus} Siswa`,
        `Belum Lulus: ${belumLulus} Siswa`,
        `Rata-Rata Kelas: ${rataRata}`,
      ],
      [],
      // Baris Header Tabel
      [
        'No',
        'Timestamp (Waktu Submit)',
        'Nama Siswa',
        'Kelas',
        'No. Absen',
        'Tanggal Lahir',
        'Jawaban Benar',
        'Jawaban Salah',
        'Nilai Akhir (0-100)',
        'Keterangan (Status KKTP)',
      ],
    ];

    if (results.length === 0) {
      // Jika data masih kosong, sertakan 3 baris template siap isi
      sheetData.push(
        [
          1,
          'Contoh: 2026-10-20 08:30:00',
          'Putu Agus Wirawan',
          CONFIG.KELAS,
          1,
          '15 Mei 2014',
          30,
          5,
          85,
          'Lulus',
        ],
        [
          2,
          'Contoh: 2026-10-20 08:32:15',
          'Ni Kadek Ayu Lestari',
          CONFIG.KELAS,
          2,
          '22 Agustus 2014',
          32,
          3,
          91,
          'Lulus',
        ],
        [
          3,
          'Contoh: 2026-10-20 08:35:40',
          'I Komang Danu Prasetya',
          CONFIG.KELAS,
          3,
          '10 Januari 2014',
          19,
          16,
          54,
          'Belum Lulus',
        ]
      );
    } else {
      results.forEach((r, idx) => {
        const isPass = r.status === 'Lulus' || r.nilai >= CONFIG.KKTP;
        sheetData.push([
          idx + 1,
          r.timestamp || '-',
          r.nama || '-',
          r.kelas || CONFIG.KELAS,
          r.noAbsen || '-',
          r.tglLahir || '-',
          Number(r.benar) || 0,
          Number(r.salah) || 0,
          Number(r.nilai) || 0,
          isPass ? 'Lulus' : 'Belum Lulus',
        ]);
      });
    }

    // Tambah bagian tanda tangan di bawah
    sheetData.push(
      [],
      [],
      [
        'Mengetahui,',
        '',
        '',
        '',
        '',
        '',
        `Jembrana, ${getIndonesianDate()}`,
      ],
      [
        'Kepala Sekolah SD Negeri 3 Loloan Timur',
        '',
        '',
        '',
        '',
        '',
        'Guru Kelas / Mata Pelajaran',
      ],
      [],
      [],
      [],
      [
        CONFIG.KEPALA_SEKOLAH,
        '',
        '',
        '',
        '',
        '',
        CONFIG.GURU,
      ],
      [
        `NIP. ${CONFIG.NIP_KEPALA_SEKOLAH}`,
        '',
        '',
        '',
        '',
        '',
        `NIP. ${CONFIG.NIP_GURU}`,
      ]
    );

    // Konversi ke worksheet
    const ws = XLSX.utils.aoa_to_sheet(sheetData);

    // Pengaturan lebar kolom (width in characters)
    ws['!cols'] = [
      { wch: 6 },  // No
      { wch: 24 }, // Timestamp
      { wch: 30 }, // Nama Siswa
      { wch: 10 }, // Kelas
      { wch: 12 }, // No. Absen
      { wch: 18 }, // Tanggal Lahir
      { wch: 15 }, // Benar
      { wch: 15 }, // Salah
      { wch: 18 }, // Nilai
      { wch: 22 }, // Status
    ];

    // Buat workbook dan lampirkan sheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Rekap Nilai');

    const fileName =
      customFilename ||
      `Rekap_Nilai_Tes_Sumatif_${CONFIG.MATA_PELAJARAN.replace(/[^a-zA-Z0-9]/g, '_')}_Kelas_${CONFIG.KELAS}.xlsx`;

    // Download file
    XLSX.writeFile(wb, fileName);
    return true;
  } catch (error) {
    console.error('Error generating Excel file:', error);
    return false;
  }
}
