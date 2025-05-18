import ReactDOM from 'react-dom/client';

import App from './app/App';

const appContainer: HTMLElement | null = document.querySelector('#root');

if (appContainer) {
  const root: ReactDOM.Root = ReactDOM.createRoot(appContainer);

  root.render(<App />);
}
