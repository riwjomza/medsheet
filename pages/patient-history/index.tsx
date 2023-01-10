import React, { useEffect, useState } from 'react'
import PatientHistoryTable from './components/patientHistoryTable'
import ModalAddDrug from '../../components/modal/modalAddDrug'
import GoBackButton from '../../components/buttons/goBackButton'
import PintTable from './components/pintTable'
import Table from '../internal-patient-list/components/table'

import { db } from "../../firebase";

import {
  collection,
  DocumentData,
  query,
  getDocs,
} from "@firebase/firestore";

type Props = {};

const PatientHistoryPage = (props: Props) => {
// For db
const patientsCollection = collection(db, "patients");

// const [patients, setPatients] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
const [loading, setLoading] = useState<boolean>(true);

const [patients, setPatients] = useState<DocumentData[]>([]);
const [showPatients, setshowPatient] = useState<DocumentData[]>([])

const getPatients = async () => {
  // construct a query to get up to 10 undone todos
  const todosQuery = query(patientsCollection);
  // get the todos
  const querySnapshot = await getDocs(todosQuery);

  // map through todos adding them to an array
  const result: DocumentData[] = [];
  querySnapshot.forEach((snapshot) => {
    result.push(snapshot.data());
  });
  // set it to state
  setPatients(result);
  setshowPatient(result)
};

useEffect(() => {
  // get the todos
  getPatients();
  // reset loading
  // setTimeout(() => {
  //   setLoading(false);
  // }, 2000);
}, []);

patients.forEach((patient) => {
  // console.log(patient);
  const date = new Date(patient.date.seconds).toISOString().slice(0, 10);
  const time = new Date(patient.date.seconds).toISOString().slice(11, 19);

  patient.humanDate = date;
  patient.humanTime = time;
});
  const [showModalAddDrug, setShowModalAddDrug] = useState(false)
  const [onPint, setOnPint] = useState(false)

  useEffect(() => {

  }, [onPint])

  return (
    <div className='animate-fade-in-down'>
      <GoBackButton onBack={() => setOnPint(false)} onShow={onPint} />
      <div className='text-3xl font-bold mb-10'>
        <div className='text-purple'>ประวัติผู้ป่วย</div>
      </div>

      {showPatients.map((patient, key) => (
            <React.Fragment key={key}>
      <div className='py-10 border-y-2 border-gray relative'>
        <div className='px-3  absolute -top-4 right-0 bg-white'>
          <button className={`bg-purple text-white px-3 py-1 rounded-md ${onPint ? "hidden" : "block"}`}>แก้ไขประวัติผู้ป่วย</button>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 font-bold'>
          <div className='flex gap-3 col-span-3'>
            <div className='min-w-[30px]'>ชื่อ</div>
            <div>{patient.nameTH}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>Name</div>
            <div>{patient.nameEN}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>อายุ</div>
            <div>{patient.age}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>น้ำหนัก</div>
            <div>{patient.weight}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>HN</div>
            <div>{patient.HN}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>AN</div>
            <div>{patient.AN}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>เตียง</div>
            <div>{patient.bed}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>ประวัติการแพ้ยา</div>
            <div>{patient.history}</div>
          </div>
          <div className='flex gap-3'>
            <div className='min-w-[30px]'>การวินิจฉัย</div>
            <div>{patient.diagnosis}</div>
          </div>
        </div>
      </div>
      </React.Fragment>
          ))}

      {/* table */}
      <div className='mt-10'>
        {!onPint ? (
          <PatientHistoryTable setShowModalAddDrug={setShowModalAddDrug} setOnPint={setOnPint} />
        ) : (
          <PintTable setShowModalAddDrug={setShowModalAddDrug} setOnPint={setOnPint} />
        )}
      </div>

      {/* modal zone */}
      <ModalAddDrug handleClose={() => setShowModalAddDrug(false)} open={showModalAddDrug} />
    </div>
  )
}

export default PatientHistoryPage