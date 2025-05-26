// --------------------------- Погода на ближайшие 12 часов: ---------------------------
const CurrentDayForecast = () => {
  return (
    <section className="p-2 text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <ul className="flex gap-1 items-center justify-between">
        <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <p>18:00</p>
          <img
            src="http://openweathermap.org/img/wn/04d.png"
            alt="weather state"
          ></img>
          <p>11.15°С</p>
        </li>
        <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <p>21:00</p>
          <img
            src="http://openweathermap.org/img/wn/04d.png"
            alt="weather state"
          ></img>
          <p>11.15°С</p>
        </li>
        <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <p>00:00</p>
          <img
            src="http://openweathermap.org/img/wn/04d.png"
            alt="weather state"
          ></img>
          <p>11.15°С</p>
        </li>
        <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <p>03:00</p>
          <img
            src="http://openweathermap.org/img/wn/04d.png"
            alt="weather state"
          ></img>
          <p>11.15°С</p>
        </li>
        <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)]">
          <p>06:00</p>
          <img
            src="http://openweathermap.org/img/wn/04d.png"
            alt="weather state"
          ></img>
          <p>11.15°С</p>
        </li>
      </ul>
    </section>
  );
};

export default CurrentDayForecast;
