import React from 'react'
import Image from 'next/image'
import { ContactInfoTypes } from '../../Types/types'

const ContactInfoCard = ({iconUrl, text} : ContactInfoTypes) => {
  return (
    <>
    <div className='contact-detail'>
        <div className='contact-icon'>
            <Image  src={iconUrl} alt={text} height={100} width={100}/>
        </div>
        <p>{text}</p>
        
    </div>
    </>
  )
}

export default ContactInfoCard