import React from 'react'

interface ActionButtonsProps 
{
    onPublish: () => void;
    onEdit: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onPublish, onEdit }) => {
  return (
    <>
        <button type='submit' 
        className='mt-8 py-2 px-4 flex items-center gap-6 mx-auto text-xs text-black 
        bg-orange-100 rounded-lg border border-emerald-950
        dark:text-white'
        onClick={onPublish}
    
        >
            <svg className='h-4 w-4 fill-current text-emerald-950' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" ><path d="m14.83 9.5-2.14-3.12a.82.82 0 0 0-1.38 0L9.17 9.5a1 1 0 0 0 .69 1.5H11v10a1 1 0 0 0 2 0V11h1.14a1 1 0 0 0 .69-1.5Z"/><path d="M20 8a1 1 0 0 1-1-1V4H5v3a1 1 0 0 1-2 0V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1Z" /></svg>
            <span className='uppercase'>Publicar</span>
        </button>
    
        <button type='button' className='mt-8 mb-6 p-2 inline-flex justify-center items-center gap-2 uppercase text-center text-xs
        bg-stone-300 rounded-lg border border-emerald-950'
        onClick={onEdit}
        >
            <svg className='h-4 w-4 fill-current stroke-black stroke-1.5 text-transparent' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/><path d="M12.5 15.8 22 6.2 17.8 2l-9.5 9.5L8 16l4.5-.2z"/></g></svg>
            <span>Editar</span>
        </button>
    </>
  )
}

export default ActionButtons