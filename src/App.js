import './App.css';
import { Container, Typography, Grid, MenuItem, Select, TextField, InputAdornment, Autocomplete, InputLabel, Paper, ToggleButton, ToggleButtonGroup, styled, ListSubheader, Box, Alert, AlertTitle, InputBase, Divider, IconButton } from '@mui/material';
import { useReducer, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Container_Type, data, IMO_CLASS, Transportion_Data } from './data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputField from './components/InputField';
import LocationAutoComplete from './components/LocationAutoComplete';
import Calendar from './components/Calendar';
import { formReducer } from './utils/Globalfunction';
import CustomChip from './components/CustomChip';
import Popover from './components/Popover';
import CheckBox from './components/CheckBox';
import CustomButton from './components/CustomButton';
import SelectDropDown from './components/SelectDropDown';
import CustomInputField from './components/CustomInputField';
import { PlaneIcon } from './components/Icons';


function App() {

  const [deliveryWay, setDeliveryWay] = useState(1);
  const [transportationType, setTransportationType] = useState("");
  const [formData, setFormData] = useReducer(formReducer, {});


  const handleDeliveryWay = (event, val) => {
    if (val) {
      setTransportationType("");
      setDeliveryWay(val);
    }
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
  const handleCargoType = (cargoType) => {
    if (formData["cargo-type"] === cargoType) {
      let item = {
        target: {
          name: "cargo-type",
          value: null
        }
      }
      setFormData(item);
    } else {
      let item = {
        target: {
          name: "cargo-type",
          value: cargoType
        }
      }
      setFormData(item);
    }
  }
  console.log("formData", formData)
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
            <SelectDropDown
              icon={(props) => <KeyboardArrowDownIcon {...props} />}
              value={formData['metricState'] ?? "International (SI)"}
              className='metric-select'
              name="metricState"
              onChange={setFormData}
              data={["International (SI)", "Imperial (US)"]}
            />
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
              value={formData['commodityType']}
              onChange={(e, option) => {
                let item = {
                  target: {
                    name: "commodityType",
                    value: option?.description
                  }
                }
                setFormData(item);
              }}
              getOptionLabel={(option) => option.description + " " + option.code}
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
            {formData['commodityType'] &&
              <Box mt={2}>
                <CustomChip className={formData['cargo-type'] === "hazardous" ? "active-chip" : ""} onClick={() => handleCargoType("hazardous")} avatar={<div className={`commodity-icons _25`} />} label="Hazardous cargo" />
                <CustomChip className={formData['cargo-type'] === "perishable" ? "active-chip" : ""} onClick={() => handleCargoType("perishable")} avatar={<div className={`commodity-icons _26`} />} label="Perishable cargo" />
                <CustomChip className={formData['cargo-type'] === "oversized" ? "active-chip" : ""} onClick={() => handleCargoType("oversized")} avatar={<div className={`commodity-icons _27`} />} label="Oversized cargo" />
                <CustomChip className={formData['cargo-type'] === "liquid" ? "active-chip" : ""} onClick={() => handleCargoType("liquid")} avatar={<div className={`commodity-icons _28`} />} label="Liquid cargo" />
              </Box>
            }
          </Grid>
        </Grid>
        {(formData['cargo-type'] === "hazardous" && formData['commodityType']) &&
          <Grid container mt={3}>
            <Grid item md={5}>
              <SelectDropDown
                icon={(props) => <KeyboardArrowDownIcon {...props} />}
                value={formData['imo']}
                name="imo"
                onChange={setFormData}
                placeholder="Imo class"
                label="IMO CLASS"
                data={IMO_CLASS}
              />
            </Grid>
            <Grid item md={5} ml={4}>
              <InputField
                type={'text'}
                inputlabel="UN NUMBER"
                placeholder="0"
                name="unnum"
                value={formData['unnum']}
                onChange={setFormData}
              />
            </Grid>
          </Grid>
        }
        {(formData['cargo-type'] === "oversized" && formData['commodityType']) &&
          <Grid container mt={3}>
            <Grid item md={2.5}>
              <CustomInputField
                btnText="m"
                placeholder="0"
                name="length"
                onChange={setFormData}
                value={formData['length']}
                inputlabel="LENGTH"
              />
            </Grid>
            <Grid item md={2.5}>
              <CustomInputField
                btnText="m"
                placeholder="0"
                name="width"
                onChange={setFormData}
                value={formData['width']}
                inputlabel="WIDTH"
              />
            </Grid>
            <Grid item md={2.5}>
              <CustomInputField
                btnText="m"
                placeholder="0"
                name="height"
                onChange={setFormData}
                value={formData['height']}
                inputlabel="HEIGHT"
              />
            </Grid>
          </Grid>
        }
        {(formData['cargo-type'] === "perishable" && formData['commodityType']) &&
          <Grid container mt={3}>
            <Grid item md={5}>
              <InputLabel className='input-label'>TEMPERATURE REGIME</InputLabel>
              <Paper
                component="form"
                className="custom-inputField custom-select"
              >
                <InputBase
                  sx={{ ml: 1, flex: 2 }}
                  placeholder="0"
                  onChange={setFormData}
                  value={formData['temperature']}
                  name="temperature"
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <TextField onChange={setFormData} value={formData['degree']} name="degree" sx={{ ml: 1, flex: 1 }} id="select" select>
                  <MenuItem value="C"><sup>o</sup>C</MenuItem>
                  <MenuItem value="F"><sup>o</sup>F</MenuItem>
                </TextField>
              </Paper>
            </Grid>
          </Grid>
        }
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
                <ToggleButton className='selected-sea' value={1}>
                  <img src="./boat.svg" alt="Plane" />&nbsp;SEA
                </ToggleButton>
                <ToggleButton className='selected-land' value={2}>
                  <img src="./road-solid.svg" alt="Plane" />&nbsp;LAND
                </ToggleButton>
                <ToggleButton className='selected-air' value={3}>
                  <PlaneIcon />&nbsp;AIR
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
              <InputLabel className='input-label' required>TRANSPORTATION BY</InputLabel>
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
                  if (!selected) {
                    return <Typography>Select type</Typography>;
                  } else {
                    return <Typography><img src={selected.split('./')[1]} alt="icon" />&nbsp;{selected.split('./')[0]}</Typography>
                  }
                }}
              >
                {Transportion_Data[deliveryWay - 1]?.options?.map((opt) => {
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
            <SelectDropDown
              label="CONTAINER TYPE"
              icon={(props) => <KeyboardArrowDownIcon {...props} />}
              value={formData['containerType']}
              name="containerType"
              onChange={setFormData}
              placeholder="Container type"
              data={Container_Type}
            />
          </Grid>
          <Grid item md={5} ml={4}>
            <InputField
              type={'number'}
              inputlabel="QUANTITY OF CONTAINERS"
              placeholder="0"
              name="qty"
              value={formData['qty']}
              onChange={setFormData}
            />
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item md={5}>
            <LocationAutoComplete
              label={'From'}
              required={true}
              Inputplaceholder={'City , Port'}
              mapid={'frommap'}
            />
          </Grid>
          <Grid item md={5} ml={4}>
            <LocationAutoComplete
              label={'To'}
              required={true}
              Inputplaceholder={'City , Port'}
              mapid={'tomap'}
            />
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item md={5}>
            <Calendar
              value={formData['readytoload']}
              onChange={setFormData}
              label="READY TO LOAD"
              placeholder="Select"
              name="readytoload"
            />
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item md={9}>
            <InputField
              multiline={true}
              type={'text'}
              inputlabel="ADDITIONAL INFORMATION"
              placeholder="Write a message..."
              name="info"
              value={formData['info']}
              onChange={setFormData}
              minRows={2}
            />
          </Grid>
        </Grid>
        <Typography variant='h6' mt={7} mb={3}>Associated services</Typography>
        <Box mt={2} className="associated-services">
          <Popover title={"Add cargo insurance to your shipment to stay safe from any accidents."} >
            <CustomChip avatar={<><CheckBox /><div className={`commodity-icons _29`} /></>} label="Insurance" />
          </Popover>
          <Popover title={"Order an inspection or tally service by checking this one."} >
            <CustomChip avatar={<><CheckBox /><div className={`commodity-icons _30`} /></>} label="Inspection services" />
          </Popover>
          <Popover title={"For different type of commodities and specific local requirements, we will help you to get phytosanitary, radiology, veterinary and other types of certificates."} >
            <CustomChip avatar={<><CheckBox /><div className={`commodity-icons _31`} /></>} label="Certification" />
          </Popover>
          <Popover title={"Select this item if you need customs brokerage service."} >
            <CustomChip avatar={<><CheckBox /><div className={`commodity-icons _32`} /></>} label="Customs clearance" />
          </Popover>
        </Box>
        <Typography variant='h6' mt={7} mb={3}>СARGOES Finance</Typography>
        <Alert
          severity="info"
          iconMapping={{
            info: <CheckBox />,
          }}
        >
          <AlertTitle>I am interested in accessing Trade, Logistics or Invetory Finance</AlertTitle>
          <div><img src="./cargo.svg" alt="" style={{ float: 'right' }} /></div>
          CARGOES Finance provides access to finance for exporters, importers and logistics companies across the globe for receivables and payables
        </Alert>
        <Typography variant='h6' mt={7} mb={3}>Contact details</Typography>
        <Grid container mt={3}>
          <Grid item md={4}>
            <InputField
              type={'text'}
              inputlabel="PHONE"
              placeholder="(000) 000 000"
              name="info"
              value={formData['info']}
              onChange={setFormData}
            />
          </Grid>
        </Grid>
        <Grid container mt={6} spacing={4}>
          <Grid item md={3}>
            <CustomButton
              title="Send"
              onClick={() => { }}
            />
          </Grid>
          <Grid item md={8}>
            <Typography component={"p"}>By clicking Send, you agree with our <Typography component={"a"}>Terms & conditions.</Typography></Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
