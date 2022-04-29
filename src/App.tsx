import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import s from './App.module.css'
import { Counter } from './components/Counter';
import { UniversalButton } from './components/UniversalButton';
import { SetCounter } from './components/SetCounter';




function App() {
  const [value, setValue] = useState<number>(0); // значение счётчика
  const [startValue, setStartValue] = useState<number>(0); // стартовое значение счётчика
  const [endValue, setEndValue] = useState<number>(5); //конечное значение счётчика
  const [statusCounter, setStatusCounter] = useState<boolean>(true); //статус переключения на настройки
  const [buttonCounter, setButtonCounter] = useState<boolean>(false); //статус активности настройки



  useEffect(() => {
    
    let valueAsString = localStorage.getItem("counterValue")
    let startValueAsString = localStorage.getItem("startValue")
    let endValueAsString = localStorage.getItem("endValue")
    
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
      if(startValueAsString) {
      let newStartValue = JSON.parse(startValueAsString)
      setStartValue(newStartValue)
    }
    if (endValueAsString) {
      let newEndValue = JSON.parse(endValueAsString)
      setEndValue(newEndValue)
    }
  }, [])

  // useEffect(() => {
  //   console.log("Secons", value)
  //   localStorage.setItem("counterValue", JSON.stringify(value))
  // }, [value])

  const incHandler = () => {// функция инкримента

    setValue(value + 1)
    localStorage.setItem("counterValue", JSON.stringify(value + 1))
  }
  const resetHandler = () => { //функция сброcа счётчика
    setValue(startValue)
    localStorage.setItem("counterValue", JSON.stringify(startValue))
    localStorage.setItem("startValue", JSON.stringify(startValue))
    localStorage.setItem("endValue", JSON.stringify(endValue))
  }
  const setHandler = () => { //функция переключения на настройки
    setStatusCounter(!statusCounter)
    setValue(startValue)
    localStorage.setItem("counterValue", JSON.stringify(startValue))
     localStorage.setItem("startValue", JSON.stringify(startValue))
     localStorage.setItem("endValue", JSON.stringify(endValue))
  }
 
  // const setToLocalStorage = () => { //записать в localStorage
  //     localStorage.setItem("counterValue", JSON.stringify(value))

  // }

  // const getFromLocalStorage = () => {//получить из localStorage
  //   let valueAsString = localStorage.getItem("counterValue")
  //   if(valueAsString) {
  //     let newValue = JSON.parse(valueAsString)
  //     setValue(newValue)
  //   }
  // }
  // const clearLocalStorage = () => {//полностью очистить localStorage
  //   localStorage.clear()
  //   setValue(0);
  // }

  // const removeItemLocalStorage = () => {//удалить определённый item в localStorage
  //   localStorage.removeItem('counterValue + 1');
  // }

  return (
    <div className={s.App}>
      {statusCounter ? <Counter value={value} /> : <SetCounter setStartValue={setStartValue} setEndValue = {setEndValue} startValue={startValue} endValue={endValue} setButtonCounter={setButtonCounter}/>}
      <div className={s.buttons}>
        <UniversalButton disabled={true ? value>=endValue || statusCounter===false: false} name={"inc"}  callBack={incHandler} />
        <UniversalButton disabled={true ? value <= startValue || statusCounter===false : false } name={"сбросить"}  callBack={resetHandler} />
        <UniversalButton disabled={buttonCounter} name={statusCounter ? "настройки": "применить"}  callBack={setHandler} />
        {/* <button onClick={setToLocalStorage}>записать в LocalStorage</button>
        <button onClick={getFromLocalStorage}>получить из LocalStorage</button>
        <button onClick={clearLocalStorage}>очистить LocalStorage</button>
        <button onClick={removeItemLocalStorage}>удалить одно значение LocalStorage</button> */}
      </div>
    </div>
  );
}

export default App;
