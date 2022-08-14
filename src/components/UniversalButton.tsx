import React, {MouseEventHandler} from "react";
import s from '../App.module.css';


type UniversalButtonType = {
    name:string
    disabled?:boolean
    type?: "inc" | "reset" | "set"
    callBack?: () => void
    setButtonCounter?: () => void
}

export const UniversalButton =(props:UniversalButtonType) => {


    return (
        <div>
            <button className={s.btn} disabled={props.disabled} onClick={props.callBack}>{props.name}</button>
        </div>
    )
}