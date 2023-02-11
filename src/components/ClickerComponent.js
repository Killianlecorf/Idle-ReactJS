import React from 'react';
import LocalString from './micro-components/LocalString';

const ClickerComponent = ({money, setMoney, typeMoney}) => {
    
    const handleChangeCoins = () => {
        setMoney({...money ,[typeMoney]: money[typeMoney] + 1})
    }

    return (
        <div> 
            <button onClick={ handleChangeCoins }>Click</button>
            <LocalString number={money[typeMoney]} />
        </div>
    );
};

export default ClickerComponent;
