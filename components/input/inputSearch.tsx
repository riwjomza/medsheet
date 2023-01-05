import React from 'react'
import { FiSearch } from 'react-icons/fi'
type Props = {}

const InputSearch = (props: Props) => {
  return (
    <div className='border rounded-lg border-purple-light flex h-8 gap-3 overflow-hidden'>
      <div className='bg-purple-light text-white rounded-md px-2 flex items-center justify-center'>
        <FiSearch size={20}/>
      </div>
      <input type="text" placeholder='' />
    </div>
  )
}

export default InputSearch