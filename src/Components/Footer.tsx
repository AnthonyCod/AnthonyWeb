import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-12 px-4 font-sans tracking-wide" id="part4">
      <div className="text-center">
        <h6 className="text-lg text-gray-300">More about me on my social media:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 mt-8 mb-12">
          {/* LinkedIn Icon */}
          <li>
            <a
              href="https://www.linkedin.com/in/luis-anthony-atiro-vargas-98b608289/?locale=en_US"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                viewBox="0 0 112.196 112.196"
              >
                <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
                <path
                  fill="#fff"
                  d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"
                />
              </svg>
            </a>
          </li>

          {/* Instagram Icon */}
          <li>
            <a
              href="https://www.instagram.com/anthonyatiro/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                viewBox="0 0 152 152"
              >
                <defs>
                  <linearGradient id="instagramGradient" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fae100" />
                    <stop offset=".15" stopColor="#fcb720" />
                    <stop offset=".3" stopColor="#ff7950" />
                    <stop offset=".5" stopColor="#ff1c74" />
                    <stop offset="1" stopColor="#6c1cd1" />
                  </linearGradient>
                </defs>
                <rect width="152" height="152" fill="url(#instagramGradient)" rx="76" />
                <path
                  fill="#fff"
                  d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z"
                />
                <path
                  fill="#fff"
                  d="M76 55.33A20.67 20.67 0 1 0 96.67 76 20.68 20.68 0 0 0 76 55.33zm0 34.23A13.56 13.56 0 1 1 89.56 76 13.57 13.57 0 0 1 76 89.56zm25.43-35.18a4.88 4.88 0 1 1-4.85-4.92 4.88 4.88 0 0 1 4.85 4.92z"
                />
              </svg>
            </a>
          </li>
        </ul>

        <p className="text-base text-gray-300">© 2024 Anthony Atiro. All rights reserved.</p>
        <p className="text-base text-gray-300">englishlife61@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
