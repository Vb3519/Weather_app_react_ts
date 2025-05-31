import Header from '../widgets/Header';
import Footer from '../widgets/Footer';

import CurrentWeather from './features/currentWeather/CurrentWeather';
import EmptyCurrentWeather from './features/currentWeather/EmptyCurrentWeather';

import CurrentDayForecast from './features/weatherForecast/CurrentDayForecast';
import EmptyCurrentDayForecast from './features/weatherForecast/EmptyCurrentDayForecast';

import GeneralFiveDaysForecast from './features/weatherForecast/FiveDaysForecast/General/GeneralFiveDaysForecast';
import DetailedFiveDaysForecast from './features/weatherForecast/FiveDaysForecast/Detailed/DetailedFiveDaysForecast';

const App = () => {
  return (
    <div className="h-full w-full overflow-y-auto flex flex-col gap-4 items-center justify-center bg-gradient-135">
      {/* -------------- HEADER: -------------- */}
      <Header />
      {/* -------------- MAIN: -------------- */}
      <main className="mb-auto px-2 w-full font-[inter] flex flex-col gap-4 xs:px-4">
        <CurrentWeather />
        <CurrentDayForecast />

        <GeneralFiveDaysForecast />
        <DetailedFiveDaysForecast />
      </main>

      {/* -------------- FOOTER: -------------- */}
      <Footer />
    </div>
  );
};

export default App;
