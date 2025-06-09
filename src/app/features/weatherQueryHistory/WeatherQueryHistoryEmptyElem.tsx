import { FaRegQuestionCircle } from 'react-icons/fa';

const WeatherQueryHistoryEmptyElem = () => {
  return (
    <li className="h-full min-h-32 min-w-30 p-2 flex flex-col gap-2 items-center justify-center rounded-sm bg-[#20785f] cursor-pointer sm:min-w-35">
      <FaRegQuestionCircle className="text-6xl opacity-50" />
    </li>
  );
};

export default WeatherQueryHistoryEmptyElem;
