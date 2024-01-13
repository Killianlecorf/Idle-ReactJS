import React, { useState } from 'react';
import BuyWorker from '../../components/BuyWorker/BuyWorker';
import ClickerComponent from '../../components/ClickerComponent/ClickerComponent';
import { MoneyState, WorkerState, UnlockJobState } from "../../types/ressources.interface";

const PageIdle: React.FC = () => {
  const [money, setMoney] = useState<MoneyState>({
    coins: 0,
    wood: 0,
    stone: 0,
    diamond: 0,
  });

  const [banker, setBanker] = useState<WorkerState>({
    juniorWorker: 0,
    intermediateWorker: 0,
    expertWorker: 0,
  });

  const [lumberjack, setLumberjack] = useState<WorkerState>({
    juniorWorker: 0,
    intermediateWorker: 0,
    expertWorker: 0,
  });

  const [miner, setMiner] = useState<WorkerState>({
    juniorWorker: 0,
    intermediateWorker: 0,
    expertWorker: 0,
  });

  const [diamondMiner, setDiamondMiner] = useState<WorkerState>({
    juniorWorker: 0,
    intermediateWorker: 0,
    expertWorker: 0,
  });

  const [unlockJob, setUnlockJob] = useState<UnlockJobState>({
    buttonLumberjack: false,
    lumberjack: false,
    buttonMiner: false,
    miner: false,
    buttonDiamondMiner: false,
    diamondMiner: false,
  });

  const handleUnlockLumberjack = () => {
    if (money.coins >= 1) {
      setMoney({ ...money, coins: money.coins - 50000 });
      setUnlockJob({ ...unlockJob, lumberjack: true, buttonLumberjack: true });
    }
  };

  const handleUnlockMiner = () => {
    if (money.coins >= 1 && money.wood >= 1) {
      setMoney({ ...money, coins: money.coins - 500000, wood: money.wood - 250000 });
      setUnlockJob({ ...unlockJob, miner: true, buttonMiner: true });
    }
  };

  const handleUnlockDiamondMiner = () => {
    if (money.coins >= 1 && money.wood >= 1 && money.stone >= 1) {
      setMoney({ ...money, coins: money.coins - 1000000, wood: money.wood - 500000, stone: money.stone - 250000 });
      setUnlockJob({ ...unlockJob, diamondMiner: true, buttonDiamondMiner: true });
    }
  };

  const displayWorker = () => {
    return (
      <div className="workerCard">
        <ClickerComponent money={money.coins} setMoney={setMoney} typeMoney="coins" />
        <div className="cardWorker">
          <BuyWorker 
            numberMoney={money.coins} 
            setMoney={setMoney} 
            money={money}
            typeMoney="coins" 
            worker={banker} 
            setIdleWorker={setBanker}
            typeJuniorWorker="juniorWorker"
            juniorWorker={banker.juniorWorker}
            typeIntermediateWorker="intermediateWorker"
            intermediaireWorker={banker.intermediateWorker}
            typeExpertWorker="expertWorker"
            experWorker={banker.expertWorker}
          />
        </div>
      </div>
    );
  };

  const displayLumberjack = () => {
    if (unlockJob.lumberjack) {
      return (
        <div className="workerCard">
          <ClickerComponent money={money.wood} setMoney={setMoney} typeMoney="wood" />
          <div className="cardWorker">
            <BuyWorker
              numberMoney={money.wood}
              setMoney={setMoney}
              typeMoney="wood"
              money={money}
              worker={lumberjack}
              setIdleWorker={setLumberjack}
              typeJuniorWorker="juniorLumberjack"
              juniorWorker={lumberjack.juniorWorker}
              typeIntermediateWorker="intermediateLumberjack"
              intermediaireWorker={lumberjack.intermediateWorker}
              typeExpertWorker="expertLumberjack"
              experWorker={lumberjack.expertWorker}
            />
          </div>
          <div className="upgradeWorker">
            {!unlockJob.buttonMiner ? <p>Buy Miner : 500 000 et 250 000 Wood</p> : ''}
            {!unlockJob.buttonMiner ? (
              <button className="UpgaradeWorkerButton" onClick={handleUnlockMiner}>
                Buy
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    } else{
      return null
    } 
  };

  const displayMiner = () => {
    if (unlockJob.miner) {
      return (
        <div className="workerCard">
          <ClickerComponent money={money.stone} setMoney={setMoney} typeMoney="stone" />
          <div className="cardWorker">
            <BuyWorker
              numberMoney={money.stone}
              setMoney={setMoney}
              typeMoney="stone"
              worker={miner}
              money={money}
              setIdleWorker={setMiner}
              typeJuniorWorker="juniorMiner"
              juniorWorker={miner.juniorWorker}
              typeIntermediateWorker="intermediateMiner"
              intermediaireWorker={miner.intermediateWorker}
              typeExpertWorker="expertMiner"
              experWorker={miner.expertWorker}
            />
          </div>
          <div className="upgradeWorker">
            <p> Buy Diamond Miner: 1 000 000, 500 000 wood et 250 000 stone</p>
            {!unlockJob.buttonDiamondMiner ? (
              <button className="UpgaradeWorkerButton" onClick={handleUnlockDiamondMiner}>
                Buy
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    }else{
      return null
    } 
  };

  const displayDiamondMiner = () => {
    if (unlockJob.diamondMiner) {
      return (
        <div className="workerCard">
          <ClickerComponent money={money.diamond} setMoney={setMoney} typeMoney="diamond" />
          <div className="cardWorker">
            <BuyWorker
              numberMoney={money.diamond}
              setMoney={setMoney}
              typeMoney="diamond"
              money={money}
              worker={diamondMiner}
              setIdleWorker={setDiamondMiner}
              typeJuniorWorker="juniorDiamondMiner"
              juniorWorker={diamondMiner.juniorWorker}
              typeIntermediateWorker="intermediateDiamondMiner"
              intermediaireWorker={diamondMiner.intermediateWorker}
              typeExpertWorker="expertDiamondMiner"
              experWorker={diamondMiner.expertWorker}
            />
          </div>
        </div>
      );
    }else{
      return null
    } 
  };

console.log(money.wood);


  return (
    <div className="workerBoardBack">
      <div className="workerBoard">
        {displayWorker()}
        <div className="upgradeWorker">
          <p>Buy Lumberjack: 50 000 coins</p>
          {!unlockJob.buttonLumberjack ? (
            <button className="UpgaradeWorkerButton" onClick={handleUnlockLumberjack}>
              Buy
            </button>
          ) : (
            ''
          )}
        </div>
        {displayLumberjack()}
        {displayMiner()}
        {displayDiamondMiner()}
      </div>
    </div>
  );
};

export default PageIdle;
