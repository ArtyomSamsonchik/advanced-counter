import React from 'react';
import s from "./SplitedCounter.module.css";
import {Settings} from "../Settings/Settings";
import {Counter} from "../Counter/Counter";

type SplitedCounterProps = {
    minvalue: number
    maxvalue:number
    count: number
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
        <div className={s.counterContainer}>
            <Settings minvalue={props.minvalue}
                      maxvalue={props.maxvalue}
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