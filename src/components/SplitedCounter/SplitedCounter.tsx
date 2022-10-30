import React from 'react';
import s from "./SplitedCounter.module.css";
import {Settings} from "../Settings/Settings";
import {Counter} from "../Counter/Counter";

type SplitedCounterProps = {
    minvalue: number
    maxvalue:number
    count: number
    error: boolean
    onTuning: boolean
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setError: (error: boolean) => void
    setOnTuning: (status: boolean) => void
    incCounter: () => void
    resetCounter: () => void
    updateSettings: () => void
}

export const SplitedCounter: React.FC<SplitedCounterProps> = (props) => {
    return (
        <div className={s.counterContainer}>
            <Settings minvalue={props.minvalue}
                      maxvalue={props.maxvalue}
                      error={props.error}
                      onTuning={props.onTuning}
                      setMinValue={props.setMinValue}
                      setMaxValue={props.setMaxValue}
                      setError={props.setError}
                      setOnTuning={props.setOnTuning}
                      updateSettings={props.updateSettings}
            />
            <Counter count={props.count}
                     minvalue={props.minvalue}
                     maxvalue={props.maxvalue}
                     error={props.error}
                     onTuning={props.onTuning}
                     incCounter={props.incCounter}
                     resetCounter={props.resetCounter}
            />
        </div>
    );
};