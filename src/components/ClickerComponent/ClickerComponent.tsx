import { FC, Dispatch, SetStateAction } from 'react';
import LocalString from '../micro-components/LocalString/LocalString';
import { MoneyState } from "../../types/ressources.interface";

interface ClickerComponentProps {
  money: number;
  setMoney: Dispatch<SetStateAction<MoneyState>>;
  typeMoney: string;
}

const ClickerComponent: FC<ClickerComponentProps> = ({ money, setMoney, typeMoney }) => {

  const handleChangeCoins = () => {
    setMoney((prevMoney) => ({ ...prevMoney, [typeMoney]: money + 1 }));
  }; 

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className='centerCard'>
      <button className='clickFarm' 
        onClick={handleChangeCoins}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        Click
      </button>
      <div>
        <LocalString number={money} />
      </div>
    </div>
  );
};

export default ClickerComponent;
