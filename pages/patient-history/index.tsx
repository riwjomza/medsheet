import React, { useEffect, useState } from "react";
import PatientHistoryTable from "./components/patientHistoryTable";
import ModalAddDrug from "../../components/modal/modalAddDrug";
import GoBackButton from "../../components/buttons/goBackButton";
import PrintTable from "./components/printTable";
import Table from "../internal-patient-list/components/table";
import PintTable from "./components/printTable";
import { result as patients} from "../../contrasts/patients";
import {DocumentData} from "firebase/firestore"
type Props = {};
const PatientHistoryPage = (props: Props) => {
  const [showModalAddDrug, setShowModalAddDrug] = useState(false);
  const [onPrint, setOnPrint] = useState(false);
  const [showPatients, setShowPatients] = useState<DocumentData[]>([])

  useEffect(() => {setShowPatients(patients)}, [onPrint]);

  return (
    <div className="animate-fade-in-down">
      <GoBackButton onBack={() => setOnPrint(false)} onShow={onPrint} />
      <div className="text-3xl font-bold mb-10">
        <div className="text-purple">ประวัติผู้ป่วย</div>
      </div>

      {showPatients.map((patient, key) => (
        <React.Fragment key={key}>
          <div className="py-10 border-y-2 border-gray relative">
            <div className="px-3  absolute -top-4 right-0 bg-white">
              <button
                className={`bg-purple text-white px-3 py-1 rounded-md ${
                  onPrint ? "hidden" : "block"
                }`}
              >
                แก้ไขประวัติผู้ป่วย
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 font-bold">
              <div className="flex gap-3 col-span-3">
                <div className="min-w-[30px]">ชื่อ</div>
                <div>{patient.nameTH}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">Name</div>
                <div>{patient.nameEN}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">อายุ</div>
                <div>{patient.age}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">น้ำหนัก</div>
                <div>{patient.weight}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">HN</div>
                <div>{patient.HN}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">AN</div>
                <div>{patient.AN}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">เตียง</div>
                <div>{patient.bed}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">ประวัติการแพ้ยา</div>
                <div>{patient.history}</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-[30px]">การวินิจฉัย</div>
                <div>{patient.diagnosis}</div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* table */}
      <div className="mt-10">
        {!onPrint ? (
          <PatientHistoryTable
            setShowModalAddDrug={setShowModalAddDrug}
            setOnPrint={setOnPrint}
          />
        ) : (
          <PrintTable
            setShowModalAddDrug={setShowModalAddDrug}
            setOnPrint={setOnPrint}
          />
        )}
      </div>
      {/* modal zone */}
      <ModalAddDrug
        handleClose={() => setShowModalAddDrug(false)}
        open={showModalAddDrug}
      />
    </div>
  );
};
export default PatientHistoryPage;
