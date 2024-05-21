import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/Careerhaus_Logo.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    // Hover effect for the planet image
    gsap.to(solidLogoRef.current, {
      y: '+=20', // Adjust the pixel value to control the hover height
      repeat: -1, // repeat indefinitely
      yoyo: true, // go back and forth
      ease: 'power1.inOut', // easing function for a smooth effect
      duration: 2, // time in seconds for one hover cycle
    });
  }, []);
  
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    
      gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
    
      .fromTo(outlineLogoRef.current, 
        { duration: 9, drawSVG: '0%' },
        { duration: 9, drawSVG: '60%' }, 
        'start')
    gsap.fromTo(
    solidLogoRef.current,
    {
    opacity: 0,
    },
    {
    opacity: 1,
    delay: 4,
    duration: 1,
    }
    )
    },[])

  return (
    <div className="logo-container" ref={bgRef}>
    </div>
  )
}

export default Logo