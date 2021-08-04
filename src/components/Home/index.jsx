import "./styles.css"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import logo from "../../assets/logo.svg"
import home from "../../assets/t2.svg"
import logo2 from "../../assets/logo2.svg"

export const Home = ({ autenticado }) => {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        >
        <header className="header">
            <img src={logo} alt={logo} /> <span className="span">KenzieHub</span>
            <div className="links">
                <Link to={"/register"}>Registre-se</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/devs"}>Devs</Link>
                <Link to={"/about"}>Sobre</Link>
                {autenticado && <Link to={"/dashboard"}>Perfil</Link>}
                
            </div>
        </header>

        <div className="kenzie-home">
            <img src={home} alt={home} />
            <div className="title">
              <h1>KENZIEHUB</h1>
              <h1>ACADEMY</h1>
              <h1>BRASIL</h1>
              <img src={logo2} alt={logo2} />
            </div>
        </div>

        <footer className="kenzie-home2">
          <h2>&copy; Christian Silveira</h2>
        </footer>
      </motion.div>
    )
}