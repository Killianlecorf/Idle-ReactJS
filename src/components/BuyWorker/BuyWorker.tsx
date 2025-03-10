import { useEffect, useRef, FC, Dispatch, SetStateAction } from 'react';
import { MoneyState, WorkerState } from "../../types/ressources.interface";

interface BuyWorkerProps {
  numberMoney: number;
  setMoney: Dispatch<SetStateAction<MoneyState>>;
  typeMoney: string;
  money: MoneyState;
  worker: WorkerState;
  setIdleWorker: Dispatch<React.SetStateAction<WorkerState>>;
  typeJuniorWorker: string;
  juniorWorker: number;
  typeIntermediateWorker: string;
  intermediaireWorker: number;
  typeExpertWorker: string;
  experWorker: number;
}

const BuyWorker: FC<BuyWorkerProps> = ({
  numberMoney,
  setMoney,
  typeMoney,
  money,
  worker,
  setIdleWorker,
  juniorWorker,
  typeJuniorWorker,
  intermediaireWorker,
  typeIntermediateWorker,
  experWorker,
  typeExpertWorker,
}) => {
    const intervalJuniorWorkerId = useRef<NodeJS.Timeout | null>(null);
    const intervalIntermediateWorkerId = useRef<NodeJS.Timeout | null>(null);
    const intervalExpertWorkerId = useRef<NodeJS.Timeout | null>(null);
    

    const numberIntermediateWorker = 150; 
    const numberExpertWorker = 1500;

    const handleBuyJuniorWorker = () => {
      if (numberMoney >= 10) {
        setMoney({...money , [typeMoney]: numberMoney - 10 });
        setIdleWorker({ ...worker, [typeJuniorWorker]: juniorWorker + 1 });
      }
    };

    const additionMiner = () => {
      setMoney((previousValue) => ({
        ...previousValue,
        [typeMoney]: previousValue[typeMoney] + juniorWorker,
      }));
    };

    useEffect(() => {
      if (juniorWorker !== 0) {
        clearInterval(intervalJuniorWorkerId.current!);
        intervalJuniorWorkerId.current = setInterval(additionMiner, 1000);
      }

      return () => {
        clearInterval(intervalJuniorWorkerId.current!);
      };
    }, [juniorWorker]);

    const handleBuyIntermediateWorker = () => {
      if (numberMoney >= 1000) {
        setMoney({ ...money, [typeMoney]: numberMoney - 1000 });
        setIdleWorker({ ...worker, [typeIntermediateWorker]: worker.intermediateWorker + 1 });
      }
    };

    const additionIntermediateWorker = () => {
      setMoney((previousValue) => ({
        ...previousValue,
        [typeMoney]: previousValue[typeMoney] + worker.intermediateWorker * numberIntermediateWorker,
      }));
    };
    

    useEffect(() => {
      if (intermediaireWorker !== 0) {
        clearInterval(intervalIntermediateWorkerId.current!);
        intervalIntermediateWorkerId.current = setInterval(additionIntermediateWorker, 1000);
      }

      return () => {
        clearInterval(intervalIntermediateWorkerId.current!);
      };
    }, [intermediaireWorker]);

    const handleBuyExpertWorker = () => {
      if (numberMoney >= 1000000) {
        setMoney({ ...money, [typeMoney]: numberMoney - 1000000 });
        setIdleWorker({ ...worker, [typeExpertWorker]: worker.expertWorker + 1 });
      }
    };

    const additionExpertWorker = () => {
      setMoney((previousValue) => ({
        ...previousValue,
        [typeMoney]: previousValue[typeMoney] + worker.expertWorker * numberExpertWorker,
      }));
    };

    useEffect(() => {
      if (experWorker !== 0) {
        clearInterval(intervalExpertWorkerId.current!);
        intervalExpertWorkerId.current = setInterval(additionExpertWorker, 1000);
      }

      return () => {
        clearInterval(intervalExpertWorkerId.current!);
      };
    }, [experWorker]);

    return (
      <div className='cardWorker'>
        <div className='priceWorker'>
          <p>Junior worker : {typeJuniorWorker} {juniorWorker}</p>
          <button onClick={handleBuyJuniorWorker}>10 {typeMoney}</button>
        </div>
        <div className='priceWorker'>
          <p>
            worker : {typeIntermediateWorker} {intermediaireWorker}
          </p>
          <button onClick={handleBuyIntermediateWorker}>1000 {typeMoney}</button>
        </div>
        <div className='priceWorker'>
          <p>Expert Worker: {typeExpertWorker} {experWorker} </p>
          <button onClick={handleBuyExpertWorker}>1 000 000 {typeMoney}</button>
        </div>
      </div>
    );
};

export default BuyWorker;
