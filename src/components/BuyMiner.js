import React, { useEffect, useRef } from 'react';

const BuyMiner = ({money , setMoney , idleBanker , setIdleBanker}) => {

    const intervalJuniorBankerId = useRef(null)
    const intervalIntermediateBankerId = useRef(null)
    const intervalExpertBankerId = useRef(null)

    const numberIntermediateBanker = 10 ;
    const numberExpertBanker = 100 ;


    const handleBuyBanker = () => {
        if (money.coins >= 10) {
            setMoney({...money ,coins: money.coins - 10})
            setIdleBanker({...idleBanker, juniorBanker: idleBanker.juniorBanker + 1 })
        }
    }

    const additionMiner = () => {
        setMoney((previousValue) => {
            return {
                ...previousValue , 
                coins: previousValue.coins + idleBanker.juniorBanker
            }
        })
    }

    useEffect(() => {
        if (idleBanker.juniorBanker !== 0) {
            clearInterval(intervalJuniorBankerId.current)
            intervalJuniorBankerId.current = setInterval(additionMiner, 1000)
        }
        
    },[idleBanker.juniorBanker])





    const handleBuyIntermediateBanker = () => {
        if (money.coins >= 1000) {
            setMoney({...money ,coins: money.coins - 1000})
            setIdleBanker({...idleBanker, intermediateBanker: idleBanker.intermediateBanker + 1 })
        }
    }

    const additionIntermediateBanker = () => {
        setMoney((previousValue) => {
            return {
                ...previousValue , 
                coins: previousValue.coins + (idleBanker.intermediateBanker*numberIntermediateBanker)
            }
        })
    }

    useEffect(() => {
        if (idleBanker.intermediateBanker !== 0) {
            clearInterval(intervalIntermediateBankerId.current)
            intervalIntermediateBankerId.current = setInterval(additionIntermediateBanker, 1000)
        }
    },[idleBanker.intermediateBanker])






    const handleBuyExpertBanker = () => {
        if (money.coins >= 1000000) {
            setMoney({...money ,coins: money.coins - 1000000})
            setIdleBanker({...idleBanker, expertBanker: idleBanker.expertBanker + 1 })
        }
    }

    const additionExpertBanker = () => {
        setMoney((previousValue) => {
            return {
                ...previousValue , 
                coins: previousValue.coins + (idleBanker.expertBanker*numberExpertBanker)
            }
        })
    }

    useEffect(() => {
        if (idleBanker.expertBanker !== 0) {
            clearInterval(intervalExpertBankerId.current)
            intervalExpertBankerId.current = setInterval(additionExpertBanker, 1000)
        }
    },[idleBanker.expertBanker])

    return (
        <div>
            <button onClick={ handleBuyBanker } >buy Miner for 10 coins</button>
            <p>Banquier Junior : { idleBanker.juniorBanker }</p>
            <button onClick={ handleBuyIntermediateBanker } >buy Miner for 1000 coins</button>
            <p>Banquier Intermédiaire : { idleBanker.intermediateBanker }</p>
            <button onClick={ handleBuyExpertBanker } >buy Miner for 1 000 000 coins</button>
            <p>Banquier Expert : { idleBanker.expertBanker }</p>
        </div>
    );
};

export default BuyMiner;