import { MdOutlineSegment } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const App = () => {
  return (
    <div className="h-screen w-full p-2 flex flex-col gap-2 items-center justify-center bg-gradient-135">
      {/* --------------------------- HEADER: --------------------------- */}
      <header className="mb-auto w-full flex justify-between items-center gap-4">
        <div className="p-2 text-[whitesmoke] bg-white/20 rounded-sm cursor-pointer">
          <MdOutlineSegment className="text-2xl" />
        </div>

        <form className="w-full p-2 flex gap-2 justify-center items-center bg-[whitesmoke] rounded-sm">
          <FaMagnifyingGlass className="text-gray-500 text-xl cursor-pointer" />
          <input
            className="outline-none w-full"
            placeholder="Укажите название города..."
            type="text"
          />
        </form>
      </header>

      {/* --------------------------- MAIN: --------------------------- */}
      <main></main>

      {/* --------------------------- FOOTER: --------------------------- */}
      <footer></footer>
    </div>
  );
};

export default App;
