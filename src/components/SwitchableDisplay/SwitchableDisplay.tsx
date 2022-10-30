import React, {ChangeEvent} from 'react';
// import s from "./SwitchableDisplay.module.css";
import {SettingsInputs} from "../Settings/SettingsDisplay/SettingsInputs";
import {CounterDisplay} from "../Counter/CounterDisplay/CounterDisplay";

type SwitchableDisplayProps = {
    minvalue: number
    maxvalue: number
    count: number
    onTuning: boolean
    minValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SwitchableDisplay: React.FC<SwitchableDisplayProps> = (props) => {
    const Settings = <SettingsInputs minvalue={props.minvalue}
                                     maxvalue={props.maxvalue}
                                     minValueHandler={props.minValueHandler}
                                     maxValueHandler={props.maxValueHandler}
    />
    const Counter = <CounterDisplay count={props.count}
                                    maxvalue={props.maxvalue}
                                    error={false} onTuning={false}
    />

    return props.onTuning ? Settings : Counter;
};