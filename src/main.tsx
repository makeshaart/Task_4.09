import ReactDOM from 'react-dom';
import App from './App';

if (import.meta.env.MODE === 'development') {
  const renderElement = document.getElementById('root');
  if (renderElement) {
    ReactDOM.render(
      <App
        options={{
          initializedOptions: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'D1', 'D2'],
          onPositionChange: (positions: any) => {
            console.log(positions);
          },
          onComplete: (positions: any) => {
            console.log('Complete:', positions);
          },
          onInit: () => {
            console.log('Initialized');
          },
        }}
      />,
      renderElement
    );
  }
}
