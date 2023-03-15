import React from 'react'
interface Prop {
  children?: any
  size?: 'normal' | 'large'
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'dark'
  outline?: boolean
  rounded?: 'rounded' | 'full'
}
export const PiBadge = (props: Prop) => {
  const defaultPrimary =
    'bg-blue-100 text-blue-800 mr-2 dark:bg-blue-900 dark:text-blue-300'
  const successCSS =
    'bg-green-100 text-green-800 mr-2 dark:bg-green-900 dark:text-green-300'
  const dangerCSS =
    'bg-red-100 text-red-800 mr-2 dark:bg-red-900 dark:text-red-300'
  const warningCSS =
    'bg-yellow-100 text-yellow-800 mr-2 dark:bg-yellow-900 dark:text-yellow-300'
  const darkCSS =
    'bg-gray-100 text-gray-800 mr-2 dark:bg-gray-700 dark:text-gray-300'

  const defaultOutline =
    'bg-blue-100 text-blue-800 mr-2 dark:bg-gray-700 dark:text-blue-400 border border-blue-400'
  const successOutline =
    'bg-green-100 text-green-800 mr-2 dark:bg-gray-700 dark:text-green-400 border border-green-400'
  const dangerOutline =
    'bg-red-100 text-red-800 mr-2 dark:bg-gray-700 dark:text-red-400 border border-red-400'
  const warningOutline =
    'bg-yellow-100 text-yellow-800 mr-2 dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300'
  const darkOutline =
    'bg-gray-100 text-gray-800 mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500'

  const normal = 'text-xs px-2.5 py-0.5 font-medium'
  const large = 'text-sm px-2.5 py-0.5 font-medium'

  const roundedFullCSS = 'rounded-full'
  const roundedCSS = 'rounded'

  return (
    <span
      className={`leading-none
      ${
        props.type === 'primary' &&
        `${props.outline ? defaultOutline : defaultPrimary}`
      }
                    ${
                      props.type === 'success' &&
                      `${props.outline ? successOutline : successCSS}`
                    }
                    ${
                      props.type === 'danger' &&
                      `${props.outline ? dangerOutline : dangerCSS}`
                    }
                    ${
                      props.type === 'warning' &&
                      `${props.outline ? warningOutline : warningCSS}`
                    }
                    ${
                      props.type === 'dark' &&
                      `${props.outline ? darkOutline : darkCSS}`
                    }
                    ${props.size === 'normal' && normal}
                    ${props.size === 'large' && large}

                     ${props.rounded === 'rounded' && roundedCSS}
                    ${props.rounded === 'full' && roundedFullCSS}
                    `}
    >
      {props.children}
    </span>
  )
}
