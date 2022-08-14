import React, { ChangeEvent } from "react"
import s from '../App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/Redux-store";
import { setNewEndValueAC, setNewStartValueAC, toggleButtonCounterAC} from "../Redux/Reduser";

export const SetCounter = () => {

    const dispatch = useDispatch()

    const startValue = useSelector<AppRootStateType, number>(state => state.reduser.startValue)
    const endValue = useSelector<AppRootStateType, number>(state => state.reduser.endValue)


    if(startValue >= endValue) {
        dispatch(toggleButtonCounterAC(true))

    } else {
        dispatch(toggleButtonCounterAC(false))
    }


    const onChangeInputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = Number(e.currentTarget.value)
        dispatch(setNewStartValueAC(newStartValue))

    }
    const onChangeInputEndValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newEndValue = Number(e.currentTarget.value)
        dispatch(setNewEndValueAC(newEndValue))


    }
    return (
        <div className={s.counter}>
            <div>
                <span> min </span>
                <input className={startValue >= endValue ?  s.error : ""} value={startValue} type="number" min="0" max="20" onChange={onChangeInputStartValueHandler} />
            </div>
            <div>
                <span> max </span>
                <input className={startValue >= endValue ?  s.error : ""} value={endValue} type="number" min="0" max="20" onChange={onChangeInputEndValueHandler} />
            </div>


        </div>
    )
}
