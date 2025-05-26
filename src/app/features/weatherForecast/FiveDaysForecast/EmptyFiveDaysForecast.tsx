import { GiThermometerHot } from 'react-icons/gi';

const EmptyFiveDaysForecast = () => {
  return (
    <section className="h-80 p-2 flex flex-col gap-2 items-center justify-center text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <h2 className="pb-2 font-semibold text-xl text-center border-b-2 border-b-blue-800/20">
        Прогноз погоды на 5 дней:
      </h2>

      <GiThermometerHot className="h-[80%] text-8xl opacity-50" />
    </section>
  );
};

export default EmptyFiveDaysForecast;
