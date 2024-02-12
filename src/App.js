//componente App
import './App.css';
import { useState } from 'react';

import Topo from './components/Topo';
import SecaoBanner from './components/SecaoBanner';
import SecaoExperienciaTrabalho from './components/SecaoExperienciaTrabalho';
import Rodape from './components/Rodape';

export default function App() {
  const lightMode = 'light-mode';
  const [tipoTema, setTipoTema] = useState(lightMode);


  return (
    <main>
      <Topo temaAtual={tipoTema} setTema={setTipoTema} />
      <SecaoBanner temaAtual={tipoTema}/>
      <SecaoExperienciaTrabalho temaAtual={tipoTema}/>
      <Rodape temaAtual={tipoTema} />
    </main>
  );
}


