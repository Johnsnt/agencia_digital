//Componente TOPO
import React from 'react';
import { logo, moon, sun } from '../../assets/';

import './TopoStyle.css';

export default function Topo({ temaAtual, setTema }) {

    const lightMode = 'light-mode';
    const darkMode = 'dark-mode';

    const mudarTema = () => {
        temaAtual === lightMode? setTema(darkMode) : setTema(lightMode)
    };

    
    return (
        <header className={temaAtual === lightMode ? lightMode : darkMode}>
            <div className='container-topo'>
                <img src={logo} alt='logo' />
                <button className={`botao`} onClick={mudarTema} >
                    <img src={temaAtual === lightMode ? moon : sun} alt='btnIcon' />
                </button>
            </div>
        </header>
    );
}