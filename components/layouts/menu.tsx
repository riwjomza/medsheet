import Image from 'next/image'
import React from 'react'
import { HiBell } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import InputSearch from '../input/inputSearch'
import { mockDataInternalUserList } from '../../contrasts/internalUserList'
import { useRouter } from 'next/router'

type Props = {}

const Menu = (props: Props) => {
  const router = useRouter()
  const onSearch = (e: any) => {
    console.log(e.target.value)
  }
  const onSubmitSearch = (value: any) => {
    if (value) {
      const found = mockDataInternalUserList.find((item) => item.hn === value)
      if (found) {
        router.push(`/patient-history/${value}`)
      }
    }
  }
  return (
    <div className='drop-shadow-lg bg-white'>
      <div className={`flex items-center justify-between w-full pl-28 py-3 pr-6 gap-6`}>
        <div className={`flex gap-6 items-center`}>
          <div>
            <Image src="/img/logo.png" alt="" width={80} height={80} />
          </div>
          <div className='text-black-light text-xl'>
            <div>โรงพยาบาลสันทราย เชียงใหม่</div>
            <div>Sansai Hospital</div>
          </div>
        </div>
        <div className={`flex gap-6 items-center`}>
          <div>
            <InputSearch onChange={onSearch} onSubmit={onSubmitSearch} />
          </div>
          {/* <div className='text-purple-light'><HiBell size={30} /></div> */}
          <div>
            <FiMenu size={35} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu