import React, { useState } from 'react'
import PatientHistoryTable from './components/patientHistoryTable'
import ModalAddDrug from '../../components/modal/modalAddDrug'

type Props = {}

const dataUser = {
  nameTH: "นางสาว สุชัญญา นิยมไทย",
  nameEN: "Suchanya Niyomthai    ",
  age: "22",
  weight: "50",
  HN: "00067302",
  AN: "12474892",
  bed: "01",
  history: "",
  diagnosis: "Appendicitis",
}
const PatientHistoryPage = (props: Props) => {
  const [showModalAddDrug, setShowModalAddDrug] = useState(false)
  return (
    <div className='animate-fade-in-down'>
      <div className='text-3xl font-bold mb-10'>
        <div className='text-purple'>ประวัติผู้ป่วย</div>
      </div>

      <div className='py-10 border-y-2 border-gray relative'>
        <div className='px-3  absolute -top-4 right-0 bg-white'>
          <button className='bg-purple text-white px-3 py-1 rounded-md'>แก้ไขประวัติผู้ป่วย</button>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 font-bold'>
          <div className='flex gap-3 col-span-3'>
            <div className='min-w-[30px]'>ชื่อ</div>
            <div>{dataUser.nameTH}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>Name</div>
            <div>{dataUser.nameEN}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>อายุ</div>
            <div>{dataUser.age}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>น้ำหนัก</div>
            <div>{dataUser.weight}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>HN</div>
            <div>{dataUser.HN}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>AN</div>
            <div>{dataUser.AN}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>เตียง</div>
            <div>{dataUser.bed}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>ประวัติการแพ้ยา</div>
            <div>{dataUser.history}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>การวินิจฉัย</div>
            <div>{dataUser.diagnosis}</div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className='mt-10'>
        <PatientHistoryTable setShowModalAddDrug ={setShowModalAddDrug}/>
      </div>

      {/* modal zone */}
      <ModalAddDrug handleClose={() => setShowModalAddDrug(false)} open={showModalAddDrug} />
    </div>
  )
}

export default PatientHistoryPage