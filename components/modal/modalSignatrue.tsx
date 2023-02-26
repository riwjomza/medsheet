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

const ModalSignature = ({ handleClose, open }: Props) => {
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
            className=" bg-white max-w-[300px] w-full h-fit rounded-lg drop-shadow-lg  overflow-hidden"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className=''>
              <div className='p-3 text-white text-center bg-purple-light text-xl'>
                ลายเซ็นผู้จ่ายยา
              </div>
              <div className='min-h-[200px]'></div>
              <div className='mb-6 text-center'>
                <button className='bg-purple-light text-white px-3 py-2 rounded-md drop-shadow-lg' onClick={handleClose}>ยืนยัน</button>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

export default ModalSignature