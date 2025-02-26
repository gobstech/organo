import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Botao from './componentes/Botao';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador); //ele passa a saída como se fosse um array
    colaboradores.push(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Front-End" />
      <Time nome="Front-End" />
      <Time nome="Front-End" />
      <Time nome="Front-End" />
    </div>
  );
}

export default App;
