import React from 'react'

interface SuccessModalProps
{
    isOpen: boolean,
    onClose: () => void;
    message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message }) => 
{
    if(!isOpen) { return null;};

  return (
    
    <dialog id="my_modal_2" className="modal modal-open ">
        <div className="modal-box flex justify-between bg-white dark:bg-neutral-600 dark:text-white" onClick={(e) => e.stopPropagation()}>
          <h2>{message}</h2>
          <svg className=" h-7 w-7 stroke-black bg-transparent cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={onClose}
          ><circle cx="12" cy="12" r="10" /><path d="m14.5 9.5-5 5m0-5 5 5" strokeLinecap="round"/></svg>
        </div> 
        <button type='button' className='absolute top-0 h-screen w-full' onClick={onClose}>
        </button>
    </dialog>
  )
}

export default SuccessModal