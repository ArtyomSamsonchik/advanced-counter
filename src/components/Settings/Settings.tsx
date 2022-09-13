import React, {ChangeEvent, useState} from 'react';
import s from "./Settings.module.css";
import {StyledBox} from "../common/StyledBox/StyledBox";
import {SettingsInputs} from "./SettingsDisplay/SettingsInputs";
import {SettingsButtons} from "./SettingsButtons/SettingsButtons";
import {getInputErrors} from "../../helpers";

type SettingsProps = {
    minvalue: number
    maxvalue: number
    error: boolean
    setError: (error: boolean) => void
    onTuning: boolean
    setOnTuning: (status: boolean) => void
    updateSettings: (newMinValue: number, newMaxValue: number) => void
}

export const Settings: React.FC<SettingsProps> = (props) => {
    const [localMinValue, setLocalMinValue] = useState(props.minvalue);
    const [localMaxValue, setLocalMaxValue] = useState(props.maxvalue);

    const [minInputError, setMinInputError] = useState(false);
    const [maxInputError, setMaxInputError] = useState(false);

    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setOnTuning(true);

        const newMinValue = +e.currentTarget.value;
        setLocalMinValue(newMinValue);

        const {maxValueError, minValueError} = getInputErrors(newMinValue, localMaxValue);
        setMinInputError(maxValueError || minValueError);
        setMaxInputError(maxValueError);
        props.setError(minValueError || maxValueError);

    };

    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setOnTuning(true);

        const newMaxValue = +e.currentTarget.value;
        setLocalMaxValue(newMaxValue);

        const {maxValueError, minValueError} = getInputErrors(localMinValue, newMaxValue);
        setMinInputError(maxValueError || minValueError);
        setMaxInputError(maxValueError);
        props.setError(minValueError || maxValueError);

    };

    const commitSettings = () => props.updateSettings(localMinValue, localMaxValue);

    return (
        <StyledBox className={s.settings}>
            <SettingsInputs maxvalue={localMaxValue}
                            minvalue={localMinValue}
                            minInputError={minInputError}
                            maxInputError={maxInputError}
                            minValueHandler={onSetMinValueHandler}
                            maxValueHandler={onSetMaxValueHandler}
            />
            <SettingsButtons error={props.error}
                             onTuning={props.onTuning}
                             commitSettings={commitSettings}
            />
        </StyledBox>
    );
};