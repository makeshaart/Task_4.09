import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { positionsStore, fetchPositionsFx, updatePositionsFx } from './store';

interface PositionButtonProps {
  position: string;
  active: boolean;
  onClick: (position: string) => void;
}

const PositionButton: React.FC<PositionButtonProps> = ({ position, active, onClick }) => {
  return (
    <button
      onClick={() => onClick(position)}
      style={{ backgroundColor: active ? 'orange' : 'transparent' }}
    >
      {position}
    </button>
  );
};

interface AppProps {
  options: {
    initializedOptions: string[];
    onPositionChange: (positions: string[]) => void;
    onComplete: (positions: string[]) => void;
    onInit: () => void;
  };
}

const App: React.FC<AppProps> = ({ options }) => {
  const positions = useStore(positionsStore);

  useEffect(() => {
    fetchPositionsFx(); 
    options.onInit(); 
  }, []);

  const handlePositionClick = (position: string) => {
    const updatedPositions = positions.includes(position)
      ? positions.filter((p) => p !== position)
      : [...positions, position];
    positionsStore.getState();
    options.onPositionChange(updatedPositions);
  };

  useEffect(() => {
    options.onComplete(positions);
    updatePositionsFx(positions);
  }, [positions]);

  return (
    <div>
      <h1>Car Damage Selector</h1>
      <div>
        {options.initializedOptions.map((position) => (
          <PositionButton
            key={position}
            position={position}
            active={positions.includes(position)}
            onClick={handlePositionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
