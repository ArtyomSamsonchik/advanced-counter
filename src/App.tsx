import React, {useState} from 'react';
import s from "./App.module.css";
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    const initMinvalue = localStorage.getItem("minvalue");
    const initMaxvalue = localStorage.getItem("maxvalue");

    const [maxvalue, setMaxValue] = useState(Number(initMaxvalue) || 5);
    const [minvalue, setMinValue] = useState(Number(initMinvalue) || 0);
    const [count, setCount] = useState(Number(initMinvalue));
    const [error, setError] = useState(false);
    const [onTuning, setOnTuning] = useState(false);

    const incCounter = () => {
        setCount(count + 1);
    };

    const resetCounter = () => {
        setCount(minvalue);
    };


    return (
        <div className={s.app}>
            <Settings minvalue={minvalue}
                      maxvalue={maxvalue}
                      setMinValue={setMinValue}
                      setMaxValue={setMaxValue}
                      setCount={setCount}
                      error={error}
                      setError={setError}
                      onTuning={onTuning}
                      setOnTuning={setOnTuning}
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
}

export default App;
