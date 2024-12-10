import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Fungsi untuk menginisialisasi animasi ScrollTrigger pada elemen dengan kelas `scroll-row`.
 * Setiap elemen dengan kelas `scroll-row` akan di-animate ketika masuk ke viewport.
 */
export const initScrollTrigger = (): void => {
  const scrollRows = document.querySelectorAll('.scroll-row');

  scrollRows.forEach((row) => {
    gsap.fromTo(
      row,
      { opacity: 0, y: 50 }, // Nilai awal
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: row, // Elemen yang dipantau adalah masing-masing elemen .scroll-row
          start: 'top 80%', // Animasi dimulai ketika elemen berada di 80% viewport bawah
          end: 'bottom 20%', // Animasi selesai ketika elemen keluar viewport
          toggleActions: 'play none none none',
        },
      }
    );
  });
};

/**
 * Fungsi untuk membersihkan semua ScrollTrigger yang terdaftar.
 * Berguna untuk mencegah konflik saat elemen diperbarui secara dinamis.
 */
export const clearScrollTriggers = (): void => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
