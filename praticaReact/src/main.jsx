import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Section from './components/Section/Section'
import './index.css'
import Div from './components/Div/Div'

const texto1 = "CLIENTE +"
const title1 = "promo"
const texto2 = "OUTROS"
const title2 = "saudável"
const item1 = "item 1"
const item2 = "item 2"
const item3 = "item 3"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section title={texto1} button={title1}
    title2={texto2} button2={title2}/>
    <Div item1={item1} item2={item2} item3={item3}/>
  </StrictMode>,
)
