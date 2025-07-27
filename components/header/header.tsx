import React from 'react'
import { ModeToggle } from '../theme/toggle'
import logo from '../../public/images/logo.svg'
import Image from 'next/image'

function Header() {
  return (
    <div className='border shadow flex items-center justify-between p-2 rounded'>
        <div>
            <Image src={logo} alt='' width={100}/>
        </div>
        <ModeToggle/>
    </div>
  )
}

export default Header