const App = () => {
  const greeting: string = 'Hey hey ^_^';
  console.log('My greeting:', greeting);

  return (
    <div className="p-2 flex flex-col gap-2 items-center justify-center bg-amber-300">
      <h1 className="font-semibold">
        Hello from React, Ts, Vite and TailwindCss ^_^
      </h1>
    </div>
  );
};

export default App;
