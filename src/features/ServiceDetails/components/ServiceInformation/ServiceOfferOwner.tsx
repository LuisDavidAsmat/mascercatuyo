import React from 'react'
import Carousel from '../../../../components/Carousel'
import UserProfileInfo from '../../../../components/UserProfileInfo'



const ServiceOfferOwner = () => {
  return (
    <>
        <Carousel/>                        
        <UserProfileInfo userName={'Pepito Perez'} rating={4} showContactButtons={true}/>
    </>
  )
}

export default ServiceOfferOwner