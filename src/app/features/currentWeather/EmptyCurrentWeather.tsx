import { CiCloudSun } from 'react-icons/ci';

const EmptyCurrentWeather = () => {
  return (
    <section className="h-65 p-2 flex flex-col gap-4 items-center justify-center text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <h2 className="text-center">
        Здесь будет текущий прогноз погоды в указанном Вами городе
      </h2>
      <CiCloudSun className="text-8xl opacity-50" />
    </section>
  );
};

export default EmptyCurrentWeather;
