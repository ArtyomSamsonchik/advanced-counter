import React, {ChangeEvent, useEffect} from 'react';
import {Display} from "../common/Display/Display";
import s from "./SwitchableDisplay.module.css";

type SwitchableDisplayProps = {
    minvalue: number
    maxvalue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    count: number
    onTuning: boolean
    error: boolean
    setError: (errorStatus: boolean) => void
}

export const SwitchableDisplay: React.FC<SwitchableDisplayProps> = (props) => {
    const onSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value);
    }
    const onSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value);
    }

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
    });

    let displayContent: JSX.Element | JSX.Element[];

    if (props.onTuning) {
        displayContent = <>
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
            </>;
    } else {
        displayContent = <div>{props.count}</div>;
    }

    return (
        <Display>
            {displayContent}
        </Display>
    );
};