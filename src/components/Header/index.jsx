import { Container } from "./styles"
import image from "../../assets/userTeste.png"
import { Link, useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"


export const Header = ({ name, setAutenticado }) => {

    const history = useHistory()

       
    const handleLogout = () => {
        setAutenticado(false)
        localStorage.clear()
        history.push("/")
    }

    return (
        <Container>
            <h1 onClick={() => history.push("/")} style={{cursor: "pointer"}}>KenzieHub<span style={{color: "pink", fontSize: "3rem"}}>.</span></h1>

            <Link to={"/user"}><h3><img src={image} alt={image} /> {name}</h3></Link>
            
            <Button style={{marginBottom: "1rem"}} onClick={handleLogout}>Logout</Button>
        </Container>  
    )
}