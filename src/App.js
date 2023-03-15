import './App.css';
import { Container, Typography, Grid, MenuItem, Select, TextField, Autocomplete, InputLabel, Paper, ToggleButton, ToggleButtonGroup, styled, ListSubheader, Box, Alert, AlertTitle, InputBase, Divider } from '@mui/material';
import React from 'react';
import { CONTAINER_TYPE, IMO_CLASS, SHIPPING_TYPE, TRANSPORTATION_DATA, TRUCK_TYPE, WAGON_TYPE } from './data';
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
import { BoatIcon, PlaneIcon, RoadIcon, RocketIcon, TruckIcon, WagonIcon } from './components/Icons';
import ByUnits from './components/ByUnits';
import DialogBox from './components/DialogBox';
import { getHSCodes } from './Services/CommonService';


function App() {

  const [formData, setFormData] = React.useReducer(formReducer, {});
  const [modal, setModal] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

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
  const handleDeliveryWay = (event) => {
    if (event.target.value) {
      let items = [
        {
          target: {
            name: "transportationType",
            value: event.target.value === "1" ? "Full container load FCL" : null
          }
        },
        {
          target: {
            name: "optIcon",
            value: null
          }
        }
      ]
      items.map(x => setFormData(x));
      clearFormData();
      setFormData(event);
    }
  };
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
  const getIcon = (name, className) => {
    if (name === "boat") {
      return <BoatIcon active={"1"} className={className ?? ""} />
    }
    if (name === "truck") {
      return <TruckIcon className={className ?? ""} />
    }
    if (name === "wagon") {
      return <WagonIcon className={className ?? ""} />
    }
    if (name === "plane") {
      return <PlaneIcon active={"3"} className={className ?? ""} />
    }
  }
  const handleOnOptClick = (optIcon) => {
    let item = {
      target: {
        name: "optIcon",
        value: optIcon
      }
    }
    setFormData(item);
  }
  const handleOnByUnitsClick = (e) => {
    let item = [
      {
        target: {
          name: "weight",
          value: null
        }
      },
      {
        target: {
          name: "volume",
          value: null
        }
      },
      {
        target: {
          name: "dimensions",
          value: [
            {
              height: 0,
              width: 0,
              length: 0,
              quantity: 0,
              grossWeight: 0,
              id: 1
            }
          ]
        }
      }
    ]
    item.map(x => setFormData(x));
    setFormData(e);
  }
  const handleTransportationType = (e) => {
    setFormData(e);
    clearFormData();
  }
  const clearFormData = () => {
    let items = [
      {
        target: {
          name: "byUnits",
          value: false
        }
      },
      {
        target: {
          name: "shipType",
          value: ""
        }
      },
      {
        target: {
          name: "grossWeight",
          value: ""
        }
      },
      {
        target: {
          name: "loadingRate",
          value: ""
        }
      },
      {
        target: {
          name: "dischargingRate",
          value: ""
        }
      },
      {
        target: {
          name: "containerType",
          value: ""
        }
      },
      {
        target: {
          name: "qty",
          value: ""
        }
      },
      {
        target: {
          name: "truckType",
          value: ""
        }
      },
      {
        target: {
          name: "qtyOfTrucks",
          value: ""
        }
      },
      {
        target: {
          name: "wagonType",
          value: ""
        }
      },
      {
        target: {
          name: "qtyOfWagons",
          value: ""
        }
      },
      {
        target: {
          name: "weight",
          value: ""
        }
      },
      {
        target: {
          name: "volume",
          value: ""
        }
      },
      {
        target: {
          name: "dimensions",
          value: [
            {
              height: 0,
              width: 0,
              length: 0,
              quantity: 0,
              grossWeight: 0,
              id: 1
            }
          ]
        }
      }

    ];
    items.map(x => setFormData(x));
  }
  React.useEffect(() => {
    getHSCodes(null, 0, setIsLoaded, setData);
    let items = [
      {
        target: {
          name: "deliveryWay",
          value: '1'
        }
      },
      {
        target: {
          name: "transportationType",
          value: 'Full container load FCL'
        }
      },
      {
        target: {
          name: "optIcon",
          value: 'boat'
        }
      },
      {
        target: {
          name: "degree",
          value: 'C'
        }
      },
      {
        target: {
          name: "dimensions",
          value: [
            {
              height: 0,
              width: 0,
              length: 0,
              quantity: 0,
              grossWeight: 0,
              id: 1
            }
          ]
        }
      }
    ]
    items.map(x => setFormData(x));
  }, [])


  return (
    <Container>
      <Box className='layout'>
        <Grid container>
          <Grid item md={10} sm={9} xs={12}>
            <Box className='heading-wrapper'>
              <Typography variant='h4'>Request a quote</Typography>
              <img src="./ebook.svg" alt="ebook" />
            </Box>
            <Typography className='headline' mt={2}>And get the best rates from the leading logistics providers.</Typography>
          </Grid>
          <Grid item md={2} sm={3} xs={12}>
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
          <Grid item md={9} xs={12}>
            <Box className="flex-box" mb={1}>
              <InputLabel className='input-label' required>PRODUCT</InputLabel>
              <Typography sx={{ float: 'right', cursor: 'pointer' }} onClick={() => setModal(true)}>HS Codes</Typography>
            </Box>
            <Autocomplete
              freeSolo
              fullWidth
              options={data}
              autoHighlight
              className='img-select'
              value={formData['commodityType'] || { description: "" }}
              onChange={(e, option) => {
                if (!option) {
                  getHSCodes(null, 0, setIsLoaded, setData);
                }
                setFormData({ target: { name: "commodityType", value: option } });
              }}
              getOptionLabel={(option) => option.description}
              renderOption={(props, option) => (
                <Box className="flex-box" component="li"  {...props}>
                  <div style={{ display: "flex", alignItems: "center", flex: 1 }} >
                    <span className={`commodity-icons ${option?.class}`} />
                    {option.description}
                  </div>
                  <div className='hs-code'>{option.code}</div>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Enter commodity type or HS code"
                />
              )}
            />
            {formData['commodityType'] &&
              <Box mt={3}>
                <CustomChip className={formData['cargo-type'] === "hazardous" ? "active-chip" : ""} onClick={() => handleCargoType("hazardous")} avatar={<div className={`commodity-icons _25`} />} label="Hazardous cargo" />
                <CustomChip className={formData['cargo-type'] === "perishable" ? "active-chip" : ""} onClick={() => handleCargoType("perishable")} avatar={<div className={`commodity-icons _26`} />} label="Perishable cargo" />
                <CustomChip className={formData['cargo-type'] === "oversized" ? "active-chip" : ""} onClick={() => handleCargoType("oversized")} avatar={<div className={`commodity-icons _27`} />} label="Oversized cargo" />
                <CustomChip className={formData['cargo-type'] === "liquid" ? "active-chip" : ""} onClick={() => handleCargoType("liquid")} avatar={<div className={`commodity-icons _28`} />} label="Liquid cargo" />
              </Box>
            }
          </Grid>
        </Grid>
        {(formData['cargo-type'] === "hazardous" && formData['commodityType']) &&
          <Grid container mt={2} spacing={2}>
            <Grid item md={5} sm={6} xs={12}>
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
            <Grid item md={5} sm={6} xs={12}>
              <InputField
                inputlabel="UN NUMBER"
                placeholder="0"
                name="unnum"
                value={formData['unnum'] ?? 0}
                onChange={setFormData}
              />
            </Grid>
          </Grid>
        }
        {(formData['cargo-type'] === "oversized" && formData['commodityType']) &&
          <Grid container mt={0} spacing={3}>
            <Grid item md={2.5} sm={4} xs={12}>
              <CustomInputField
                btnText={formData['metricState'] === "Imperial (US)" ? "ft" : "m"}
                placeholder="0"
                name="length"
                onChange={setFormData}
                value={formData['length']}
                inputlabel="LENGTH"
              />
            </Grid>
            <Grid item md={2.5} sm={4} xs={12}>
              <CustomInputField
                btnText={formData['metricState'] === "Imperial (US)" ? "ft" : "m"}
                placeholder="0"
                name="width"
                onChange={setFormData}
                value={formData['width']}
                inputlabel="WIDTH"
              />
            </Grid>
            <Grid item md={2.5} sm={4} xs={12}>
              <CustomInputField
                btnText={formData['metricState'] === "Imperial (US)" ? "ft" : "m"}
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
            <Grid item md={5} sm={6} xs={12}>
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
          <Grid item md={3} sm={6} xs={12}>
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mr: { sm: 1, xs: 0 },
                mb: { sm: 0, xs: 1 }
              }}
            >
              <StyledToggleButtonGroup
                size="small"
                sx={{ width: '100%' }}
                value={formData['deliveryWay']}
                exclusive
                onChange={handleDeliveryWay}
              >
                <ToggleButton name="deliveryWay" className='selected-sea' value={'1'}>
                  <BoatIcon active={formData['deliveryWay']} />&nbsp;SEA
                </ToggleButton>
                <ToggleButton name="deliveryWay" className='selected-land' value={'2'}>
                  <RoadIcon active={formData['deliveryWay']} />&nbsp;LAND
                </ToggleButton>
                <ToggleButton name="deliveryWay" className='selected-air' value={'3'}>
                  <PlaneIcon active={formData['deliveryWay']} />&nbsp;AIR
                </ToggleButton>
              </StyledToggleButtonGroup>
            </Paper>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <StyledToggleButtonGroup
              size="small"
              value={formData['deliveryWay']}
              exclusive
              onChange={handleDeliveryWay}
            >
              <ToggleButton name="deliveryWay" className='selected-auto' value={"auto"}>
                <RocketIcon active={formData['deliveryWay']} />&nbsp;AUTO
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Grid>
        </Grid>
        {formData['deliveryWay'] === 'auto' ?
          <Grid container mt={1} spacing={3}>
            <Grid item md={5} xs={12}>
              <CustomInputField
                btnText={formData['metricState'] === "Imperial (US)" ? "lbs" : "mt"}
                placeholder="Weight"
                name="weight"
                onChange={setFormData}
                value={formData['weight']}
                inputlabel="WEIGHT"
                required={true}
              />
            </Grid>
            <Grid item md={5} xs={12}>
              <CustomInputField
                supText="3"
                btnText={formData['metricState'] === "Imperial (US)" ? "ft" : "m"}
                placeholder="Volume"
                name="volume"
                onChange={setFormData}
                value={formData['volume']}
                inputlabel="VOLUME"
                required={true}
              />
            </Grid>
          </Grid>
          :
          <Grid container mt={0} spacing={3}>
            <Grid item md={5} xs={12}>
              <InputLabel className='input-label' required>TRANSPORTATION BY</InputLabel>
              <Select
                fullWidth
                displayEmpty
                IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
                value={formData["transportationType"] ?? ""}
                name="transportationType"
                onChange={(e) => handleTransportationType(e)}
                renderValue={(selected) => {
                  if (!selected) {
                    return <Typography>Select type</Typography>;
                  } else {
                    return <Typography>{getIcon(formData['optIcon'])}&nbsp;&nbsp;&nbsp;{selected.split('/')[0]}</Typography>
                  }
                }}
              >
                {TRANSPORTATION_DATA[Number(formData['deliveryWay']) - 1]?.options?.map((opt) => {
                  return opt.suboptions.map(item => (
                    item.title ?
                      <ListSubheader>
                        {getIcon(opt.icon)}&nbsp;{item.title}
                      </ListSubheader>
                      :
                      <MenuItem onClick={() => handleOnOptClick(opt.icon)} key={item.name} value={`${item.name}${item.shortForm ? " " + item.shortForm : ""}`} disabled={item.disabled} >
                        &nbsp;&nbsp;&nbsp;{getIcon(opt.icon, "svg-icon")}{item.name}<Typography component={'span'}>&nbsp;{item.shortForm}</Typography>
                      </MenuItem>
                  ))
                })}
              </Select>
            </Grid>
          </Grid>
        }
        {(formData["transportationType"] === "Full container load FCL" || formData["transportationType"] === "ULD container") &&
          <Grid container mt={0} spacing={3}>
            <Grid item md={5} sm={6} xs={12}>
              <SelectDropDown
                label="CONTAINER TYPE"
                icon={(props) => <KeyboardArrowDownIcon {...props} />}
                value={formData['containerType'] ?? ""}
                name="containerType"
                onChange={setFormData}
                placeholder="Container type"
                data={CONTAINER_TYPE}
              />
            </Grid>
            <Grid item md={5} sm={6} xs={12}>
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
        }
        {(formData["transportationType"] === "Less container load LCL" || formData["transportationType"] === "Less truck load LTL" || formData["transportationType"] === "Standard cargo") &&
          <>
            <Grid container mt={1}>
              <Grid item xs={12}>
                <CheckBox
                  label="By units"
                  name="byUnits"
                  checked={formData["byUnits"]}
                  onChange={handleOnByUnitsClick}
                />
              </Grid>
            </Grid>
            {formData["byUnits"] === true ?
              <ByUnits
                onChange={setFormData}
                dimensions={formData['dimensions']}
                metricState={formData['metricState']}
              />
              :
              <Grid container mt={0} spacing={3}>
                <Grid item md={5} sm={6} xs={12}>
                  <CustomInputField
                    btnText={formData['metricState'] === "Imperial (US)" ? "lbs" : "mt"}
                    placeholder="Weight"
                    name="weight"
                    onChange={setFormData}
                    value={formData['weight']}
                    inputlabel="WEIGHT"
                    required={true}
                  />
                </Grid>
                <Grid item md={5} sm={6} xs={12}>
                  <CustomInputField
                    supText="3"
                    btnText={formData['metricState'] === "Imperial (US)" ? "ft" : "m"}
                    placeholder="Volume"
                    name="volume"
                    onChange={setFormData}
                    value={formData['volume']}
                    inputlabel="VOLUME"
                    required={true}
                  />
                </Grid>
              </Grid>
            }
          </>
        }
        {formData["transportationType"] === "Bulk" &&
          <>
            <Grid container mt={0} spacing={3}>
              <Grid item md={5} sm={6} xs={12}>
                <SelectDropDown
                  label="SHIP TYPE"
                  icon={(props) => <KeyboardArrowDownIcon {...props} />}
                  value={formData['shipType'] ?? ""}
                  name="shipType"
                  onChange={setFormData}
                  placeholder="Shippping type"
                  data={SHIPPING_TYPE}
                />
              </Grid>
              <Grid item md={5} sm={6} xs={12}>
                <CustomInputField
                  btnText={formData['metricState'] === "Imperial (US)" ? "lbs" : "mt"}
                  name="grossWeight"
                  onChange={setFormData}
                  value={formData["grossWeight"]}
                  inputlabel="GROSS WEIGHT"
                  required={true}
                />
              </Grid>
            </Grid>
            <Grid container mt={0} spacing={3}>
              <Grid item md={5} sm={6} xs={12}>
                <CustomInputField
                  btnText={formData['metricState'] === "Imperial (US)" ? "lbs/day" : "mt/day"}
                  name="loadingRate"
                  onChange={setFormData}
                  value={formData["loadingRate"]}
                  inputlabel="LOADING RATE"
                />
              </Grid>
              <Grid item md={5} sm={6} xs={12}>
                <CustomInputField
                  btnText={formData['metricState'] === "Imperial (US)" ? "lbs/day" : "mt/day"}
                  name="dischargingRate"
                  onChange={setFormData}
                  value={formData["dischargingRate"]}
                  inputlabel="DISCHARGING RATE"
                  required={true}
                />
              </Grid>
            </Grid>
          </>
        }
        {formData["transportationType"] === "Full truck load FTL" &&
          <Grid container mt={0} spacing={3}>
            <Grid item md={5} sm={6} xs={12}>
              <SelectDropDown
                label="TRUCK TYPE"
                icon={(props) => <KeyboardArrowDownIcon {...props} />}
                value={formData['truckType'] ?? ""}
                name="truckType"
                onChange={setFormData}
                placeholder="Truck type"
                data={TRUCK_TYPE}
              />
            </Grid>
            <Grid item md={5} sm={6} xs={12}>
              <InputField
                type={'number'}
                inputlabel="QUANTITY OF TRUCKS"
                placeholder="0"
                name="qtyOfTrucks"
                value={formData['qtyOfTrucks']}
                onChange={setFormData}
              />
            </Grid>
          </Grid>
        }
        {formData["transportationType"] === "Full wagon load FWL" &&
          <Grid container mt={0} spacing={3}>
            <Grid item md={5} sm={6} xs={12}>
              <SelectDropDown
                label="WAGON TYPE"
                icon={(props) => <KeyboardArrowDownIcon {...props} />}
                value={formData['wagonType'] ?? ""}
                name="wagonType"
                onChange={setFormData}
                placeholder="Wagon type"
                data={WAGON_TYPE}
              />
            </Grid>
            <Grid item md={5} sm={6} xs={12}>
              <InputField
                type={'number'}
                inputlabel="QUANTITY OF WAGONS"
                placeholder="0"
                name="qtyOfWagons"
                value={formData['qtyOfWagons']}
                onChange={setFormData}
              />
            </Grid>
          </Grid>
        }
        <Grid container mt={0} spacing={3}>
          <Grid item md={5} sm={6} xs={12}>
            <LocationAutoComplete
              label={'From'}
              required={true}
              Inputplaceholder={'City , Port'}
              mapid={'frommap'}
              handleChange={(opt) => {
                let item = {
                  target: {
                    name: "from",
                    value: opt
                  }
                }
                setFormData(item);
              }}
            />
          </Grid>
          <Grid item md={5} sm={6} xs={12}>
            <LocationAutoComplete
              label={'To'}
              required={true}
              Inputplaceholder={'City , Port'}
              mapid={'tomap'}
              handleChange={(opt) => {
                let item = {
                  target: {
                    name: "to",
                    value: opt
                  }
                }
                setFormData(item);
              }}
            />
          </Grid>
        </Grid>
        <Grid container mt={0} spacing={3}>
          <Grid item md={5} sm={6} xs={12}>
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
          <Grid item md={9} xs={12}>
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
            <CustomChip
              onClick={() => {
                let item = {
                  target: {
                    name: "insurance",
                    value: formData["insurance"] === true ? false : true
                  }
                }
                setFormData(item);
              }}
              avatar={<><CheckBox name="insurance" checked={formData["insurance"]} onChange={setFormData} /><div className={`commodity-icons _29`} /></>}
              label="Insurance"
            />
          </Popover>
          <Popover title={"Order an inspection or tally service by checking this one."} >
            <CustomChip
              onClick={() => {
                let item = {
                  target: {
                    name: "inspection-services",
                    value: formData["inspection-services"] === true ? false : true
                  }
                }
                setFormData(item);
              }}
              avatar={<><CheckBox name="inspection-services" checked={formData["inspection-services"]} onChange={setFormData} /><div className={`commodity-icons _30`} /></>}
              label="Inspection services"
            />
          </Popover>
          <Popover title={"For different type of commodities and specific local requirements, we will help you to get phytosanitary, radiology, veterinary and other types of certificates."} >
            <CustomChip
              onClick={() => {
                let item = {
                  target: {
                    name: "certification",
                    value: formData["certification"] === true ? false : true
                  }
                }
                setFormData(item);
              }}
              avatar={<><CheckBox name="certification" checked={formData["certification"]} onChange={setFormData} /><div className={`commodity-icons _31`} /></>} label="Certification"
            />
          </Popover>
          <Popover title={"Select this item if you need customs brokerage service."} >
            <CustomChip
              onClick={() => {
                let item = {
                  target: {
                    name: "customs-clearance",
                    value: formData["customs-clearance"] === true ? false : true
                  }
                }
                setFormData(item);
              }}
              avatar={<><CheckBox name="customs-clearance" checked={formData["customs-clearance"]} onChange={setFormData} /><div className={`commodity-icons _32`} /></>}
              label="Customs clearance"
            />
          </Popover>
        </Box>
        {formData['insurance'] === true &&
          <Grid container mt={3}>
            <Grid item sm={4} xs={12}>
              <CustomInputField
                btnText="USD"
                placeholder="0"
                name="invoiceAmount"
                onChange={setFormData}
                value={formData['invoiceAmount']}
                inputlabel="INVOICE AMOUNT"
              />
            </Grid>
          </Grid>
        }
        <Typography variant='h6' mt={7} mb={3}>СARGOES Finance</Typography>
        <Alert
          severity="info"
          className='custom-alert'
          iconMapping={{
            info: <CheckBox name="isAccessingTrade" checked={formData["isAccessingTrade"]} onChange={setFormData} />,
          }}
        >
          <AlertTitle>I am interested in accessing Trade, Logistics or Invetory Finance</AlertTitle>
          <Box component={'span'} sx={{ display: { md: 'block', xs: 'none' } }}><img src="./cargo.svg" alt="" style={{ float: 'right' }} /></Box>
          CARGOES Finance provides access to finance for exporters, importers and logistics companies across the globe for receivables and payables
          <Box component={'span'} sx={{ display: { md: 'none', xs: 'block' } }}><img src="./cargo.svg" alt="" style={{ float: 'right' }} /></Box>
        </Alert>
        <Typography variant='h6' mt={7} mb={3}>Contact details</Typography>
        <Grid container mt={3} gap={3}>
          <Grid item sm={4} xs={12}>
            <InputField
              type={'text'}
              inputlabel="PHONE"
              placeholder="(000) 000 000"
              name="phone"
              value={formData['phone']}
              onChange={setFormData}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <InputField
              type={'email'}
              inputlabel="EMAIL"
              placeholder="Enter your email"
              name="email"
              value={formData['email']}
              onChange={setFormData}
            />
          </Grid>
        </Grid>
        <Grid container mt={4} spacing={4}>
          <Grid item sm={3} xs={12}>
            <CustomButton
              title="Send"
              onClick={() => { console.log("FORM_DATA", formData) }}
            />
          </Grid>
          <Grid item md={8}>
            <Typography component={"p"} className="terms-conditions">By clicking Send, you agree with our <Typography component={"a"}>Terms & conditions.</Typography></Typography>
          </Grid>
        </Grid>
      </Box>
      <DialogBox
        open={modal}
        loading={isLoaded}
        handleClose={() => setModal(false)}
        handleOnSelect={(val) => {
          console.log("handleOnSelect", val)
          val.description = val.title;
          let item = {
            target: {
              name: "commodityType",
              value: val
            }
          }
          getHSCodes(val.code, val.level, setIsLoaded, setData);
          setFormData(item);
        }}
      />
    </Container>
  );
}

export default App;
