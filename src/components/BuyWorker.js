import React, { useEffect, useRef } from 'react';

const BuyWorker = ({money , setMoney , typeMoney, idleWorker , setIdleWorker, typeJuniorWorker, typeIntermediateWorker, typeExpertWorker }) => {

    const intervalJuniorWorkerId = useRef(null)
    const intervalIntermediateWorkerId = useRef(null)
    const intervalExpertWorkerId = useRef(null)

    const numberIntermediateWorker = 15 ;
    const numberExpertWorker = 200 ;
 

    const handleBuyJuniorWorker = () => {
        if (money[typeMoney] >= 10) {
            setMoney({...money ,[typeMoney]: money[typeMoney] - 10})
            setIdleWorker({...idleWorker, [typeJuniorWorker]: idleWorker[typeJuniorWorker] + 1 })
        }
    }

    const additionMiner = () => {
        setMoney((previousValue) => {
            return {
                ...previousValue , 
                [typeMoney]: previousValue[typeMoney] + idleWorker[typeJuniorWorker]
            }
        })
    }

    useEffect(() => {
        if (idleWorker[typeJuniorWorker] !== 0) {
            clearInterval(intervalJuniorWorkerId.current)
            intervalJuniorWorkerId.current = setInterval(additionMiner, 1000)
        }
        
    },[idleWorker[typeJuniorWorker]])





    const handleBuyIntermediateWorker = () => {
        if (money[typeMoney] >= 1000) {
            setMoney({...money ,[typeMoney]: money[typeMoney] - 1000})
            setIdleWorker({...idleWorker, [typeIntermediateWorker]: idleWorker[typeIntermediateWorker] + 1 })
        }
    }

    const additionIntermediateWorker = () => {
        setMoney((previousValue) => {
            return {
                ...previousValue , 
                [typeMoney]: previousValue[typeMoney] + (idleWorker[typeIntermediateWorker]*numberIntermediateWorker)
            }
        })
    }

    useEffect(() => {
        if (idleWorker[typeIntermediateWorker] !== 0) {
            clearInterval(intervalIntermediateWorkerId.current)
            intervalIntermediateWorkerId.current = setInterval(additionIntermediateWorker, 1000)
        }
    },[idleWorker[typeIntermediateWorker]])

    const handleBuyExpertWorker = () => {
        if (money[typeMoney] >= 1000000) {
            setMoney({...money ,[typeMoney]: money[typeMoney] - 1000000})
            setIdleWorker({...idleWorker, [typeExpertWorker]: idleWorker[typeExpertWorker] + 1 })
        }
    }

    const additionExpertWorker = () => {
        setMoney((previousValue) => {
            return {
                ...previousValue , 
                [typeMoney]: previousValue[typeMoney] + (idleWorker[typeExpertWorker]*numberExpertWorker)
            }
        })
    }

    useEffect(() => {
        if (idleWorker[typeExpertWorker] !== 0) {
            clearInterval(intervalExpertWorkerId.current)
            intervalExpertWorkerId.current = setInterval(additionExpertWorker, 1000)
        }
    },[idleWorker[typeExpertWorker]])

    return (
        <div className='cardWorker'>
            <div className="priceWorker">
                <p>JuniorWorker : { idleWorker[typeJuniorWorker] }</p>
                <button onClick={ handleBuyJuniorWorker } >10 {[typeMoney]}</button>
            </div>
            <div className="priceWorker">
                <p> Worker : <br></br> { idleWorker[typeIntermediateWorker]}</p>
                <button onClick={ handleBuyIntermediateWorker } >1000 {[typeMoney]}</button>
            </div>
            <div className="priceWorker">
                <p>Expert Worker : { idleWorker[typeExpertWorker] }</p>
                <button onClick={ handleBuyExpertWorker } >1 000 000 {[typeMoney]}</button>
            </div>
        </div>
    );
};

export default BuyWorker;