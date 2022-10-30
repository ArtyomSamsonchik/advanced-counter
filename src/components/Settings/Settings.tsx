import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Settings.module.css";
import {StyledBox} from "../common/StyledBox/StyledBox";
import {SettingsInputs} from "./SettingsDisplay/SettingsInputs";
import {SettingsButtons} from "./SettingsButtons/SettingsButtons";
import {getInputsErrors} from "../../helpers";

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

    useEffect(() => {
        setLocalMinValue(props.minvalue)
        setLocalMaxValue(props.maxvalue)
    }, [props.minvalue, props.maxvalue]);

    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setOnTuning(true);

        const newMinValue = +e.currentTarget.value;
        setLocalMinValue(newMinValue);

        const {maxValueError, minValueError} = getInputsErrors(newMinValue, localMaxValue);
        props.setError(minValueError || maxValueError);

    };

    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setOnTuning(true);

        const newMaxValue = +e.currentTarget.value;
        setLocalMaxValue(newMaxValue);

        const {maxValueError, minValueError} = getInputsErrors(localMinValue, newMaxValue);
        props.setError(minValueError || maxValueError);

    };

    const commitSettings = () => props.updateSettings(localMinValue, localMaxValue);

    return (
        <StyledBox className={s.settings}>
            <SettingsInputs maxvalue={localMaxValue}
                            minvalue={localMinValue}
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