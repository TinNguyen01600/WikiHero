import { Link } from "react-router-dom"

const Detail = ({ char }) => {
    return (
        <>
            <h4 style={{color: 'white'}}>{char.name}</h4>
            <Link to="/">Go back</Link>
        </>
    )
}

export default Detail