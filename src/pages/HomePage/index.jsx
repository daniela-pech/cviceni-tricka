import { useState } from 'react';
import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [type, setType] = useState('normalShortSleeve');
  const [color, setColor] = useState('yellow');
  const [print, setPrint] = useState('Ahojky');

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={type} color={color} print={print} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onTypeChange={setType}
            onColorChange={setColor}
            onPrintChange={setPrint}
          />
        </div>
      </div>
    </div>
  );
};
