import { logo, facebook, twitter, linkedin, dribble, behance, googlePlus } from '../../assets';

import './RodapeStyle.css';

export default function Rodape({temaAtual}) {
    const lightMode = 'light-mode';
    const darkMode = 'dark-mode';


    return (
        <footer className={`secao-rodape ${temaAtual === lightMode ? lightMode : darkMode}`}>
            <div className={`container-agrupador-rodape ${temaAtual === lightMode ? lightMode : darkMode}`}>
                <img src={logo} id="logo" alt="logo" />
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.</p>
                <div className='social-media'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={dribble} alt="dribble" />
                    <img src={behance} alt="behance" />
                    <img src={googlePlus} alt="googlePlus" />
                </div>
            </div>
            <div className='assinatura'>
                <p>Copyright 2024 © <span>Johnny Santos</span></p>
            </div>
        </footer>
    );
}