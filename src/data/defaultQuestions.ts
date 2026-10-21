import { Question } from '../types';
import {
  SVG_POLA_KOREK_API_SEGITIGA,
  SVG_POLA_LINGKARAN_KELERENG,
  SVG_POLA_UBIN_PERSEGI,
  SVG_POLA_BINTANG_MENURUN,
  SVG_POLA_SEGITIGA_TINGKAT,
  SVG_POLA_KARTU_BILANGAN,
  SVG_POLA_MEJA_KURSI,
  SVG_POLA_BALOK_SUSUN,
} from './questionSvgAssets';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (25 SOAL)
  // =========================================================================

  // Soal 1 (Pola Korek Api Segitiga)
  {
    id: 1,
    type: 'pg',
    topic: 'Pola Gambar Membesar',
    difficulty: 'Mudah',
    image: SVG_POLA_KOREK_API_SEGITIGA,
    imageCaption: 'Gambar 1: Susunan segitiga menggunakan batang korek api bersambung',
    text: 'Perhatikan gambar susunan batang korek api di atas!\n\nPola 1 memerlukan 3 batang, Pola 2 memerlukan 5 batang, dan Pola 3 memerlukan 7 batang.\nBanyak batang korek api yang dibutuhkan untuk membentuk Pola 4 adalah...',
    options: [
      { id: 'A', text: '9 batang' },
      { id: 'B', text: '8 batang' },
      { id: 'C', text: '10 batang' },
      { id: 'D', text: '11 batang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola pembentukan batang korek api bertambah 2 batang pada setiap pola berikutnya (3, 5, 7, ...). Maka pada Pola 4 dibutuhkan 7 + 2 = 9 batang korek api.',
  },

  // Soal 2 (Pola Kelereng Bersusun)
  {
    id: 2,
    type: 'pg',
    topic: 'Pola Gambar Membesar',
    difficulty: 'Mudah',
    image: SVG_POLA_LINGKARAN_KELERENG,
    imageCaption: 'Gambar 2: Susunan kelereng bertambah secara teratur',
    text: 'Perhatikan susunan kelereng pada gambar di atas!\n\nPola 1 = 2 butir, Pola 2 = 4 butir, Pola 3 = 6 butir, Pola 4 = 8 butir.\nBanyak kelereng pada Pola ke-5 adalah...',
    options: [
      { id: 'A', text: '10 butir' },
      { id: 'B', text: '12 butir' },
      { id: 'C', text: '9 butir' },
      { id: 'D', text: '14 butir' },
    ],
    correctAnswer: 'A',
    explanation:
      'Susunan kelereng membentuk pola bilangan genap dengan penambahan 2 butir pada tiap tahap (2, 4, 6, 8, ...). Maka pola ke-5 adalah 8 + 2 = 10 butir kelereng.',
  },

  // Soal 3 (Pola Ubin Persegi)
  {
    id: 3,
    type: 'pg',
    topic: 'Pola Gambar Membesar',
    difficulty: 'Sedang',
    image: SVG_POLA_UBIN_PERSEGI,
    imageCaption: 'Gambar 3: Susunan ubin berbentuk persegi (1x1, 2x2, 3x3, 4x4)',
    text: 'Perhatikan gambar susunan ubin persegi di atas!\n\nPola 1 terdiri dari 1 ubin, Pola 2 terdiri dari 4 ubin, Pola 3 terdiri dari 9 ubin, dan Pola 4 terdiri dari 16 ubin.\nBanyak ubin persegi pada Pola 5 adalah...',
    options: [
      { id: 'A', text: '25 ubin' },
      { id: 'B', text: '20 ubin' },
      { id: 'C', text: '24 ubin' },
      { id: 'D', text: '36 ubin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola susunan ubin persegi dihitung dari perkalian sisi x sisi (bilangan kuadrat):\nPola 1 = 1x1 = 1\nPola 2 = 2x2 = 4\nPola 3 = 3x3 = 9\nPola 4 = 4x4 = 16\nMaka Pola 5 = 5x5 = 25 ubin.',
  },

  // Soal 4 (Pola Lingkaran Ganjil)
  {
    id: 4,
    type: 'pg',
    topic: 'Pola Gambar Membesar',
    difficulty: 'Mudah',
    text: 'Dita menggambar lingkaran dengan pola bertambah: gambar ke-1 ada 1 lingkaran, gambar ke-2 ada 3 lingkaran, gambar ke-3 ada 5 lingkaran, dan gambar ke-4 ada 7 lingkaran.\nBanyak lingkaran yang digambar Dita pada gambar ke-6 adalah...',
    options: [
      { id: 'A', text: '11 lingkaran' },
      { id: 'B', text: '9 lingkaran' },
      { id: 'C', text: '13 lingkaran' },
      { id: 'D', text: '15 lingkaran' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola lingkaran tersebut adalah bilangan ganjil bertambah 2:\nGambar 1: 1\nGambar 2: 3\nGambar 3: 5\nGambar 4: 7\nGambar 5: 9\nGambar 6: 11 lingkaran.',
  },

  // Soal 5 (Pola Bintang Mengecil)
  {
    id: 5,
    type: 'pg',
    topic: 'Pola Gambar Mengecil',
    difficulty: 'Mudah',
    image: SVG_POLA_BINTANG_MENURUN,
    imageCaption: 'Gambar 4: Susunan pola bintang yang semakin berkurang',
    text: 'Perhatikan pola gambar bintang di atas!\n\nSusunan 1 terdapat 15 bintang, Susunan 2 terdapat 12 bintang, dan Susunan 3 terdapat 9 bintang.\nBanyak bintang pada Susunan 4 adalah...',
    options: [
      { id: 'A', text: '6 bintang' },
      { id: 'B', text: '7 bintang' },
      { id: 'C', text: '5 bintang' },
      { id: 'D', text: '3 bintang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak bintang berkurang 3 pada setiap susunan (15, 12, 9, ...). Maka pada susunan 4 banyak bintang adalah 9 - 3 = 6 bintang.',
  },

  // Soal 6 (Pola Segitiga Bertingkat)
  {
    id: 6,
    type: 'pg',
    topic: 'Pola Gambar Membesar',
    difficulty: 'Sedang',
    image: SVG_POLA_SEGITIGA_TINGKAT,
    imageCaption: 'Gambar 5: Pola titik lingkaran tersusun bertingkat berbentuk segitiga',
    text: 'Perhatikan gambar pola titik segitiga bertingkat di atas!\n\nPola 1 = 1 titik\nPola 2 = 3 titik (1 + 2)\nPola 3 = 6 titik (1 + 2 + 3)\nPola 4 = 10 titik (1 + 2 + 3 + 4)\nBanyak titik pada Pola 5 adalah...',
    options: [
      { id: 'A', text: '15 titik' },
      { id: 'B', text: '14 titik' },
      { id: 'C', text: '16 titik' },
      { id: 'D', text: '20 titik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola bilangan segitiga bertingkat diperoleh dengan menjumlahkan bilangan berurutan:\nPola 5 = 1 + 2 + 3 + 4 + 5 = 15 titik (atau 10 + 5 = 15).',
  },

  // Soal 7 (Pola Bilangan Membesar Dasar)
  {
    id: 7,
    type: 'pg',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Mudah',
    text: 'Perhatikan barisan bilangan berikut ini:\n4, 7, 10, 13, ..., ...\n\nDua bilangan berikutnya yang tepat untuk melanjutkan pola tersebut adalah...',
    options: [
      { id: 'A', text: '16 dan 19' },
      { id: 'B', text: '15 dan 18' },
      { id: 'C', text: '16 dan 20' },
      { id: 'D', text: '17 dan 21' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola bilangan ini bertambah 3 secara teratur:\n4 (+3) = 7\n7 (+3) = 10\n10 (+3) = 13\n13 (+3) = 16\n16 (+3) = 19.',
  },

  // Soal 8 (Pola Kartu Bilangan)
  {
    id: 8,
    type: 'pg',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Mudah',
    image: SVG_POLA_KARTU_BILANGAN,
    imageCaption: 'Gambar 6: Deretan kartu bilangan dengan satu kartu bertanda tanya (?)',
    text: 'Perhatikan kartu bilangan pada gambar di atas:\n12, 17, 22, 27, [ ? ], 37.\n\nBilangan yang tepat untuk mengisi tanda tanya (?) pada kartu tersebut adalah...',
    options: [
      { id: 'A', text: '32' },
      { id: 'B', text: '31' },
      { id: 'C', text: '33' },
      { id: 'D', text: '30' },
    ],
    correctAnswer: 'A',
    explanation:
      'Selisih antarbilangan adalah bertambah 5 (+5):\n12 + 5 = 17\n17 + 5 = 22\n22 + 5 = 27\n27 + 5 = 32\n32 + 5 = 37 (cocok dengan kartu terakhir). Jadi kartu bertanda tanya bernilai 32.',
  },

  // Soal 9 (Aturan Pembentukan Pola)
  {
    id: 9,
    type: 'pg',
    topic: 'Aturan Pola Bilangan',
    difficulty: 'Mudah',
    text: 'Diberikan barisan bilangan: 5, 11, 17, 23, 29.\nAturan pembentukan pola bilangan di atas adalah...',
    options: [
      { id: 'A', text: 'Ditambah 6 dari bilangan sebelumnya' },
      { id: 'B', text: 'Ditambah 5 dari bilangan sebelumnya' },
      { id: 'C', text: 'Dikalikan 2 dari bilangan sebelumnya' },
      { id: 'D', text: 'Ditambah 7 dari bilangan sebelumnya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Hitung selisih antar dua suku berdekatan:\n11 - 5 = 6\n17 - 11 = 6\n23 - 17 = 6\n29 - 23 = 6\nJadi aturan pola tersebut adalah selalu bertambah 6.',
  },

  // Soal 10 (Pola Bilangan Mengecil)
  {
    id: 10,
    type: 'pg',
    topic: 'Pola Bilangan Mengecil',
    difficulty: 'Mudah',
    text: 'Perhatikan pola bilangan mengecil berikut:\n68, 62, 56, 50, ...\n\nBilangan berikutnya pada pola tersebut adalah...',
    options: [
      { id: 'A', text: '44' },
      { id: 'B', text: '42' },
      { id: 'C', text: '46' },
      { id: 'D', text: '48' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola bilangan ini berkurang 6 secara teratur:\n68 - 6 = 62\n62 - 6 = 56\n56 - 6 = 50\n50 - 6 = 44.',
  },

  // Soal 11 (Pola Bilangan Mengecil Hilang di Tengah)
  {
    id: 11,
    type: 'pg',
    topic: 'Pola Bilangan Mengecil',
    difficulty: 'Sedang',
    text: 'Tentukan bilangan yang hilang pada barisan bilangan mengecil berikut:\n95, 87, 79, ..., 63\n\nBilangan yang tepat untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '71' },
      { id: 'B', text: '72' },
      { id: 'C', text: '70' },
      { id: 'D', text: '69' },
    ],
    correctAnswer: 'A',
    explanation:
      'Selisih setiap suku adalah berkurang 8:\n95 - 8 = 87\n87 - 8 = 79\n79 - 8 = 71\n71 - 8 = 63 (terbukti benar). Jadi bilangan yang hilang adalah 71.',
  },

  // Soal 12 (Aturan Pola Pengurangan)
  {
    id: 12,
    type: 'pg',
    topic: 'Aturan Pola Bilangan',
    difficulty: 'Mudah',
    text: 'Diketahui deret bilangan: 100, 92, 84, 76, 68.\nAturan pembentukan deret bilangan tersebut adalah selalu...',
    options: [
      { id: 'A', text: 'Berkurang 8' },
      { id: 'B', text: 'Berkurang 6' },
      { id: 'C', text: 'Berkurang 7' },
      { id: 'D', text: 'Berkurang 9' },
    ],
    correctAnswer: 'A',
    explanation:
      '100 - 92 = 8, 92 - 84 = 8, 84 - 76 = 8, 76 - 68 = 8. Maka aturannya adalah selalu berkurang 8.',
  },

  // Soal 13 (Pola Perkalian / Lompat Lipat Dua)
  {
    id: 13,
    type: 'pg',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Sedang',
    text: 'Perhatikan pola bilangan loncat perkalian berikut:\n3, 6, 12, 24, ...\n\nBilangan kelima pada pola tersebut adalah...',
    options: [
      { id: 'A', text: '48' },
      { id: 'B', text: '36' },
      { id: 'C', text: '42' },
      { id: 'D', text: '52' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aturan pola adalah mengalikan bilangan sebelumnya dengan 2 (x 2):\n3 x 2 = 6\n6 x 2 = 12\n12 x 2 = 24\n24 x 2 = 48. Maka bilangan kelima adalah 48.',
  },

  // Soal 14 (Pola Gambar Meja dan Kursi Rapat)
  {
    id: 14,
    type: 'pg',
    topic: 'Pola Gambar Terapan',
    difficulty: 'Sedang',
    image: SVG_POLA_MEJA_KURSI,
    imageCaption: 'Gambar 7: Penataan meja rapat persegi yang digabung sejajar beserta kursinya',
    text: 'Perhatikan gambar penataan meja rapat di atas!\n\n1 meja dapat memuat 4 kursi.\n2 meja digabung memanjang dapat memuat 6 kursi.\n3 meja digabung memanjang dapat memuat 8 kursi.\nJika 4 meja digabung sejajar memanjang, berapa banyak kursi yang dapat dipasang?',
    options: [
      { id: 'A', text: '10 kursi' },
      { id: 'B', text: '12 kursi' },
      { id: 'C', text: '9 kursi' },
      { id: 'D', text: '14 kursi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Setiap penambahan 1 meja yang dirapatkan menambah 2 kursi (satu di sisi atas, satu di sisi bawah):\n1 meja = 4 kursi\n2 meja = 4 + 2 = 6 kursi\n3 meja = 6 + 2 = 8 kursi\n4 meja = 8 + 2 = 10 kursi.',
  },

  // Soal 15 (Pola Balok Susun Menurun)
  {
    id: 15,
    type: 'pg',
    topic: 'Pola Gambar Mengecil',
    difficulty: 'Sedang',
    image: SVG_POLA_BALOK_SUSUN,
    imageCaption: 'Gambar 8: Susunan balok kayu berkurang secara konstan',
    text: 'Perhatikan susunan balok pada gambar di atas!\n\nSusunan I berisi 20 balok, Susunan II berisi 16 balok, Susunan III berisi 12 balok.\nJika pola pengurangan terus berlanjut, berapa banyak balok pada Susunan V (ke-5)?',
    options: [
      { id: 'A', text: '4 balok' },
      { id: 'B', text: '8 balok' },
      { id: 'C', text: '6 balok' },
      { id: 'D', text: '2 balok' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola balok berkurang 4 balok setiap susunan (-4):\nSusunan I = 20\nSusunan II = 16\nSusunan III = 12\nSusunan IV = 8\nSusunan V = 8 - 4 = 4 balok.',
  },

  // Soal 16 (Pola Barisan Kursi Aula)
  {
    id: 16,
    type: 'pg',
    topic: 'Soal Cerita Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Di aula SD Negeri 3 Loloan Timur, kursi disusun dalam beberapa baris. Baris pertama terdapat 15 kursi, baris kedua terdapat 19 kursi, dan baris ketiga terdapat 23 kursi.\nJika penambahan kursi pada setiap baris selalu sama, banyak kursi pada baris keenam adalah...',
    options: [
      { id: 'A', text: '35 kursi' },
      { id: 'B', text: '31 kursi' },
      { id: 'C', text: '39 kursi' },
      { id: 'D', text: '27 kursi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak kursi bertambah 4 tiap baris (+4):\nBaris 1: 15\nBaris 2: 19\nBaris 3: 23\nBaris 4: 27\nBaris 5: 31\nBaris 6: 35 kursi.',
  },

  // Soal 17 (Pola Tabungan Doni)
  {
    id: 17,
    type: 'pg',
    topic: 'Soal Cerita Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Doni membiasakan diri menabung uang saku setiap hari dengan pola meningkat:\nHari ke-1 menabung Rp2.000\nHari ke-2 menabung Rp3.500\nHari ke-3 menabung Rp5.000\nBerapa uang yang ditabung Doni khusus pada hari ke-5?',
    options: [
      { id: 'A', text: 'Rp8.000' },
      { id: 'B', text: 'Rp6.500' },
      { id: 'C', text: 'Rp9.500' },
      { id: 'D', text: 'Rp7.500' },
    ],
    correctAnswer: 'A',
    explanation:
      'Uang yang ditabung bertambah Rp1.500 setiap hari (+1.500):\nHari 1: Rp2.000\nHari 2: Rp3.500\nHari 3: Rp5.000\nHari 4: Rp6.500\nHari 5: Rp8.000.',
  },

  // Soal 18 (Pola Kelipatan Tujuh)
  {
    id: 18,
    type: 'pg',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Mudah',
    text: 'Perhatikan barisan bilangan: 35, 42, 49, 56, 63, ...\nBilangan ini merupakan pola barisan dengan pertambahan konstan sebesar...',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctAnswer: 'A',
    explanation:
      '42 - 35 = 7, 49 - 42 = 7, 56 - 49 = 7, 63 - 56 = 7. Jadi pertambahan konstan adalah 7 (kelipatan 7).',
  },

  // Soal 19 (Suku ke-8 Kelipatan 8)
  {
    id: 19,
    type: 'pg',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Sedang',
    text: 'Diberikan barisan bilangan: 8, 16, 24, 32, 40, ...\nSuku ke-8 dari pola bilangan kelipatan 8 tersebut adalah...',
    options: [
      { id: 'A', text: '64' },
      { id: 'B', text: '56' },
      { id: 'C', text: '72' },
      { id: 'D', text: '48' },
    ],
    correctAnswer: 'A',
    explanation:
      'Suku ke-n dari kelipatan 8 dirumuskan 8 x n:\nSuku ke-8 = 8 x 8 = 64.\n(Atau diteruskan: suku 6 = 48, suku 7 = 56, suku 8 = 64).',
  },

  // Soal 20 (Pola Bilangan Berkurang 9)
  {
    id: 20,
    type: 'pg',
    topic: 'Pola Bilangan Mengecil',
    difficulty: 'Sedang',
    text: 'Perhatikan barisan bilangan berikut:\n81, 72, 63, 54, 45, ..., ...\n\nDua bilangan berikutnya yang tepat adalah...',
    options: [
      { id: 'A', text: '36 dan 27' },
      { id: 'B', text: '35 dan 25' },
      { id: 'C', text: '36 dan 28' },
      { id: 'D', text: '37 dan 28' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola bilangan ini selalu berkurang 9 (-9):\n45 - 9 = 36\n36 - 9 = 27.',
  },

  // Soal 21 (Pola Kubus Tingkat Ganjil)
  {
    id: 21,
    type: 'pg',
    topic: 'Pola Gambar Membesar',
    difficulty: 'Sedang',
    text: 'Siswa kelas 4 menyusun balok kubus membentuk piramida berundak: tingkat 1 ada 1 kubus, tingkat 2 ada 3 kubus, tingkat 3 ada 5 kubus, tingkat 4 ada 7 kubus.\nBerapa banyak kubus yang menyusun tingkat ke-7?',
    options: [
      { id: 'A', text: '13 kubus' },
      { id: 'B', text: '11 kubus' },
      { id: 'C', text: '15 kubus' },
      { id: 'D', text: '17 kubus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan bilangan ganjil:\nTingkat 1 = 1\nTingkat 2 = 3\nTingkat 3 = 5\nTingkat 4 = 7\nTingkat 5 = 9\nTingkat 6 = 11\nTingkat 7 = 13 kubus.',
  },

  // Soal 22 (Pola Perkalian 3)
  {
    id: 22,
    type: 'pg',
    topic: 'Aturan Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Perhatikan barisan bilangan: 2, 6, 18, 54, 162.\nAturan yang paling tepat untuk barisan bilangan tersebut adalah...',
    options: [
      { id: 'A', text: 'Dikalikan 3 dari bilangan sebelumnya' },
      { id: 'B', text: 'Ditambah 4 dari bilangan sebelumnya' },
      { id: 'C', text: 'Dikalikan 2 lalu ditambah 2' },
      { id: 'D', text: 'Ditambah 12 dari bilangan sebelumnya' },
    ],
    correctAnswer: 'A',
    explanation:
      '2 x 3 = 6; 6 x 3 = 18; 18 x 3 = 54; 54 x 3 = 162. Pola dibentuk dengan mengalikan 3 bilangan sebelumnya.',
  },

  // Soal 23 (Pola Buku di Perpustakaan)
  {
    id: 23,
    type: 'pg',
    topic: 'Soal Cerita Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Di perpustakaan SD Negeri 3 Loloan Timur, buku ensiklopedia ditata di rak bertingkat: rak ke-1 berisi 24 buku, rak ke-2 berisi 30 buku, rak ke-3 berisi 36 buku.\nJika pola penataan buku terus berlanjut sama, banyak buku di rak ke-5 adalah...',
    options: [
      { id: 'A', text: '48 buku' },
      { id: 'B', text: '42 buku' },
      { id: 'C', text: '54 buku' },
      { id: 'D', text: '50 buku' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola bertambah 6 buku setiap rak:\nRak 1 = 24\nRak 2 = 30\nRak 3 = 36\nRak 4 = 42\nRak 5 = 48 buku.',
  },

  // Soal 24 (Pola Ganjil Berurutan)
  {
    id: 24,
    type: 'pg',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Mudah',
    text: 'Perhatikan deretan bilangan ganjil berikut:\n13, 15, 17, 19, 21, ..., ..., 27\n\nDua bilangan ganjil yang hilang untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '23 dan 25' },
      { id: 'B', text: '22 dan 24' },
      { id: 'C', text: '23 dan 26' },
      { id: 'D', text: '24 dan 25' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola bilangan ganjil bertambah 2: setelah 21 adalah 21 + 2 = 23, lalu 23 + 2 = 25, dilanjutkan 27.',
  },

  // Soal 25 (Pola Bilangan Melangkah Mundur)
  {
    id: 25,
    type: 'pg',
    topic: 'Pola Bilangan Mengecil',
    difficulty: 'Sedang',
    text: 'Diberikan barisan bilangan mengecil: 120, 110, 100, 90, ...\nAgar pola tersebut mencapai angka 40, berapa langkah pengurangan lagi yang harus dilakukan setelah angka 90?',
    options: [
      { id: 'A', text: '5 langkah' },
      { id: 'B', text: '4 langkah' },
      { id: 'C', text: '6 langkah' },
      { id: 'D', text: '3 langkah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola berkurang 10 setiap langkah:\nSetelah 90:\nLangkah 1: 80\nLangkah 2: 70\nLangkah 3: 60\nLangkah 4: 50\nLangkah 5: 40.\nJadi diperlukan 5 langkah lagi.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (PGK) KATEGORI BENAR/SALAH (5 SOAL)
  // =========================================================================

  // Soal 26 (PGK Kategori)
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Sedang',
    text: 'Perhatikan barisan bilangan membesar berikut ini:\n6, 13, 20, 27, 34, ...\n\nTentukan kebenaran dari setiap pernyataan berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Aturan pembentukan pola bilangan tersebut adalah selalu bertambah 7 (+7).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Suku ke-6 dari pola bilangan tersebut adalah 41.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bilangan 50 adalah salah satu bilangan yang ada dalam barisan pola ini.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Selisih 13 - 6 = 7, 20 - 13 = 7, 27 - 20 = 7. Jadi aturan bertambah 7 (BENAR).\n2. Suku ke-6 = 34 + 7 = 41 (BENAR).\n3. Lanjutan suku berikutnya: 41 + 7 = 48, lalu 48 + 7 = 55. Bilangan 50 tidak ada dalam barisan (SALAH).',
  },

  // Soal 27 (PGK Kategori)
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Pola Gambar Batang Korek Api',
    difficulty: 'Sedang',
    text: 'Diberikan pola gambar rangkaian segitiga dari batang korek api bersambung sejajar:\nPola 1 = 3 batang\nPola 2 = 5 batang\nPola 3 = 7 batang\nPola 4 = 9 batang\n\nTentukan kebenaran setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Setiap bertambah satu segitiga bersambung, batang korek api bertambah 2 batang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada Pola ke-5 dibutuhkan sebanyak 11 batang korek api.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyaknya batang korek api pada pola ke-6 merupakan bilangan genap.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Segitiga pertama butuh 3 batang, segitiga selanjutnya hanya menambah 2 batang karena satu sisi dipakai bersama (BENAR).\n2. Pola ke-5 = 9 + 2 = 11 batang (BENAR).\n3. Pola ke-6 = 11 + 2 = 13 batang, di mana 13 adalah bilangan ganjil, bukan genap (SALAH).',
  },

  // Soal 28 (PGK Kategori)
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Pola Bilangan Mengecil',
    difficulty: 'Sedang',
    text: 'Perhatikan barisan bilangan mengecil berikut:\n90, 82, 74, 66, 58, ...\n\nTentukan kebenaran dari setiap pernyataan berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Pola bilangan tersebut terbentuk dari aturan selalu berkurang 8 (-8).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dua suku berikutnya setelah bilangan 58 adalah 50 dan 42.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Suku ke-8 dari barisan bilangan tersebut bernilai di bawah nol (bilangan negatif).',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Selisih 90 - 82 = 8, 82 - 74 = 8, 74 - 66 = 8, aturannya berkurang 8 (BENAR).\n2. Suku ke-6 = 58 - 8 = 50, suku ke-7 = 50 - 8 = 42 (BENAR).\n3. Suku ke-8 = 42 - 8 = 34. Nilai 34 bernilai positif, bukan negatif (SALAH).',
  },

  // Soal 29 (PGK Kategori)
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Pola Gambar Persegi Kuadrat',
    difficulty: 'Sedang',
    text: 'Seorang siswa menata ubin lantai membentuk persegi berukuran 1x1, 2x2, 3x3, 4x4, dan seterusnya sehingga menghasilkan jumlah ubin: 1, 4, 9, 16, 25, ...\n\nTentukan kebenaran dari setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Banyak ubin pada pola persegi ke-6 adalah 36 ubin.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selisih banyak ubin antara pola ke-4 (16) dan pola ke-3 (9) adalah 7 ubin.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pola ini terbentuk dari aturan penambahan bilangan yang tetap sama pada setiap langkah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pola ke-6 = 6 x 6 = 36 ubin (BENAR).\n2. Selisih = 16 - 9 = 7 ubin (BENAR).\n3. Penambahan ubin adalah: +3, +5, +7, +9, ... (penambahannya membesar berupa bilangan ganjil, bukan penambahan tetap) (SALAH).',
  },

  // Soal 30 (PGK Kategori)
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Pola Gambar Terapan Meja Rapat',
    difficulty: 'Sedang',
    text: 'Dalam ruang rapat guru SD Negeri 3 Loloan Timur:\n- 1 meja dapat dikelilingi 4 kursi\n- 2 meja dirapatkan memanjang dapat dikelilingi 6 kursi\n- 3 meja dirapatkan memanjang dapat dikelilingi 8 kursi\n\nTentukan kebenaran dari setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Setiap penambahan 1 meja yang dirapatkan akan menambah kapasitas 2 kursi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika terdapat 5 meja yang dirapatkan memanjang, maka dapat memuat 12 kursi.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika ruang rapat membutuhkan 16 kursi, maka jumlah meja yang harus dirapatkan adalah 8 meja.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kapasitas bertambah 2 kursi setiap penambahan meja (BENAR).\n2. Rumus kursi = (2 x jumlah meja) + 2. Untuk 5 meja = (2 x 5) + 2 = 12 kursi (BENAR).\n3. Jika butuh 16 kursi: (2 x n) + 2 = 16 -> 2n = 14 -> n = 7 meja, bukan 8 meja (SALAH).',
  },

  // =========================================================================
  // BAGIAN 3: ISIAN SINGKAT (5 SOAL)
  // =========================================================================

  // Soal 31 (Isian)
  {
    id: 31,
    type: 'isian',
    topic: 'Pola Bilangan Membesar',
    difficulty: 'Mudah',
    text: 'Perhatikan barisan bilangan membesar berikut ini:\n14, 22, 30, 38, ...\n\nBilangan berikutnya pada barisan tersebut adalah...',
    correctAnswer: '46',
    acceptedAnswers: ['46', 'empat puluh enam'],
    explanation:
      'Barisan bertambah 8 secara teratur (+8): 14 + 8 = 22; 22 + 8 = 30; 30 + 8 = 38; 38 + 8 = 46.',
  },

  // Soal 32 (Isian)
  {
    id: 32,
    type: 'isian',
    topic: 'Pola Bilangan Mengecil',
    difficulty: 'Mudah',
    text: 'Perhatikan barisan bilangan mengecil berikut:\n85, 76, 67, 58, ...\n\nSuku berikutnya setelah bilangan 58 adalah...',
    correctAnswer: '49',
    acceptedAnswers: ['49', 'empat puluh sembilan'],
    explanation:
      'Pola bilangan berkurang 9 secara konsisten (-9): 85 - 9 = 76; 76 - 9 = 67; 67 - 9 = 58; 58 - 9 = 49.',
  },

  // Soal 33 (Isian)
  {
    id: 33,
    type: 'isian',
    topic: 'Pola Gambar Lingkaran Bertingkat',
    difficulty: 'Sedang',
    text: 'Rina menyusun kelereng dalam kelompok berpola:\nKelompok 1 = 3 kelereng\nKelompok 2 = 6 kelereng\nKelompok 3 = 9 kelereng\nKelompok 4 = 12 kelereng\n\nBanyak kelereng pada Kelompok ke-7 adalah... butir.',
    correctAnswer: '21',
    acceptedAnswers: ['21', '21 butir', 'dua puluh satu'],
    explanation:
      'Pola ini adalah kelipatan 3 (3 x n): Kelompok 7 = 3 x 7 = 21 kelereng.',
  },

  // Soal 34 (Isian)
  {
    id: 34,
    type: 'isian',
    topic: 'Soal Cerita Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Di taman sekolah SD Negeri 3 Loloan Timur, pot tanaman ditata berbaris:\nBaris pertama ada 5 pot bunga\nBaris kedua ada 9 pot bunga\nBaris ketiga ada 13 pot bunga\n\nJika penataan pot bunga mengikuti pola penambahan yang sama, banyak pot bunga pada baris kelima adalah... pot.',
    correctAnswer: '21',
    acceptedAnswers: ['21', '21 pot', 'dua puluh satu'],
    explanation:
      'Penambahan pot bunga adalah bertambah 4 tiap baris (+4):\nBaris 1 = 5\nBaris 2 = 9\nBaris 3 = 13\nBaris 4 = 17\nBaris 5 = 21 pot.',
  },

  // Soal 35 (Isian)
  {
    id: 35,
    type: 'isian',
    topic: 'Pola Bilangan Perkalian',
    difficulty: 'Sedang',
    text: 'Suatu pola bilangan melompat dengan aturan dikalikan 2:\n5, 10, 20, 40, ...\n\nNilai bilangan pada suku kelima adalah...',
    correctAnswer: '80',
    acceptedAnswers: ['80', 'delapan puluh'],
    explanation:
      'Setiap suku diperoleh dari perkalian 2 dari suku sebelumnya: 5 x 2 = 10; 10 x 2 = 20; 20 x 2 = 40; 40 x 2 = 80.',
  },
];
