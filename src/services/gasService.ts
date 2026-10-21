import { CONFIG } from '../config';
import { ExamResult } from '../types';

/**
 * Service untuk komunikasi dengan Google Apps Script Web App & Penyimpanan Lokal
 */

const STORAGE_LOCAL_RESULTS_KEY = 'sd3_local_exam_results_v2';
const STORAGE_CUSTOM_GAS_URL_KEY = 'sd3_custom_gas_url';

export const gasService = {
  /**
   * Mendapatkan URL Google Apps Script yang aktif
   */
  getGasUrl(): string {
    try {
      const custom = localStorage.getItem(STORAGE_CUSTOM_GAS_URL_KEY);
      if (custom && custom.trim().startsWith('http')) {
        // Jika URL tersimpan adalah URL versi lama, perbarui ke URL aktif bawaan baru
        if (
          custom.includes('AKfycbzBuJrheUE3MRAvNlUEZut3q0LQL5-J62sy8w_rfsBz72VJGt7IHyFPj0WORSB8dUCmeQ') ||
          custom.includes('AKfycbx6Bki20asJdxZX-I6kmXwGIyd6pOApUMTD-92t7rFVdIuYH86ApVatKYEsBbZYttJSng') ||
          custom.includes('AKfycbyN8cEOymxr-LSKg1lXBgJmEUfZhSnS_D3CsvkSsMpSV4Pg4iHKImXExkymIH4W7xKY')
        ) {
          localStorage.removeItem(STORAGE_CUSTOM_GAS_URL_KEY);
          return CONFIG.GOOGLE_APPS_SCRIPT_URL;
        }
        return custom.trim();
      }
    } catch {
      // ignore
    }
    return CONFIG.GOOGLE_APPS_SCRIPT_URL;
  },

  /**
   * Menyimpan URL Google Apps Script kustom
   */
  setGasUrl(url: string): void {
    try {
      if (!url || !url.trim()) {
        localStorage.removeItem(STORAGE_CUSTOM_GAS_URL_KEY);
      } else {
        localStorage.setItem(STORAGE_CUSTOM_GAS_URL_KEY, url.trim());
      }
    } catch (e) {
      console.warn('Gagal menyimpan URL GAS kustom ke localStorage:', e);
    }
  },

  /**
   * Mengembalikan URL ke default
   */
  resetGasUrl(): void {
    try {
      localStorage.removeItem(STORAGE_CUSTOM_GAS_URL_KEY);
    } catch {
      // ignore
    }
  },

  /**
   * Mengambil hasil tes yang tersimpan di perangkat lokal
   */
  getLocalExamResults(): ExamResult[] {
    try {
      const saved = localStorage.getItem(STORAGE_LOCAL_RESULTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Gagal membaca data hasil tes lokal:', e);
    }
    return [];
  },

  /**
   * Menyimpan hasil tes ke penyimpanan lokal (Zero Data Loss)
   */
  saveLocalExamResult(result: ExamResult): void {
    try {
      const current = this.getLocalExamResults();
      // Periksa apakah sudah ada (hindari duplikasi berdasarkan nama & timestamp)
      const existingIdx = current.findIndex(
        (item) =>
          item.id === result.id ||
          (item.nama.toLowerCase() === result.nama.toLowerCase() &&
            item.timestamp === result.timestamp)
      );

      if (existingIdx >= 0) {
        current[existingIdx] = result;
      } else {
        current.unshift(result);
      }

      localStorage.setItem(STORAGE_LOCAL_RESULTS_KEY, JSON.stringify(current));
    } catch (e) {
      console.warn('Gagal menyimpan hasil tes ke localStorage:', e);
    }
  },

  /**
   * Menghapus hasil tes dari penyimpanan lokal
   */
  deleteLocalExamResult(idOrTimestamp: string, nama?: string): void {
    try {
      const current = this.getLocalExamResults();
      const filtered = current.filter(
        (r) =>
          r.id !== idOrTimestamp &&
          r.timestamp !== idOrTimestamp &&
          !(nama && r.nama.toLowerCase() === nama.toLowerCase())
      );
      localStorage.setItem(STORAGE_LOCAL_RESULTS_KEY, JSON.stringify(filtered));
    } catch (e) {
      console.warn('Gagal menghapus data hasil tes lokal:', e);
    }
  },

  /**
   * Menghapus seluruh data hasil tes lokal (untuk reset)
   */
  clearAllLocalResults(): void {
    try {
      localStorage.removeItem(STORAGE_LOCAL_RESULTS_KEY);
    } catch (e) {
      console.warn('Gagal membersihkan data lokal:', e);
    }
  },

  /**
   * Menghasilkan data simulasi siswa untuk uji coba panel guru & ekspor rekap
   */
  generateSampleResults(): ExamResult[] {
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const samples: ExamResult[] = [
      {
        id: `sample-1`,
        timestamp: `${dateStr} 08:35:12`,
        nama: 'I Putu Agus Pratama',
        noAbsen: '01',
        kelas: CONFIG.KELAS,
        benar: 28,
        salah: 2,
        nilai: 93,
        status: 'Lulus',
      },
      {
        id: `sample-2`,
        timestamp: `${dateStr} 08:42:05`,
        nama: 'Ni Kadek Ayu Lestari',
        noAbsen: '02',
        kelas: CONFIG.KELAS,
        benar: 26,
        salah: 4,
        nilai: 87,
        status: 'Lulus',
      },
      {
        id: `sample-3`,
        timestamp: `${dateStr} 08:45:30`,
        nama: 'I Komang Arya Wijaya',
        noAbsen: '03',
        kelas: CONFIG.KELAS,
        benar: 24,
        salah: 6,
        nilai: 80,
        status: 'Lulus',
      },
      {
        id: `sample-4`,
        timestamp: `${dateStr} 08:50:18`,
        nama: 'Ni Ketut Budiartini',
        noAbsen: '04',
        kelas: CONFIG.KELAS,
        benar: 19,
        salah: 11,
        nilai: 63,
        status: 'Lulus',
      },
      {
        id: `sample-5`,
        timestamp: `${dateStr} 08:55:44`,
        nama: 'I Made Gede Danendra',
        noAbsen: '05',
        kelas: CONFIG.KELAS,
        benar: 16,
        salah: 14,
        nilai: 53,
        status: 'Belum Lulus',
      },
    ];

    try {
      localStorage.setItem(STORAGE_LOCAL_RESULTS_KEY, JSON.stringify(samples));
    } catch {
      // ignore
    }
    return samples;
  },

  /**
   * Menguji koneksi ke URL Google Apps Script
   */
  async testGasConnection(
    customUrl?: string
  ): Promise<{ success: boolean; message: string; rowCount?: number }> {
    const url = (customUrl || this.getGasUrl()).trim();
    if (!url || !url.startsWith('http')) {
      return { success: false, message: 'URL Google Apps Script tidak valid.' };
    }

    try {
      const testUrl = `${url}${url.includes('?') ? '&' : '?'}action=read&t=${Date.now()}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(testUrl, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 404) {
          return {
            success: false,
            message:
              'Server merespons HTTP 404 (Not Found). Pastikan Web App sudah di-Deploy dengan jenis "Web App" dan akses "Anyone" (Siapa saja).',
          };
        }
        return {
          success: false,
          message: `Server merespons status HTTP ${response.status}`,
        };
      }

      const text = await response.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch {
        return {
          success: true,
          message: 'Terhubung ke server Google Apps Script (Respons non-JSON).',
          rowCount: 0,
        };
      }

      const list = Array.isArray(data)
        ? data
        : Array.isArray(data.data)
        ? data.data
        : Array.isArray(data.rows)
        ? data.rows
        : [];

      return {
        success: true,
        message: `Koneksi berhasil! Terhubung ke Google Spreadsheet (${list.length} baris data ditemukan).`,
        rowCount: list.length,
      };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return {
          success: false,
          message: 'Koneksi waktu habis (Timeout 8 detik). Server Google Apps Script lambat merespons.',
        };
      }
      return {
        success: false,
        message:
          err.message ||
          'Gagal terhubung ke Google Apps Script. Periksa koneksi internet atau hak akses Web App.',
      };
    }
  },

  /**
   * Mengirim hasil tes siswa ke Google Apps Script Web App & Penyimpanan Lokal
   */
  async submitExamResult(
    result: ExamResult
  ): Promise<{ success: boolean; message: string; savedLocally: boolean }> {
    // 1. Selalu amankan penyimpanan ke perangkat lokal terlebih dahulu (Zero Data Loss)
    this.saveLocalExamResult(result);

    const url = this.getGasUrl();
    if (!url || !url.startsWith('http')) {
      return {
        success: true,
        savedLocally: true,
        message: 'Hasil tes berhasil disimpan di perangkat ini.',
      };
    }

    const payload = {
      action: 'submit',
      id: result.id || `res-${Date.now()}`,
      timestamp: result.timestamp || new Date().toLocaleString('id-ID'),
      // Format bahasa Indonesia (sesuai template sheet)
      nama: result.nama,
      kelas: result.kelas || CONFIG.KELAS,
      noAbsen: result.noAbsen,
      tglLahir: result.tglLahir || '',
      benar: result.benar,
      salah: result.salah,
      nilai: result.nilai,
      status: result.status,
      mataPelajaran: CONFIG.MATA_PELAJARAN,
      sekolah: CONFIG.SEKOLAH,
      // Format camelCase alternatif (kompatibilitas menyeluruh)
      studentName: result.nama,
      className: result.kelas || CONFIG.KELAS,
      absenNumber: result.noAbsen,
      birthDate: result.tglLahir || '',
      correctCount: result.benar,
      incorrectCount: result.salah,
      totalQuestions: (result.benar || 0) + (result.salah || 0),
      finalScore: result.nilai,
      answers: result.detailJawaban || {},
    };

    try {
      // Mengirim sebagai text/plain untuk mencegah browser memicu CORS preflight OPTIONS
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.warn(`GAS POST merespons HTTP ${response.status}`);
        return {
          success: true,
          savedLocally: true,
          message: `Hasil tes tersimpan di perangkat ini. (Cloud respons HTTP ${response.status})`,
        };
      }

      const text = await response.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch {
        data = { success: true };
      }

      return {
        success: true,
        savedLocally: true,
        message: data.message || 'Jawaban dan hasil tes berhasil disimpan ke Google Spreadsheet.',
      };
    } catch (err: any) {
      console.warn('Gagal sinkronisasi langsung ke Google Apps Script (tersimpan lokal):', err);
      return {
        success: true,
        savedLocally: true,
        message: 'Hasil tes tersimpan di perangkat ini. (Sinkronisasi cloud tertunda)',
      };
    }
  },

  /**
   * Mengambil rekap hasil ujian dari Google Apps Script Web App dan/atau Penyimpanan Lokal
   */
  async fetchExamResults(): Promise<ExamResult[]> {
    const localResults = this.getLocalExamResults();
    const url = this.getGasUrl();

    if (!url || !url.startsWith('http')) {
      return localResults;
    }

    try {
      const readUrl = `${url}${url.includes('?') ? '&' : '?'}action=read&mapel=${encodeURIComponent(CONFIG.MATA_PELAJARAN)}&t=${Date.now()}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      // Gunakan Simple GET tanpa custom Accept header agar tidak ditolak CORS saat 302 redirect
      const response = await fetch(readUrl, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(`Google Apps Script merespons HTTP ${response.status}, menggunakan data lokal.`);
        return localResults;
      }

      const raw = await response.json();
      let list: any[] = [];

      if (Array.isArray(raw)) {
        list = raw;
      } else if (raw && Array.isArray(raw.data)) {
        list = raw.data;
      } else if (raw && raw.status === 'success' && Array.isArray(raw.rows)) {
        list = raw.rows;
      }

      // Standarisasi pemetaan atribut
      const remoteResults: ExamResult[] = list
        .filter((item: any) => {
          const name = item.Nama || item.nama || item.studentName || item['Nama Siswa'];
          return name && String(name).trim().length > 0;
        })
        .map((item: any, idx: number) => {
          const timestamp =
            item.Timestamp || item.timestamp || item.waktu || new Date().toLocaleString('id-ID');
          const nama =
            item.studentName || item.Nama || item.nama || item['Nama Siswa'] || 'Siswa';
          const kelas = item.className || item.Kelas || item.kelas || CONFIG.KELAS;
          const noAbsen = String(
            item.absenNumber || item['Nomor Absen'] || item.noAbsen || item.NoAbsen || '-'
          );
          const benar = Number(item.correctCount ?? item.Benar ?? item.benar ?? 0);
          const salah = Number(item.incorrectCount ?? item.Salah ?? item.salah ?? 0);
          const nilai = Number(item.finalScore ?? item.Nilai ?? item.nilai ?? 0);
          const status = item.status || (nilai >= CONFIG.KKTP ? 'Lulus' : 'Belum Lulus');
          const tglLahir = item.birthDate || item['Tanggal Lahir'] || item.tglLahir || '';

          return {
            id: item.id || `gas-${idx}-${timestamp}`,
            timestamp,
            nama,
            kelas,
            noAbsen,
            tglLahir,
            benar,
            salah,
            nilai,
            status: status === 'Lulus' ? 'Lulus' : 'Belum Lulus',
          };
        });

      // Gabungkan data remote dengan data lokal yang belum ada di remote
      const combined = [...remoteResults];
      localResults.forEach((loc) => {
        const alreadyInRemote = combined.some(
          (rem) =>
            rem.nama.trim().toLowerCase() === loc.nama.trim().toLowerCase() &&
            rem.noAbsen === loc.noAbsen
        );
        if (!alreadyInRemote) {
          combined.push(loc);
        }
      });

      return combined;
    } catch (err: any) {
      console.warn('Error saat fetch dari Google Apps Script, menampilkan data lokal:', err);
      return localResults;
    }
  },

  /**
   * Menghapus data dari Google Spreadsheet via GAS dan Penyimpanan Lokal
   */
  async deleteExamResult(timestamp: string, nama: string): Promise<boolean> {
    // 1. Hapus dari penyimpanan lokal terlebih dahulu
    this.deleteLocalExamResult(timestamp, nama);

    const url = this.getGasUrl();
    if (!url || !url.startsWith('http')) return true;

    const payload = {
      action: 'delete',
      timestamp,
      nama,
      studentName: nama,
      mataPelajaran: CONFIG.MATA_PELAJARAN,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      return response.ok;
    } catch (err: any) {
      console.warn('Gagal menghapus di remote GAS (namun sudah terhapus di lokal):', err);
      return true;
    }
  },

  /**
   * Sinkronisasi seluruh data lokal yang belum masuk ke Google Apps Script
   */
  async syncAllLocalToCloud(): Promise<{ total: number; success: number }> {
    const local = this.getLocalExamResults();
    if (local.length === 0) return { total: 0, success: 0 };

    let successCount = 0;
    for (const item of local) {
      try {
        const res = await this.submitExamResult(item);
        if (res.success) successCount++;
      } catch {
        // ignore
      }
    }
    return { total: local.length, success: successCount };
  },
};

/**
 * Template Skrip Google Apps Script untuk Google Spreadsheet Multi-Mapel
 */
export const GAS_SCRIPT_TEMPLATE = `/**
 * SKRIP GOOGLE APPS SCRIPT UNTUK REKAP TES SUMATIF MULTI-MAPEL
 * SD NEGERI 3 LOLOAN TIMUR - KELAS 4
 *
 * FITUR MULTI-MAPEL (1 SPREADSHEET UNTUK SEMUA APLIKASI WEB MAPEL):
 * - Otomatis mendeteksi nama Mata Pelajaran dari setiap web ujian.
 * - Otomatis membuatkan Tab/Sheet baru sesuai mapel (misal: "Bahasa Indonesia", "Matematika", "IPAS", dll).
 * - Semua hasil ujian dari banyak web tersimpan rapi dalam 1 file Spreadsheet!
 *
 * PANDUAN PEMASANGAN (HANYA 2 MENIT):
 * 1. Buka 1 file Google Spreadsheet di https://sheets.new
 * 2. Klik menu "Ekstensi" (Extensions) -> "Apps Script"
 * 3. Hapus semua kode default, salin & tempel SELURUH KODE di bawah ini
 * 4. Klik ikon "Simpan" (Save)
 * 5. Klik tombol biru "Terapkan" (Deploy) -> "Penerapan Baru" (New Deployment)
 * 6. Pilih jenis: "Aplikasi Web" (Web App)
 * 7. PENGATURAN WAJIB:
 *    - Jalankan sebagai (Execute as): "Saya" (Me)
 *    - Siapa yang memiliki akses (Who has access): "Siapa saja" (Anyone) -> SANGAT PENTING!
 * 8. Klik "Terapkan" (Deploy), berikan Otorisasi Akun Google Anda
 * 9. Salin URL Aplikasi Web (berakhiran /exec) dan tempelkan ke menu "Pengaturan URL Spreadsheet" di Panel Guru.
 */

function getTargetSheet(ss, mapelName) {
  var name = (mapelName || "Matematika").replace(/[/\\\\?*\\[\\]:]/g, "").trim().substring(0, 100);
  if (!name) name = "Hasil_Tes";
  
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  
  // Buat header jika lembar sheet masih kosong
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Nama",
      "Kelas",
      "Nomor Absen",
      "Tanggal Lahir",
      "Benar",
      "Salah",
      "Nilai",
      "Status",
      "Mata Pelajaran"
    ]);
  }
  return sheet;
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var mapelParam = e && e.parameter && e.parameter.mapel ? e.parameter.mapel : "";
    var sheet = null;
    
    if (mapelParam) {
      var safeName = mapelParam.replace(/[/\\\\?*\\[\\]:]/g, "").trim();
      sheet = ss.getSheetByName(safeName);
    }
    if (!sheet) {
      sheet = ss.getActiveSheet();
    }
    
    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ success: true, data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var headers = data[0];
    var results = [];
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var item = {};
      for (var j = 0; j < headers.length; j++) {
        var headerKey = String(headers[j]).trim();
        item[headerKey] = row[j];
      }
      results.push(item);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: true, data: results }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var raw = e.postData ? e.postData.contents : "{}";
    var contents = JSON.parse(raw);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var mataPelajaran = contents.mataPelajaran || "Matematika";
    var sheet = getTargetSheet(ss, mataPelajaran);
    
    // Fitur Delete jika diminta dari panel guru
    if (contents.action === "delete") {
      var data = sheet.getDataRange().getValues();
      var targetTimestamp = String(contents.timestamp || "").trim();
      var targetNama = String(contents.nama || contents.studentName || "").trim().toLowerCase();
      
      for (var i = data.length - 1; i >= 1; i--) {
        var rowTime = String(data[i][0]).trim();
        var rowName = String(data[i][1]).trim().toLowerCase();
        if ((targetTimestamp && rowTime === targetTimestamp) || (targetNama && rowName === targetNama)) {
          sheet.deleteRow(i + 1);
          return ContentService.createTextOutput(JSON.stringify({ success: true, message: "Data berhasil dihapus" }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Data tidak ditemukan" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Simpan Hasil Tes Siswa
    var timestamp = contents.timestamp || Utilities.formatDate(new Date(), "GMT+8", "dd/MM/yyyy HH:mm:ss");
    var nama = contents.studentName || contents.nama || "";
    var kelas = contents.className || contents.kelas || "4";
    var noAbsen = contents.absenNumber || contents.noAbsen || "";
    var tglLahir = contents.birthDate || contents.tglLahir || "-";
    var benar = contents.correctCount !== undefined ? contents.correctCount : (contents.benar || 0);
    var salah = contents.incorrectCount !== undefined ? contents.incorrectCount : (contents.salah || 0);
    var nilai = contents.finalScore !== undefined ? contents.finalScore : (contents.nilai || 0);
    var status = contents.status || (nilai >= 60 ? "Lulus" : "Belum Lulus");
    
    sheet.appendRow([
      timestamp,
      nama,
      kelas,
      noAbsen,
      tglLahir,
      benar,
      salah,
      nilai,
      status,
      mataPelajaran
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Hasil tes berhasil disimpan ke tab " + sheet.getName()
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
`;

