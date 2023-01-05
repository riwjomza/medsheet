import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import Backdrop from './backDrop'
import Select from 'react-select'
import DefaultSelector from '../selector/defaultSelector';

type Props = {
  handleClose: any;
  open: boolean;
}
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalAddDrug = ({ handleClose, open }: Props) => {
  const optionsRoute = [
    { value: 'IV', label: 'IV' },
    { value: 'IM', label: 'IM' },
    { value: 'SC', label: 'SC' },
    { value: 'Oral', label: 'Oral' }
  ]
  const optionsCount = [
    { value: 'od ac', label: 'od ac' },
    { value: 'bif ac', label: 'bif ac' },
    { value: 'tid ac', label: 'tid ac' },
    { value: 'od pc', label: 'od pc' },
    { value: 'bid pc', label: 'bid pc' },
    { value: 'hs', label: 'hs' },
    { value: 'prn', label: 'prn' },
    { value: 'od', label: 'od' },
    { value: 'q12hr', label: 'q12hr' },
    { value: 'q8hr', label: 'q8hr' },
    { value: 'q6hr', label: 'q6hr' },
    { value: 'q4hr', label: 'q4hr' },
  ]
  return (
    <AnimatePresence>
      {open ? (
        <Backdrop
          onClick={handleClose}
          open={open}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className=" bg-white max-w-[600px] w-full h-fit p-6 rounded-lg drop-shadow-lg"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div>
              <div className='text-xl mb-10 font-bold text-purple'>
                เพิ่มรายการยา
              </div>

              <form className='flex flex-col gap-6 items-center'>
                <div className='flex gap-3 items-center'>
                  <div className='min-w-[130px] text-right'>ชื่อสามัญยา</div>
                  <input type="text" className='border rounded-md px-2 py-1' />
                </div>
                <div className='flex gap-3 items-center '>
                  <div className='min-w-[130px] text-right'>ขนาดยา</div>
                  <div className='relative'>
                    <input type="text" className='border rounded-md px-2 py-1' />
                    <div className='absolute top-[6px] right-2' >mg/g</div>
                  </div>
                </div>
                <div className='flex gap-3 items-center justify-start '>
                  <div className='min-w-[130px] text-right '>Route</div>
                  <div className=' w-[238px]'>
                    <DefaultSelector options={optionsRoute} />
                  </div>
                </div>
                <div className='flex gap-3 items-center justify-start '>
                  <div className='min-w-[130px] text-right '>ความถี่ในการให้ยา</div>
                  <div className=''>
                    <div className=' w-[238px]'>
                      <DefaultSelector options={optionsCount} />
                    </div>
                  </div>
                </div>

                <div className='bg-purple text-white font-bold p-2 rounded-md min-w-[80px] text-center'>
                  <button>เพิ่ม</button>
                </div>
              </form>
            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

export default ModalAddDrug