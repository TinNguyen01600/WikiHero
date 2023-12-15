import { Button, ButtonGroup } from "@mui/material"
import { Link } from "react-router-dom";

const MyButtonGroup = () => {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Link to="/">
                <Button sx={{ bgcolor: 'white', color: 'black', margin: '10px' }}>
                    All
                </Button>
            </Link>
            <Link to="/marvel">
                <Button sx={{ bgcolor: 'red', margin: '10px' }}>
                    Marvel
                </Button>
            </Link>
            <Link to="/dccomics">
                <Button sx={{ color: 'black', margin: '10px' }}>DC Comics</Button>
            </Link>
            <Link to="/dark-horse">
                <Button sx={{ bgcolor: 'orange', margin: '10px' }}>Dark Horse Comics</Button>
            </Link>
        </ButtonGroup>
    )
}

export default MyButtonGroup