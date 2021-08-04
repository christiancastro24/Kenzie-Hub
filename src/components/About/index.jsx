import { HeaderAux } from "../HeadAux"
import about from "../../assets/t4.svg"
import logo from "../../assets/logo2.svg"
import "./styles.css"

export const About = () => {
    return (
        <div>
            <HeaderAux />

            <div className="container-imgs">
                <img src={about} alt={about} />
                <img src={logo} alt={logo} className="logo"/>
            </div>

            <div className="container-ctd"> 
                <h2>KenzieHub é um trabalho da kenzie academy brasil, alunos no segundo quarter tem essa oportunidade maravilhosa de aprender mais do react. Eu diria os <strong>apaixonados em estar se tornando desenvolvedores</strong>.</h2>
            </div>
        </div>
    )
}