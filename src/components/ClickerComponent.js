import React from 'react';

const ClickerComponent = ({money, setMoney}) => {
    
    const handleChangeCoins = () => {
        setMoney({...money ,coins: money.coins + 1})
    }

    return (
        <div>
            <button onClick={ handleChangeCoins }>Click</button>
            <p>{ money.coins }</p>
        </div>
    );
};

export default ClickerComponent;

// const clickit = () => {
//     const button = document.getElementById('button');
//     const worker = document.getElementById('worker');
//     for (let index = 0; index < 50; index++) {
//         button.click()
//         console.log(button)
//     }

//     document.addEventListener('mousemove', () => {
//         button.click()
//         worker.click()
//     })
// } 