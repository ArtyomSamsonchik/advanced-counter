import React from 'react';
import s from "./JoinedCounter.module.css";
import {StyledBox} from "../common/StyledBox/StyledBox";
import {SwitchableDisplay} from "../SwitchableDisplay/SwitchableDisplay";
import {SwitchableControlButtons} from "../SwitchableControlButtons/SwitchableControlButtons";

export const JoinedCounter = () => {

    return (
        <StyledBox className={s.counter}>
            {/*<SwitchableDisplay minvalue={minvalue}*/}
            {/*                   maxvalue={maxvalue}*/}
            {/*                   setMinValue={setMinValue}*/}
            {/*                   setMaxValue={setMaxValue}*/}
            {/*                   count={count}*/}
            {/*                   error={error}*/}
            {/*                   setError={setError}*/}
            {/*                   onTuning={onTuning}*/}

            {/*/>*/}
            {/*<SwitchableControlButtons count={count}*/}
            {/*                          minvalue={minvalue}*/}
            {/*                          maxvalue={maxvalue}*/}
            {/*                          onTuning={onTuning}*/}
            {/*                          setOnTuning={setOnTuning}*/}
            {/*                          resetCounter={resetCounter}*/}
            {/*                          incCounter={incCounter}*/}
            {/*                          commitSettings={commitSettings}*/}
            {/*/>*/}
        </StyledBox>
    );
};