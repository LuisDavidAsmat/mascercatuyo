import React from 'react'

type Props = 
{
    imgPath: string;
    customClass?: string;
}

const ImgHolder: React.FC<Props> = ({ imgPath, customClass }) => 
{
  return (
    <figure className={`${customClass}` }>
        <img src={imgPath} alt="logo" className="w-full h-full object-cover" />
    </figure>
  )
}

export default ImgHolder