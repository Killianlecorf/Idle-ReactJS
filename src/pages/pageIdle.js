import React, {useState}  from 'react';
import BuyWorker from '../components/BuyWorker';
import ClickerComponent from '../components/ClickerComponent';

const PageIdle = () => {

    const [money, setMoney] = useState({
        coins: 0, 
        wood: 0,
        stone:0,
        diamond:0
    })
    const [idleBanker, setIdleBanker] = useState({
        juniorBanker: 0,
        intermediateBanker :0,
        expertBanker: 0
    })
    const [lumberjack, setlumberjack] = useState({
        juniorLumberjack: 0,
        intermediateLumberjack: 0,
        expertLumberjack: 0

    })
    const [miner, setMiner] = useState({
        juniorMiner: 0,
        intermediateMiner: 0,
        expertMiner: 0

    })
    const [diamondMiner, setDiamondMiner] = useState({
        juniorDiamondMiner: 0,
        intermediateDiamondMiner: 0,
        expertDiamondMiner: 0

    })
    const [unlockJob, setUnlockJob] = useState({
        buttonLumberjack : false ,
        lumberjack: false,
        buttonMiner: false,
        miner: false,
        buttonDiamondMiner: false,
        diamondMiner: false
    })

    const handleUnlockLumberjack = () => {
        if (money.coins >= 50000) {
            setMoney({...money, coins: money.coins - 50000 })
            setUnlockJob({...unlockJob, lumberjack : true , buttonLumberjack : true })

        }
    }

    const displaylumberjack = () => {
        if (unlockJob.lumberjack === true) {
            return  <div className="workerCard">
                        <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'wood'} />
                        <BuyWorker 
                        money={money} 
                        setMoney={setMoney} 
                        typeMoney={'wood'} 
                        idleWorker={lumberjack} 
                        setIdleWorker={setlumberjack} 
                        typeJuniorWorker= {'juniorLumberjack'} 
                        typeIntermediateWorker={ 'intermediateLumberjack' } 
                        typeExpertWorker={'expertLumberjack'}/>
                        {!unlockJob.buttonMiner? <button onClick={ handleUnlockMiner }> Buy Miner : 500 000 et 250 000 Wood</button> : ''}
                    </div>
        }
    }

    const handleUnlockMiner = () => {
        if (money.coins >= 500000 && money.wood >= 250000) {
            setMoney({...money, coins: money.coins - 500000 , wood: money.wood - 250000 })
            setUnlockJob({...unlockJob, miner : true , buttonMiner : true })

        }
    }
    
    const displayMiner = () => {
        if (unlockJob.miner === true) {
            return  <div className="workerCard">
                        <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'stone'} />
                        <BuyWorker 
                        money={money} 
                        setMoney={setMoney} 
                        typeMoney={'stone'} 
                        idleWorker={miner} 
                        setIdleWorker={setMiner} 
                        typeJuniorWorker= {'juniorMiner'} 
                        typeIntermediateWorker={ 'intermediateMiner' } 
                        typeExpertWorker={'expertMiner'}/>
                        {!unlockJob.buttonDiamondMiner ? <button onClick={ handleUnlockDiamondMiner }> Buy DiamonMiner : 1 000 000, 500 000 wood et 250 000 stone</button> : ''}
                    </div>
        }
    }
    
    const handleUnlockDiamondMiner = () => {
        if (money.coins >= 1000000 && money.wood >= 500000 && money.stone >= 250000) {
            // setMoney({...money, coins: money.coins - 1000000 , wood: money.wood - 500000, stone: money.stone - 250000 })
            setUnlockJob({...unlockJob, diamondMiner : true , buttonDiamondMiner : true })

        }
    }
    
    const displayDiamondMiner = () => {
        if (unlockJob.diamondMiner === true) {
            return  <div className="workerCard">
                        <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'diamond'} />
                        <BuyWorker 
                        money={money} 
                        setMoney={setMoney} 
                        typeMoney={'diamond'} 
                        idleWorker={diamondMiner} 
                        setIdleWorker={setDiamondMiner} 
                        typeJuniorWorker= {'juniorDiamondMiner'} 
                        typeIntermediateWorker={ 'intermediateDiamondMiner' } 
                        typeExpertWorker={'expertDiamondMiner'}/>
                        
                    </div>
        }
    }


    return (
        <div className='workerBoardBack'>
            <div className="workerBoard">
                <div className="workerCard">
                    <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'coins'} />
                    <BuyWorker 
                    money = {money} 
                    setMoney= {setMoney} 
                    typeMoney={'coins'} 
                    idleWorker = {idleBanker} 
                    setIdleWorker={setIdleBanker} 
                    typeJuniorWorker= {'juniorBanker'} 
                    typeIntermediateWorker={ 'intermediateBanker' }  
                    typeExpertWorker={'expertBanker'}/>
                    {unlockJob.buttonLumberjack === false ? <button onClick={ handleUnlockLumberjack }> Buy lumberjack : 50 000</button> : ''}
                </div>   
                {displaylumberjack()}
                {displayMiner()}
                {displayDiamondMiner()}
            </div>
        </div>
    );
};

export default PageIdle;