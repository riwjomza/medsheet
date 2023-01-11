import React, { useEffect, useState } from 'react'
import PatientHistoryTable from './components/patientHistoryTable'
import ModalAddDrug from '../../components/modal/modalAddDrug'
import GoBackButton from '../../components/buttons/goBackButton'
import PintTable from './components/pintTable'
import { useRouter } from 'next/router'
import { mockDataPatientList } from '../../contrasts/patientHistoryList'
import { mockDataInternalUserList } from '../../contrasts/internalUserList'

type Props = {}

// const dataUser = {
//   nameTH: "นางสาว สุชัญญา นิยมไทย",
//   nameEN: "Suchanya Niyomthai    ",
//   age: "22",
//   weight: "50",
//   HN: "00067302",
//   AN: "12474892",
//   bed: "01",
//   history: "",
//   diagnosis: "Appendicitis",
// }
const PatientHistoryDetailPage = (props: Props) => {
  const [showModalAddDrug, setShowModalAddDrug] = useState(false)
  const [onPrint, setOnPrint] = useState(false)
  const [dataUser, setDataUser] = useState({
    nameTH: "",
    nameEN: "",
    age: "",
    weight: "",
    HN: "",
    AN: "",
    bed: "",
    history: "",
    diagnosis: "",
  })
  const { query, push } = useRouter()

  const getData = (HN: any) => {
    if (HN) {
      const found = mockDataInternalUserList.find((item) => item.hn === HN)
      if (found) {
        setDataUser(found.detail)
      }
    }
  }

  const onBack = () => {
    if (onPrint) {
      setOnPrint(false)
    } else {
      push("/internal-patient-list")
    }
  }
  useEffect(() => {
    getData(query.id)
  }, [onPrint, query])



  return (
    <div className='animate-fade-in-down'>
      <GoBackButton onBack={() => onBack()} onShow={true} />
      <div className='text-3xl font-bold mb-10'>
        <div className='text-purple'>ประวัติผู้ป่วย</div>
      </div>

      {dataUser && (
        <div className='py-10 border-y-2 border-gray relative'>
          <div className='px-3  absolute -top-4 right-0 bg-white'>
            <button className={`bg-purple text-white px-3 py-1 rounded-md ${onPrint ? "hidden" : "block"}`}>แก้ไขประวัติผู้ป่วย</button>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 font-bold'>
            <div className='flex gap-3 col-span-3'>
              <div className='min-w-[30px]'>ชื่อ</div>
              <div>{dataUser?.nameTH}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>Name</div>
              <div>{dataUser?.nameEN}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>อายุ</div>
              <div>{dataUser?.age}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>น้ำหนัก</div>
              <div>{dataUser?.weight}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>HN</div>
              <div>{dataUser?.HN}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>AN</div>
              <div>{dataUser?.AN}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>เตียง</div>
              <div>{dataUser?.bed}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>ประวัติการแพ้ยา</div>
              <div>{dataUser?.history}</div>
            </div>
            <div className='flex gap-3'>
              <div className='min-w-[30px]'>การวินิจฉัย</div>
              <div>{dataUser?.diagnosis}</div>
            </div>
          </div>
        </div>
      )}

      {/* table */}
      <div className='mt-10'>
        {!onPrint ? (
          <PatientHistoryTable setShowModalAddDrug={setShowModalAddDrug} setOnPint={setOnPrint} />
        ) : (
          <PintTable setShowModalAddDrug={setShowModalAddDrug} setOnPint={setOnPrint} />
        )}
      </div>

      {/* modal zone */}
      <ModalAddDrug handleClose={() => setShowModalAddDrug(false)} open={showModalAddDrug} />
    </div>
  )
}

export default PatientHistoryDetailPage