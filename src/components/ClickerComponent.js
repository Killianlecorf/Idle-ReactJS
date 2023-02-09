import React, { useEffect, useRef, useState } from 'react';

const ClickerComponent = () => {

    const intervalId = useRef(null)
    const intervalMinerTwoId = useRef(null)
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

    const additionMiner = () => {
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





    const handleBuyMinerTwo = () => {
        if (coins >= 1) {
            // setCoins(coins - 1000)
            setdleMiners({...idleMiners, minerTwo: idleMiners.minerTwo + 1 })
        }
    }

    const additionMinerTwo = () => {
        setCoins((previousValue) => {
            return previousValue + (idleMiners.minerTwo*10)
        })
    }

    useEffect(() => {
        if (idleMiners.minerTwo !== 0) {
            clearInterval(intervalMinerTwoId.current)
            intervalMinerTwoId.current = setInterval(additionMinerTwo, 1000)
        }
    },[idleMiners.miner])


    return (
        <div>
            <button onClick={ handleChangeCoins }>Click</button>
            <p>{ coins }</p>
            <button onClick={ handleBuyMiner } >buy Miner for 10 coins</button>
            <p>mineur : { idleMiners.miner }</p>
            <button onClick={ handleBuyMinerTwo } >buy Miner for 1000 coins</button>
            <p>mineurTwo : { idleMiners.minerTwo }</p>
        </div>
    );
};

export default ClickerComponent;

// const clickit = () => {
//     const button = document.getElementById('button');
//     const worker = document.getElementById('worker');
//     for (let index = 0; index < 50; index++) {
//         button.click()
//         console.log(button)
//     }

//     document.addEventListener('mousemove', () => {
//         button.click()
//         worker.click()
//     })
// } 