import React from 'react'

interface PreviewDescriptionProps {
    description: string;
}
const PreviewDescription: React.FC<PreviewDescriptionProps> = ({ description }) => 
{
  return (
    <section className="basis-2/4 px-4 sm:space-y-2">
        <section className="flex flex-col gap-2">
            <section className="flex gap-2">
                <p className="text-sm">Descripción del servicio</p>
                <svg className="mt-1 h-4 w-4 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0 2.625 2.625 0 1 1 4.508 1.829c-.092.095-.18.183-.264.267-.216.215-.405.404-.571.617-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583.229-.294.516-.58.75-.814.07-.07.136-.135.193-.194A1.125 1.125 0 0 0 12 7.75ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                </svg>
            </section>
            <p className="py-3 px-2 w-80 h-44 text-left break-words whitespace-normal overflow-y-auto">{description}</p>
        </section>
    </section>
  )
}

export default PreviewDescription