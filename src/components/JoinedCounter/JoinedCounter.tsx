import React, {ChangeEvent, useState} from 'react';
import s from "./JoinedCounter.module.css";
import {StyledBox} from "../common/StyledBox/StyledBox";
import {SwitchableDisplay} from "../SwitchableDisplay/SwitchableDisplay";
import {SwitchableControlButtons} from "../SwitchableControlButtons/SwitchableControlButtons";
import {getInputErrors} from "../../helpers";

type JoinedCounterProps = {
    minvalue: number
    maxvalue: number
    count: number
    error: boolean
    setError: (error: boolean) => void
    onTuning: boolean
    setOnTuning: (status: boolean) => void
    incCounter: () => void
    resetCounter: () => void
    updateSettings: (newMinValue: number, newMaxValue: number) => void
}

export const JoinedCounter: React.FC<JoinedCounterProps> = (props) => {
    const [localMinValue, setLocalMinValue] = useState(props.minvalue);
    const [localMaxValue, setLocalMaxValue] = useState(props.maxvalue);

    const [minInputError, setMinInputError] = useState(false);
    const [maxInputError, setMaxInputError] = useState(false);

    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = +e.currentTarget.value;
        setLocalMinValue(newMinValue);

        const {maxValueError, minValueError} = getInputErrors(newMinValue, localMaxValue);
        setMinInputError(maxValueError || minValueError);
        setMaxInputError(maxValueError);
        props.setError(minValueError || maxValueError);

    };

    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value;
        setLocalMaxValue(newMaxValue);

        const {maxValueError, minValueError} = getInputErrors(localMinValue, newMaxValue);
        setMinInputError(maxValueError || minValueError);
        setMaxInputError(maxValueError);
        props.setError(minValueError || maxValueError);

    };

    const commitSettings = () => props.updateSettings(localMinValue, localMaxValue);

    return (
        <div className={s.counterContainer}>
            <StyledBox className={s.counter}>
            <SwitchableDisplay minvalue={localMinValue}
                               maxvalue={localMaxValue}
                               count={props.count}
                               onTuning={props.onTuning}
                               maxInputError={maxInputError}
                               minInputError={minInputError}
                               minValueHandler={onSetMinValueHandler}
                               maxValueHandler={onSetMaxValueHandler}
            />
            <SwitchableControlButtons count={props.count}
                                      minvalue={props.minvalue}
                                      maxvalue={props.maxvalue}
                                      error={props.error}
                                      onTuning={props.onTuning}
                                      setOnTuning={props.setOnTuning}
                                      incCounter={props.incCounter}
                                      resetCounter={props.resetCounter}
                                      commitSettings={commitSettings}
            />
        </StyledBox>
        </div>
    );
};