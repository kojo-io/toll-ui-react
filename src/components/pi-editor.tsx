import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'

export const PiEditor = () => {
  const [quill, setQuill] = useState<Quill>()

  useEffect(() => {
    if (!quill) {
      setQuill(
        new Quill('#pi-editor', {
          theme: 'snow'
        })
      )
    }
  }, [quill])

  return <div className='w-full' id='pi-editor' />
}
