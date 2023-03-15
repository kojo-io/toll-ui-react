import ReactDOM from 'react-dom'
import React from 'react'

interface Props {
  modalSize?: 'small' | 'large' | undefined
  fullScreen: boolean
  onClose: () => void
  children?: any
}

export const PiModal = (props: Props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.body
      )}
      {ReactDOM.createPortal(
        <Modal
          modalSize={props.modalSize}
          fullScreen={props.fullScreen}
          onClose={props.onClose}
        >
          {props.children}
        </Modal>,
        document.body
      )}
    </div>
  )
}

const BackDrop = (props: any) => {
  return (
    <div
      onClick={props.onClose}
      className='backdrop-blur-[6px] bg-gray-400/30 fixed inset-0 '
    />
  )
}

const Modal = (props: Props) => {
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
        <div
          className={`${
            !props.fullScreen && 'flex flex-wrap content-center justify-center'
          }  h-full w-full`}
        >
          <div
            className={`modal-content bg-white dark:bg-gray-800 overflow-auto space-y-4 p-5 w-full
                  ${
                    !props.fullScreen &&
                    `max-md:h-full md:max-h-[80%] md:rounded-xl
                  ${
                    props.modalSize === undefined &&
                    'max-md:w-full md:w-7/12 2xl:w-5/12'
                  }
                  ${
                    props.modalSize === 'small' &&
                    'max-md:w-full md:w-7/12 lg:w-5/12 2xl:w-4/12'
                  }
                  ${props.modalSize === 'large' && 'max-md:w-full md:w-10/12'}`
                  }
                  ${props.fullScreen && 'h-full'}`}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
