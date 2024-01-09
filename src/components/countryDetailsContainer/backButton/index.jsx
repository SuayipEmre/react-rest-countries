import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <div
                className='bg-secondary w-[120px]  md:w-[170px]  cursor-pointer flex items-center justify-center gap-2 py-2 shadow rounded-md'
                onClick={() => navigate(-1)}
            >
                <MdOutlineKeyboardBackspace />
                <p className='font-light'>Back</p>
            </div>
  )
}

export default BackButton