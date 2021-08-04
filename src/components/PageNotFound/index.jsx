import { Button } from '@material-ui/core'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import pageNotFound from "../../assets/error404.svg"
import "./styles.css"

export const PageNotFound = () => {

    const history = useHistory();

    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
    <div className="container">
        <img src={pageNotFound} alt={pageNotFound} />
        <div>
            <h1>Página não encontrada!!!</h1>
        </div>

        <div>
            <Button variant="contained" size="large" color="secondary" onClick={() => history.push("/")} style={{width: "12rem", marginTop: "1rem", height: "2.8rem"}}>Home</Button>
        </div>
    </div>
        </motion.div>
    )
}