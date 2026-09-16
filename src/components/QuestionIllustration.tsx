import React from 'react';
import { Sparkles, Info } from 'lucide-react';

interface QuestionIllustrationProps {
  imageKey?: string;
  caption?: string;
}

export const QuestionIllustration: React.FC<QuestionIllustrationProps> = ({
  imageKey,
  caption,
}) => {
  if (!imageKey) return null;

  // Cek jika gambar adalah URL eksternal biasa
  if (imageKey.startsWith('http://') || imageKey.startsWith('https://') || imageKey.startsWith('data:')) {
    return (
      <div className="my-4 p-3 bg-slate-50 rounded-2xl border border-slate-200">
        <div className="overflow-hidden rounded-xl bg-white flex items-center justify-center">
          <img
            src={imageKey}
            alt={caption || 'Ilustrasi Gerak PJOK'}
            referrerPolicy="no-referrer"
            className="max-h-64 object-contain rounded-lg"
          />
        </div>
        {caption && (
          <p className="mt-2 text-center text-xs font-semibold text-slate-600 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{caption}</span>
          </p>
        )}
      </div>
    );
  }

  // Render Ilustrasi Vektor Edukasi Khusus Gerak Dasar PJOK
  return (
    <div className="my-5 p-3.5 sm:p-4 bg-gradient-to-b from-blue-50/70 via-slate-50 to-emerald-50/50 rounded-2xl border border-blue-200/80 shadow-xs">
      <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-2xs overflow-hidden">
        {/* ILUSTRASI 1: LARI ZIG-ZAG (LOKOMOTOR) */}
        {imageKey === 'lari_zigzag' && (
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 520 200"
              className="w-full max-w-lg h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="fieldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ecfdf5" />
                  <stop offset="100%" stopColor="#d1fae5" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
                </marker>
              </defs>

              {/* Lapangan */}
              <rect x="10" y="15" width="500" height="170" rx="14" fill="url(#fieldGrad)" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />

              {/* Garis Start & Finish */}
              <line x1="45" y1="30" x2="45" y2="170" stroke="#059669" strokeWidth="3" />
              <text x="45" y="26" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="bold">START</text>

              <line x1="475" y1="30" x2="475" y2="170" stroke="#dc2626" strokeWidth="3" />
              <text x="475" y="26" textAnchor="middle" fill="#b91c1c" fontSize="11" fontWeight="bold">FINISH</text>

              {/* Kerucut / Cones */}
              {[120, 200, 280, 360, 420].map((cx, i) => {
                const cy = i % 2 === 0 ? 60 : 140;
                return (
                  <g key={i} transform={`translate(${cx}, ${cy})`}>
                    <polygon points="0,15 14,-16 -14,-16" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
                    <line x1="-9" y1="0" x2="9" y2="0" stroke="#ffffff" strokeWidth="3" />
                    <ellipse cx="0" cy="15" rx="16" ry="5" fill="#c2410c" />
                    <text x="0" y="32" textAnchor="middle" fill="#7c2d12" fontSize="9" fontWeight="bold">Cone {i + 1}</text>
                  </g>
                );
              })}

              {/* Lintasan Zig-Zag Berkelok */}
              <path
                d="M 45 100 Q 80 100 120 120 T 200 80 T 280 120 T 360 80 T 420 120 T 475 100"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                markerEnd="url(#arrow)"
              />

              {/* Pelari Ilustrasi (Siswa SD) */}
              <g transform="translate(200, 40)">
                <circle cx="0" cy="0" r="11" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" /> {/* Kepala */}
                <ellipse cx="0" cy="18" rx="8" ry="14" fill="#dc2626" /> {/* Baju Olahraga Merah */}
                <path d="M -6 14 L -16 6 M 6 16 L 16 10" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" /> {/* Lengan */}
                <path d="M -4 30 L -10 46 L -4 48 M 4 30 L 12 44 L 18 43" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" /> {/* Celana & Kaki Berlari */}
                <ellipse cx="-4" cy="48" rx="4" ry="2" fill="#0284c7" />
                <ellipse cx="18" cy="43" rx="4" ry="2" fill="#0284c7" />
                <text x="0" y="-14" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="bold">Berlari Cepat</text>
              </g>

              {/* Keterangan Arah Gerak */}
              <text x="260" y="180" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
                Arah Lari Zig-zag (Berpindah Tempat = Gerak Lokomotor)
              </text>
            </svg>
          </div>
        )}

        {/* ILUSTRASI 2: MELOMPAT RINTANGAN (LOKOMOTOR) */}
        {imageKey === 'melompat_rintangan' && (
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 520 210"
              className="w-full max-w-lg h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker id="jumpArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
                </marker>
              </defs>

              {/* Garis Tanah / Matras */}
              <rect x="15" y="160" width="490" height="24" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
              <line x1="20" y1="160" x2="500" y2="160" stroke="#64748b" strokeWidth="3" />

              {/* Rintangan Balok / Gawang Mini */}
              <rect x="235" y="105" width="50" height="55" rx="4" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
              <rect x="245" y="115" width="30" height="35" rx="2" fill="#fbbf24" />
              <text x="260" y="145" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Rintangan</text>

              {/* Busur Lintasan Lompatan */}
              <path
                d="M 90 160 Q 260 20 420 160"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                markerEnd="url(#jumpArrow)"
              />

              {/* Fase 1: Tolakan Satu Kaki (Start Take-off) */}
              <g transform="translate(90, 110)">
                <circle cx="0" cy="0" r="10" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                <path d="M 0 10 L 4 28" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                <path d="M 4 28 L 6 48 L 10 50" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <path d="M 4 28 L -10 40 L -6 48" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <text x="0" y="62" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold">1. Tolakan 1 Kaki</text>
              </g>

              {/* Fase 2: Melayang di Udara */}
              <g transform="translate(260, 48)">
                <circle cx="0" cy="0" r="10" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                <path d="M 0 10 L 6 24" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                <path d="M 6 24 L 18 18 L 22 28" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <path d="M 6 24 L -6 32 L -4 40" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <path d="M 2 14 L 16 6 M 0 14 L -14 8" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <text x="0" y="-12" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="bold">2. Melayang (Lutut Ditekuk)</text>
              </g>

              {/* Fase 3: Mendarat Dua Kaki Mengeper */}
              <g transform="translate(420, 115)">
                <circle cx="0" cy="0" r="10" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                <path d="M 0 10 L 0 26" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                <path d="M 0 26 L 8 36 L 6 45" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <path d="M 0 26 L -8 36 L -6 45" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <path d="M 0 15 L 14 18 M 0 15 L -14 18" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <text x="0" y="58" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold">3. Mendarat Mengeper</text>
              </g>

              <text x="260" y="198" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">
                Rangkaian Gerak Melompati Rintangan (Gerak Lokomotor Dominan)
              </text>
            </svg>
          </div>
        )}

        {/* ILUSTRASI 3: MEMBUNGKUKKAN BADAN (NONLOKOMOTOR) */}
        {imageKey === 'membungkuk_lentur' && (
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 460 210"
              className="w-full max-w-md h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Garis Dasar Lantai */}
              <line x1="20" y1="180" x2="440" y2="180" stroke="#64748b" strokeWidth="3" />
              <rect x="20" y="180" width="420" height="15" fill="#f1f5f9" />

              {/* Posisi A: Berdiri Tegak di Tempat */}
              <g transform="translate(130, 45)">
                <circle cx="0" cy="0" r="12" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                <line x1="0" y1="12" x2="0" y2="70" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
                <line x1="-8" y1="25" x2="-8" y2="65" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <line x1="8" y1="25" x2="8" y2="65" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <line x1="-5" y1="70" x2="-5" y2="135" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                <line x1="5" y1="70" x2="5" y2="135" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                <ellipse cx="-5" cy="135" rx="6" ry="3" fill="#0284c7" />
                <ellipse cx="5" cy="135" rx="6" ry="3" fill="#0284c7" />
                <text x="0" y="-12" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Posisi Awal: Berdiri Tegak</text>
              </g>

              {/* Panah Lengkung Gerakan Membungkuk */}
              <path
                d="M 180 80 Q 230 40 270 90"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
                strokeDasharray="4 3"
              />
              <polygon points="270,95 276,82 264,86" fill="#2563eb" />
              <text x="230" y="52" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="bold">Gerak Membungkuk</text>

              {/* Posisi B: Membungkuk Menyentuh Kaki di Tempat */}
              <g transform="translate(320, 105)">
                <line x1="0" y1="0" x2="0" y2="75" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" /> {/* Kaki Lurus */}
                <ellipse cx="-2" cy="75" rx="7" ry="3" fill="#0284c7" />
                {/* Torso Menekuk ke Bawah */}
                <path d="M 0 0 Q -25 -2 -30 20 L -30 45" fill="none" stroke="#dc2626" strokeWidth="7" strokeLinecap="round" />
                <circle cx="-32" cy="55" r="11" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                {/* Lengan Menjangkau Ujung Kaki */}
                <line x1="-22" y1="18" x2="-6" y2="70" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <text x="0" y="-18" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">Posisi Akhir: Sentuh Ujung Kaki</text>
              </g>

              {/* Penanda Telapak Kaki Tidak Berpindah Tempat */}
              <rect x="300" y="172" width="40" height="10" rx="3" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
              <text x="320" y="196" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">
                ✓ Telapak Kaki Tetap di Tempat (Nonlokomotor)
              </text>
            </svg>
          </div>
        )}

        {/* ILUSTRASI 4: MELIUK DAN MEMUTAR PINGGANG (NONLOKOMOTOR) */}
        {imageKey === 'meliuk_badan' && (
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 460 210"
              className="w-full max-w-md h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="20" y1="180" x2="440" y2="180" stroke="#64748b" strokeWidth="3" />

              {/* Gerakan Meliuk ke Samping */}
              <g transform="translate(140, 50)">
                <circle cx="12" cy="0" r="11" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                {/* Badan melengkung ke kanan */}
                <path d="M 0 70 Q 2 35 12 12" fill="none" stroke="#2563eb" strokeWidth="7" strokeLinecap="round" />
                {/* Lengan meliuk di atas kepala */}
                <path d="M 12 18 Q 30 -5 28 -18" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="-5" y1="70" x2="-8" y2="130" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                <line x1="5" y1="70" x2="8" y2="130" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                <text x="0" y="-24" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Meliukkan Tubuh ke Samping</text>
              </g>

              {/* Gerakan Memutar Torso / Pinggang */}
              <g transform="translate(320, 50)">
                <circle cx="0" cy="0" r="11" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                <line x1="0" y1="12" x2="0" y2="70" stroke="#059669" strokeWidth="7" strokeLinecap="round" />
                <line x1="-5" y1="70" x2="-8" y2="130" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                <line x1="5" y1="70" x2="8" y2="130" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                {/* Tangan direntangkan memutar */}
                <path d="M -25 28 Q 0 34 25 28" fill="none" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
                {/* Panah putaran torso */}
                <path d="M -28 42 Q 0 54 28 42" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 2" />
                <polygon points="28,42 22,36 22,46" fill="#f59e0b" />
                <text x="0" y="-14" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">Memutar Pinggang di Tempat</text>
              </g>

              <text x="230" y="196" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">
                Gerakan Meliuk & Memutar Tanpa Berpindah Kaki (Gerak Nonlokomotor)
              </text>
            </svg>
          </div>
        )}

        {/* ILUSTRASI 5: SIKAP KAPAL TERBANG (NONLOKOMOTOR KESEIMBANGAN) */}
        {imageKey === 'pesawat_terbang' && (
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 460 210"
              className="w-full max-w-md h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="20" y1="180" x2="440" y2="180" stroke="#64748b" strokeWidth="3" />

              <g transform="translate(200, 75)">
                {/* Kaki Tumpuan Tunggal Berdiri Kokoh */}
                <line x1="0" y1="20" x2="0" y2="105" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
                <ellipse cx="0" cy="105" rx="8" ry="3" fill="#0284c7" />

                {/* Tubuh Mendatar Horizontal */}
                <line x1="-40" y1="20" x2="40" y2="20" stroke="#dc2626" strokeWidth="7" strokeLinecap="round" />

                {/* Kaki Bebas Lurus ke Belakang */}
                <line x1="-40" y1="20" x2="-110" y2="18" stroke="#1e293b" strokeWidth="4.5" strokeLinecap="round" />

                {/* Kepala Tegak Melihat ke Depan */}
                <circle cx="52" cy="18" r="12" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />

                {/* Sayap / Rentangan Kedua Tangan ke Samping */}
                <path d="M 0 20 L -18 -20 M 0 20 L 18 55" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />

                {/* Garis Keseimbangan Statis */}
                <line x1="-120" y1="20" x2="70" y2="20" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="-35" y="-6" fill="#047857" fontSize="9" fontWeight="bold">Garis Sejajar Lantai</text>
              </g>

              <text x="230" y="198" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">
                Sikap Kapal Terbang: Keseimbangan Statis di Tempat (Gerak Nonlokomotor)
              </text>
            </svg>
          </div>
        )}

        {/* ILUSTRASI 6: LARI BOLAK-BALIK SHUTTLE RUN (LOKOMOTOR) */}
        {imageKey === 'shuttle_run' && (
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 500 190"
              className="w-full max-w-lg h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Garis Lintasan */}
              <rect x="20" y="20" width="460" height="140" rx="12" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />

              {/* Titik A dan Titik B */}
              <circle cx="70" cy="90" r="16" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
              <text x="70" y="94" textAnchor="middle" fill="#1d4ed8" fontSize="11" fontWeight="bold">A</text>
              <rect x="58" y="115" width="24" height="16" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
              <text x="70" y="142" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold">Balok 1</text>

              <circle cx="430" cy="90" r="16" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="430" y="94" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">B</text>
              <rect x="418" y="115" width="24" height="16" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
              <text x="430" y="142" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold">Balok 2</text>

              {/* Panah Lari Bolak Balik */}
              <path d="M 95 65 L 405 65" stroke="#2563eb" strokeWidth="3" strokeDasharray="5 3" />
              <polygon points="405,65 395,60 395,70" fill="#2563eb" />
              <text x="250" y="55" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">Lari Cepat ke Titik B (Lokomotor) →</text>

              <path d="M 405 115 L 95 115" stroke="#dc2626" strokeWidth="3" strokeDasharray="5 3" />
              <polygon points="95,115 105,110 105,120" fill="#dc2626" />
              <text x="250" y="132" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">← Balik Cepat Bawa Balok ke Titik A</text>

              {/* Jarak */}
              <text x="250" y="94" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">
                Jarak Tempuh: 10 Meter (Kelincahan & Kecepatan)
              </text>
            </svg>
          </div>
        )}

        {/* ILUSTRASI 7: KOMBINASI AYUNAN LENGAN & LOMPAT (NONLOKOMOTOR + LOKOMOTOR) */}
        {imageKey === 'kombinasi_lompat' && (
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 500 200"
              className="w-full max-w-lg h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="20" y1="165" x2="480" y2="165" stroke="#64748b" strokeWidth="3" />

              {/* Fase 1: Ayunan Lengan di Tempat (Nonlokomotor) */}
              <g transform="translate(110, 65)">
                <circle cx="0" cy="0" r="11" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                <line x1="0" y1="11" x2="-4" y2="40" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                <path d="M -4 40 L 4 65 L 12 100" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M -4 40 L -12 65 L -4 100" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
                {/* Lengan mengayun ke belakang */}
                <path d="M -2 18 L -24 35" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <path d="M -24 35 Q -32 15 -18 8" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                <polygon points="-18,8 -24,4 -24,14" fill="#f59e0b" />
                <text x="0" y="-14" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">Fase 1: Ayun Lengan & Tekuk Lutut</text>
                <text x="0" y="116" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold">(Nonlokomotor di Tempat)</text>
              </g>

              {/* Panah Transisi Tolakan */}
              <path d="M 180 110 Q 230 40 280 80" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="4 3" />
              <polygon points="280,80 274,68 268,76" fill="#2563eb" />
              <text x="230" y="48" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="bold">Tolakan Melompat</text>

              {/* Fase 2: Melayang Berpindah Tempat (Lokomotor) */}
              <g transform="translate(370, 50)">
                <circle cx="0" cy="0" r="11" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5" />
                <line x1="0" y1="11" x2="8" y2="35" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" />
                <path d="M 8 35 L 20 30 L 26 48" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 8 35 L -8 45 L -4 60" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 4 18 L 22 10 M 0 18 L -16 12" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                <text x="0" y="-14" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="bold">Fase 2: Melompat Melayang ke Depan</text>
                <text x="0" y="130" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">(Lokomotor Berpindah Tempat)</text>
              </g>
            </svg>
          </div>
        )}
      </div>

      {caption && (
        <div className="mt-2.5 flex items-center justify-between text-xs text-slate-700 px-1">
          <div className="flex items-center gap-1.5 font-bold text-blue-900">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{caption}</span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            Materi PJOK Kelas 6
          </span>
        </div>
      )}
    </div>
  );
};
