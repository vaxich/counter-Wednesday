import React, { useState } from 'react';
import logo from './logo.svg';
import s from './App.module.css'
import { Counter } from './components/Counter';
import { UniversalButton } from './components/UniversalButton';




function App() {
  const[value, setValue]=useState<number>(0);

const setToLocalStorage = () => {
    localStorage.setItem("counterValue", JSON.stringify(value))
    localStorage.setItem("counterValue + 1", JSON.stringify(value+ 1))
}

const getFromLocalStorage = () => {
  let valueAsString = localStorage.getItem("counterValue")
  if(valueAsString) {
    let newValue = JSON.parse(valueAsString)
    setValue(newValue)
  }
}
const clearLocalStorage = () => {
  localStorage.clear()
  setValue(0);
}

const removeItemLocalStorage = () => {
  localStorage.removeItem('counterValue + 1');
}

  return (
    <div className={s.App}>
      <Counter/>
      <div className={s.buttons}>
        <UniversalButton name={"inc"}/>
        <UniversalButton name={"сбросить"}/>
        <UniversalButton name={"настройки"}/>
        <button onClick={setToLocalStorage}>записать в LocalStorage</button>
        <button onClick={getFromLocalStorage}>получить из LocalStorage</button>
        <button onClick={clearLocalStorage}>очистить LocalStorage</button>
        <button onClick={removeItemLocalStorage}>удалить одно значение LocalStorage</button>
      </div>
    </div>
  );
}

export default App;
