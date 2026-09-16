import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // --- BAGIAN 1: PILIHAN GANDA (18 SOAL) ---
  // ==========================================
  {
    id: 1,
    type: 'pg',
    topic: 'Konsep Dasar Gerak Lokomotor',
    difficulty: 'Mudah',
    text: 'Siswa kelas VI sedang mempelajari berbagai macam pola gerak dasar dalam mata pelajaran PJOK. Manakah pernyataan di bawah ini yang merupakan pengertian paling tepat dari gerak lokomotor?',
    options: [
      { id: 'A', text: 'Gerakan tubuh yang dilakukan tanpa memindahkan posisi kaki dari tempat semula.' },
      { id: 'B', text: 'Gerakan tubuh yang menyebabkan terjadinya perpindahan tempat dari satu titik ke titik lain.' },
      { id: 'C', text: 'Gerakan tubuh yang selalu melibatkan benda atau alat seperti bola dan raket.' },
      { id: 'D', text: 'Gerakan tubuh statis untuk melatih kelenturan persendian saat berdiam diri.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gerak lokomotor adalah gerakan anggota tubuh yang menyebabkan seluruh badan berpindah tempat dari satu titik ke titik lain. Contoh gerakan lokomotor antara lain berjalan, berlari, melompat, dan meloncat.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pola Gerak Lokomotor - Lari Zig-zag',
    difficulty: 'Sedang',
    image: 'lari_zigzag',
    imageCaption: 'Gambar 1: Latihan kelincahan lari zig-zag melintasi kerucut (cone)',
    text: 'Perhatikan Gambar 1 di atas!\nPada pembelajaran PJOK di lapangan, Pak Bagus menginstruksikan siswa melakukan gerakan berlari meliuk-liuk menghindari deretan kerucut (cone) dari garis Start hingga garis Finish. Berdasarkan pola gerakannya, aktivitas lari zig-zag tersebut tergolong ke dalam jenis gerak...',
    options: [
      { id: 'A', text: 'Nonlokomotor, karena siswa tetap berada di lingkungan lapangan sekolah.' },
      { id: 'B', text: 'Lokomotor, karena terjadi perpindahan posisi tubuh secara dinamis dari titik awal ke titik akhir.' },
      { id: 'C', text: 'Manipulatif, karena siswa berinteraksi langsung dengan kerucut pembatas lintasan.' },
      { id: 'D', text: 'Nonlokomotor, karena siswa mengayunkan kaki dan pinggang saat berbelok.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Lari zig-zag melintasi kerucut merupakan variasi gerak lokomotor karena tubuh bergerak dan berpindah posisi dari garis start menuju garis finish. Latihan ini juga bermanfaat melatih kelincahan (agility) dan koordinasi arah lari.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Pola Gerak Nonlokomotor - Pemanasan',
    difficulty: 'Mudah',
    text: 'Sebelum berolahraga, seluruh siswa kelas VI dibimbing untuk melakukan gerakan pemanasan di tempat, seperti memutar persendian leher, memutar kedua bahu ke depan dan ke belakang, serta meliukkan pinggang ke samping kanan dan kiri. Rangkaian gerakan pemanasan tersebut termasuk ke dalam kelompok gerak...',
    options: [
      { id: 'A', text: 'Lokomotor' },
      { id: 'B', text: 'Nonlokomotor' },
      { id: 'C', text: 'Manipulatif' },
      { id: 'D', text: 'Akrobatik' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gerakan memutar leher, memutar bahu, dan meliukkan badan dilakukan tanpa berpindah tempat dari posisi berdiri awal. Oleh karena itu, gerakan-gerakan pemanasan tersebut termasuk ke dalam gerak nonlokomotor.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pola Gerak Lokomotor - Melompati Rintangan',
    difficulty: 'Sedang',
    image: 'melompat_rintangan',
    imageCaption: 'Gambar 2: Rangkaian gerakan melompati rintangan balok kecil',
    text: 'Amatilah rangkaian gerakan pada Gambar 2 di atas!\nSaat melakukan gerakan melompati rintangan balok dengan satu kaki menolak ke depan, tubuh melayang melintasi rintangan, lalu mendarat dengan kedua kaki mengeper di area matras, gerak dominan yang menyebabkan tubuh berpindah melintasi rintangan adalah gerak...',
    options: [
      { id: 'A', text: 'Lokomotor (melompat ke depan)' },
      { id: 'B', text: 'Nonlokomotor (menekuk lutut)' },
      { id: 'C', text: 'Manipulatif (memegang rintangan)' },
      { id: 'D', text: 'Keseimbangan statis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Melompati rintangan merupakan gerak lokomotor karena melibatkan perpindahan seluruh tubuh melintasi rintangan di udara dari titik tolakan menuju titik pendaratan.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Analisis Gerak - Melompat vs Meloncat',
    difficulty: 'Sedang',
    text: 'Dalam materi atletik PJOK kelas VI, siswa diajarkan membedakan antara gerakan "Melompat" dan "Meloncat". Perbedaan tumpuan kaki yang benar antara melompat dan meloncat adalah...',
    options: [
      { id: 'A', text: 'Melompat menolak dengan dua kaki sekaligus, sedangkan meloncat menolak dengan satu kaki.' },
      { id: 'B', text: 'Melompat menolak dengan satu kaki terkuat, sedangkan meloncat menolak dengan kedua kaki bersamaan.' },
      { id: 'C', text: 'Melompat tidak memindahkan tubuh, sedangkan meloncat memindahkan tubuh jauh ke depan.' },
      { id: 'D', text: 'Melompat selalu dilakukan ke arah belakang, sedangkan meloncat dilakukan ke arah depan.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Secara terminologi gerak dasar PJOK:\n• Melompat (jump): Tolakan tubuh dilakukan menggunakan satu kaki (misal lompat jauh, lompat tinggi).\n• Meloncat (hop/leap): Tolakan tubuh dilakukan menggunakan dua kaki sekaligus secara bersamaan (misal loncat katak, loncat indah).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Pola Gerak Nonlokomotor - Kelenturan',
    difficulty: 'Sedang',
    image: 'membungkuk_lentur',
    imageCaption: 'Gambar 3: Gerakan peregangan membungkuk menyentuh ujung kaki di tempat',
    text: 'Perhatikan Gambar 3 di atas!\nSeorang siswa berdiri tegak dengan kedua kaki rapat, lalu perlahan membungkukkan badannya ke bawah hingga ujung jari kedua tangan menyentuh ujung sepatu tanpa melangkahkan kedua telapak kakinya. Gerakan tersebut merupakan contoh gerak...',
    options: [
      { id: 'A', text: 'Lokomotor yang bertujuan mempercepat perpindahan langkah kaki.' },
      { id: 'B', text: 'Nonlokomotor yang bermanfaat melatih kelenturan otot punggung dan paha belakang.' },
      { id: 'C', text: 'Manipulatif yang memanfaatkan kelenturan sendi jari tangan.' },
      { id: 'D', text: 'Lokomotor karena bagian punggung bergerak turun ke bawah.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gerakan membungkuk menyentuh ujung kaki dilakukan dengan posisi telapak kaki tetap menempel di lantai tanpa berpindah tempat. Gerakan ini merupakan gerak nonlokomotor untuk melatih kelenturan (fleksibilitas) otot punggung dan hamstring.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Kombinasi Gerak dalam Permainan Kasti',
    difficulty: 'Sedang',
    text: 'Dalam permainan kasti, seorang regu penjaga berlari kencang mengejar bola yang dipukul regu pemukul, kemudian ia berhenti dan membungkukkan badan untuk memungut bola di tanah. Rangkaian gerak yang dilakukan oleh penjaga tersebut berturut-turut adalah...',
    options: [
      { id: 'A', text: 'Gerak lokomotor diikuti gerak nonlokomotor.' },
      { id: 'B', text: 'Gerak nonlokomotor diikuti gerak lokomotor.' },
      { id: 'C', text: 'Gerak manipulatif diikuti gerak lokomotor.' },
      { id: 'D', text: 'Gerak nonlokomotor murni di tempat.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berlari kencang mengejar bola merupakan gerak lokomotor (berpindah tempat), sedangkan berhenti lalu membungkukkan badan di tempat merupakan gerak nonlokomotor (tanpa berpindah tempat).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pola Gerak Nonlokomotor - Meliuk dan Memutar',
    difficulty: 'Sedang',
    image: 'meliuk_badan',
    imageCaption: 'Gambar 4: Gerakan meliukkan tubuh ke samping dan memutar pinggang di tempat',
    text: 'Perhatikan Gambar 4 di atas!\nGerakan meliukkan badan ke samping kanan-kiri serta memutar torso pinggang di tempat tanpa memindahkan posisi kedua telapak kaki pada senam kesegaran jasmani bermanfaat untuk melatih...',
    options: [
      { id: 'A', text: 'Kecepatan lari sprint jarak 100 meter.' },
      { id: 'B', text: 'Kelenturan dan elastisitas otot pinggang serta tulang belakang (nonlokomotor).' },
      { id: 'C', text: 'Kekuatan tumpuan telapak tangan di atas matras senam.' },
      { id: 'D', text: 'Daya dorong langkah kaki saat melakukan lompat jauh.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gerakan meliuk dan memutar pinggang di tempat tanpa memindahkan telapak kaki merupakan gerak dasar nonlokomotor yang berfungsi melatih kelenturan sendi pinggang dan elastisitas otot torso lateral.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Klasifikasi Gerak Dasar Lokomotor',
    difficulty: 'Mudah',
    text: 'Manakah di antara kelompok aktivitas fisik berikut ini yang SELURUHNYA merupakan contoh dari gerak lokomotor?',
    options: [
      { id: 'A', text: 'Berjalan cepat, berlari santai, dan melompat ke depan.' },
      { id: 'B', text: 'Mengayun lengan, membungkukkan badan, dan menggelengkan kepala.' },
      { id: 'C', text: 'Menekuk lutut, melompat katak, dan memutar persendian tangan.' },
      { id: 'D', text: 'Menendang bola, melempar cakram, dan menangkap kok.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berjalan, berlari, dan melompat ke depan semuanya menyebabkan tubuh berpindah posisi dari satu tempat ke tempat lain, sehingga ketiganya murni merupakan gerak lokomotor.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Pola Gerak Nonlokomotor - Keseimbangan Statis',
    difficulty: 'Sedang',
    image: 'pesawat_terbang',
    imageCaption: 'Gambar 5: Gerakan sikap kapal terbang bertumpu pada satu kaki di tempat',
    text: 'Perhatikan Gambar 5 di atas!\nSeorang siswa melakukan sikap kapal terbang dengan cara berdiri tegak bertumpu pada kaki kanan lurus, kaki kiri diangkat lurus sejajar ke belakang, dan kedua lengan direntangkan ke samping di tempat selama 10 detik. Gerakan ini merupakan wujud gerak...',
    options: [
      { id: 'A', text: 'Lokomotor untuk melatih kelincahan berpindah tempat.' },
      { id: 'B', text: 'Nonlokomotor untuk melatih keseimbangan statis tubuh.' },
      { id: 'C', text: 'Manipulatif karena merentangkan kedua tangan seperti sayap.' },
      { id: 'D', text: 'Lokomotor karena kaki kiri bergerak menjauhi garis depan.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sikap kapal terbang dilakukan dengan bertumpu pada satu kaki di tempat tanpa berpindah posisi. Gerakan ini merupakan contoh nyata gerak nonlokomotor yang melatih keseimbangan statis tubuh.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Fungsi Gerak Nonlokomotor Saat Mendarat',
    difficulty: 'Sedang',
    text: 'Ketika melakukan pendaratan setelah melompat ke depan, seorang siswa wajib menekuk kedua lututnya membentuk posisi mengeper. Tujuan utama dari gerak menekuk lutut (nonlokomotor) saat mendarat adalah...',
    options: [
      { id: 'A', text: 'Menambah jarak jangkauan lompatan agar lebih jauh.' },
      { id: 'B', text: 'Meredam gaya benturan ke lantai sehingga melindungi sendi lutut dan tumit dari cedera.' },
      { id: 'C', text: 'Membuat tubuh segera terjatuh ke depan agar mendapat nilai gaya.' },
      { id: 'D', text: 'Menghentikan detak jantung sementara waktu agar tidak lelah.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gerak menekuk lutut mengeper saat mendarat (gerak nonlokomotor) berfungsi sebagai pegas peredam kejut (shock absorber) alami tubuh untuk meredam hentakan pendaratan dan melindungi persendian.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Pola Gerak Lokomotor - Shuttle Run',
    difficulty: 'Sedang',
    image: 'shuttle_run',
    imageCaption: 'Gambar 6: Latihan lari bolak-balik (shuttle run) memindahkan balok',
    text: 'Perhatikan Gambar 6 lintasan di atas!\nPada tes kebugaran jasmani siswa kelas VI, siswa diminta berlari bolak-balik menempuh jarak 10 meter sebanyak 4 kali untuk memindahkan balok kecil dari titik A ke titik B secepat mungkin. Aktivitas tersebut merupakan penerapan gerak...',
    options: [
      { id: 'A', text: 'Nonlokomotor, karena siswa kembali lagi ke titik awal semula.' },
      { id: 'B', text: 'Lokomotor, karena siswa terus berpindah tempat menempuh lintasan jarak lari.' },
      { id: 'C', text: 'Statis, karena gerakannya bersifat pengulangan ritmis.' },
      { id: 'D', text: 'Manipulatif murni tanpa ada perpindahan posisi tubuh.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Lari bolak-balik (shuttle run) adalah bentuk gerak lokomotor kecepatan dan kelincahan, karena pelari berpindah posisi berkali-kali antara titik A dan titik B sepanjang lintasan 10 meter.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Gerak Dasar dalam Permainan Bola Voli',
    difficulty: 'Sedang',
    text: 'Pada permainan bola voli, sebelum menerima bola passing bawah, Rani berdiri dengan kedua kaki dibuka selebar bahu, merendahkan badan dengan menekuk kedua lutut, serta mengaitkan kedua lengan lurus ke depan di tempat. Gerakan persiapan yang dilakukan Rani di tempat tersebut adalah gerak...',
    options: [
      { id: 'A', text: 'Nonlokomotor' },
      { id: 'B', text: 'Lokomotor' },
      { id: 'C', text: 'Kinetik berpindah' },
      { id: 'D', text: 'Lompatan dinamis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sikap siap (ready stance) passing bawah dengan menekuk lutut dan mengayun lengan di tempat tanpa melangkahkan kaki merupakan gerak nonlokomotor dalam permainan bola voli.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Variasi Gerak Lokomotor Senam Irama',
    difficulty: 'Sedang',
    text: 'Dalam senam irama berirama ritmis, gerakan "Gallop" (langkah kuda meluncur ke samping) dan gerakan "Skipping" (berjingkat bergantian kaki sambil melangkah ke depan) termasuk ke dalam kategori gerak...',
    options: [
      { id: 'A', text: 'Lokomotor, karena kedua gerakan tersebut membawa tubuh berpindah tempat mengiringi irama musik.' },
      { id: 'B', text: 'Nonlokomotor, karena dilakukan selaras dengan ketukan irama tanpa melompat tinggi.' },
      { id: 'C', text: 'Manipulatif, karena memerlukan konsentrasi pendengaran irama lagu.' },
      { id: 'D', text: 'Statis, karena kedua kaki selalu menyentuh lantai secara bersamaan.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Langkah kuda (gallop) dan berjingkat (skipping) merupakan variasi langkah kaki ritmis yang memindahkan posisi tubuh siswa di atas lantai, sehingga tergolong gerak lokomotor.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Kombinasi Gerak - Ayunan dan Lompatan',
    difficulty: 'Sedang',
    image: 'kombinasi_lompat',
    imageCaption: 'Gambar 7: Kombinasi ayunan lengan di tempat dan tolakan melompat ke depan',
    text: 'Perhatikan Gambar 7 di atas!\nSeorang atlet lompat melakukan persiapan dengan mengayunkan kedua lengan ke belakang sambil menekuk lutut di tempat (Fase 1), kemudian menolak kuat ke depan hingga tubuh melayang berpindah tempat sejauh 2 meter (Fase 2). Analisis kombinasi gerak dasar yang tepat adalah...',
    options: [
      { id: 'A', text: 'Fase 1 adalah gerak lokomotor, Fase 2 adalah gerak nonlokomotor.' },
      { id: 'B', text: 'Fase 1 adalah gerak nonlokomotor, Fase 2 adalah gerak lokomotor.' },
      { id: 'C', text: 'Kedua fase gerakan tersebut sepenuhnya merupakan gerak nonlokomotor.' },
      { id: 'D', text: 'Kedua fase gerakan tersebut sepenuhnya merupakan gerak lokomotor.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Fase 1 (mengayun lengan dan menekuk lutut di tempat) adalah gerak nonlokomotor karena tidak ada perpindahan posisi kaki. Fase 2 (menolak melompat ke depan) adalah gerak lokomotor karena tubuh berpindah sejauh 2 meter.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Pendinginan (Cooling Down)',
    difficulty: 'Mudah',
    text: 'Setelah selesai berolahraga, siswa melakukan tahap pendinginan (cooling down). Manakah gerakan di bawah ini yang merupakan contoh gerak nonlokomotor pada tahap pendinginan?',
    options: [
      { id: 'A', text: 'Lari sprint 50 meter menuju ruang ganti pakaian.' },
      { id: 'B', text: 'Merentangkan kedua lengan ke atas sambil menarik napas dalam-dalam di tempat.' },
      { id: 'C', text: 'Melompat-lompat melewati tali skipping keliling lapangan.' },
      { id: 'D', text: 'Bermain kejar-kejaran dengan teman sekelas.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Merentangkan lengan ke atas sambil mengatur napas secara statis di tempat tanpa berpindah posisi merupakan bentuk gerak nonlokomotor yang ideal untuk menurunkan denyut nadi pada fase pendinginan.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Pola Gerak dalam Permainan Tradisional',
    difficulty: 'Sedang',
    text: 'Siswa kelas VI SDN 3 Loloan Timur mempraktikkan permainan tradisional "Bentengan". Saat salah satu siswa keluar dari benteng untuk mengejar lawan dengan berlari zig-zag cepat ke berbagai sudut lapangan, gerakan yang dominan dilakukan siswa tersebut adalah...',
    options: [
      { id: 'A', text: 'Gerak lokomotor, karena bergerak aktif berpindah tempat mengejar lawan.' },
      { id: 'B', text: 'Gerak nonlokomotor, karena siswa hanya menjaga benteng sekolah.' },
      { id: 'C', text: 'Gerak manipulatif, karena menyentuh pohon sebagai tiang benteng.' },
      { id: 'D', text: 'Gerak pasif, karena tidak menggunakan peralatan olahraga modern.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berlari cepat dan mengubah arah langkah kaki mengejar lawan dalam permainan bentengan adalah contoh nyata dari gerak dasar lokomotor (berpindah tempat).',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Manfaat Fisiologis Peregangan Otot',
    difficulty: 'Sedang',
    text: 'Mengapa sebelum melakukan gerak lokomotor yang memerlukan kecepatan tinggi (seperti lari cepat dan lompat jauh), siswa sangat dianjurkan melakukan gerak nonlokomotor peregangan otot terlebih dahulu?',
    options: [
      { id: 'A', text: 'Agar tenaga siswa cepat habis sebelum pertandingan dimulai.' },
      { id: 'B', text: 'Untuk meningkatkan elastisitas otot dan persendian serta mencegah terjadinya kram atau cedera.' },
      { id: 'C', text: 'Agar siswa dapat langsung memenangkan perlombaan tanpa perlu berlari.' },
      { id: 'D', text: 'Untuk mendinginkan suhu tubuh secara drastis saat cuaca panas.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Peregangan otot (gerak nonlokomotor) sebelum aktivitas berat berfungsi meningkatkan sirkulasi darah ke otot, meningkatkan suhu jaringan otot, serta mempersiapkan kelenturan sendi guna mencegah risiko cedera dan kram.',
  },

  // =======================================================
  // --- BAGIAN 2: PILIHAN GANDA KOMPLEKS / PGK (3 SOAL) ---
  // =======================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Identifikasi Ragam Gerak Lokomotor',
    difficulty: 'Sedang',
    text: 'Pak Bagus memberikan kartu gambar aktivitas olahraga kepada siswa kelas VI. Manakah di antara aktivitas gerak jasmani di bawah ini yang TERMASUK ke dalam kelompok GERAK LOKOMOTOR? (Pilihlah seluruh opsi yang bernilai benar!)',
    options: [
      { id: 'A', text: 'Berlari cepat menempuh jarak 60 meter di lintasan lari.' },
      { id: 'B', text: 'Memutar persendian kedua pergelangan tangan di tempat.' },
      { id: 'C', text: 'Melompat katak ke depan melintasi garis batas matras.' },
      { id: 'D', text: 'Berguling ke depan (forward roll) di atas matras senam.' },
    ],
    correctAnswer: ['A', 'C', 'D'],
    explanation:
      '• Opsi A (berlari 60 m): Lokomotor (berpindah tempat).\n• Opsi B (memutar pergelangan tangan di tempat): Nonlokomotor (tidak berpindah tempat).\n• Opsi C (melompat katak ke depan): Lokomotor (berpindah tempat).\n• Opsi D (berguling ke depan di matras): Lokomotor (tubuh berpindah tempat dari ujung ke ujung matras).',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Identifikasi Ragam Gerak Nonlokomotor',
    difficulty: 'Sedang',
    text: 'Siswa diminta memilih gerakan yang tidak menyebabkan tubuh berpindah posisi dari tempat berdirinya. Manakah aktivitas di bawah ini yang TERMASUK ke dalam kelompok GERAK NONLOKOMOTOR? (Pilihlah seluruh opsi yang bernilai benar!)',
    options: [
      { id: 'A', text: 'Meliukkan badan ke samping kanan dan kiri saat melakukan senam.' },
      { id: 'B', text: 'Menekuk kedua lutut (gerakan squat) bertumpu di lantai tanpa melangkah.' },
      { id: 'C', text: 'Melangkah dan melompat menyundul bola ke udara.' },
      { id: 'D', text: 'Menolehkan kepala ke kanan dan ke kiri untuk meregangkan otot leher.' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '• Opsi A (meliukkan badan): Nonlokomotor (dilakukan di tempat).\n• Opsi B (gerakan squat di tempat): Nonlokomotor (lutut ditekuk tanpa melangkah).\n• Opsi C (melangkah dan melompat menyundul bola): Mengandung unsur lokomotor (melangkah dan berpindah).\n• Opsi D (menolehkan kepala di tempat): Nonlokomotor (peregangan otot leher di tempat).',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Kombinasi Gerak pada Cabang Olahraga Atletik',
    difficulty: 'Sedang',
    image: 'kombinasi_lompat',
    imageCaption: 'Gambar 8: Pola kombinasi ayunan lengan dan lompatan atletik',
    text: 'Perhatikan Gambar 8 di atas!\nDalam nomor lompat jauh atletik, seorang atlet menggabungkan berbagai macam pola gerak: berlari kencang pada lintasan awalan, mengayunkan lengan dan menekuk tungkai di udara, serta mendarat di bak pasir. Manakah pernyataan berikut yang BENAR mengenai kombinasi gerak tersebut? (Pilihlah seluruh opsi yang benar!)',
    options: [
      { id: 'A', text: 'Berlari kencang pada lintasan awalan merupakan penerapan gerak lokomotor.' },
      { id: 'B', text: 'Gerakan mengayunkan kedua lengan ke belakang dan menekuk lutut saat persiapan tolakan merupakan gerak nonlokomotor.' },
      { id: 'C', text: 'Tolakan kaki yang memindahkan tubuh melayang ke bak pasir merupakan gerak lokomotor.' },
      { id: 'D', text: 'Seluruh gerakan dalam lompat jauh dari awal hingga mendarat murni hanya terdiri dari gerak nonlokomotor saja.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '• Pernyataan A BENAR (lari awalan = gerak lokomotor).\n• Pernyataan B BENAR (ayunan lengan & tekukan tungkai di tempat sebelum menolak = gerak nonlokomotor).\n• Pernyataan C BENAR (tolakan melompat membawa tubuh ke bak pasir = gerak lokomotor).\n• Pernyataan D SALAH (lompat jauh merupakan kombinasi lokomotor dan nonlokomotor, bukan nonlokomotor murni).',
  },

  // ==============================================================
  // --- BAGIAN 3: PGK KATEGORI BENAR / SALAH (9 SOAL) ---
  // ==============================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Analisis Gerak Lari Zig-zag',
    difficulty: 'Sedang',
    image: 'lari_zigzag',
    imageCaption: 'Gambar 9: Analisis latihan lari berkelok melintasi kerucut (cone)',
    text: 'Perhatikan Gambar 9 mengenai latihan lari zig-zag melintasi kerucut (cone). Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut berdasarkan konsep gerak PJOK:',
    statements: [
      {
        id: 's1',
        text: 'Lari zig-zag merupakan contoh variasi gerak dasar lokomotor karena tubuh berpindah posisi dari garis start menuju garis finish.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Latihan lari zig-zag hanya melatih otot jari tangan tanpa melatih kelincahan dan koordinasi kaki.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Gerakan mengubah arah lari secara mendadak saat melewati rintangan sangat bergantung pada kelincahan tubuh siswa.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Lari zig-zag berpindah tempat = gerak lokomotor (BENAR).\n2. Lari zig-zag melatih kelincahan (agility) dan koordinasi kaki, bukan tangan (SALAH).\n3. Mengubah arah lari dengan cepat dan seimbang merupakan definisi kelincahan gerak (BENAR).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Konsep Gerak Berpindah Tempat & Di Tempat',
    difficulty: 'Mudah',
    text: 'Berikut disajikan beberapa situasi aktivitas gerak siswa saat jam pelajaran olahraga di SDN 3 Loloan Timur. Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Jalan santai mengelilingi lapangan upacara sekolah tergolong ke dalam gerak lokomotor.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Berdiri tegak dengan satu kaki selama 30 detik di tempat tergolong gerak lokomotor karena membutuhkan tenaga besar.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mendorong tembok dinding kelas dengan kedua tangan sambil telapak kaki tetap diam di lantai merupakan contoh gerak nonlokomotor.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Jalan santai mengelilingi lapangan berpindah tempat = gerak lokomotor (BENAR).\n2. Berdiri satu kaki di tempat tidak berpindah posisi = gerak nonlokomotor keseimbangan, bukan lokomotor (SALAH).\n3. Mendorong tembok di tempat tanpa melangkahkan kaki = gerak nonlokomotor (BENAR).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Analisis Gerak Melompati Rintangan',
    difficulty: 'Sedang',
    image: 'melompat_rintangan',
    imageCaption: 'Gambar 10: Rangkaian tahapan gerak melompati rintangan',
    text: 'Perhatikan Gambar 10 mengenai gerak melompati balok rintangan. Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Gerak melompat melewati rintangan dari titik tolak menuju titik pendaratan merupakan gerak lokomotor.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada saat tubuh melayang di udara, gerakan mengayunkan kedua lengan untuk menjaga keseimbangan merupakan gerak nonlokomotor.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pendaratan yang aman dilakukan dengan lutut kaku dan terkunci lurus agar tubuh tidak jatuh ke bawah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Melompat melintasi rintangan memindahkan tubuh = gerak lokomotor (BENAR).\n2. Ayunan lengan saat melayang di udara merupakan gerak anggota tubuh relatif tanpa tumpuan melangkah = gerak nonlokomotor (BENAR).\n3. Mendarat dengan lutut kaku berbahaya bagi sendi; pendaratan yang benar harus mengeper dengan lutut ditekuk (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Gerak Nonlokomotor & Kebugaran Jasmani',
    difficulty: 'Sedang',
    image: 'membungkuk_lentur',
    imageCaption: 'Gambar 11: Peregangan membungkuk mencium lutut di tempat',
    text: 'Dalam program kebugaran jasmani siswa kelas VI, siswa mempraktikkan gerakan peregangan statis seperti pada Gambar 11. Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Gerakan mencium lutut sambil duduk berselonjor di atas matras senam merupakan contoh gerak nonlokomotor.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gerak nonlokomotor peregangan otot bertujuan meningkatkan kelenturan sendi (fleksibilitas) siswa.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Peregangan otot saat pemanasan sebaiknya dilakukan dengan hentakan keras dan mendadak agar otot cepat panjang.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Duduk berselonjor dan mencium lutut di atas matras tidak berpindah tempat = gerak nonlokomotor (BENAR).\n2. Peregangan statis melatih kelenturan/fleksibilitas sendi dan otot (BENAR).\n3. Peregangan berhentak keras (balistik sembarangan) berisiko merobek serat otot; peregangan harus dilakukan perlahan dan ditahan (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Pola Gerak dalam Permainan Sepak Bola',
    difficulty: 'Sedang',
    text: 'Dalam sebuah pertandingan sepak bola mini antarkelas di SDN 3 Loloan Timur, pemain melakukan berbagai macam pola gerak. Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Pemain penyerang yang berlari kencang mendribel bola menuju gawang lawan menerapkan gerak dasar lokomotor.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penjaga gawang yang merentangkan kedua tangan dan meliukkan tubuh ke samping di tempat saat menunggu tendangan penalti menerapkan gerak nonlokomotor.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Berlari mengejar bola di lapangan terbuka merupakan contoh gerak nonlokomotor murni.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Berlari mendribel bola memindahkan tubuh di lapangan = gerak lokomotor (BENAR).\n2. Kiper meliuk dan merentangkan tangan di garis gawang tanpa melangkah = gerak nonlokomotor (BENAR).\n3. Berlari mengejar bola memindahkan tubuh dari satu titik ke titik lain, sehingga merupakan gerak lokomotor, bukan nonlokomotor (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Keseimbangan Statis dan Dinamis',
    difficulty: 'Sedang',
    image: 'pesawat_terbang',
    imageCaption: 'Gambar 12: Sikap kapal terbang menguji keseimbangan satu kaki di tempat',
    text: 'Keseimbangan tubuh manusia terbagi menjadi keseimbangan statis dan keseimbangan dinamis. Perhatikan Gambar 12 dan tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Gerakan sikap kapal terbang bertumpu pada satu kaki di tempat merupakan contoh latihan keseimbangan statis yang tergolong gerak nonlokomotor.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Berjalan jinjit di atas balok titian selebar 10 cm dari ujung ke ujung merupakan contoh keseimbangan dinamis yang tergolong gerak lokomotor.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Gerak nonlokomotor tidak membutuhkan kerja sama otot penopang dan keseimbangan sama sekali.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Sikap kapal terbang di tempat = keseimbangan statis & gerak nonlokomotor (BENAR).\n2. Berjalan di atas balok titian berpindah tempat = keseimbangan dinamis & gerak lokomotor (BENAR).\n3. Gerak nonlokomotor (seperti membungkuk, meliuk, berdiri satu kaki) sangat membutuhkan kekuatan otot penopang dan keseimbangan tubuh (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Analisis Shuttle Run & Kelincahan',
    difficulty: 'Sedang',
    image: 'shuttle_run',
    imageCaption: 'Gambar 13: Lintasan shuttle run memindahkan balok',
    text: 'Perhatikan Gambar 13 mengenai latihan lari bolak-balik (shuttle run). Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Lari bolak-balik memindahkan balok merupakan perpaduan gerak lokomotor (berlari melintasi jarak) dan nonlokomotor (membungkukkan badan saat memungut balok).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kemampuan mengerem langkah kaki dan berputar arah secara cepat pada garis batas lintasan melatih koordinasi dan kelincahan tubuh.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Aktivitas shuttle run dilakukan tanpa ada perpindahan posisi tubuh sedikit pun dari posisi awal berdiri.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Shuttle run menggabungkan lari (lokomotor) dan membungkuk/menekuk lutut memungut balok di tempat (nonlokomotor) (BENAR).\n2. Berputar arah dan mengubah kecepatan secara gesit adalah inti dari kelincahan gerak (BENAR).\n3. Shuttle run berpindah bolak-balik sejauh 10 meter berkali-kali, bukan diam di tempat (SALAH).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Senam Lantai & Pola Gerak Dominan',
    difficulty: 'Sedang',
    text: 'Senam lantai memiliki berbagai macam pola gerak dasar. Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Gerakan berguling ke depan (forward roll) di atas matras senam merupakan gerak lokomotor karena tubuh berpindah posisi sepanjang matras.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gerakan sikap lilin dengan mengangkat kedua kaki tegak lurus ke atas sambil menopang pinggang di atas matras merupakan gerak nonlokomotor.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Gerakan kayang bertumpu pada kedua tangan dan kedua kaki di tempat tanpa melangkah merupakan contoh gerak lokomotor.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Guling depan memindahkan seluruh tubuh di atas matras = gerak lokomotor (BENAR).\n2. Sikap lilin bertumpu di pundak dan tangan menopang pinggul di tempat = gerak nonlokomotor (BENAR).\n3. Gerakan kayang di tempat tanpa melangkah adalah gerak nonlokomotor (fleksibilitas punggung), bukan gerak lokomotor (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Manfaat Pola Gerak bagi Kesehatan & Kebugaran',
    difficulty: 'Sedang',
    text: 'Pola gerak dasar lokomotor dan nonlokomotor memiliki peranan penting bagi pertumbuhan fisik siswa kelas VI Sekolah Dasar. Tentukan nilai Benar atau Salah untuk masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Rutin mempraktikkan gerak lokomotor seperti berlari dan melompat membantu memperkuat kepadatan tulang dan meningkatkan kapasitas daya tahan jantung-paru.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Melatih gerak nonlokomotor seperti peregangan dan meliukkan tubuh membantu menjaga kelenturan persendian dan memperbaiki postur tubuh agar tidak bungkuk.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang aktif melakukan gerak jasmani sehari-hari akan memiliki tingkat kebugaran yang lebih rendah dibandingkan siswa yang banyak berdiam diri menonton gawai.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Aktivitas lokomotor dinamis memacu kerja kardiorespiratori dan mineralisasi tulang (BENAR).\n2. Aktivitas nonlokomotor menjaga elastisitas otot dan postur tulang belakang yang sehat (BENAR).\n3. Siswa yang aktif bergerak memiliki kebugaran jasmani yang jauh lebih tinggi dan tubuh yang lebih sehat dibandingkan yang pasif (SALAH).',
  },
];
