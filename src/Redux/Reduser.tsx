import {useState} from "react";

const INCRIMENT = "INCRIMENT"
const RESET = "RESET"
const TOGGLE_STATUS_COUNTER = "TOGGLE_STATUS_COUNTER"
const TOGGLE_BUTTON_COUNTER = "TOGGLE_BUTTON_COUNTER"
const SET_NEW_START_VALUE = "SET_NEW_START_VALUE"
const SET_NEW_END_VALUE = "SET_NEW_END_VALUE"


let initialState ={
    value: 0, // значение счётчика
    startValue:0,// стартовое значение
    endValue: 5, // конечное  значение
    statusCounter: true, //статус переключения на настройки
    buttonCounter: false //статус активности настройки
}

export const reduser =(state = initialState, action:ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "INCRIMENT": {
            return {...state, value: state.value + 1};
        }
        case "RESET": {
            return {...state, value: state.value = 0};
        }
        case "TOGGLE_STATUS_COUNTER": {
            return {...state, statusCounter: !state.statusCounter};
        }
        case "TOGGLE_BUTTON_COUNTER": {
            return {...state, buttonCounter: action.status};
        }
        case "SET_NEW_START_VALUE": {
            return {...state, startValue: action.newStartValue};
        }
        case "SET_NEW_END_VALUE": {
            return {...state, startValue: action.newEndValue};
        }
        default: return  state;
    }
}

type ActionsTypes = ReturnType<typeof incrimentAC | typeof resetAC | typeof toggleStatusCounterAC | typeof toggleButtonCounterAC | typeof setNewStartValueAC | typeof setNewEndValueAC>
type InitialStateType = typeof initialState

export const incrimentAC =() =>  ({ type:  INCRIMENT  } as const)
export const resetAC =() =>  ({ type:  RESET  } as const)
export const toggleStatusCounterAC =() =>  ({ type:  TOGGLE_STATUS_COUNTER  } as const)
export const toggleButtonCounterAC =(status:boolean) =>  ({ type:  TOGGLE_BUTTON_COUNTER , status } as const)
export const setNewStartValueAC =(newStartValue:number) =>  ({ type:  SET_NEW_START_VALUE, newStartValue  } as const)
export const setNewEndValueAC =(newEndValue:number) =>  ({ type:  SET_NEW_END_VALUE , newEndValue } as const)