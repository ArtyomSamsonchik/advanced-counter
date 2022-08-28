import React, {useState} from 'react';
import s from "./SplitedCounter.module.css";
import {Settings} from "../components/Settings/Settings";
import {Counter} from "../components/Counter/Counter";

type CounterData = {
    minvalue: number
    maxvalue: number
}

export const SplitedCounter = () => {
    const initCounterData = JSON.parse(localStorage.getItem("splitCounter") || "{}");
    const counterData: CounterData = initCounterData || {minvalue: 0, maxvalue: 5};

    const [maxvalue, setMaxValue] = useState(counterData.maxvalue);
    const [minvalue, setMinValue] = useState(counterData.minvalue);

    const [count, setCount] = useState(minvalue);
    const [error, setError] = useState(false);
    const [onTuning, setOnTuning] = useState(false);

    const incCounter = () => {
        setCount(count + 1);
    };

    const resetCounter = () => {
        setCount(minvalue);
    };

    const commitCounterSettings = () => {
        localStorage.setItem("splitCounter", JSON.stringify({minvalue, maxvalue}));
        setCount(minvalue);
        setOnTuning(false);
    }


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
                      commitSettings={commitCounterSettings}
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