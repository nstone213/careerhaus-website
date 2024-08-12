import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useRef } from 'react'
import React from 'react';

const Contact = () => {
    const calendlyRef = useRef(null); // Reference for the Calendly embed

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

    return (
        <>
            <div className="calendly-widget-container" ref={calendlyRef}>
                <div className="calendly-inline-widget" data-url="https://calendly.com/sid-careerhaus" style={{ minWidth: '320px', height: '630px' }}></div>
            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Contact
