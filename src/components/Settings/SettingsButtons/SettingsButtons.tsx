import React from 'react';
import {ControlButtons} from "../../common/ControlButtons/ControlButtons";
import {Button} from "../../common/Button/Button";

type SettingsButtonsProps = {
    error: boolean
    onTuning: boolean
    updateSettings: () => void
}

export const SettingsButtons: React.FC<SettingsButtonsProps> = (props) => {
    return (
        <ControlButtons>
            <Button name={"set"}
                    disabled={props.error || !props.onTuning}
                    callback={props.updateSettings}
            />
        </ControlButtons>
    );
};