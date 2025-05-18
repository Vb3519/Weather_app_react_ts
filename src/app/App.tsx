import { MdOutlineSegment } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { FaWind } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { MdVisibility } from 'react-icons/md';

const App = () => {
  return (
    <div className="h-screen w-full p-2 flex flex-col gap-4 items-center justify-center bg-gradient-135">
      {/* --------------------------- HEADER: --------------------------- */}
      {/* --------------------------- HEADER: --------------------------- */}
      {/* --------------------------- HEADER: --------------------------- */}
      <header className="w-full font-[inter] flex justify-between items-center gap-4">
        <div className="p-2 text-[whitesmoke] bg-white/20 rounded-sm cursor-pointer">
          <MdOutlineSegment className="text-2xl" />
        </div>

        <form className="w-full p-2 flex gap-2 justify-center items-center bg-[whitesmoke] rounded-sm">
          <FaMagnifyingGlass className="text-gray-500 text-xl cursor-pointer" />
          <input
            className="outline-none w-full"
            placeholder="Название города..."
            type="text"
          />
        </form>
      </header>

      {/* --------------------------- MAIN: --------------------------- */}
      {/* --------------------------- MAIN: --------------------------- */}
      {/* --------------------------- MAIN: --------------------------- */}
      <main className="mb-auto w-full font-[inter] flex flex-col gap-4">
        <section className="p-2 text-[#e0e0e0] text-shadow-sm flex flex-col gap-1 bg-white/20 rounded-sm">
          <h2 className="font-semibold text-xl text-center">Санкт-Петербург</h2>
          <p>
            <span>18 мая 2025, </span>
            <span>Воскресенье</span>
          </p>
          <p className="font-semibold text-lg">15.35°С</p>
          <p>Ощущается как 11.15°С</p>

          <ul className="flex gap-2 items-center justify-start">
            <li>
              <img
                src="http://openweathermap.org/img/wn/04d.png"
                alt="weather state"
              ></img>
            </li>
            <li>пасмурно</li>
          </ul>

          <ul className="pt-3 flex gap-2 text-[#e0e0e0] border-t-2 border-t-blue-200/20">
            <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
              <div className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer">
                <FaWind className="text-xl text-[whitesmoke]" />
              </div>
              <span className="text-sm">3.91 м/с</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
              <div className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer">
                <FaDroplet className="text-xl text-[whitesmoke]" />
              </div>
              <span className="text-sm">73%</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
              <div className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer">
                <MdVisibility className="text-xl text-[whitesmoke]" />
              </div>
              <span className="text-sm">10 км</span>
            </li>
          </ul>
        </section>

        <section className="p-2 text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
          <ul className="flex gap-1 items-center justify-between">
            <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              <p>18:00</p>
              <img
                src="http://openweathermap.org/img/wn/04d.png"
                alt="weather state"
              ></img>
              <p>11.15°С</p>
            </li>
            <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              <p>21:00</p>
              <img
                src="http://openweathermap.org/img/wn/04d.png"
                alt="weather state"
              ></img>
              <p>11.15°С</p>
            </li>
            <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              <p>00:00</p>
              <img
                src="http://openweathermap.org/img/wn/04d.png"
                alt="weather state"
              ></img>
              <p>11.15°С</p>
            </li>
            <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              <p>03:00</p>
              <img
                src="http://openweathermap.org/img/wn/04d.png"
                alt="weather state"
              ></img>
              <p>11.15°С</p>
            </li>
            <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              <p>06:00</p>
              <img
                src="http://openweathermap.org/img/wn/04d.png"
                alt="weather state"
              ></img>
              <p>11.15°С</p>
            </li>
          </ul>
        </section>
      </main>

      {/* --------------------------- FOOTER: --------------------------- */}
      {/* --------------------------- FOOTER: --------------------------- */}
      {/* --------------------------- FOOTER: --------------------------- */}
      <footer></footer>
    </div>
  );
};

export default App;
