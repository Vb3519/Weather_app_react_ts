import { useState, useEffect } from 'react';

const Loader = () => {
  const loaderDots: string = '...';

  const [loaderText, setLoaderText] = useState<string>('Загрузка...');
  const loaderTimer: number = 500;

  const renderLoaderDots = async () => {
    for (let i = 0; i < loaderDots.length; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('done');

          setLoaderText((prevLoaderText) => {
            return (prevLoaderText = prevLoaderText + loaderDots[i]);
          });
        }, loaderTimer);
      });
    }
  };

  useEffect(() => {
    if (loaderText.endsWith('...')) {
      setTimeout(() => {
        setLoaderText('Загрузка');

        renderLoaderDots();
      }, loaderTimer);
    }
  }, [loaderText]);

  return (
    <section className="h-65 p-2 flex flex-col gap-4 items-center justify-center text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <div className="text-[#e0e0e0] text-shadow-sm">
        <h2 className="mx-auto w-20 sm:text-lg sm:min-w-24">{loaderText}</h2>
      </div>
    </section>
  );
};

export default Loader;
