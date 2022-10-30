import React from 'react';
import {ControlButtons} from "../../common/ControlButtons/ControlButtons";
import {Button} from "../../common/Button/Button";

type CounterButtonsProps = {
    count: number
    maxvalue: number
    minvalue: number
    onTuning: boolean
    incCounter: () => void
    resetCounter: () => void
}

export const CounterButtons: React.FC<CounterButtonsProps> = (props) => {
    return (
        <ControlButtons>
            <Button name={"inc"}
                    disabled={props.count === props.maxvalue || props.onTuning}
                    callback={props.incCounter}
            />
            <Button name={"reset"}
                    disabled={props.count === props.minvalue || props.onTuning}
                    callback={props.resetCounter}
            />
        </ControlButtons>
    );
};