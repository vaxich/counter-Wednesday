import React from 'react';
import s from './App.module.css'
import {Counter} from './components/Counter';
import {UniversalButton} from './components/UniversalButton';
import {SetCounter} from './components/SetCounter';
import {
    applySettingsAC,
    incrimentAC,
    resetAC,
    toggleStatusCounterAC
} from "./Redux/Reduser";
import {AppRootStateType} from "./Redux/Redux-store";
import {useDispatch, useSelector} from "react-redux";


function App() {


    const dispatch = useDispatch()

    const value = useSelector<AppRootStateType, number>(state => state.reduser.value)
    const startValue = useSelector<AppRootStateType, number>(state => state.reduser.startValue)
    const endValue = useSelector<AppRootStateType, number>(state => state.reduser.endValue)
    const statusCounter = useSelector<AppRootStateType, boolean>(state => state.reduser.statusCounter)
    const buttonCounter = useSelector<AppRootStateType, boolean>(state => state.reduser.buttonCounter)


    const incHandler = () => {// функция инкримента
        dispatch(incrimentAC())

    }
    const resetHandler = () => { //функция сброcа счётчика
        dispatch(resetAC())

    }
    const setHandler = () => { //функция переключения на настройки
        dispatch(toggleStatusCounterAC())
        dispatch(applySettingsAC())

    }


    return (
        <div className={s.App}>
            {statusCounter ? <Counter/> : <SetCounter/>}
            <div className={s.buttons}>
                <UniversalButton disabled={value >= endValue || !statusCounter} name={"inc"}
                                 callBack={incHandler}/>
                <UniversalButton disabled={value <= startValue || !statusCounter}
                                 name={"сбросить"} callBack={resetHandler}/>
                <UniversalButton  disabled={buttonCounter} name={statusCounter ? "настройки" : "применить"} callBack={setHandler}/>

            </div>
        </div>
    );
}

export default App;
