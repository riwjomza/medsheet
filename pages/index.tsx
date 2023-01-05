import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image src={'/img/logo.png'} alt="" width={100} height={100} />
      <div className='text-[#D2ADE4]'>This site developing</div>
    </div>
  )
}
