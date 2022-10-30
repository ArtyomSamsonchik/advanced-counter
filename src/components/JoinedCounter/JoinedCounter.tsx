import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./JoinedCounter.module.css";
import {StyledBox} from "../common/StyledBox/StyledBox";
import {SwitchableDisplay} from "../SwitchableDisplay/SwitchableDisplay";
import {SwitchableControlButtons} from "../SwitchableControlButtons/SwitchableControlButtons";
import {getInputsErrors} from "../../helpers";

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

    useEffect(() => {
        setLocalMinValue(props.minvalue)
        setLocalMaxValue(props.maxvalue)
    }, [props.minvalue, props.maxvalue]);

    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = +e.currentTarget.value;
        setLocalMinValue(newMinValue);

        const {maxValueError, minValueError} = getInputsErrors(newMinValue, localMaxValue);
        props.setError(minValueError || maxValueError);
    };

    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value;
        setLocalMaxValue(newMaxValue);

        const {maxValueError, minValueError} = getInputsErrors(localMinValue, newMaxValue);
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