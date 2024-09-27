import React, { useState } from 'react';
import BuyWorker from '../../components/BuyWorker/BuyWorker';
import ClickerComponent from '../../components/ClickerComponent/ClickerComponent';
import { MoneyState, WorkerState, UnlockJobState } from "../../types/ressources.interface";
import ConvertMoney from '../../components/ConvertMoney';

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

  const [isDisplayConvertModal, setIsDisplayConvertModal] = useState<boolean>(false)

  const handleUnlockLumberjack = () => {
    if (money.coins >= 50000) {
      setMoney({ ...money, coins: money.coins - 50000 });
      setUnlockJob({ ...unlockJob, lumberjack: true, buttonLumberjack: true });
    }
  };

  const handleUnlockMiner = () => {
    if (money.coins >= 5000000 && money.wood >= 250000) {
      setMoney({ ...money, coins: money.coins - 5000000, wood: money.wood - 250000 });
      setUnlockJob({ ...unlockJob, miner: true, buttonMiner: true });
    }
  };

  const handleUnlockDiamondMiner = () => {
    if (money.coins >= 100000000 && money.wood >= 50000000 && money.stone >= 25000000) {
      setMoney({ ...money, coins: money.coins - 100000000, wood: money.wood - 50000000, stone: money.stone - 25000000 });
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
            typeMoney="coins"
            worker={banker}
            money={money}
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
                typeJuniorWorker="juniorWorker"
                juniorWorker={lumberjack.juniorWorker}
                typeIntermediateWorker="intermediateWorker"
                intermediaireWorker={lumberjack.intermediateWorker}
                typeExpertWorker="expertWorker"
                experWorker={lumberjack.expertWorker}
            />

            </div>
            <div className="upgradeWorker">
                {!unlockJob.buttonMiner ? <p>Buy Miner : 5 000 000 et 250 000 Wood</p> : ''}
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
                  typeJuniorWorker="juniorWorker"
                  juniorWorker={miner.juniorWorker}
                  typeIntermediateWorker="intermediateWorker"
                  intermediaireWorker={miner.intermediateWorker}
                  typeExpertWorker="expertWorker"
                  experWorker={miner.expertWorker}
                />
              </div>
              <div className="upgradeWorker">
                {!unlockJob.buttonDiamondMiner ? (
                    <div className="">
                        <p> Buy Diamond Miner: 100 000 000, 50 000 000 wood et 25 000 000 stone</p>
                        <button className="UpgaradeWorkerButton" onClick={handleUnlockDiamondMiner}>
                            Buy
                        </button>
                    </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          );
        } else {
          return null;
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
            typeJuniorWorker="juniorWorker"
            juniorWorker={diamondMiner.juniorWorker}
            typeIntermediateWorker="intermediateWorker"
            intermediaireWorker={diamondMiner.intermediateWorker}
            typeExpertWorker="expertWorker"
            experWorker={diamondMiner.expertWorker}
            />
          </div>
        </div>
      );
    }else{
      return null
    } 
  };

  return (
    <div className="workerBoardBack">
      <div className="workerBoard">
        {
            unlockJob.lumberjack ? 
            <ConvertMoney 
                buttonContent="Coins--Wood"
                isDisplayConvertModal={isDisplayConvertModal} 
                setIsDisplayConvertModal={setIsDisplayConvertModal}
                isDisplayLumberjack={unlockJob.lumberjack}
                money={money}
                setMoney={setMoney}
            /> : ""
        }
        {displayWorker()}
        <div className="upgradeWorker">
          {!unlockJob.buttonLumberjack ? (
            <div className="">
              <p>Buy Lumberjack: 50 000 coins</p>
              <button className="UpgaradeWorkerButton" onClick={handleUnlockLumberjack}>
                Buy
              </button>
            </div>
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
