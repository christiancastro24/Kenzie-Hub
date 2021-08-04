import { useState, useEffect } from 'react'
import axios from "axios"
import { HeaderAux } from '../HeadAux'
import { Button } from "@material-ui/core"
import devImg from "../../assets/logo2.svg"
import { motion } from 'framer-motion'
import "./styles.css"

export const Devs = () => {

    const [students, setStudents] = useState([])
    const [page, setNextPage] = useState(1)

    useEffect(() => {
        axios.get(`https://kenziehub.me/users?page=${page}`) 
        .then(res => setStudents(res.data))
        .catch(err => console.error(err))
    }, [page])

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        >
        <div className="container-all-items">
            <HeaderAux />
            <div className="container-botoes">
                {page > 1 
                ?
                <Button  onClick={() => setNextPage(page > 1 ? page - 1 : page)} variant="contained" color="primary">Voltar</Button>
                :
                <Button disabled onClick={() => setNextPage(page > 1 ? page - 1 : page)} variant="contained" color="primary">Voltar</Button>
                }

                {page > 91 
                ?
                <Button disabled onClick={() => setNextPage(page + 1)}variant="contained" color="secondary">Avançar</Button>
                :
                <Button onClick={() => setNextPage(page + 1)}variant="contained" color="secondary">Avançar</Button>
                }
            </div>
            <div className="container-items">
            {students.map(student => {
                return (
                    <div className="container-devs" key={student.id}>
                        <div className="devs">
                            <h3>{student.name}</h3>
                            <h4>{student.course_module}</h4>
                            {student.techs.length > 0 && <h5>{student.techs[0].title}</h5>}           
                            {student.techs.length > 0 && <h5>{student.techs[0].status}</h5>} 
                            <img src={devImg} alt={devImg} />
                        </div>
                     </div>
                )
            })}
            </div>
           
        </div>
     </motion.div>
    )
}