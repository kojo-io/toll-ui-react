import React from 'react'
interface Props {
  image?: string
}
export const PiAvatar = (props: Props) => {
  return (
    <div
      className='w-[50px] h-[50px] rounded-full bg-center bg-cover p-5 bg-no-repeat border dark:border-gray-700'
      style={{ backgroundImage: `url(${props.image ?? `/user.png`})` }}
    />
  )
}
