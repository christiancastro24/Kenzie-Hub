import { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import axios from "axios"
import userFoto from "../../assets/profile4.svg"
import { Container, Header } from "./styles"
import { motion } from 'framer-motion'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Button } from '@material-ui/core'

export const User = ({ setAutenticado, autenticado }) => {

    const history = useHistory()
    
    const [user, setUser] = useState([])

    const [token] = useState((JSON.parse(localStorage.getItem("@kenziehub:token")) || ""))

    useEffect(() => {
        axios.get("https://kenziehub.me/profile", {
            headers: { Authorization: `Bearer ${token}`},

        }).then(res => {
            setUser(res.data)

        }).catch(err =>  console.log(err))
    
    }, [token])

    const styledButton = {
        margin: "1.2rem",
        backgroundColor: "#0095f6",
        color: "#FFF"
    }

    const styledButton2 = {
        marginLeft: "auto",
        display: "flex",
        marginTop: "-3.8rem",
        marginRight: "2rem"
    }

    const cleanAndLogout = () => {
        setAutenticado(false)
        history.push("/")
        localStorage.clear()
    }

    if(!autenticado) {
       return <Redirect to={"/"} />
    }


    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
          <Header>
            <Button 
              variant="contained" 
              size="large" 
              style={styledButton}
              onClick={() => history.goBack("/dashboard")}>Voltar</Button>
            <Button 
              variant="contained" 
              size="large" color="secondary"
              style={styledButton2}
              onClick={cleanAndLogout}>Logout</Button>
   
          </Header>
        <div>
              <Container>
              <img src={userFoto} alt={userFoto} />
              <div className="dados-usuario">
                 <h2>Dados do usuário:</h2> 
                 <h4> <span><AccountCircleIcon color="primary" /></span> {user.name} </h4>
                 <h4> <span><EmailIcon  color="primary" /></span> {user.email}</h4>
                 <h4> <span><LocalLibraryIcon color="primary" /></span> {user.bio}</h4>
                 <h4> <span><ContactMailIcon color="primary" /></span> {user.contact}</h4>
                 <h4> <span><ViewModuleIcon color="primary" /> </span>{user.course_module}</h4>
              </div>
              </Container>     
        </div>
    </motion.div>
    )
}