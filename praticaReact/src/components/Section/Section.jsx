import styled from 'styled-components'
import styles from './Section.module.css'
import Div from "../Div/Div"

export default function Section({title, button,title2, button2}){
    return (<div>
        <div>
        <h1>{title}</h1>
        <button className={styles.laranja}>
            {button}
        </button>
        <Div/>
        </div>
        <h1>{title2}</h1>
        <button className={styles.verde}>
            {button2}
        </button>
        </div>
    )
}