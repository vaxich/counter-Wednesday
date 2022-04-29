import React from "react"
import s from '../App.module.css';

type CounterType = {
    value: number
}

export const Counter =(props: CounterType) => {


    return (
        <div>
            <span className={s.counter}>{props.value}</span>
        </div>
    )
}
