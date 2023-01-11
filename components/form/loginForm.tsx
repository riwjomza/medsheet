import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {}

const LoginForm = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const onSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push("/")
    }, 1000);
  }
  return (
    <div className={`bg-white w-fit p-6 rounded-2xl flex flex-col gap-3 text-center drop-shadow-lg`}>
      <Image src="/img/headerLogin.png" alt="" width={300} height={100} />
      <div className='text-xl'>โรงพยาบาลสันทราย เชียงใหม่</div>
      <form action="" className={`flex flex-col gap-3 text-center`}>
        <div>
          <input type="text" placeholder='username' name="" id="" className='border w-full p-2 rounded-md border-black-light ' />
        </div>
        <div>
          <input type="password" placeholder='password' name="" id="" className='border w-full p-2 rounded-md border-black-light ' />
        </div>
        <div>
          <button className={`bg-purple-light text-white px-4 py-1 rounded-sm`} onClick={(e) => onSubmit(e)}>
            {loading ? 'Loading...' : 'SIGN IN'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm