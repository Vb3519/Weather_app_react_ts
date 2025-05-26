import { FaCaretDown } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa';

// --------------------------- Прогноз погоды на 5 дней (общий): ---------------------------
const GeneralFiveDaysForecast = () => {
  return (
    <section className="p-2 text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <h2 className="pb-2 font-semibold text-xl text-center border-b-2 border-b-blue-800/20">
        Прогноз погоды на 5 дней:
      </h2>
      <ul className="mt-2 flex flex-col gap-2">
        <li className="px-2 flex items-center gap-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <span>Пн</span>
          <div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt="weather 5-day forecast state"
            ></img>
          </div>
          <span>12°С</span>
          <span className="ml-auto text-center">Небольшой дождь</span>
          <div>
            <FaCaretDown />
          </div>
        </li>
        <li className="px-2 flex items-center gap-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <span>Вт</span>
          <div>
            <img
              src="http://openweathermap.org/img/wn/02d.png"
              alt="weather 5-day forecast state"
            ></img>
          </div>
          <span>12°С</span>
          <span className="ml-auto text-center">Небольшая облачность</span>
          <div>
            <FaCaretDown />
          </div>
        </li>
        <li className="px-2 flex items-center gap-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <span>Ср</span>
          <div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt="weather 5-day forecast state"
            ></img>
          </div>
          <span>12°С</span>
          <span className="ml-auto text-center">Небольшой дождь</span>
          <div>
            <FaCaretDown />
          </div>
        </li>
        <li className="px-2 flex items-center gap-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <span>Чт</span>
          <div>
            <img
              src="http://openweathermap.org/img/wn/02d.png"
              alt="weather 5-day forecast state"
            ></img>
          </div>
          <span>12°С</span>
          <span className="ml-auto text-center">Небольшая облачность</span>
          <div>
            <FaCaretDown />
          </div>
        </li>
        <li className="px-2 flex items-center gap-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <span>Пт</span>
          <div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt="weather 5-day forecast state"
            ></img>
          </div>
          <span>12°С</span>
          <span className="ml-auto text-center">Небольшой дождь</span>
          <div>
            <FaCaretDown />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default GeneralFiveDaysForecast;
