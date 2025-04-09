import React from 'react'

interface PreviewHeaderProps
{
    title: string,
    subtitle: string
}

const PreviewHeader: React.FC<PreviewHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
        <h2 className="font-bold text-xl tracking-wider">{title}</h2>
        <h3 className="font-bold text-md uppercase">{subtitle}</h3>
    </>
  )
}

export default PreviewHeader