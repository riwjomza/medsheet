import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

type Props = {}


const LoginForm = (props: Props) => {
const[email,setEmail] = useState('') 
const[password,setPassword] = useState('')
const[error,setError] = useState('null')
const[isLoggingIn, setIslogginIn] = useState(true)

function submitHandler(){
  if(!email || !password){
  setError('Please enter username and password')
  return
  } 
}
  return (
    <div className={`bg-white w-fit p-6 rounded-2xl flex flex-col gap-3 text-center drop-shadow-lg`}>
      <Image src="/img/headerLogin.png" alt="" width={300} height={100} />
      <div className='text-xl'>โรงพยาบาลสันทราย เชียงใหม่</div>
      <div className='text-xl'>{isLoggingIn?'Login':'Register' }</div>
      {/* {error && <div className='w-full masx-w-[40] border-rose-300 text-rose-300 py-2'>(error)</div>} */}
      <form action="" className={`flex flex-col gap-3 text-center`}>
        <div>
          <input type="text" value={email} onChange={(e) => setEmail}  placeholder='username' name="" id="" className='border w-full p-2 max-w-[35ch] rounded-md border-black-light '/>
        </div>
        <div>
          <input type="password" value={password} onChange={(e) => setPassword}  placeholder='password' name="" id="" className='border w-full p-2 rounded-md border-black-light '/>
        </div>
        <div>
          <button onClick={submitHandler} className={`bg-purple-light text-white px-4 py-1 rounded-sm`}>SIGN IN</button>
        </div>
        <div>
          <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIslogginIn(!isLoggingIn)}>{!isLoggingIn ? 'LOGIN' : 'Register'}</h2>
        </div>
      </form>
    </div>
  )
}


export default LoginForm