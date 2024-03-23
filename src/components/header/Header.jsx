import cls from "./header.module.css"
import logo from "../../assets/logo.svg"
import {useState} from "react";
// Bem blok element modificator
import {useTranslation} from 'react-i18next'


const Header = () => {
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState('RU');
    const langChange = (e) => {
        if (e.target.innerText === 'RU') {
            setLang("EN")
            i18n.changeLanguage('en');
        } else if (e.target.innerText === 'EN') {
            setLang("UK");
            i18n.changeLanguage('uk');
        } else  if (e.target.innerText === 'UK') {
            setLang("KG");
            i18n.changeLanguage('kg');
        }else if (e.target.innerText === 'KG') {
            setLang("RU");
            i18n.changeLanguage('ru');
        }
        else{
            setLang("RU");
            i18n.changeLanguage('ru');
        }
    }
    return (
        <header className={'container'}>
            <div className={cls.header__logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={cls.header__search}>
                <input type="text" placeholder="Tênis"/>
                <span><i className="bi bi-search"></i></span>
            </div>
            <div className={cls.header__buttons}>
                <button onClick={langChange}>{lang}</button>
                <div className={cls.line}/>
                <button>Entrar</button>
            </div>
            <div className={cls.header__cart}>
                <span style={{fontSize:'22px',color:'#c97021'}}><i className="bi bi-cart3"></i></span>
                <span className={cls.cart__count}>2</span>
            </div>
        </header>
    );
};

export default Header