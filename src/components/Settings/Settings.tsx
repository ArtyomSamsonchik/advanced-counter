import React, {ChangeEvent, useEffect} from 'react';
import s from "./Settings.module.css";
import {ControlButtons} from "../ControlButtons/ControlButtons";
import {Button} from "../Button/Button";
import {StyledBox} from "../StyledBox/StyledBox";
import {Display} from "../Display/Display";

type SettingsProps = {
    minvalue: number
    maxvalue: number
    setCount: (newCount: number) => void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    error: boolean
    setError: (error: boolean) => void
    onTuning: boolean
    setOnTuning: (status: boolean) => void
}

export const Settings: React.FC<SettingsProps> = (props) => {
    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onTuning || props.setOnTuning(true);
        props.setMinValue(+e.currentTarget.value);
    };

    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onTuning || props.setOnTuning(true);
        props.setMaxValue(+e.currentTarget.value);
    };

    const onSetCounterSettingsHandler = () => {
        localStorage.setItem("minvalue", props.minvalue.toString());
        localStorage.setItem("maxvalue", props.maxvalue.toString());

        props.setCount(props.minvalue);
        props.setOnTuning(false);
    };

    useEffect(() => {
        if (props.maxvalue <= props.minvalue) {
            document.getElementById("max")?.classList.add(s.error);
            document.getElementById("min")?.classList.add(s.error);
            props.setError(true);
        } else if (props.minvalue < 0) {
            document.getElementById("min")?.classList.add(s.error);
            props.setError(true);
        } else {
            document.getElementById("max")?.classList.remove(s.error);
            document.getElementById("min")?.classList.remove(s.error);
            props.setError(false);
        }
    }, );


    return (
        <StyledBox className={s.settings}>
            <Display>
                <label className={s.label}>
                    <span>Max value:</span>
                    <input type="number"
                           id={"max"}
                           value={props.maxvalue}
                           onChange={onSetMaxValueHandler}
                    />
                </label>
                <label className={s.label}>
                    <span>Start value:</span>
                    <input type="number"
                           id={"min"}
                           value={props.minvalue}
                           onChange={onSetMinValueHandler}
                    />
                </label>
            </Display>
            <ControlButtons>
                <Button name={"set"}
                        disabled={props.error || !props.onTuning}
                        callback={onSetCounterSettingsHandler}/>
            </ControlButtons>
        </StyledBox>
    );
};