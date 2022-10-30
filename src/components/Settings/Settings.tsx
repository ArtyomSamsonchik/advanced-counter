import React, {ChangeEvent} from 'react';
import s from "./Settings.module.css";
import {StyledBox} from "../common/StyledBox/StyledBox";
import {SettingsInputs} from "./SettingsDisplay/SettingsInputs";
import {SettingsButtons} from "./SettingsButtons/SettingsButtons";
import {getInputsErrors} from "../../helpers";

type SettingsProps = {
    minvalue: number
    maxvalue: number
    error: boolean
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setError: (error: boolean) => void
    onTuning: boolean
    setOnTuning: (status: boolean) => void
    updateSettings: () => void
}

export const Settings: React.FC<SettingsProps> = (props) => {
    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setOnTuning(true);

        const newMinValue = +e.currentTarget.value;
        props.setMinValue(newMinValue);

        const {maxValueError, minValueError} = getInputsErrors(newMinValue, props.maxvalue);
        props.setError(minValueError || maxValueError);
    };

    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setOnTuning(true);

        const newMaxValue = +e.currentTarget.value;
        props.setMaxValue(newMaxValue);

        const {minValueError, maxValueError} = getInputsErrors(props.minvalue, newMaxValue);
        props.setError(minValueError || maxValueError);
    };

    return (
        <StyledBox className={s.settings}>
            <SettingsInputs maxvalue={props.maxvalue}
                            minvalue={props.minvalue}
                            minValueHandler={onSetMinValueHandler}
                            maxValueHandler={onSetMaxValueHandler}
            />
            <SettingsButtons error={props.error}
                             onTuning={props.onTuning}
                             updateSettings={props.updateSettings}
            />
        </StyledBox>
    );
};