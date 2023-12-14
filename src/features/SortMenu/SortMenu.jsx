import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useState } from 'react';

import { useSelector, useDispatch } from "react-redux"
import { ascendant, descendant, select } from "./sortMenuSlice"

const SortMenu = () => {
    const dispatch = useDispatch()
    const sortMenu = useSelector(state => state.sortMenu)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const open = Boolean(isMenuOpen);

    const handleClick = (event) => {
        setIsMenuOpen(event.currentTarget);
    };

    return (
        <div>
            <Button
                variant='contained'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ paddingLeft: '10px', backgroundColor: '#6b6eb0', fontWeight: 'bold' }}
            >
                <SwapVertIcon />
                Sort
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={isMenuOpen}
                open={open}
                onClose={() => setIsMenuOpen(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('name'))}}>
                    {sortMenu.name ? "•  Name" : "Name"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('overallPower'))}}>
                    {sortMenu.overallPower ? "•  Overall Power" : "Overall Power"}
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('intelligence'))}}>
                    {sortMenu.intelligence ? "•  Intelligence" : "Intelligence"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('strength'))}}>
                    {sortMenu.strength ? "•  Strength" : "Strength"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('speed'))}}>
                    {sortMenu.speed ? "•  Speed" : "Speed"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('durability'))}}>
                    {sortMenu.durability ? "•  Durability" : "Durability"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('power'))}}>
                    {sortMenu.power ? "•  Power" : "Power"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(select('combat'))}}>
                    {sortMenu.combat ? "•  Combat" : "Combat"}
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(ascendant()); }}>
                    {sortMenu.ascending ? "•  Ascending" : "Ascending"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); dispatch(descendant()); }}>
                    {sortMenu.descending ? "•  Descending" : "Descending"}
                </MenuItem>
            </Menu>
        </div>
    )
}

export default SortMenu