import React from 'react';
import s from "./Counter.module.css";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import {ControlButtons} from "../ControlButtons/ControlButtons";
import {StyledBox} from "../StyledBox/StyledBox";

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
    const onIncCounterClickHandler = () => {
        props.incCounter();
    };

    const onResetCounterClickHandler = () => {
        props.resetCounter();
    };

    const countClassName =
        `${s.count} ${props.count === props.maxvalue || props.error ? s.error : ""}`;

    let displayMessage: string;

    if (props.error) {
        displayMessage = "Incorrect value!";
    } else if (props.onTuning){
        displayMessage  ="Enter values and press 'set'";
    } else {
        displayMessage = props.count.toString();
    }


    return (
        <StyledBox className={s.counter}>
                <Display>
                    <div className={countClassName}>{displayMessage}</div>
                </Display>
            <ControlButtons>
                <Button name={"inc"}
                        disabled={props.count === props.maxvalue || props.onTuning}
                        callback={onIncCounterClickHandler}
                />
                <Button name={"reset"}
                        disabled={props.count === props.minvalue || props.onTuning}
                        callback={onResetCounterClickHandler}
                />
            </ControlButtons>
        </StyledBox>
    );
};