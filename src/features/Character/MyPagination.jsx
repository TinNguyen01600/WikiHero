import { useSelector } from 'react-redux'
import { Pagination, Stack } from '@mui/material'


const MyPagination = ({ charsPerPage, paginate }) => {
    const characters = useSelector(state => state.character.characters)
    const numberOfPages = Math.ceil(characters.length / charsPerPage)

    return (
        <Stack
            spacing={2}
            sx={{
                "& .MuiPaginationItem-root": {
                    color: "#ffffff"
                }
            }}
        >
            <Pagination
                count={numberOfPages}
                color="warning"
                variant='outlined'
                onClick={(e) => paginate(e.target.innerText)}
            />
        </Stack>
    )
}

export default MyPagination
