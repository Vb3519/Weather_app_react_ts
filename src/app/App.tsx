import Header from '../widgets/Header';
import Footer from '../widgets/Footer';

import CurrentWeather from './features/currentWeather/CurrentWeather';
import CurrentDayForecast from './features/weatherForecast/CurrentDayForecast';

import GeneralFiveDaysForecast from './features/weatherForecast/FiveDaysForecast/General/GeneralFiveDaysForecast';

import WeatherQueryHistory from './features/weatherQueryHistory/WeatherQueryHistory';

const App = () => {
  return (
    <div className="relative h-full w-full overflow-y-auto flex flex-col gap-4 items-center justify-center bg-gradient-135">
      {/* ------- Header: ------- */}
      <Header />

      {/* ------- Main: ------- */}
      <main className="mb-auto px-2 w-full font-[inter] flex flex-col gap-4 xs:px-4 sm:px-16 md:px-24 lg:px-30 xl:px-36 2xl:px-46">
        <CurrentWeather />
        <CurrentDayForecast />

        <GeneralFiveDaysForecast />
      </main>

      {/* ------- Footer: ------- */}
      <Footer />

      {/* ------- Weather Query History: ------- */}
      {/* <WeatherQueryHistory /> */}
    </div>
  );
};

export default App;
