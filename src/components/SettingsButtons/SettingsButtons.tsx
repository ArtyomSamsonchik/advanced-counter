import React from 'react';
import {ControlButtons} from "../ControlButtons/ControlButtons";
import {Button} from "../Button/Button";

type SettingsButtonsProps = {
    error: boolean
    onTuning: boolean
    commitSettings: () => void
}

export const SettingsButtons: React.FC<SettingsButtonsProps> = (props) => {
    return (
        <ControlButtons>
            <Button name={"set"}
                    disabled={props.error || !props.onTuning}
                    callback={props.commitSettings}
            />
        </ControlButtons>
    );
};