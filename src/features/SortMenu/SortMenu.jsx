import { useSelector, useDispatch } from "react-redux"
import { ascendant, descendant } from "./sortMenuSlice"

const SortMenu = () => {
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(ascendant(true))}>Ascend</button> <br />
            <button onClick={() => dispatch(descendant(true))}>Descend</button>
        </>
    )
}

export default SortMenu