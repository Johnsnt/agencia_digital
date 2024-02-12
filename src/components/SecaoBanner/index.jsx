import './BannerStyle.css'

export default function SecaoBanner({temaAtual}) {

    const lightMode = 'light-mode';
    const darkMode = 'dark-mode';
    return (
        <section className={`secao-banner ${temaAtual === lightMode ? lightMode : darkMode}`}>
            <div className={`container-banner`}></div>
            <div className='container-titulo'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}