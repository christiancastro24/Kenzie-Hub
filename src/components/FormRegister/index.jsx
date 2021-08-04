import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { Button, TextField } from "@material-ui/core";
import axios from "axios"
import { useHistory, Redirect, Link } from "react-router-dom";
import imgRegister from "../../assets/formRegister.svg"
import { Form, Container } from "./styles";
import { motion } from 'framer-motion'
import { HeaderAux } from "../HeadAux";
import { toast } from "react-toastify";

export const FormRegister = ({ autenticado }) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().email().required('Campo obrigatório'),
        password: yup.string().min(8, 'min 8 digitos').required("Campo obrigatório"),
        name: yup.string().required('Campo obrigatório'),
        bio: yup.string().required('Campo obrigatório'),
        contact: yup.string().required('Campo obrigatório'),
        course_module: yup.string().required('Campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunc = (data) => {
        
        axios.post("https://kenziehub.me/users", data)
        .then(res => {
            toast.success('Cadastro concluído')
            return history.push("/login")
        })
        .catch(err => toast.error('E-mail já cadastrado, por favor tente outro.'))
    }

    if(autenticado) {
        return <Redirect to={"/dashboard"}/> 
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
        <img src={imgRegister} alt={imgRegister} />
        <Form onSubmit={handleSubmit(onSubmitFunc)}>
        <h1 style={{color: "var(--BlueKenzie)"}}>Cadastro</h1>

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
                label="Password" 
                variant="outlined"
                size="small" 
                type="password" 
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
            />
        </div>
        <br />
         <div>
            <TextField 
                label="Name" 
                variant="outlined"
                size="small" 
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
            />
               
        </div>
        <br />
        <div>
            <TextField 
                label="Bio" 
                variant="outlined"
                size="small" 
                {...register("bio")}
                error={!!errors.bio}
                helperText={errors.bio && errors.bio.message}
            />
        </div>
        <br />
        <div>
            <TextField 
                label="Contact" 
                variant="outlined"
                size="small" 
                {...register("contact")}
                error={!!errors.contact}
                helperText={errors.contact && errors.contact.message}
            />
        </div>
        <br />
        <div>
            <TextField 
                label="Course_module" 
                variant="outlined"
                size="small" 
                {...register("course_module")}
                error={!!errors.course_module}
                helperText={errors.course_module && errors.course_module.message}
            />
        </div>
        <br />
        <div>
            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
            <p>Já possui uma conta? Faça <Link to={"/login"}>Login</Link></p>
        </div>
     </Form>
  </Container>
  </motion.div>
    )
}