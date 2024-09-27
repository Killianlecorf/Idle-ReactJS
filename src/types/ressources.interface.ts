export interface MoneyState {
    coins: number,
    wood: number,
    stone: number,
    diamond: number,
    [key: string]: number;
  }

export interface WorkerState {
    juniorWorker: number;
    intermediateWorker: number;
    expertWorker: number; 
  }
  
export interface UnlockJobState {
    buttonLumberjack: boolean;
    lumberjack: boolean;
    buttonMiner: boolean;
    miner: boolean;
    buttonDiamondMiner: boolean;
    diamondMiner: boolean;
  }