import React from 'react';
import './index.scss';
import { CardRow } from '../AlumniCard/CardRow';
import Loader from 'react-loaders';
import Nicholas_Stone from '../AlumniCard/AlumniPhotos/Nicholas_Stone_image.jpeg';
import Aabha_Muley from '../AlumniCard/AlumniPhotos/AabhaMuley.png';
import Ravnoor_Gujral from '../AlumniCard/AlumniPhotos/RavnoorGujral.png';
import Lakshana_Ramanan from '../AlumniCard/AlumniPhotos/LakshanaRamanan.png';
import Rohan_Srivatsa from '../AlumniCard/AlumniPhotos/RohanSrivatsa.png';
import Raaga_Sarraff from '../AlumniCard/AlumniPhotos/Raaga_Sarraff.png';
import Stanley_Yin from '../AlumniCard/AlumniPhotos/StanleyYin.png';
import Neha_Gurram from '../AlumniCard/AlumniPhotos/NehaGurram.png';
import Jonas_Freck from '../AlumniCard/AlumniPhotos/JonasFreck.png';
import Aditi_Satghare from '../AlumniCard/AlumniPhotos/AditiSatghare.png';
import Pablo from '../AlumniCard/AlumniPhotos/PabloRendon-Mendoza.png';
import Wilver from '../AlumniCard/AlumniPhotos/WilverMariano.png';
import Akash from '../AlumniCard/AlumniPhotos/AkashGokhale.png';
import Varun from '../AlumniCard/AlumniPhotos/Varun.png';
import Summer from '../AlumniCard/AlumniPhotos/SummerFan.jpeg';
import Adi from '../AlumniCard/AlumniPhotos/AdityaDeb.png';
import Yash from '../AlumniCard/AlumniPhotos/YashChawla.png';
import Anjali from '../AlumniCard/AlumniPhotos/AnjaliMohan.png';
import Arya from '../AlumniCard/AlumniPhotos/AryaUpadhyay.png';
import Alice from '../AlumniCard/AlumniPhotos/AliceLu.png';
import Sid from '../AlumniCard/AlumniPhotos/SidSidSid.jpeg';


const Program = () => {
    const cohort1Cards = [
        {
            image: Aabha_Muley,
            name: "Aabha Muley",
            description: "University of Georgia",
            linkedinUrl: "https://www.linkedin.com/in/aabha-muley/"
        },
        {
            image: Ravnoor_Gujral,
            name: "Ravnoor Gujral",
            description: "Georgia Institute of Technology",
            linkedinUrl: "https://www.linkedin.com/in/ravnoorgujral/"
        },
        {
            image: Lakshana_Ramanan,
            name: "Lakshana Ramanan",
            description: "Georgia Institute of Technology",
            linkedinUrl: "https://www.linkedin.com/in/lakshana-ramanan/"
        },
        {
            image: Rohan_Srivatsa,
            name: "Rohan Srivatsa",
            description: "University of Georgia",
            linkedinUrl: "https://www.linkedin.com/in/rohansrivatsa/"
        },
    ];
    const cohort2Cards = [
      {
          image: Raaga_Sarraff,
          name: "Raaga Sarraff",
          description: "Northview High School",
          linkedinUrl: "http://www.linkedin.com/in/raaga-sarraff-300a97242"
      },
      {
          image: Stanley_Yin,
          name: "Stanley Yin",
          description: "Carnegie Mellon University",
          linkedinUrl: "http://www.linkedin.com/in/stanleyyin/"
      },
      {
          image: Neha_Gurram,
          name: "Neha Gurram",
          description: "Northview High School",
          linkedinUrl: "http://www.linkedin.com/in/neha-gurram-0818b4258"
      },
      {
          image: Jonas_Freck,
          name: "Jonas Freck",
          description: "Kennesaw State University",
          linkedinUrl: "https://www.linkedin.com/in/jonas-freck/"
      },
  ];
  const cohort3Cards = [
    {
        image: Aditi_Satghare,
        name: "Aditi Satghare",
        description: "Innovation Academy",
        linkedinUrl: "https://www.linkedin.com/in/aditisatghare"
    },
  ];
  const cohort4Cards = [
    {
        image: Pablo,
        name: "Pablo Rendon-Mendoza",
        description: "Baruch College",
        linkedinUrl: "http://www.linkedin.com/in/pablorendon"
    },
    {
        image: Wilver,
        name: "Wilver Mariano",
        description: "Baruch College",
        linkedinUrl: "http://www.linkedin.com/in/wilver-mariano-2a59941b4"
    },
    {
        image: Akash,
        name: "Akash Gokhale",
        description: "University of Georgia",
        linkedinUrl: "http://www.linkedin.com/in/akash-gokhale1"
    },
    {
        image: Nicholas_Stone,
        name: "Nicholas Stone",
        description: "Georgia Institute of Technology",
        linkedinUrl: "https://www.linkedin.com/in/nicholasbaronstone/"
    },
  ];
  const cohort5Cards = [
    {
        image: Varun,
        name: "Varun Vijay",
        description: "Georgia Institute of Technology",
        linkedinUrl: "https://www.linkedin.com/in/thevarunvijay/"
    },
  ];
  const cohort6Cards = [
    {
        image: Anjali,
        name: "Anjali Mohan",
        description: "Innovation Academy",
        linkedinUrl: "http://www.linkedin.com/in/anjalimohan1213"
    },
    {
        image: Adi,
        name: "Aditya Deb",
        description: "Georgia Institute of Technology",
        linkedinUrl: "https://www.linkedin.com/in/aditya-deb/"
    },
    {
        image: Summer,
        name: "Summer Fan",
        description: "Northview High School",
        linkedinUrl: "https://www.linkedin.com/in/summer-fan/"
    },
    {
        image: Yash,
        name: "Yash Chawla",
        description: "Kennesaw State University Alum",
        linkedinUrl: "https://www.linkedin.com/in/yashchawla1/"
    },
  ];
  const cohort7Cards = [
    {
        image: Arya,
        name: "Arya Upadhyay",
        description: "Northview High School",
        linkedinUrl: "https://www.linkedin.com/in/arya-upadhyay/"
    },
    {
        image: Sid,
        name: "Siddharth Boorla",
        description: "Northview High School",
        linkedinUrl: "https://www.linkedin.com/in/siddharthboorla/"
    },
    {
        image: Alice,
        name: "Alice Lu",
        description: "Baruch College",
        linkedinUrl: "https://www.linkedin.com/in/alicelu11"
    },
];

    return (
        <>
            <div className="program-page">
                <h1 className="program-alumni-header">program alumni</h1>
                <h2 className="cohort-1-header">cohort 1</h2>
                <CardRow cards={cohort1Cards} />
                <div className="second">
                  <CardRow cards={cohort2Cards} />
                </div>
                <div className="third">
                <CardRow cards={cohort3Cards} />
                </div>
                <h2 className="cohort-2-header">cohort 2</h2>
                <div className="fourth">
                  <CardRow cards={cohort4Cards} />
                </div>
                <div className="fifth">
                  <CardRow cards={cohort5Cards} />
                </div>
                <h2 className="cohort-3-header">cohort 3</h2>
                <div className="sixth">
                  <CardRow cards={cohort6Cards} />
                </div>
                <div className="seventh">
                  <CardRow cards={cohort7Cards} />
                </div>
            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    );
};

export default Program;
