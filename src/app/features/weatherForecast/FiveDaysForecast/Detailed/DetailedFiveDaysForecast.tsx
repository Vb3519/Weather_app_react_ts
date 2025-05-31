import { FaWind } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { MdVisibility } from 'react-icons/md';

import { FaCaretDown } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa';

// --------------------------- Прогноз погоды на 5 дней (детализация): ---------------------------
const DetailedFiveDaysForecast = () => {
  return (
    <section className="p-2 text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <h2 className="pb-2 font-semibold text-xl text-center border-b-2 border-b-blue-800/20">
        Прогноз погоды на 5 дней:
      </h2>
      <div className="flex items-center gap-2 overflow-x-auto">
        <div className="flex items-center gap-2">
          <ul className="my-2 w-full flex gap-2 text-nowrap">
            <li className="p-2 cursor-pointer rounded-sm bg-white/15 [box-shadow:0_4px_10px_rgba(0,0,0,0.15)] transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              Пн, 19 Май
            </li>
            <li className="p-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              Вт, 20 Май
            </li>
            <li className="p-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              Ср, 21 Май
            </li>
            <li className="p-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              Чт, 22 Май
            </li>
            <li className="p-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
              Пт, 23 Май
            </li>
          </ul>
          <div className="cursor-pointer">
            <FaCaretUp />
          </div>
        </div>
      </div>

      {/* --------------------------- Прогноз погоды на 5 дней (детали погоды): --------------------------- */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt="weather 5-day forecast state"
            ></img>
          </div>
          <span className="font-semibold text-[16px]">небольшой дождь</span>
        </div>

        <ul className="flex flex-col gap-1 items-center">
          <li>Максимальная темп: 12°С</li>
          <li>Минимальная темп: 12°С</li>
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
      </div>
    </section>
  );
};

export default DetailedFiveDaysForecast;
