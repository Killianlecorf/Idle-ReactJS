import React, { useEffect, useRef, useState } from 'react';

const ClickerComponent = () => {

    const intervalId = useRef(null)
    const [coins, setCoins] = useState(0)
    const [idleMiners, setdleMiners] = useState({
        miner: 0,
        minerTwo :0,
        minerTree: 0
    })

    const handleChangeCoins = () => {
        setCoins(coins +1)
    }

    const handleBuyMiner = () => {
        if (coins >= 10) {
            setCoins(coins - 10)
            setdleMiners({...idleMiners, miner: idleMiners.miner + 1 })
        }
    }

    const additionMiner = () => { // idleMiners.miner
        setCoins((previousValue) => {
            return previousValue + idleMiners.miner
        })
    }

    useEffect(() => {
        if (idleMiners.miner !== 0) {
            clearInterval(intervalId.current)
            intervalId.current = setInterval(additionMiner, 1000)
        }
    },[idleMiners.miner])

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