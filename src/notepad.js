
//Componente Topo.js
export default function Topo({ temaAtual, setTema }) {
    
    //Variáveis com o nome dos modos
    const lightMode = 'light-modelv1';
    const darkMode = 'dark-modelv1';

    //  Função que altera o "tipo" do tema
    const mudarTema = () => {
        temaAtual === lightMode? setTema(darkMode) : setTema(lightMode)
    };

    return (
        <header className={temaAtual === lightMode ? lightMode : darkMode}>
                <button className={`botao`} onClick={mudarTema} >
                    <img src={temaAtual === lightMode ? moon : sun} alt='btnIcon' />
                </button>
        </header>
    );
}

//Componente App.js
export default function App() {
    const lightMode = 'light-modelv1';
    const [tipoTema, setTipoTema] = useState(lightMode);
    return (
        <main>
          <Topo temaAtual={tipoTema} setTema={setTipoTema} />
          <SecaoExperienciaTrabalho />
        </main>
      );
    }
    


