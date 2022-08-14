import React from "react"
import s from '../App.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/Redux-store";



export const Counter =() => {

    const value =  useSelector<AppRootStateType, number>( state => state.reduser.value)

    return (
        <div>
            <span className={s.counter}>{value}</span>
        </div>
    )
}
