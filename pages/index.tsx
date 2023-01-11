import Image from 'next/image'
import Table from './internal-patient-list/components/table'
import InternalTable from '../components/tables/internalListTable'
import GoBackButton from '../components/buttons/goBackButton'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className='text-3xl font-bold mb-10 animate-fade-in-down'>
        <div className='text-purple'>รายชื่อผู้ป่วยใน</div>
        <div>แผนกศัลยกรรมหญิง</div>
      </div>
      <div className='animate-fade-in-down'>
        <InternalTable setShowFormPatient={() => ""} />
      </div>
    </>
  )
}
