import styled from 'styled-components'
import styles from './Div.module.css'
// import sacolaVerde from '../../assets/sacolaVerde.svg'
import sacolaVermelha from '../../assets/sacolaVermelha.svg'
// import carne1 from '../../assets/carne1.svg'
// import carne2 from '../../assets/carne2.svg'
// import carne3 from '../../assets/carne3.svg'



export default function Div({item1, item2, item3}) {
    return (<div className={styles.divMaisLegal}>
    <div className={styles.divLegal}>
    <img></img>
    <div>
    <h2>{item1}</h2>
    <p>1kg/Preço</p>
    <h2>R$ 000.000</h2>
    </div>
    {/* <img>src={sacolaVermelha} alt=""</img> */}
    </div>
    <div className={styles.divLegal}>
    <img></img>
    <div>
    <h2>{item2}</h2>
    <p>1kg/Preço</p>
    <h2>R$ 000.000</h2>
    </div>
    {/* <img>src={sacolaVermelha} alt=""</img> */}
    </div>
    <div className={styles.divLegal}>
    <img></img>
    <div>
    <h2>{item3}</h2>
    <p>1kg/Preço</p>
    <h2>R$ 000.000</h2>
    </div>
    {/* <img>src={sacolaVermelha} alt=""</img> */}
    </div>
    </div>
    )
}