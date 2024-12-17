/**
 * Fungsi untuk menambahkan animasi lingkaran di dalam teks.
 * Target animasi adalah elemen dengan kelas `.professionals-text`.
 */
export const initCircleAnimation = () => {
  const professionalsText = document.querySelector('.professionals-text') as HTMLElement | null;

  if (professionalsText) {
    // Membuat elemen lingkaran
    const circle = document.createElement('div');
    circle.className = 'circle-animation';


    // Menambahkan elemen ke dalam target
    professionalsText.appendChild(circle);


    // Menambahkan style animasi secara dinamis
    const style = document.createElement('style');
    style.innerHTML = `
      .professionals-text {
        position: relative;
        display: inline-block;
        text-align: center;
      }

      .circle-animation {
        
        position: absolute;
        top: 60%;
        left: 51%;
        transform: translate(-50%, -50%);
        width: 108%;
        height: 190%;
        border: 2px solid rgb(244,234,197);
        border-radius: 50%;
        box-sizing: border-box;
        animation: circleFade 10s infinite;
        pointer-events: none;
      }

      .circle-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(244,234,197);
        font-size: 1rem;
        font-weight: bold;
        pointer-events: none;
        text-align: center;
      }

      @keyframes circleFade {
        0% {
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 0;
        }
        10% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        90% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
};
