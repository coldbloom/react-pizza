import React from 'react';

const Test = () => {
    const [state, setState] = React.useState('черновик')
    const onchange = () => {
        setState('ноый запрос')
        console.log(state)
    }
    return (
        <div>
            <button onClick={() => onchange()}>Отправить</button>
            <h3>{state}</h3>
        </div>
    );
};

export default Test;