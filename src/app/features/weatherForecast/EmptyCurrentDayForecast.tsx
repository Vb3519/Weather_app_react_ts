import { TiWeatherPartlySunny } from 'react-icons/ti';

const EmptyCurrentDayForecast = () => {
  return (
    <section className="h-31 p-2 flex flex-col gap-2 items-center justify-center text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <h2 className="text-center">Прогноз погоды на ближайшие 12 часов</h2>
      <TiWeatherPartlySunny className="text-8xl opacity-50" />
    </section>
  );
};

export default EmptyCurrentDayForecast;
