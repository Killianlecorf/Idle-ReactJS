import React, { useState } from 'react';

const ClickerComponent = () => {

    const [coins, setCoins] = useState(0)
    const [idleMiners, setMiners] = useState({
        miner: 1,
        minerTwo :0,
        minerTree: 0
    })

    const handleChangeCoins = () => {
        setCoins(coins +1)
    }

    const handleBuyMiner = () => {
        if (coins >= 10) {
            setCoins(coins - 10)
            setMiners({...idleMiners, miner: idleMiners.miner + 1 })
        }
    }


    return (
        <div>
            <button onClick={ handleChangeCoins }>Click</button>
            <p>{ coins }</p>
            <button onClick={ handleBuyMiner } >buy Miner</button>
            <p>mineur : { idleMiners.miner }</p>
        </div>
    );
};

export default ClickerComponent;