import React, { useState, useEffect } from "react";
import { BiUserPlus } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import { mockDataInternalUserList } from "../../../contrasts/internalUserList";
import Image from "next/image";
import ModalPatientDetail from "../../../components/modal/modalPatientDetail";
import Datepicker from "../../../components/input/datePicker";
import TimePicker from "../../../components/input/timePicker";
import { useAuth } from "../../../context/AuthContext";

import { db } from "../../../firebase";

import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";

type Props = {
  setShowFormPatient: any;
};

const Table = ({ setShowFormPatient }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [onShowDatePicker, setOnShowDatePicker] = useState(false);
  const [onShowTimePicker, setOnShowTimePicker] = useState(false);

  // For db
  const patientsCollection = collection(db, "patients");

  // const [patients, setPatients] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [patients, setPatients] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
  };

  useEffect(() => {
    // get the todos
    getPatients();
    // reset loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  patients.forEach((patient) => {
    console.log(patient);
    const date = new Date(patient.date.seconds).toISOString().slice(0, 10);
    const time = new Date(patient.date.seconds).toISOString().slice(11, 19);

    patient.humanDate = date;
    patient.humanTime = time;
  });

  const styled = {
    button: `
      bg-purple    
      rounded-md
      px-3
      py-1
      text-white
      flex gap-2 items-center justify-between
    `,
    th: `
      border border-purple
      h-24
      bg-purple-supperLight
      text-purple
      p-2
    `,
    td: `
      border border-purple
      h-full
      p-3
    `,
    card: `
      bg-purple-supperLight py-2 px-3 rounded-md
      flex gap-3 items-center justify-between
      text-xs
    `,
  };

  const toggleShowPicker = (type: string) => {
    switch (type) {
      case "OPEN_TIME":
        setOnShowTimePicker(!onShowTimePicker);
        setOnShowDatePicker(false);
        break;
      case "OPEN_DATE":
        setOnShowTimePicker(false);
        setOnShowDatePicker(!onShowDatePicker);
        break;

      default:
        break;
    }
  };
  return (
    <div className="animate-fade-in-down">
      <div className="flex w-full justify-between items-center ">
        <div>
          <button
            className={`${styled.button}`}
            onClick={() => setShowFormPatient(true)}
          >
            <div>เพิ่ม</div>
            <div>
              <BiUserPlus size={30} />
            </div>
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <div className="relative">
            <button
              className={`${styled.button} min-w-[120px]`}
              onClick={() => toggleShowPicker("OPEN_DATE")}
            >
              <div>วันที่</div>
              <div
                className={`${
                  onShowDatePicker ? "rotate-180 transition-all" : ""
                }`}
              >
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
            </button>
            <div
              className={`absolute right-0 max-h-0 overflow-hidden transition-all p-6 w-[350px] ${
                onShowDatePicker ? "max-h-[500px]" : "p-0"
              }`}
            >
              <Datepicker />
            </div>
          </div>
          <div className="relative ">
            <button
              className={`${styled.button} min-w-[120px]`}
              onClick={() => toggleShowPicker("OPEN_TIME")}
            >
              <div>เลือกเวลา</div>
              <div
                className={`${
                  onShowTimePicker ? "rotate-180 transition-all" : ""
                }`}
              >
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
            </button>
            <div
              className={`absolute -right-16 max-h-0 overflow-hidden transition-all p-6 w-[350px] ${
                onShowTimePicker ? "max-h-[500px]" : "p-0"
              }`}
            >
              <TimePicker onSave={() => toggleShowPicker("OPEN_TIME")} />
            </div>
          </div>
          <div>
            <AiFillPrinter size={40} />
          </div>
        </div>
      </div>

      <table className="border-collapse border border-purple w-full my-8">
        <thead>
          <tr>
            <th className={`${styled.th}`}>ชื้อคนไข้</th>
            <th className={`${styled.th}`}>วันที่</th>
            <th className={`${styled.th}`}>HN</th>
            <th className={`${styled.th}`}>Note</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, key) => (
            <React.Fragment key={key}>
              <tr>
                <td className={`${styled.td}`}>
                  <div className="flex items-center justify-between">
                    <div className="w-[200px]">{patient.nameTH} <br /> {patient.nameEN}</div>
                    <div className="flex gap-1 flex-col">
                      <div className={`${styled.card}`}>
                        <div>
                          <Image
                            src={"/img/icons/bed.svg"}
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div>Bed Number</div>
                      </div>
                      <div className={`${styled.card}`}>
                        <div>
                          <GiHealthNormal size={15} />
                        </div>
                        <div>Ward Number</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={`${styled.td}`}>{patient.humanDate} <br /> {patient.humanTime}</td>
                <td className={`${styled.td}`}>{patient.hn}</td>
                <td className={`${styled.td} `}>
                  <div
                    className={`flex items-center justify-center cursor-pointer`}
                    onClick={() => setShowModal(true)}
                  >
                    <Image
                      src={"/img/icons/doc.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* modal zone */}
      <ModalPatientDetail
        handleClose={() => setShowModal(false)}
        open={showModal}
      />
    </div>
  );
};

export default Table;
