import React, { useEffect, useState } from 'react'
import { formatString, specialChars } from './format-string'

interface Props {
  value: string
  name?: string
  label?: string
  id: string
  type?: string
  required?: boolean
  placeholder?: string
  onChange: (event: any) => void
  readOnly?: boolean
  invalid?: boolean
  rounded?: 'rounded' | 'none'
  mask?: string
  size: 'large' | 'small' | 'normal'
  disabled?: boolean
  multiline?: boolean
}

const PiInput = (props: Props) => {
  const [inputTouched, setInputTouched] = useState<boolean>(false)
  const [inputIsValid, setInputIsValid] = useState<boolean>(false)
  const emailRegex = /(\w\.?)+@[\w.-]+\.\w{2,}/
  const defaultClass =
    'bg-gray-50 focus:outline-none text-gray-900 block w-full dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white'
  const inputValidClass =
    'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 dark:border-gray-600'
  const invalidClass =
    'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 border border-red-500 dark:border-red-600'
  const [inputValue, setInputValue] = useState<string>(props.value ?? '')
  const [inputIsInValid, setInputIsInValid] = useState<boolean | undefined>(
    false
  )

  const inputChangeHandler = (event: any) => {
    let newStr = event.target.value
    let eventString = newStr
    if (props.mask) {
      eventString = event.target.value.replace(specialChars, '')
      newStr = formatString(props.mask, eventString)
    }
    setInputValue(newStr)
    if (eventString.length > 0) {
      setInputTouched(true)
    }
    if (eventString.length === 0) {
      setInputIsValid(false)
    } else {
      setInputIsValid(true)
    }
  }

  useEffect(() => {
    setInputValue(props.value)
  }, [props.value])

  useEffect(() => {
    if (props.type === 'email') {
      if (!emailRegex.test(inputValue)) {
        setInputIsValid(false)
      } else {
        setInputIsValid(true)
      }
    }
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
      <input
        type={`${props.type !== 'email' && props.type}`}
        id={props.id}
        name={props.name}
        onChange={inputChangeHandler}
        value={inputValue}
        pattern={`${props.type === 'email' && emailRegex}`}
        readOnly={props.readOnly}
        disabled={props.disabled}
        className={`${defaultClass} ${
          inputIsInValid
            ? `${props.required ? invalidClass : inputValidClass}`
            : inputValidClass
        }
        ${props.size === 'large' && 'p-4 sm:text-md'}
        ${props.size === 'normal' && 'p-2.5 text-sm'}
        ${props.size === 'small' && 'p-2 sm:text-xs'}
        ${props.rounded === 'rounded' && 'rounded-lg'}
        ${props.multiline && 'break-all'}
        `}
        placeholder={props.placeholder}
        required={props.required}
      />
      {inputIsInValid && (
        <div>
          {props.required && props.value.length === 0 && (
            <small className='text-red-600'>
              {props.name ?? props.label} is required
            </small>
          )}
          {props.value.length > 0 && props.type === 'email' && (
            <small className='text-red-600'>
              {props.name ?? props.label} is not a valid email
            </small>
          )}
        </div>
      )}
    </div>
  )
}

export default PiInput
