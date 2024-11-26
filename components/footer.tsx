import React from 'react';

const Footer = () => {
  return (
    <footer className="relative pt-8 pb-2 bg-[rgb(34,139,34)]">
      {/* Wave Background */}
      <div className="absolute top-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[50px] fill-[rgb(100,200,100)]"
        >
          <path d="M0,12 C300,30 600,30 1200,120 L1200, 0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto text-white text-center mt-[50px]">
        {/* Nama dan Slogan */}
        <div className="text-xl font-bold mb-3">PT Nature's Exquisite Nusantara</div>
        <p className="text-sm italic mb-4">"Where Nature Whispers Flavor"</p>

        {/* Navigasi */}
        <ul className="flex justify-center space-x-6 text-sm mb-4">
          <li>
            <a
              href="/about"
              className="hover:text-gray-400 transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="hover:text-gray-400 transition-colors"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/sustainability"
              className="hover:text-gray-400 transition-colors"
            >
              Sustainability
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hak Cipta */}
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} PT Nature's Exquisite Nusantara. All rights reserved.
        </p>

        {/* Ikon Media Sosial */}
        <div className="flex justify-center space-x-4">
          <a href="https://t.me/Gregory2005_n">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="https://github.com/mrzero1945">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <path
                d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
