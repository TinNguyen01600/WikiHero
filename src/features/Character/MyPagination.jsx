import { useSelector } from 'react-redux'
import { Pagination, Stack } from '@mui/material'


const MyPagination = ({ charsPerPage, paginate, characters }) => {
    const numberOfPages = Math.ceil(characters.length / charsPerPage)

    return (
        <Stack
            spacing={2}
            sx={{
                alignItems: 'center',
                height: '60px',
                "& .MuiPaginationItem-root": {
                    color: "#ffffff",
                    fontSize: '25px'
                }
            }}
        >
            <Pagination
                count={numberOfPages}
                color="warning"
                variant='outlined'
                size='large'
                onClick={(e) => paginate(e.target.innerText)}
            />
        </Stack>
    )
}

export default MyPagination
