import "./styles.css"
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"


export const HeaderAux = () => {

    const history = useHistory()

    const styledBtn = {
        margin: "1.2rem"
    }

    return (
        <header className="header">
            <Button onClick={() => history.push("/")} style={styledBtn} variant="contained" color="primary">Home</Button>
        </header>  
    )
}