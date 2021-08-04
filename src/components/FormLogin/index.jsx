import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { TextField, Button } from "@material-ui/core";
import { useHistory, Redirect, Link } from "react-router-dom";
import axios from "axios";
import imgLogin  from "../../assets/teste1.svg";
import { Container, Form } from "./styles";
import { motion } from 'framer-motion'
import { HeaderAux } from "../HeadAux";
import { toast } from "react-toastify"

export const FormLogin = ({ autenticado, setAutenticado }) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().email().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunc = (data) => {
            
        axios.post("https://kenziehub.me/sessions", data)
        .then(res => {

            const { token } = res.data
            localStorage.setItem("@kenziehub:token", JSON.stringify(token))

            setAutenticado(true)

            return history.push("/dashboard")
        })
        .catch(_ => toast.error('E-mail ou senha incorretos, por favor tente novamente'))
    }

    if(autenticado) {
        return <Redirect to={"/dashboard"} />
    }   

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        >
        <HeaderAux />
        <Container>
            <img src={imgLogin} alt={imgLogin} />
        <Form onSubmit={handleSubmit(onSubmitFunc)}>
        <h1 style={{color: "var(--BlueKenzie)"}}>Login</h1>
         <div>
            <TextField 
                label="E-mail" 
                variant="outlined"
                size="small" 
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                />
        </div>

        <br />
        
        <div>
            <TextField 
                label="Senha" 
                variant="outlined"
                type="password"
                size="small" 
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
            />
        </div>

        <br />
        <div>
            <Button 
                variant="contained" 
                color="primary" 
                style={{display: "block", textAlign: "center", margin: "0 auto", width: "7rem"}}
                type="submit">Entrar</Button>

            <p>Ainda não possui conta? Faça seu <Link to={"/register"}>Cadastro</Link></p>
        </div>
     </Form>
  </Container>
  </motion.div>
    )
}