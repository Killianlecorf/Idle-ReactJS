import React, { useState } from 'react';
import BuyWorker from '../../components/BuyWorker/BuyWorker';
import ClickerComponent from '../../components/ClickerComponent/ClickerComponent';
import { MoneyState, WorkerState, UnlockJobState } from "../../types/Ressources.interface";

const PageIdle: React.FC = () => {
  const [money, setMoney] = useState<MoneyState>({
    coins: 0,
    wood: 0,
    stone: 0,
    diamond: 0,
  });

  const [idleBanker, setIdleBanker] = useState<WorkerState>({
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

  const displayWorker = (type: string, workerState: WorkerState, setType: React.Dispatch<React.SetStateAction<WorkerState>>) => {
    return (
      <div className="workerCard">
        <ClickerComponent money={money} setMoney={setMoney} typeMoney={type} />
        <div className="cardWorker">
          <BuyWorker money={money} setMoney={setMoney} typeMoney={type} idleWorker={workerState} setIdleWorker={setType} />
        </div>
      </div>
    );
  };

  const displayLumberjack = () => {
    if (unlockJob.lumberjack) {
      return (
        <div className="workerCard">
          <ClickerComponent money={money} setMoney={setMoney} typeMoney="wood" />
          <div className="cardWorker">
            <BuyWorker
              money={money}
              setMoney={setMoney}
              typeMoney="wood"
              idleWorker={lumberjack}
              setIdleWorker={setLumberjack}
              typeJuniorWorker="juniorLumberjack"
              typeIntermediateWorker="intermediateLumberjack"
              typeExpertWorker="expertLumberjack"
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
    }
  };

  const displayMiner = () => {
    if (unlockJob.miner) {
      return (
        <div className="workerCard">
          <ClickerComponent money={money} setMoney={setMoney} typeMoney="stone" />
          <div className="cardWorker">
            <BuyWorker
              money={money}
              setMoney={setMoney}
              typeMoney="stone"
              idleWorker={miner}
              setIdleWorker={setMiner}
              typeJuniorWorker="juniorMiner"
              typeIntermediateWorker="intermediateMiner"
              typeExpertWorker="expertMiner"
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
    }
  };

  const displayDiamondMiner = () => {
    if (unlockJob.diamondMiner) {
      return (
        <div className="workerCard">
          <ClickerComponent money={money} setMoney={setMoney} typeMoney="diamond" />
          <div className="cardWorker">
            <BuyWorker
              money={money}
              setMoney={setMoney}
              typeMoney="diamond"
              idleWorker={diamondMiner}
              setIdleWorker={setDiamondMiner}
              typeJuniorWorker="juniorDiamondMiner"
              typeIntermediateWorker="intermediateDiamondMiner"
              typeExpertWorker="expertDiamondMiner"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="workerBoardBack">
      <div className="workerBoard">
        {displayWorker('coins', idleBanker, setIdleBanker)}
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
