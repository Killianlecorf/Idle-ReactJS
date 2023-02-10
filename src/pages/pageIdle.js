import React, {useState}  from 'react';
import BuyWorker from '../components/BuyWorker';
import ClickerComponent from '../components/ClickerComponent';

const PageIdle = () => {

    const [money, setMoney] = useState({
        coins: 0, 
        wood: 0,
        stone:0,
        diamant:0
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
    const [unlockJob, setUnlockJob] = useState({
        buttonLumberjack : false ,
        lumberjack: false
    })


    const handleUnlockLumberjack = () => {
        if (money.coins >= 1) {
            // setMoney({...money, coins: money.coins - 50000 })
            setUnlockJob({...unlockJob, lumberjack : true , buttonLumberjack : true })

        }
    }

    const displaylumberjack = () => {
        console.log(unlockJob.lumberjack);
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
            </div>
        </div>
    );
};

export default PageIdle;