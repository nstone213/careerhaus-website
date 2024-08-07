import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import React from 'react'; // Note: React import is duplicated in your original code, so it's consolidated here.

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    const calendlyRef = useRef(null); // Reference for the Calendly embed

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Remove script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'gmail',
            'template_jdpt98d',
            refForm.current,
            'lg_-onmk5xchu7R4F'
        ).then(
            () => {
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            () => {
                alert('Failed to send the message, please try again.');
            }
        );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="content-flex">
                    <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']}
                            idx={15}
                        />
                    </h1>
                        <div className="contact-form">
                            <form ref={refForm} onSubmit={sendEmail}>
                            </form>
                        </div>
                    </div>
                    <div className="calendly-widget-container" ref={calendlyRef}>
                        <div className="calendly-inline-widget" data-url="https://calendly.com/sid-careerhaus" style={{ minWidth: '320px', height: '630px' }}></div>
                    </div>
                </div>
            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Contact
