import React from 'react'
import './component.css';
import { Button } from '@mui/material'
import logo from './logo.png'

function Navbar() {
  return (
    <nav>
        <div>
            <img src={logo} alt="Logo" />
        </div>
        <div>
            <Button variant="outlined" sx={{ ml: 4, width: 175, py: 1, px: 6 }}  color="secondary">Register</Button>
            <Button variant="contained" sx={{ ml: 4, width: 175, py: 1, px: 6}} >Login</Button>
        </div>
    </nav>
  )
}

export default Navbar