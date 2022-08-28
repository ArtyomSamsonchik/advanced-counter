import React from 'react';
import {ControlButtons} from "../ControlButtons/ControlButtons";
import {Button} from "../Button/Button";

type CounterButtonsProps = {
    count: number
    maxvalue: number
    minvalue: number
    onTuning: boolean
    incCounter: () => void
    resetCounter: () => void
}

export const CounterButtons: React.FC<CounterButtonsProps> = (props) => {
    const onIncCounterClickHandler = () => {
        props.incCounter();
    };

    const onResetCounterClickHandler = () => {
        props.resetCounter();
    };

    return (
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
    );
};