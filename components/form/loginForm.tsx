import Image from 'next/image'
import React from 'react'

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <div className={`bg-white w-fit p-6 rounded-2xl flex flex-col gap-3 text-center drop-shadow-lg`}>
      <Image src="/img/headerLogin.png" alt="" width={300} height={100} />
      <div className='text-xl'>โรงพยาบาลสันทราย เชียงใหม่</div>
      <form action="" className={`flex flex-col gap-3 text-center`}>
        <div>
          <input type="text" placeholder='username' name="" id="" className='border w-full p-2 rounded-md border-black-light '/>
        </div>
        <div>
          <input type="password" placeholder='password' name="" id="" className='border w-full p-2 rounded-md border-black-light '/>
        </div>
        <div>
          <button className={`bg-purple-light text-white px-4 py-1 rounded-sm`}>SIGN IN</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm