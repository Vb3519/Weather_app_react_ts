import { FaRegQuestionCircle } from 'react-icons/fa';

const WeatherQueryHistory = () => {
  return (
    <div className="p-2 absolute w-full h-full flex flex-col gap-2 items-center justify-center text-[#e0e0e0] text-shadow-sm z-10 bg-black/80">
      <h2 className="font-semibold text-xl text-center">История запросов:</h2>
      <ul className="w-full grid grid-cols-2 gap-2 items-center justify-center">
        <li className="h-full min-h-32 p-2 flex flex-col gap-2 items-center justify-center rounded-sm bg-[#20785f] cursor-pointer">
          <h3 className="text-center">Название города</h3>
          <img
            src={`http://openweathermap.org/img/wn/02d.png`}
            alt="weather state"
          ></img>
          <p>15°С</p>
        </li>

        <li className="h-full min-h-32 p-2 flex flex-col gap-2 items-center justify-center rounded-sm bg-[#20785f] cursor-pointer">
          <h3 className="text-center">Название города</h3>
          <img
            src={`http://openweathermap.org/img/wn/02d.png`}
            alt="weather state"
          ></img>
          <p>15°С</p>
        </li>

        <li className="h-full min-h-32 p-2 flex flex-col gap-2 items-center justify-center rounded-sm bg-[#20785f] cursor-pointer">
          <h3 className="text-center">Название города</h3>
          <img
            src={`http://openweathermap.org/img/wn/02d.png`}
            alt="weather state"
          ></img>
          <p>15°С</p>
        </li>

        <li className="h-full min-h-32 p-2 flex flex-col gap-2 items-center justify-center rounded-sm bg-[#20785f] cursor-pointer">
          <FaRegQuestionCircle className="text-6xl opacity-50" />
        </li>
      </ul>
    </div>
  );
};

export default WeatherQueryHistory;
