import { uuid } from '../base.service'
import React from 'react'

interface Props {
  label?: string
  position?: 'left' | 'right'
  value?: boolean
  onChange?: (event?: any) => void
  disabled?: boolean
}
export const PiCheckbox = (props: Props) => {
  const id = uuid()

  return (
    <div>
      <label
        htmlFor={id}
        className='flex items-center cursor-pointer container w-full'
      >
        {props.position === 'left' && (
          <label
            htmlFor={id}
            className='pr-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            {props.label}
          </label>
        )}
        <input
          disabled={props.disabled}
          id={id}
          value=''
          checked={props.value}
          onChange={props.onChange}
          type='checkbox'
          className='sr-only peer hidden'
        />
        <div className='peer-checked:bg-blue-600 w-6 h-6 mark bg-gray-200 rounded hover:bg-gray-300 after:-top-5 after:left-[8px]'>
          <div className='w-6 h-6' />
        </div>
        {props.position === 'right' && (
          <label
            htmlFor={id}
            className='pl-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            {props.label}
          </label>
        )}
      </label>
    </div>
  )
}
