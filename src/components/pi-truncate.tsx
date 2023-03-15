import React, { useState } from 'react'

interface Props {
  text: string
  children?: any
  length?: number
}
export const PiTruncate = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false)

  const expandText = () => {
    setExpand(!expand)
  }

  return (
    <span>
      {props.length && (
        <span>
          {props.text.length > props.length && (
            <span>
              {!expand && (
                <span>
                  {props.text.slice(0, props.length)}
                  <span
                    onClick={expandText}
                    className='cursor-pointer ml-4 text-blue-500 hover:underline'
                  >
                    see more ...
                  </span>
                </span>
              )}
              {expand && props.text}
            </span>
          )}
          {props.text.length < props.length && props.text}
        </span>
      )}
      {!props.length && (
        <span>
          {props.text.length > 100 && (
            <span>
              {!expand && (
                <span>
                  {props.text.slice(0, 100)}
                  <span
                    onClick={expandText}
                    className='cursor-pointer ml-4 text-blue-500 hover:underline'
                  >
                    see more ...
                  </span>
                </span>
              )}
              {expand && props.text}
            </span>
          )}
          {props.text.length < 100 && props.text}
        </span>
      )}
    </span>
  )
}
