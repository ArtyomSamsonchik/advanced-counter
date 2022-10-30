import React, {ChangeEvent} from 'react';
import s from "./Input.module.css";

type InputProps = {
    name: string
    value: number
    inputError: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props) => {
    return (
        <label className={s.label}>
            <span>{props.name}</span>
            <input type="number"
                   className={props.inputError ? s.error : ""}
                   value={props.value}
                   onChange={props.onChange}
            />
        </label>
    );
};