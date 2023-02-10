import React, {useState}  from 'react';
import BuyMiner from '../components/BuyMiner';
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

    return (
        <div>
            <ClickerComponent money = {money} setMoney= {setMoney}/>
            <BuyMiner money = {money} setMoney= {setMoney} idleBanker = {idleBanker} setIdleBanker={setIdleBanker} />
        </div>
    );
};

export default PageIdle;