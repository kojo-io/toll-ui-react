import React, { useEffect, useState } from 'react'

interface Props {
  id: string
  label?: string
  rows?: number
  name?: string
  onChange: (event: any) => void
  value: string
  placeholder?: string
  required?: boolean
  readOnly?: boolean
  invalid?: boolean
  resize?: boolean
  rounded?: 'rounded' | 'none'
  disabled?: boolean
}
const PiTextArea = (props: Props) => {
  const [inputTouched, setInputTouched] = useState<boolean>(false)
  const [inputIsValid, setInputIsValid] = useState<boolean>(false)
  const defaultClass =
    'bg-gray-50 focus:outline-none text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white'
  const inputValidClass =
    'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 dark:border-gray-600'
  const invalidClass =
    'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 border border-red-500 dark:border-red-600'
  // const [inputClass, setInputClass] = useState(defaultClass)
  const [inputValue, setInputValue] = useState<string>(props.value)
  const [inputEvent, setInputEvent] = useState<any>()
  const [inputSelection, setInputSelection] = useState<number>(0)
  const [inputIsInValid, setInputIsInValid] = useState<boolean | undefined>(
    false
  )

  const inputChangeHandler = (event: any) => {
    setInputEvent(event)
    setInputValue(event.target.value)
    setInputSelection(event.target.selectionStart)
    if (event.target.value.length > 0) {
      setInputTouched(true)
    }
    if (event.target.value.length === 0) {
      setInputIsValid(false)
    } else {
      setInputIsValid(true)
    }
  }

  useEffect(() => {
    setInputValue(props.value)
    if (inputEvent) {
      inputEvent.target.setSelectionRange(inputSelection, inputSelection)
    }
  }, [props.value])

  useEffect(() => {
    props.onChange(inputValue)
  }, [inputValue])

  useEffect(() => {
    setInputIsInValid(!inputIsValid && inputTouched)
  }, [inputIsValid])

  useEffect(() => {
    setInputIsInValid(props.invalid)
  }, [props.invalid])

  return (
    <div>
      {props.label && (
        <label
          htmlFor={props.id}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {props.label}
          {props.required && <span className='text-red-600 text-lg'>*</span>}
        </label>
      )}
      <textarea
        rows={props.rows}
        id={props.id}
        name={props.name}
        onChange={inputChangeHandler}
        value={props.value}
        disabled={props.disabled}
        readOnly={props.readOnly}
        className={`${defaultClass} ${
          inputIsInValid
            ? `${props.required ? invalidClass : inputValidClass}`
            : inputValidClass
        }
        ${props.resize ? 'resize-y' : 'resize-none'}
        ${props.rounded === 'rounded' && 'rounded-lg'}`}
        placeholder={props.placeholder}
        required={props.required}
      />
      {inputIsInValid && (
        <div>
          {props.required && (
            <small className='text-red-600'>{props.label} is required *</small>
          )}
        </div>
      )}
    </div>
  )
}

export default PiTextArea
