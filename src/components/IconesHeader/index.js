import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const icones = [{ img: perfil, alt: 'perfil' }, { img: sacola, alt: 'sacola' }]

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;

`

const Icones = styled.ul`
    display: flex;
    align-items: center;

`

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone.img} alt={icone.alt}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader