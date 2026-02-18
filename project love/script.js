// ==========================================
// 1. PENGATURAN OVERLAY & MUSIK OTOMATIS
// ==========================================
const overlay = document.getElementById('overlay');
const entryBtn = document.getElementById('entryBtn');
const audio = document.getElementById('myAudio');
const musicBtn = document.getElementById('musicBtn');

// Fungsi saat tombol "Buka Pesan" di klik
entryBtn.addEventListener('click', () => {
    // Menghilangkan layar merah pembuka
    overlay.classList.add('hidden');
    
    // Memutar musik (Berhasil karena sudah ada interaksi klik)
    audio.play().catch(error => {
        console.log("Autoplay diblokir browser, musik harus diputar manual.");
    });
    
    // Mengubah teks tombol musik di pojok bawah
    musicBtn.innerHTML = "<span>⏸️ Jeda Musik</span>";
});

// ==========================================
// 2. KONTROL MUSIK MANUAL (TOMBOL DI POJOK)
// ==========================================
musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerHTML = "<span>⏸️ Jeda Musik</span>";
    } else {
        audio.pause();
        musicBtn.innerHTML = "<span>🎵 Putar Musik</span>";
    }
});

// ==========================================
// 3. EFEK BACKGROUND HATI MELAYANG
// ==========================================
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Menggunakan simbol hati
    heart.innerHTML = '❤️';
    
    // Posisi horizontal acak (0 sampai 100% lebar layar)
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Ukuran hati acak (biar variatif)
    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;
    
    // Kecepatan terbang acak (antara 3 sampai 6 detik)
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    // Transparansi acak
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    
    document.getElementById('bgHearts').appendChild(heart);
    
    // Hapus elemen hati setelah animasi selesai agar tidak memberatkan browser
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Jalankan fungsi buat hati setiap 300 milidetik
setInterval(createHeart, 300);