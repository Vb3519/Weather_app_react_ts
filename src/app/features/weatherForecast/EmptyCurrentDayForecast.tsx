import { TiWeatherPartlySunny } from 'react-icons/ti';

const EmptyCurrentDayForecast = () => {
  return (
    <li className="w-full flex flex-col gap-2 items-center">
      <h2 className="text-center">Прогноз погоды на ближайшие 12 часов</h2>
      <TiWeatherPartlySunny className="text-8xl opacity-50" />
    </li>
  );
};

export default EmptyCurrentDayForecast;
