import { useReducer } from "react"


const formReducer = (state, action) => {
    console.log(state)
    console.log(action)

    switch (action.type) {
        case "INPUT_CHANGE":
            let isFormValid = true
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    isFormValid = isFormValid && action.isValid
                } else {
                    isFormValid = isFormValid && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isFormValid: isFormValid
            }
        default:
            return state;
    }
}

export const UseForm = (initInput, initFormIsValid) => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initInput,
        isFormValid: initFormIsValid
    })

    const onInputHandler = (id, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            value,
            isValid,
            inputId: id
        })
    }

    return [formState, onInputHandler]

}