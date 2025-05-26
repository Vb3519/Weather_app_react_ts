import { FaWind } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { MdVisibility } from 'react-icons/md';

// --------------------------- Текущая погода: ---------------------------
const CurrentWeather = () => {
  return (
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
  );
};
export default CurrentWeather;
