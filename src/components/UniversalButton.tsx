import React from "react";
import s from '../App.module.css';

type UniversalButtonType = {
    name:string
}

export const UniversalButton =(props:UniversalButtonType) => {

    return (
        <div>
            <button>{props.name}</button>
        </div>
    )
}