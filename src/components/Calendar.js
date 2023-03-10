import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';

const Calendar = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <InputLabel className='input-label' required>{props.label}</InputLabel>
            <DatePicker
                className='date-picker'
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                minDate={moment()}
                disablePast={true}
            // label={props.placeholder}
            // slots={{
            //     openPickerButton: () => <button >test</button>
            // }}

            />
        </LocalizationProvider>
    )
}

export default Calendar