import React from 'react';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import {useTranslation} from "react-i18next";
import { RiChatHeartFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
import { FaEye } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";


const App = () => {
    const {t} = useTranslation();
    const props={
        width:'6rem',
        height:'5rem'
    }
    return (
        <div>
            <p>{t('Hello')}</p>
            <Header/>
            <ul>
                <RiChatHeartFill style={{color:"red"}}/>
                <DiAndroid style={{color:"green",width:"3rem",height:"2rem"}}/>
                < FaEye/>
                <SiInstagram {...props} style={{color:"e20270"}}/>
                {
                    ['Home', 'About', 'Profile', 'Services']
                        .map(el => <li key={el}>{t(el)}</li>)
                }
            </ul>
            <Footer/>

        </div>
    );
};

export default App;