import React from 'react';
import {ControlButtons} from "../common/ControlButtons/ControlButtons";
import {Button} from "../common/Button/Button";

type SwitchableControlButtonsProps = {
    count: number
    minvalue: number
    maxvalue: number
    error: boolean
    incCounter: () => void
    resetCounter: () => void
    onTuning: boolean
    setOnTuning: (status: boolean) => void
    updateSettings: () => void
}

export const SwitchableControlButtons: React.FC<SwitchableControlButtonsProps> = (props) => {

    const CounterButtons = <>
        <Button name={"inc"} disabled={props.count === props.maxvalue} callback={props.incCounter}/>
        <Button name={"reset"} disabled={props.count === props.minvalue} callback={props.resetCounter}/>
    </>

    const settingsButtonCallback = () => props.onTuning
        ? props.updateSettings()
        : props.setOnTuning(true);

    return (
        <ControlButtons>
            {!props.onTuning && CounterButtons}
            <Button name={"set"}
                    disabled={props.error}
                    callback={settingsButtonCallback}/>
        </ControlButtons>
    );
};