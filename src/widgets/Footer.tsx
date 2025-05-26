import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="p-2 w-full flex flex-col gap-2 text-[#e0e0e0] text-shadow-sm footer-bg-gradient">
      <h3 className="mb-2 font-semibold text-xl text-[#e0e0e0]">Weather App</h3>
      <div className="flex flex-col gap-2">
        <ul className="flex gap-2">
          <li className="p-2 rounded-[50%] bg-green-700 cursor-pointer">
            <FaWhatsapp className="text-2xl" />
          </li>
          <li className="p-2 rounded-[50%] bg-blue-600 cursor-pointer">
            <FaTelegramPlane className="text-2xl" />
          </li>
        </ul>
        <div className="flex gap-2 items-center justify-start">
          <MdOutlineEmail className="text-2xl" />
          <span className="font-semibold">vb415@bk.ru</span>
        </div>
      </div>
      <span className="font-semibold text-blue-200/20">
        by Viktor Bordyugov 2025
      </span>
    </footer>
  );
};

export default Footer;
