import { InputLabel, TextField } from '@mui/material'
import React from 'react'

const InputField = (props) => {
  return (
    <>
      <InputLabel className='input-label' required={props.required ?? true}>{props.inputlabel}</InputLabel>
      <TextField
        placeholder={props.placeholder}
        fullWidth
        type={props.type ?? 'text'}
        value={props.value}
        onChange={props.onChange}
        mb={-1}
        name={props.name ?? ""}
        {...props}
      />
    </>
  )
}

export default InputField