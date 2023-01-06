import Image from 'next/image'
import { useAuth } from '../context/AuthContext'
import Login from './login'

export default function Home() {
  const {currentUser} =useAuth()
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image src={'/img/logo.png'} alt="" width={100} height={100} />
      <div className='text-[#D2ADE4]'>This site developing</div>
    </div>
  )
}
