import React from 'react';
import LocalString from './micro-components/LocalString';

const ClickerComponent = ({money, setMoney, typeMoney}) => {
    
    const handleChangeCoins = () => {
        setMoney({...money ,[typeMoney]: money[typeMoney] + 1})
    }

    return (
        <div className='centerCard'> 
            <button className='clickFarm' onClick={ handleChangeCoins }>Click</button>
            <div>
                <LocalString number={money[typeMoney]} />
            </div>
        </div>
    );
};

export default ClickerComponent;
