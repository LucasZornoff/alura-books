import './App.css';
import Logo from './components/Logo'
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [{ img: perfil, alt: 'perfil' }, { img: sacola, alt: 'sacola' }]


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <ul className='opcoes'>
          { textoOpcoes.map( (texto) => ( 
            <li className='opcao'><p>{texto}</p></li>
          ) ) }
        </ul>

        <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone'><img src={icone.img} alt={icone.alt}></img></li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
