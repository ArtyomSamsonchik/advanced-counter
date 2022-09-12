import React, {useEffect, useState} from 'react';
import s from "./SplitedCounter.module.css";
import {Settings} from "../components/Settings/Settings";
import {Counter} from "../components/Counter/Counter";
import {getFromStorage, saveToStorage} from "../helpers";

type CounterData = {
    minvalue: number
    maxvalue: number
}

export const SplitedCounter = () => {
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
        <div className={s.counter}>
            <Settings minvalue={minvalue}
                      maxvalue={maxvalue}
                      setMinValue={setMinValue}
                      setMaxValue={setMaxValue}
                      error={error}
                      setError={setError}
                      onTuning={onTuning}
                      setOnTuning={setOnTuning}
                      updateSettings={updateCounterSettings}
            />
            <Counter count={count}
                     error={error}
                     onTuning={onTuning}
                     incCounter={incCounter}
                     resetCounter={resetCounter}
                     minvalue={minvalue}
                     maxvalue={maxvalue}
            />
        </div>
    );
};