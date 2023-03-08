import './App.css';
import { Container, Typography, Grid, MenuItem, Select, TextField, InputAdornment, Autocomplete, InputLabel, Chip, Paper, ToggleButton, Divider, ToggleButtonGroup, styled, ListSubheader, FormControl } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useReducer, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Container_Type, data, Transportion_Data } from './data';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TransportationMenu from './components/TransportationMenu';
import InputField from './components/InputField';
import { formReducer } from './utils/Globalfunction';
import AutoComplete from './components/AutoComplete';

function App() {
  const [metricState, setMetricState] = useState("International (SI)");
  const [commodityType, setCommodityType] = useState(null);
  const [deliveryWay, setDeliveryWay] = useState(0);
  const [transportationType, setTransportationType] = useState("");
  const [containerType, setContainerType] = useState("");
  const [formData, setFormData] = useReducer(formReducer, {});
  const [inputvaluefrom, setInputValuefrom] = useState('');
  const [inputvalueto, setInputValueto] = useState('');

  const handleDeliveryWay = (event, val) => {
    setTransportationType("");
    setContainerType("");
    setDeliveryWay(val);
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      width: '100%',
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: '6px',
      },
    },
  }));

  return (
    <Container>
      <Box className='layout'>
        <Grid container>
          <Grid item md={10}>
            <Box className='heading-wrapper'>
              <Typography variant='h4'>Request a quote</Typography>
              <img src="./ebook.svg" alt="ebook" />
            </Box>
            <Typography className='headline' mt={2}>And get the best rates from the leading logistics providers.</Typography>
          </Grid>
          <Grid item md={2}>
            <Select
              value={metricState}
              onChange={(e) => setMetricState(e.target.value)}
              fullWidth
              className='metric-select'
            >
              <MenuItem value={"International (SI)"}>International (SI)</MenuItem>
              <MenuItem value={"Imperial (US)"}>Imperial (US)</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Typography variant='h6' mt={2} mb={3}>Cargo details</Typography>
        <Grid container>
          <Grid item md={9}>         
            <Box className="flex-box" mb={1}>
              <InputLabel className='input-label' required>PRODUCT</InputLabel>
              <Typography sx={{ float: 'right' }}>HS Codes</Typography>
            </Box>
            <Autocomplete
              freeSolo
              fullWidth
              options={data}
              autoHighlight
              className='img-select'
              value={commodityType}
              onChange={(e, option) => {
                setCommodityType(option)
              }}
              getOptionLabel={(option) => option.description + " " + option.code}
              // getOptionLabel={(option) => {
              //   return <div component="li" >
              //     <span className={`commodity-icons ${option?.class}`} />
              //     {option.description} {option.code && `(${option.code})`}
              //   </div >
              // }
              // }

              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <div className={`commodity-icons ${option?.class}`} />
                  {option.description} {option.code && `(${option.code})`}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Enter commodity type or HS code"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                    startadornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {commodityType &&
              <Box mt={2}>
                <Chip avatar={<div className={`commodity-icons _25`} />} label="Hazardous cargo" variant="standard" />
                <Chip avatar={<div className={`commodity-icons _26`} />} label="Perishable cargo" variant="standard" />
                <Chip avatar={<div className={`commodity-icons _27`} />} label="Oversized cargo" variant="standard" />
                <Chip avatar={<div className={`commodity-icons _28`} />} label="Liquid cargo" variant="standard" />
              </Box>
            }
          </Grid>
        </Grid>
        <Typography variant='h6' mt={7} mb={3}>Delivery</Typography>
        <Grid container>
          <Grid item md={3}>
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mr: 1,
              }}
            >
              <StyledToggleButtonGroup
                size="small"
                sx={{ width: '100%' }}
                value={deliveryWay}
                exclusive
                onChange={handleDeliveryWay}
              >
                <ToggleButton className='selected-sea' value={0}>
                  <img src="./boat.svg" alt="Plane" />&nbsp;SEA
                </ToggleButton>
                <ToggleButton className='selected-land' value={1}>
                  <img src="./road-solid.svg" alt="Plane" />&nbsp;LAND
                </ToggleButton>
                <ToggleButton className='selected-air' value={2}>
                  <img src="./plane-solid.svg" alt="Plane" />&nbsp;AIR
                </ToggleButton>
              </StyledToggleButtonGroup>
            </Paper>
          </Grid>
          <StyledToggleButtonGroup
            size="small"
            value={deliveryWay}
            exclusive
            onChange={handleDeliveryWay}
          >
            <ToggleButton className='selected-auto' value={"auto"}>
              <img src="./rocket-solid.svg" alt="Plane" />&nbsp;AUTO
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Grid>
        {deliveryWay !== 'auto' &&
          <Grid container mt={3}>
            <Grid item md={5}>
              <InputLabel  className='input-label' required>TRANSPORTATION BY</InputLabel>
              <Select
                fullWidth
                IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
                value={transportationType}
                onChange={(e, val) => {
                  console.log(e)
                  setTransportationType(e.target.value);
                }}
                displayEmpty
                renderValue={(selected) => {
                  console.log('selected', selected)
                  if (!selected) {
                    return <Typography>Select type</Typography>;
                  } else {
                    return <Typography><img src={selected.split('./')[1]} alt="icon" />&nbsp;{selected.split('./')[0]}</Typography>
                  }
                }}
              >
                {Transportion_Data[deliveryWay].options.map((opt) => {
                  return opt.suboptions.map(item => (
                    item.title ?
                      <ListSubheader>
                        <img src={opt.icon} alt="icon" />&nbsp;{item.title}
                      </ListSubheader>
                      :
                      <MenuItem key={item.name} value={item.name + " " + item.shortForm + " " + opt.icon} disabled={item.disabled} >
                        &nbsp;&nbsp;&nbsp;<img className='svg-icon' src={opt.icon} alt="icon" />{item.name}<Typography component={'span'}>&nbsp;{item.shortForm}</Typography>
                      </MenuItem>
                  ))
                })}
              </Select>
            </Grid>
          </Grid>
        }
        <Grid container mt={3}>
          <Grid item md={5}>
            <InputLabel  className='input-label' required>CONTAINER TYPE</InputLabel>
            <Select
              fullWidth
              IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
              value={containerType}
              onChange={(e, val) => {
                console.log(e)
                setContainerType(e.target.value);
              }}
              displayEmpty
              renderValue={(selected) => {
                console.log('selected', selected)
                if (!selected) {
                  return <Typography>Container type</Typography>;
                } else {
                  return <Typography>{selected}</Typography>
                }
              }}
            >
              {Container_Type.map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item md={5} ml={4}>
            <InputField
              type={'number'}
              label="QUANTITY OF CONTAINERS"
              placeholder="0"
              onChange={setFormData}
              name="qty"
            />
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item md={5}>
            <AutoComplete
              label={'From'}
              required={true}
              Inputvalue={inputvaluefrom}
              Inputplaceholder={'City , Port'}
              onInputChange={(e) => { setInputValuefrom(e.target.value) }}
              onSelect={(item, country) => { setInputValuefrom(item?.name + ' ' + country) }}
              mapid={'frommap'}
              onInputWheel={() => setInputValuefrom('')}
            />
          </Grid>
          <Grid item md={5} ml={4}>
            <AutoComplete
              label={'To'}
              required={true}
              Inputvalue={inputvalueto}
              Inputplaceholder={'City , Port'}
              onInputChange={(e) => { setInputValueto(e.target.value) }}
              onSelect={(item, country) => { setInputValueto(item?.name + ' ' + country) }}
              mapid={'tomap'}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
