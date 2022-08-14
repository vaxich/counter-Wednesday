const INCRIMENT = "INCRIMENT"
const RESET = "RESET"
const TOGGLE_STATUS_COUNTER = "TOGGLE_STATUS_COUNTER"
const TOGGLE_BUTTON_COUNTER = "TOGGLE_BUTTON_COUNTER"
const SET_NEW_START_VALUE = "SET_NEW_START_VALUE"
const SET_NEW_END_VALUE = "SET_NEW_END_VALUE"
const APPLY_SETTINGS = "APPLY_SETTINGS"


let initialState = {
    value: 0, // значение счётчика
    startValue: 0,// стартовое значение
    endValue: 5, // конечное  значение
    statusCounter: true, //статус переключения на настройки
    buttonCounter: false //статус активности настройки
}

export const reduser = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "INCRIMENT": {
            return {...state, value: state.value + 1};
        }
        case "RESET": {
            return {...state, value: state.startValue};
        }
        case "TOGGLE_STATUS_COUNTER": {
            return {...state, statusCounter: !state.statusCounter};
        }
        case "TOGGLE_BUTTON_COUNTER":
        case "SET_NEW_START_VALUE":
        case "SET_NEW_END_VALUE":
            return {...state, ...action.payload};
        case "APPLY_SETTINGS": {
            return {...state, value: state.startValue};
        }
        default:
            return state;
    }
}

type ActionsTypes = ReturnType<typeof incrimentAC | typeof resetAC | typeof toggleStatusCounterAC | typeof toggleButtonCounterAC
    | typeof setNewStartValueAC | typeof setNewEndValueAC | typeof applySettingsAC>
type InitialStateType = typeof initialState

export const incrimentAC = () => ({type: INCRIMENT} as const)
export const resetAC = () => ({type: RESET} as const)
export const toggleStatusCounterAC = () => ({type: TOGGLE_STATUS_COUNTER} as const)
export const toggleButtonCounterAC = (buttonCounter: boolean) => ({
    type: TOGGLE_BUTTON_COUNTER,
    payload: {buttonCounter}
} as const)
export const setNewStartValueAC = (startValue: number) => ({type: SET_NEW_START_VALUE, payload: {startValue}} as const)
export const setNewEndValueAC = (endValue: number) => ({type: SET_NEW_END_VALUE, payload: {endValue}} as const)
export const applySettingsAC = () => ({type: APPLY_SETTINGS} as const)