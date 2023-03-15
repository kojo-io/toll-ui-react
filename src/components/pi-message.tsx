import ReactDOM from 'react-dom'
import React from 'react'
import { PiButton } from './pi-button'
export interface MessageProps {
  open: boolean
  message: string
  type: 'success' | 'error' | 'warning'
}
interface Props {
  onClose: () => void
  message: string
  type: 'success' | 'error' | 'warning'
}

export const PiMessage = (props: Props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.body
      )}
      {ReactDOM.createPortal(
        <Message
          message={props.message}
          type={props.type}
          onClose={props.onClose}
        />,
        document.body
      )}
    </div>
  )
}

const BackDrop = (props: any) => {
  return (
    <div
      onClick={props.onClose}
      className='backdrop-blur-[6px] bg-gray-400/30 fixed inset-0'
    />
  )
}

const Message = (props: Props) => {
  return (
    <div>
      <style>
        {`
          .modal {
            pointer-events: none !important;
          }

          .modal-content {
            pointer-events: all !important;
          }
        `}
      </style>
      <div className='modal fixed inset-0 z-999999999999999999999'>
        <div className='flex flex-wrap content-center h-full w-full justify-center'>
          {props.type === 'success' && (
            <div className='modal-content text-center bg-white dark:bg-gray-800 space-y-4 p-5 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12'>
              <i className='pi pi-check-circle text-5xl text-green-600' />
              <span className='block text-xl font-bold'>{props.message}</span>
              <PiButton
                type='primary'
                size='normal'
                rounded='rounded'
                onClick={props.onClose}
              >
                Continue
              </PiButton>
            </div>
          )}
          {props.type === 'error' && (
            <div className='modal-content text-center bg-white dark:bg-gray-800 space-y-4 p-5 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12'>
              <i className='pi pi-times-circle text-5xl text-red-700' />
              <span className='block text-xl font-bold'>{props.message}</span>
              <PiButton
                type='danger'
                size='normal'
                rounded='rounded'
                onClick={props.onClose}
              >
                Continue
              </PiButton>
            </div>
          )}
          {props.type === 'warning' && (
            <div className='modal-content text-center bg-white dark:bg-gray-800 space-y-4 p-5 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12'>
              <i className='pi pi-exclamation-triangle text-5xl text-yellow-500' />
              <span className='block text-xl font-bold'>{props.message}</span>
              <PiButton
                type='warning'
                size='normal'
                rounded='rounded'
                onClick={props.onClose}
              >
                Continue
              </PiButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
