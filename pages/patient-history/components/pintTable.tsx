import React, { useState } from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import { GiHealthNormal } from 'react-icons/gi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FaPenAlt } from 'react-icons/fa'
import { mockDataPatientList } from '../../../contrasts/patientHistoryList'
import Image from 'next/image'
import Datepicker from '../../../components/input/datePicker'
import TimePicker from '../../../components/input/timePicker'
import { GrDocumentUpdate } from 'react-icons/gr'

type Props = {
  setShowModalAddDrug: any;
  setOnPint: any;
}

const PintTable = ({ setShowModalAddDrug, setOnPint }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [onShowDatePicker, setOnShowDatePicker] = useState(false)
  const [onShowTimePicker, setOnShowTimePicker] = useState(false)
  const styled = {
    button: `
      bg-purple    
      rounded-md
      px-3
      py-1
      text-white
      flex gap-2 items-center justify-between
      h-8
    `,
    th: `
      border border-purple
      bg-purple-supperLight
      text-purple
      p-2
    ` ,
    td: `
      border border-purple
      h-full
      p-2
      text-center
    ` ,
    card: `
      bg-purple-supperLight py-2 px-3 rounded-md
      flex gap-2 items-right w-fit justify-end
      text-xs
    `
  }

  const toggleShowPicker = (type: string) => {
    switch (type) {
      case "OPEN_TIME":
        setOnShowTimePicker(!onShowTimePicker)
        setOnShowDatePicker(false)
        break;
      case "OPEN_DATE":
        setOnShowTimePicker(false)
        setOnShowDatePicker(!onShowDatePicker)
        break;

      default:
        break;
    }
  }
  return (
    <div className='animate-fade-in-down'>
      <div className='flex gap-3 items-center w-full justify-end '>
        <button className={`${styled.button}`} onClick={() => console.log("pint")}>
          <div>พิมพ์</div>
          <div className=''>
            <Image src={'/img/pintDoc.png'} alt="" width={20} height={20} />
          </div>
        </button>
      </div>


      <div className='overflow-x-scroll'>
        <table className='border-collapse border border-purple w-full my-8 text-sm'>
          <thead>
            <tr>
              <td rowSpan={2} className={`${styled.th} text-center`}>ชื่อยา, วิธีใช้</td>
              {/* <td rowSpan={2} className={`${styled.th} text-center`}>
                <div>
                  Route
                </div>
              </td> */}
              <td rowSpan={2} className={`${styled.th} text-center`}>ชั่วโมงให้ยา</td>
              <th colSpan={2} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={2} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={2} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={2} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={2} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={2} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>
              <th colSpan={2} scope="colgroup" className={`${styled.th}`}>
                <div>วันที่</div>
                <div className='text-black text-sm font-thin'>12/12/2565</div>
              </th>

            </tr>
            <tr>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>ผู้ให้ยา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>ผู้ให้ยา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>ผู้ให้ยา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>ผู้ให้ยา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>ผู้ให้ยา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>ผู้ให้ยา</th>
              <th scope="col" className={`${styled.th}`}>เวลา</th>
              <th scope="col" className={`${styled.th}`}>ผู้ให้ยา</th>

            </tr>
          </thead>
          <tbody>
            {mockDataPatientList.map((item, key) => (
              <React.Fragment key={key}>
                <tr>
                  <td className={`${styled.td}`}>
                    <div className=''>
                      <div className='w-[200px] text-left'>
                        {item.name}
                      </div>

                    </div>
                  </td>
                  <td className={`${styled.td}`}>{item.hr}</td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        {item.time}
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        {item.time}
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        {item.time}
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        {item.time}
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        {item.time}
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        {item.time}
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        {item.time}
                      </div>
                    </div>
                  </td>
                  <td className={`${styled.td}`}>
                    <div className='flex gap-1 justify-center'>
                      <div>
                        <Image src={"/img/signer.png"} alt="" width={50} height={50} />
                      </div>
                    </div>
                  </td>

                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PintTable