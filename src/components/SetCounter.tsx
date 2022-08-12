import React, { ChangeEvent } from "react"
import s from '../App.module.css';

type SetCounterType = {
    startValue: number
    endValue: number
    setStartValue: (startValue: number) => void
    setEndValue: (endValue: number) => void
    setButtonCounter:(buttonCounter:boolean) => void
}

export const SetCounter = (props: SetCounterType) => {

    if(props.startValue >= props.endValue) {
        props.setButtonCounter(true)
    } else {
        props.setButtonCounter(false)
    }


    const onChangeInputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = Number(e.currentTarget.value)
        props.setStartValue(newStartValue);
        localStorage.setItem("startValue", JSON.stringify(newStartValue))
    }
    const onChangeInputEndValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newEndValue = Number(e.currentTarget.value)
        props.setEndValue(newEndValue);
        localStorage.setItem("endValue", JSON.stringify(newEndValue))

    }
    return (
        <div className={s.counter}>
            <div>
                <span> min </span>
                <input className={props.startValue >= props.endValue ?  s.error : ""} value={props.startValue} type="number" min="0" max="20" onChange={onChangeInputStartValueHandler} />
            </div>
            <div>
                <span> max </span>
                <input className={props.startValue >= props.endValue ?  s.error : ""} value={props.endValue} type="number" min="0" max="20" onChange={onChangeInputEndValueHandler} />
            </div>


        </div>
    )
}
