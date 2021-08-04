import { useState } from "react"
import "./styles.css"
import axios from "axios"
import {  Redirect } from "react-router-dom" 
import { TextField, Button } from "@material-ui/core"
import { Selectt } from "./styles"
import { useEffect } from "react"
import { Header } from "../Header"
import { motion } from 'framer-motion'
import { toast } from "react-toastify"
import tech from "../../assets/tech3.svg"



export const Dashboard = ({ autenticado, setAutenticado }) => {
    
    const [usersAndTechs, setUsersAndTechs] = useState([])
    const [user, setUser] = useState([])
    const [status, setStatus] = useState("Iniciante")
    const [title, setTitle] = useState("")
  
    const [token] = useState((JSON.parse(localStorage.getItem("@kenziehub:token")) || ""))


    const handleAddTech = () => {
        
        const data = { title: title, status: status }
        setTitle("")

        axios.post("https://kenziehub.me/users/techs", data,  {
            
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            setUsersAndTechs([...usersAndTechs, {...data}])
            // {...data} ou {title: title, status: status}
            toast.success('Tecnologia adicionada')

        })
        .catch(err => toast.error('Esta tecnologia já existe, por favor adicione outra'))
    } 
  

    useEffect(() => {
        axios.get("https://kenziehub.me/profile", {
            headers: { Authorization: `Bearer ${token}`},

        }).then(res => {
            setUser(res.data)
            setUsersAndTechs(res.data.techs)

        }).catch(err =>  console.log(err))
    
    }, [usersAndTechs, token])



    const handleDeleteTech = (id) => {
        
        axios.delete(`https://kenziehub.me/users/techs/${id}`, {
            headers: { Authorization: `Bearer ${token}`},

         }).then(_ => {
                setUsersAndTechs(usersAndTechs.filter(user => user !== id))
                toast.success('Tecnologia excluída')

        }).catch(err => console.log(err))
    }
    

    if(!autenticado) {
        return <Redirect to={"/"} />
    }

    const styleInput = {
        width: "16rem",
        backgroundColor: "#f0f0f0",
        color: "#fff"
    }


  

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
            <Header name={user.name} setAutenticado={setAutenticado} />
       
                
            <div className="container-all">
            <div>
          
           </div>
            <div>
              <div>
                <br /><br />
                  <h3>Tecnologias</h3>     

                <TextField 
                  label="Cadastre sua tecnologia" 
                  variant="outlined" 
                  value={title} 
                  onChange={evt => setTitle(evt.target.value)}
                  style={styleInput}
                />
                </div>

                <br /><br />

                <Selectt value={status} onChange={evt => setStatus(evt.target.value)}> 
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediario">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Selectt>
                <br /><br />

                <br /><br />
                <div className="buttons">
                {title === "" ? 

                <Button disabled variant="contained" color="primary" onClick={handleAddTech}>Enviar</Button >    
                :
                <div>
                <Button variant="contained" color="primary" onClick={handleAddTech}>Enviar</Button >{"  "} 
                </div>
                  
                }
        </div>
            </div>

            <div className="teste">
            {usersAndTechs.map((tech, index) => {
                return (
                    <div key={index} className="container-techs">
                        <div className="container-child">
                            <h2>{tech.title}</h2>
                            <h3>{tech.status}</h3>
                        <Button variant="contained" color="secondary" onClick={() => handleDeleteTech(tech.id)}>Excluir</Button>
                        </div>
                    </div>
                )
            })}
            </div>
                <img src={tech} alt={tech} />
            <br /><br />
            </div>
            
           
        </div>
        </motion.div>
    )
}