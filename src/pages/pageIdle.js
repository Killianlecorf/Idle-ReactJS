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
        if (money.coins >= 1) {
            setMoney({...money, coins: money.coins - 50000 })
            setUnlockJob({...unlockJob, lumberjack : true , buttonLumberjack : true })

        } 
    }

    const displaylumberjack = () => {
        if (unlockJob.lumberjack === true) {
            return  <div className="workerCard">
                        <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'wood'} />
                        <div className="cardWorker">
                            <BuyWorker 
                            money={money} 
                            setMoney={setMoney} 
                            typeMoney={'wood'} 
                            idleWorker={lumberjack} 
                            setIdleWorker={setlumberjack} 
                            typeJuniorWorker= {'juniorLumberjack'} 
                            typeIntermediateWorker={ 'intermediateLumberjack' } 
                            typeExpertWorker={'expertLumberjack'}/>
                        </div>
                        <div className="upgradeWorker">
                            {!unlockJob.buttonMiner? <p>Buy Miner : 500 000 et 250 000 Wood</p> : ''}
                            {!unlockJob.buttonMiner? <button className="UpgaradeWorkerButton" onClick={ handleUnlockMiner }>Buy</button> : ''}
                        </div>
                    </div>
        }
    }

    const handleUnlockMiner = () => {
        if (money.coins >= 1 && money.wood >= 1) {
            setMoney({...money, coins: money.coins - 500000 , wood: money.wood - 250000 })
            setUnlockJob({...unlockJob, miner : true , buttonMiner : true })

        }
    }
    
    const displayMiner = () => {
        if (unlockJob.miner === true) {
            return  <div className="workerCard">
                        <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'stone'} />
                        <div className="cardWorker">
                            <BuyWorker 
                            money={money} 
                            setMoney={setMoney} 
                            typeMoney={'stone'} 
                            idleWorker={miner} 
                            setIdleWorker={setMiner} 
                            typeJuniorWorker= {'juniorMiner'} 
                            typeIntermediateWorker={ 'intermediateMiner' } 
                            typeExpertWorker={'expertMiner'}/>
                        </div>
                        <div className="upgradeWorker">
                            <p> Buy DiamonMiner : 1 000 000, 500 000 wood et 250 000 stone</p>
                            {!unlockJob.buttonDiamondMiner ? <button className="UpgaradeWorkerButton" onClick={ handleUnlockDiamondMiner }>Buy</button> : ''}
                        </div>
                    </div>
        }
    }
    
    const handleUnlockDiamondMiner = () => {
        if (money.coins >= 1 && money.wood >= 1 && money.stone >= 1) {
            setMoney({...money, coins: money.coins - 1000000 , wood: money.wood - 500000, stone: money.stone - 250000 })
            setUnlockJob({...unlockJob, diamondMiner : true , buttonDiamondMiner : true })

        }
    }
    
    const displayDiamondMiner = () => {
        if (unlockJob.diamondMiner === true) {
            return  <div className="workerCard">
                        <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'diamond'} />
                        <div className="cardWorker">
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
                    </div>
        }
    }


    return (
        <div className='workerBoardBack'>
            <div className="workerBoard">
                <div className="workerCard">
                    <ClickerComponent money = {money} setMoney= {setMoney} typeMoney= {'coins'} />
                    <div className="cardWorker">
                        <BuyWorker 
                            money = {money} 
                            setMoney= {setMoney} 
                            typeMoney={'coins'} 
                            idleWorker = {idleBanker} 
                            setIdleWorker={setIdleBanker} 
                            typeJuniorWorker= {'juniorBanker'} 
                            typeIntermediateWorker={ 'intermediateBanker' }  
                            typeExpertWorker={'expertBanker'}/> 
                    </div>
                    <div className="upgradeWorker">
                        <p>Buy lumberjack : 50 000 coins</p>
                        {unlockJob.buttonLumberjack === false ? <button className="UpgaradeWorkerButton" onClick={ handleUnlockLumberjack }>Buy</button> : ''}
                    </div>
                </div>   
                {displaylumberjack()}
                {displayMiner()}
                {displayDiamondMiner()}
            </div>
        </div>
    );
};

export default PageIdle;