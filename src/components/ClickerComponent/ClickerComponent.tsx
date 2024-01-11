import React, { FC } from 'react';
import LocalString from '../micro-components/LocalString/LocalString';

interface ClickerComponentProps {
  money: Record<string, number>;
  setMoney: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  typeMoney: string;
}

const ClickerComponent: FC<ClickerComponentProps> = ({ money, setMoney, typeMoney }) => {
  const handleChangeCoins = () => {
    setMoney({ ...money, [typeMoney]: money[typeMoney] + 1 });
  };

  return (
    <div className='centerCard'>
      <button className='clickFarm' onClick={handleChangeCoins}>
        Click
      </button>
      <div>
        <LocalString number={money[typeMoney]} />
      </div>
    </div>
  );
};

export default ClickerComponent;
