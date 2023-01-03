import React, { useEffect, useReducer } from 'react'
import './Input.css'
import validator from '../Validators/Validator'

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return ({
                ...state,
                value: action.value,
                // isValid: action.isValid
                isValid: validator(action.value, action.validations)
            })

        default:
            return state;
    }
}

export const Input = (props) => {
    console.log(props.validations)

    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false
    })

    console.log(mainInput)


    const {value , isValid} = mainInput
    // const id = props
    const {id , onInputHandler } = props
    useEffect(() => {
        // props.onInputHandler(id , value , isValid)
        onInputHandler(id , value , isValid)
    },[value])

    const onChangeHandler = (event) => {
        console.log(event.target.value)
        dispatch({
            type: "CHANGE",
            value: event.target.value,
            validations: props.validations,
            isValid: true
        })
    }

    const element = props.element === 'input' ? (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
            onChange={onChangeHandler}
            value={mainInput.value}
        />
    ) : (
        <textarea
            placeholder={props.placeholder}
            className={props.className}
            onChange={onChangeHandler}
            value={mainInput.value}
        />
    )
    return (
        <div>
            {element}
        </div>
    )
}
