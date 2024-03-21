import cls from "./header.module.css"
import logo from "../../assets/logo.svg"
import {useState} from "react";
// Bem blok element modificator


const Header = () => {
    const [lang, setLang] = useState('RU');
    const langChange = (e) => {
        if (e.target.innerText === 'RU') {
            setLang("EN");
        } else if (e.target.innerText === 'EN') {
            setLang("TR");
        } else if (e.target.innerText === 'TR') {
            setLang("RU");
        } else {
            setLang("RU");
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