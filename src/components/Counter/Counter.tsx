import React from 'react';
import s from "./Counter.module.css";
import {StyledBox} from "../StyledBox/StyledBox";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import {CounterButtons} from "../CounterButtons/CounterButtons";

type CounterProps = {
    count: number
    error: boolean
    minvalue: number
    maxvalue: number
    onTuning: boolean
    incCounter: () => void
    resetCounter: () => void
}

export const Counter: React.FC<CounterProps> = (props) => {
    return (
        <StyledBox className={s.counter}>
            <CounterDisplay maxvalue={props.maxvalue}
                            count={props.count}
                            error={props.error}
                            onTuning={props.onTuning}
            />
            <CounterButtons count={props.count}
                            maxvalue={props.maxvalue}
                            minvalue={props.minvalue}
                            onTuning={props.onTuning}
                            incCounter={props.incCounter}
                            resetCounter={props.resetCounter}
            />
        </StyledBox>
    );
};