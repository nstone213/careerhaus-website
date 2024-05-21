import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'

import LogoS from '../../../assets/images/Careerhaus_Logo.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  


  return (
    <div className="logo-container" ref={bgRef}>
    </div>
  )
}

export default Logo