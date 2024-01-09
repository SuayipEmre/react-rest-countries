import React from 'react'

const TextItem = ({title, text}) => {
  return (
    <p className='font-medium'>{title} :   <span className='font-light text-sm'>{text}</span></p>
  )
}

export default TextItem