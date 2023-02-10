import React from 'react';

const ClickerComponent = ({money, setMoney, typeMoney}) => {
    
    const handleChangeCoins = () => {
        setMoney({...money ,[typeMoney]: money[typeMoney] + 1})
    }

    return (
        <div>
            <button onClick={ handleChangeCoins }>Click</button>
            <p>{ money[typeMoney] }</p>
        </div>
    );
};

export default ClickerComponent;
