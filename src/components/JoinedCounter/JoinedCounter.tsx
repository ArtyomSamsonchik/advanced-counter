import React, {ChangeEvent} from 'react';
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
    onTuning: boolean
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setError: (error: boolean) => void
    setOnTuning: (status: boolean) => void
    incCounter: () => void
    resetCounter: () => void
    updateSettings: () => void
}

export const JoinedCounter: React.FC<JoinedCounterProps> = (props) => {
    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = +e.currentTarget.value;
        props.setMinValue(newMinValue);

        const {minValueError, maxValueError} = getInputsErrors(newMinValue, props.maxvalue);
        props.setError(minValueError || maxValueError);
    };

    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value;
        props.setMaxValue(newMaxValue);

        const {minValueError, maxValueError} = getInputsErrors(props.minvalue, newMaxValue);
        props.setError(minValueError || maxValueError);
    };

    return (
        <div className={s.counterContainer}>
            <StyledBox className={s.counter}>
                <SwitchableDisplay minvalue={props.minvalue}
                                   maxvalue={props.maxvalue}
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
                                          updateSettings={props.updateSettings}
                />
            </StyledBox>
        </div>
    );
};