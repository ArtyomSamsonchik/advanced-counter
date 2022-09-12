import React, {useState} from 'react';
import s from "./JoinedCounter.module.css";
import {StyledBox} from "../common/StyledBox/StyledBox";
import {SwitchableDisplay} from "../SwitchableDisplay/SwitchableDisplay";
import {SwitchableControlButtons} from "../SwitchableControlButtons/SwitchableControlButtons";

export const JoinedCounter = () => {
    const initMinvalue = localStorage.getItem("minvalue");
    const initMaxvalue = localStorage.getItem("maxvalue");

    const [maxvalue, setMaxValue] = useState(Number(initMaxvalue) || 5);
    const [minvalue, setMinValue] = useState(Number(initMinvalue) || 0);
    const [count, setCount] = useState(Number(initMinvalue));
    const [error, setError] = useState(false);
    const [onTuning, setOnTuning] = useState(false);

    const incCounter = () => {
        setCount(count + 1);
    };

    const resetCounter = () => {
        setCount(minvalue);
    };

    const commitSettings = () => {
        localStorage.setItem("minvalue", minvalue.toString());
        localStorage.setItem("maxvalue", maxvalue.toString());

        setCount(minvalue);
        setOnTuning(false);
    };

    // let buttonsContent: JSX.Element | JSX.Element[];

    // if (!onTuning) {
    //     buttonsContent = <>
    //         <Button name={"inc"}
    //                 disabled={count === maxvalue}
    //                 callback={incCounter}
    //         />
    //         <Button name={"reset"}
    //                 disabled={count === minvalue}
    //                 callback={resetCounter}
    //         />
    //         <Button name={"set"}
    //                 disabled={false}
    //                 callback={() => setOnTuning(true)}
    //         />
    //     </>
    // } else {
    //     buttonsContent = <Button name={"set"}
    //                              disabled={error}
    //                              callback={() => {}}
    //     />
    // }

    return (
        <StyledBox className={s.counter}>
            <SwitchableDisplay minvalue={minvalue}
                               maxvalue={maxvalue}
                               setMinValue={setMinValue}
                               setMaxValue={setMaxValue}
                               count={count}
                               error={error}
                               setError={setError}
                               onTuning={onTuning}

            />
            <SwitchableControlButtons count={count}
                                      minvalue={minvalue}
                                      maxvalue={maxvalue}
                                      onTuning={onTuning}
                                      setOnTuning={setOnTuning}
                                      resetCounter={resetCounter}
                                      incCounter={incCounter}
                                      commitSettings={commitSettings}
            />
        </StyledBox>
    );
};