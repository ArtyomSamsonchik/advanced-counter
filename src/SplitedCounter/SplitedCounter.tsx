import React from 'react';
import s from "./SplitedCounter.module.css";
import {Settings} from "../components/Settings/Settings";
import {Counter} from "../components/Counter/Counter";

type SplitedCounterProps = {
    minvalue: number
    maxvalue:number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    count: number
    setCount: (value: number) => void
    error: boolean
    setError: (error: boolean) => void
    onTuning: boolean
    setOnTuning: (status: boolean) => void
    incCounter: () => void
    resetCounter: () => void
    updateSettings: (newMinValue: number, newMaxValue: number) => void
}

export const SplitedCounter: React.FC<SplitedCounterProps> = (props) => {
    return (
        <div className={s.counter}>
            <Settings minvalue={props.minvalue}
                      maxvalue={props.maxvalue}
                      setMinValue={props.setMinValue}
                      setMaxValue={props.setMaxValue}
                      error={props.error}
                      setError={props.setError}
                      onTuning={props.onTuning}
                      setOnTuning={props.setOnTuning}
                      updateSettings={props.updateSettings}
            />
            <Counter count={props.count}
                     error={props.error}
                     onTuning={props.onTuning}
                     incCounter={props.incCounter}
                     resetCounter={props.resetCounter}
                     minvalue={props.minvalue}
                     maxvalue={props.maxvalue}
            />
        </div>
    );
};