import React from 'react';
import {ControlButtons} from "../common/ControlButtons/ControlButtons";
import {Button} from "../common/Button/Button";

type SwitchableControlButtonsProps = {
    count: number
    maxvalue: number
    minvalue: number
    incCounter: () => void
    resetCounter: () => void
    onTuning: boolean
    setOnTuning: (status: boolean) => void
    commitSettings: () => void
}

export const SwitchableControlButtons: React.FC<SwitchableControlButtonsProps> = (props) => {

    let buttonsContent: JSX.Element | JSX.Element[];

    if (props.onTuning) {
        buttonsContent = <Button name={"set"}
                                 disabled={false}
                                 callback={props.commitSettings}
        />
    } else {
        buttonsContent = <>
            <Button name={"inc"}
                    disabled={props.count === props.maxvalue}
                    callback={props.incCounter}
            />
            <Button name={"reset"}
                    disabled={props.count === props.minvalue}
                    callback={props.resetCounter}
            />
            <Button name={"set"}
                    disabled={false}
                    callback={() => props.setOnTuning(true)}
            />
        </>
    }

    return (
        <ControlButtons>
            {buttonsContent}
        </ControlButtons>
    );
};