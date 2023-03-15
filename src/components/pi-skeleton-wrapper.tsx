import React from 'react'

export const PiSkeletonWrapper = (props: any) => {
  return <div className='animate-pulse'>{props.children}</div>
}
