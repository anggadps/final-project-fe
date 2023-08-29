import React from 'react'
import { TextField } from '@mui/material'

function Input({labelInput, inputName, inputType}) {
  return (
    <TextField fullWidth size='small' name={inputName} placeholder={labelInput} type={inputType} sx={{
        mb: 2
    }}/>
  )
}

export default Input