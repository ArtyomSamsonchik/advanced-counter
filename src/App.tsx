import React, {useEffect, useState} from 'react';
import s from "./App.module.css";
import {SplitedCounter} from "./SplitedCounter/SplitedCounter";
import {getFromStorage, saveToStorage} from "./helpers";

type CounterData = {
    minvalue: number
    maxvalue: number
}

function App() {
    const initData = getFromStorage<CounterData>("counter", {minvalue: 0, maxvalue: 5});

    const [minvalue, setMinValue] = useState(initData.minvalue);
    const [maxvalue, setMaxValue] = useState(initData.maxvalue);
    const [count, setCount] = useState(minvalue);

    const [error, setError] = useState(false);
    const [onTuning, setOnTuning] = useState(false);

    const incCounter = () => {
        setCount(count + 1);
    };

    const resetCounter = () => {
        setCount(minvalue);
    };

    const updateCounterSettings = (newMinValue: number, newMaxValue: number) => {
        setMinValue(newMinValue);
        setMaxValue(newMaxValue);
        setOnTuning(false);
    };

    useEffect(() => {
        saveToStorage<CounterData>("counter", {minvalue, maxvalue});
        setCount(minvalue)
    }, [minvalue, maxvalue]);

    return (
        <div className={s.app}>
            <SplitedCounter minvalue={minvalue}
                            maxvalue={maxvalue}
                            setMinValue={setMinValue}
                            setMaxValue={setMaxValue}
                            count={count}
                            setCount={setCount}
                            error={error}
                            setError={setError}
                            onTuning={onTuning}
                            setOnTuning={setOnTuning}
                            incCounter={incCounter}
                            resetCounter={resetCounter}
                            updateSettings={updateCounterSettings}
            />
            {/*<JoinedCounter/>*/}
        </div>
    );
}

export default App;
