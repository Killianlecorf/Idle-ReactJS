import React, { SetStateAction } from "react";
import { Dispatch } from 'react';
import "./ConvertMoney.scss";
import { MoneyState } from "../../types/ressources.interface";

interface ConvertModalProps {
    buttonContent: string;
    isDisplayConvertModal: boolean;
    setIsDisplayConvertModal: Dispatch<React.SetStateAction<boolean>>;
    isDisplayLumberjack: boolean;
    money: MoneyState;
    setMoney: Dispatch<SetStateAction<MoneyState>>;
}

const ConvertMoney: React.FC<ConvertModalProps> = ({ 
    buttonContent,
    isDisplayConvertModal, 
    setIsDisplayConvertModal, 
    isDisplayLumberjack,
    money,
    setMoney
}) => {
    const toggleConvertModal = () => {
        setIsDisplayConvertModal(prev => !prev);
    };

    const handleConvertMoney = (firstMoney: number, secondMoney: number, isConvertWood: boolean) => {
        if (isConvertWood) {
            if (money.coins < firstMoney) {
                return;
            }
            setMoney(prevMoney => ({
                ...prevMoney,
                coins: prevMoney.coins - firstMoney,
                wood: prevMoney.wood + secondMoney,
            }));
        } else {
            if (money.wood < secondMoney) {
                return;
            }
            setMoney(prevMoney => ({
                ...prevMoney,
                coins: prevMoney.coins + firstMoney,
                wood: prevMoney.wood - secondMoney,
            }));
        }
    };

    return (
        <div className='ConvertMoney'>
            <button onClick={toggleConvertModal}>Convert</button>
            {isDisplayConvertModal && (
                <div className="modalConvert">
                    <div className="displayModal" onClick={toggleConvertModal}></div>
                    <div className="modalContent">
                        <h2>{buttonContent}</h2>
                        {isDisplayLumberjack ? (
                            <div className="WrapperConvert">
                                <p>Coins -- Wood</p>
                                <div className="ConvertMoneyContent">
                                    <button onClick={() => handleConvertMoney(1000, 500, true)}>Convert</button>
                                    <p>1 000 Coins -- 500 Wood</p>
                                </div>
                                <div className="ConvertMoneyContent">
                                    <button onClick={() => handleConvertMoney(10000, 5000, true)}>Convert</button>
                                    <p>10 000 Coins -- 5 000 Wood</p>
                                </div>
                                <div className="ConvertMoneyContent">
                                    <button onClick={() => handleConvertMoney(100000, 50000, true)}>Convert</button>
                                    <p>100 000 Coins -- 50 000 Wood</p>
                                </div>
                                <p>Wood -- Coins</p>
                                <div className="ConvertMoneyContent">
                                    <button onClick={() => handleConvertMoney(500, 1000, false)}>Convert</button>
                                    <p>1 000 Wood -- 500 Coins</p>
                                </div>
                                <div className="ConvertMoneyContent">
                                    <button onClick={() => handleConvertMoney(5000, 10000, false)}>Convert</button>
                                    <p>10 000 Wood -- 5 000 Coins</p>
                                </div>
                                <div className="ConvertMoneyContent">
                                    <button onClick={() => handleConvertMoney(50000, 100000,false)}>Convert</button>
                                    <p>100 000 Wood -- 50 000 Coins</p>
                                </div>
                            </div>
                        ) : ""}
                        <button onClick={toggleConvertModal}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );    
};

export default ConvertMoney;
