// import './App.css';
// import { Container, Typography, Grid, MenuItem, Select, TextField, InputAdornment, Autocomplete, InputLabel, Paper, ToggleButton, ToggleButtonGroup, styled, ListSubheader, Box, Alert, AlertTitle, InputBase, Divider } from '@mui/material';
// import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import { CONTAINER_TYPE, COMMODITY_TYPE, IMO_CLASS, SHIPPING_TYPE, TRANSPORTATION_DATA, TRUCK_TYPE, WAGON_TYPE } from './data';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import InputField from './InputField';
// import LocationAutoComplete from './LocationAutoComplete';
// import Calendar from './Calendar';
// import { formReducer } from './utils/Globalfunction';
// import CustomChip from './CustomChip';
// import Popover from './Popover';
// import CheckBox from './CheckBox';
// import CustomButton from './CustomButton';
// import SelectDropDown from './SelectDropDown';
// import CustomInputField from './CustomInputField';
// import { BoatIcon, PlaneIcon, RoadIcon, RocketIcon, TruckIcon, WagonIcon } from './Icons';
// import ByUnits from './ByUnits';
// import DialogBox from './DialogBox';
// import { getHSCodes } from './Services/CommonService';


// function FormComplete(props) {


//     const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
//         '& .MuiToggleButtonGroup-grouped': {
//             margin: theme.spacing(0.5),
//             border: 0,
//             width: '100%',
//             '&:not(:first-of-type)': {
//                 borderRadius: theme.shape.borderRadius,
//             },
//             '&:first-of-type': {
//                 borderRadius: '6px',
//             },
//         },
//     }));
//     const handleDeliveryWay = (event) => {

//     };
//     const handleCargoType = (cargoType) => {

//     }
//     const getIcon = (name, className) => {

//     }
//     const handleOnOptClick = (optIcon) => {

//     }
//     const handleOnByUnitsClick = (e) => {

//     }
//     const handleTransportationType = (e) => {

//     }
//     const clearFormData = () => {

//     }



//     console.log("formData", props.formData)
//     return (
//         <Container>
//             <Box className='layout'>
//                 <Grid container>
//                     <Grid item md={10}>
//                         <Box className='heading-wrapper'>
//                             <Typography variant='h4'>Request a quote</Typography>
//                             <img src="./ebook.svg" alt="ebook" />
//                         </Box>
//                         <Typography className='headline' mt={2}>And get the best rates from the leading logistics providers.</Typography>
//                     </Grid>
//                     <Grid item md={2}>                        
//                         <Typography sx={{ float: 'right' }}>props.formData['metricState']</Typography>
//                     </Grid>
//                 </Grid>
//                 <Typography variant='h6' mt={2} mb={3}>Cargo details</Typography>
//                 <Grid container>
//                     <Grid item md={9}>
//                         <Box className="flex-box" mb={1}>
//                             <InputLabel className='input-label' required>PRODUCT</InputLabel>
//                             <Typography sx={{ float: 'right' }}>HS Codes</Typography>
//                         </Box>
//                         <Typography sx={{ float: 'right' }}>{props.formData['commodityType']}</Typography>                     
//                     </Grid>
//                 </Grid>
//                 {(props.formData['cargo-type'] === "hazardous" && props.formData['commodityType']) &&
//                     <Grid container mt={3}>
//                         <Grid item md={5}>
//                             <SelectDropDown
//                                 icon={(props) => <KeyboardArrowDownIcon {...props} />}
//                                 defaultValue={props.formData['imo']}
//                                 name="imo"
//                                 disabled={true}
//                                 placeholder="Imo class"
//                                 label="IMO CLASS"
//                                 data={IMO_CLASS}
//                             />
//                         </Grid>
//                         <Grid item md={5} ml={4}>
//                             <InputField
//                                 type={'text'}
//                                 inputlabel="UN NUMBER"
//                                 placeholder="0"
//                                 name="unnum"
//                                 defaultValue={props.formData['unnum']}
//                                 disabled={true}
//                             />
//                         </Grid>
//                     </Grid>
//                 }
//                 {(props.formData['cargo-type'] === "oversized" && props.formData['commodityType']) &&
//                     <Grid container mt={3}>
//                         <Grid item md={2.5}>
                            
//                             <CustomInputField
//                                 btnText="m"
//                                 placeholder="0"
//                                 name="length"
//                                 disabled={true}
//                                 defaultValue={props.formData['length']}
//                                 inputlabel="LENGTH"
//                             />
//                         </Grid>
//                         <Grid item md={2.5}>
//                             <CustomInputField
//                                 btnText="m"
//                                 placeholder="0"
//                                 name="width"
//                                 onChange={setFormData}
//                                 value={props.formData['width']}
//                                 inputlabel="WIDTH"
//                             />
//                         </Grid>
//                         <Grid item md={2.5}>
//                             <CustomInputField
//                                 btnText="m"
//                                 placeholder="0"
//                                 name="height"
//                                 onChange={setFormData}
//                                 value={props.formData['height']}
//                                 inputlabel="HEIGHT"
//                             />
//                         </Grid>
//                     </Grid>
//                 }
//                 {(formData['cargo-type'] === "perishable" && formData['commodityType']) &&
//                     <Grid container mt={3}>
//                         <Grid item md={5}>
//                             <InputLabel className='input-label'>TEMPERATURE REGIME</InputLabel>
//                             <Paper
//                                 component="form"
//                                 className="custom-inputField custom-select"
//                             >
//                                 <InputBase
//                                     sx={{ ml: 1, flex: 2 }}
//                                     placeholder="0"
//                                     onChange={setFormData}
//                                     value={props.formData['temperature']}
//                                     name="temperature"
//                                 />
//                                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                                 <TextField onChange={setFormData} value={props.formData['degree']} name="degree" sx={{ ml: 1, flex: 1 }} id="select" select>
//                                     <MenuItem value="C"><sup>o</sup>C</MenuItem>
//                                     <MenuItem value="F"><sup>o</sup>F</MenuItem>
//                                 </TextField>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 }
//                 <Typography variant='h6' mt={7} mb={3}>Delivery</Typography>
//                 <Grid container>
//                     <Grid item md={3}>
//                         <Paper
//                             elevation={0}
//                             sx={{
//                                 display: 'flex',
//                                 flexWrap: 'wrap',
//                                 mr: 1,
//                             }}
//                         >
//                             <StyledToggleButtonGroup
//                                 size="small"
//                                 sx={{ width: '100%' }}
//                                 value={props.formData['deliveryWay']}
//                                 exclusive
//                                 onChange={handleDeliveryWay}
//                             >
//                                 <ToggleButton name="deliveryWay" className='selected-sea' value={'1'}>
//                                     <BoatIcon active={props.formData['deliveryWay']} />&nbsp;SEA
//                                 </ToggleButton>
//                                 <ToggleButton name="deliveryWay" className='selected-land' value={'2'}>
//                                     <RoadIcon active={props.formData['deliveryWay']} />&nbsp;LAND
//                                 </ToggleButton>
//                                 <ToggleButton name="deliveryWay" className='selected-air' value={'3'}>
//                                     <PlaneIcon active={props.formData['deliveryWay']} />&nbsp;AIR
//                                 </ToggleButton>
//                             </StyledToggleButtonGroup>
//                         </Paper>
//                     </Grid>
//                     <StyledToggleButtonGroup
//                         size="small"
//                         value={props.formData['deliveryWay']}
//                         exclusive
//                         onChange={handleDeliveryWay}
//                     >
//                         <ToggleButton name="deliveryWay" className='selected-auto' value={"auto"}>
//                             <RocketIcon active={props.formData['deliveryWay']} />&nbsp;AUTO
//                         </ToggleButton>
//                     </StyledToggleButtonGroup>
//                 </Grid>
//                 {props.formData['deliveryWay'] === 'auto' ?
//                     <Grid container mt={3}>
//                         <Grid item md={5}>
//                             <CustomInputField
//                                 btnText="mt"
//                                 placeholder="Weight"
//                                 name="weight"
//                                 onChange={setFormData}
//                                 value={props.formData['weight']}
//                                 inputlabel="WEIGHT"
//                                 required={true}
//                             />
//                         </Grid>
//                         <Grid item md={5} ml={4}>
//                             <CustomInputField
//                                 supText="3"
//                                 btnText={"m"}
//                                 placeholder="Volume"
//                                 name="volume"
//                                 onChange={setFormData}
//                                 value={props.formData['volume']}
//                                 inputlabel="VOLUME"
//                                 required={true}
//                             />
//                         </Grid>
//                     </Grid>
//                     :
//                     <Grid container mt={3}>
//                         <Grid item md={5}>
//                             <InputLabel className='input-label' required>TRANSPORTATION BY</InputLabel>
//                             <Select
//                                 fullWidth
//                                 displayEmpty
//                                 IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
//                                 value={props.formData["transportationType"] ?? ""}
//                                 name="transportationType"
//                                 onChange={(e) => handleTransportationType(e)}
//                                 renderValue={(selected) => {
//                                     if (!selected) {
//                                         return <Typography>Select type</Typography>;
//                                     } else {
//                                         return <Typography>{getIcon(formData['optIcon'])}&nbsp;&nbsp;&nbsp;{selected.split('/')[0]}</Typography>
//                                     }
//                                 }}
//                             >
//                                 {TRANSPORTATION_DATA[Number(formData['deliveryWay']) - 1]?.options?.map((opt) => {
//                                     return opt.suboptions.map(item => (
//                                         item.title ?
//                                             <ListSubheader>
//                                                 {getIcon(opt.icon)}&nbsp;{item.title}
//                                             </ListSubheader>
//                                             :
//                                             <MenuItem onClick={() => handleOnOptClick(opt.icon)} key={item.name} value={`${item.name}${item.shortForm ? " " + item.shortForm : ""}`} disabled={item.disabled} >
//                                                 &nbsp;&nbsp;&nbsp;{getIcon(opt.icon, "svg-icon")}{item.name}<Typography component={'span'}>&nbsp;{item.shortForm}</Typography>
//                                             </MenuItem>
//                                     ))
//                                 })}
//                             </Select>
//                         </Grid>
//                     </Grid>
//                 }
//                 {(formData["transportationType"] === "Full container load FCL" || formData["transportationType"] === "ULD container") &&
//                     <Grid container mt={3}>
//                         <Grid item md={5}>
//                             <SelectDropDown
//                                 label="CONTAINER TYPE"
//                                 icon={(props) => <KeyboardArrowDownIcon {...props} />}
//                                 value={props.formData['containerType'] ?? ""}
//                                 name="containerType"
//                                 onChange={setFormData}
//                                 placeholder="Container type"
//                                 data={CONTAINER_TYPE}
//                             />
//                         </Grid>
//                         <Grid item md={5} ml={4}>
//                             <InputField
//                                 type={'number'}
//                                 inputlabel="QUANTITY OF CONTAINERS"
//                                 placeholder="0"
//                                 name="qty"
//                                 value={props.formData['qty']}
//                                 onChange={setFormData}
//                             />
//                         </Grid>
//                     </Grid>
//                 }
//                 {(formData["transportationType"] === "Less container load LCL" || formData["transportationType"] === "Less truck load LTL" || formData["transportationType"] === "Standard cargo") &&
//                     <>
//                         <Grid container mt={3}>
//                             <Grid item xs={12}>
//                                 <CheckBox
//                                     label="By units"
//                                     name="byUnits"
//                                     checked={props.formData["byUnits"]}
//                                     onChange={handleOnByUnitsClick}
//                                 />
//                             </Grid>
//                         </Grid>
//                         {props.formData["byUnits"] === true ?
//                             <ByUnits
//                                 onChange={setFormData}
//                                 dimensions={props.formData['dimensions']}
//                             />
//                             :
//                             <Grid container mt={3}>
//                                 <Grid item md={5}>
//                                     <CustomInputField
//                                         btnText="mt"
//                                         placeholder="Weight"
//                                         name="weight"
//                                         onChange={setFormData}
//                                         value={props.formData['weight']}
//                                         inputlabel="WEIGHT"
//                                         required={true}
//                                     />
//                                 </Grid>
//                                 <Grid item md={5} ml={4}>
//                                     <CustomInputField
//                                         supText="3"
//                                         btnText={"m"}
//                                         placeholder="Volume"
//                                         name="volume"
//                                         onChange={setFormData}
//                                         value={props.formData['volume']}
//                                         inputlabel="VOLUME"
//                                         required={true}
//                                     />
//                                 </Grid>
//                             </Grid>
//                         }
//                     </>
//                 }
//                 {props.formData["transportationType"] === "Bulk" &&
//                     <>
//                         <Grid container mt={3}>
//                             <Grid item md={5}>
//                                 <SelectDropDown
//                                     label="SHIP TYPE"
//                                     icon={(props) => <KeyboardArrowDownIcon {...props} />}
//                                     value={props.formData['shipType'] ?? ""}
//                                     name="shipType"
//                                     onChange={setFormData}
//                                     placeholder="Shippping type"
//                                     data={SHIPPING_TYPE}
//                                 />
//                             </Grid>
//                             <Grid item md={5} ml={4}>
//                                 <CustomInputField
//                                     btnText="mt"
//                                     name="grossWeight"
//                                     onChange={setFormData}
//                                     value={props.formData["grossWeight"]}
//                                     inputlabel="GROSS WEIGHT"
//                                     required={true}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Grid container mt={3}>
//                             <Grid item md={5}>
//                                 <CustomInputField
//                                     btnText="mt/day"
//                                     name="loadingRate"
//                                     onChange={setFormData}
//                                     value={props.formData["loadingRate"]}
//                                     inputlabel="LOADING RATE"
//                                 />
//                             </Grid>
//                             <Grid item md={5} ml={4}>
//                                 <CustomInputField
//                                     btnText="mt/day"
//                                     name="dischargingRate"
//                                     onChange={setFormData}
//                                     value={props.formData["dischargingRate"]}
//                                     inputlabel="DISCHARGING RATE"
//                                     required={true}
//                                 />
//                             </Grid>
//                         </Grid>
//                     </>
//                 }
//                 {props.formData["transportationType"] === "Full truck load FTL" &&
//                     <Grid container mt={3}>
//                         <Grid item md={5}>
//                             <SelectDropDown
//                                 label="TRUCK TYPE"
//                                 icon={(props) => <KeyboardArrowDownIcon {...props} />}
//                                 value={props.formData['truckType'] ?? ""}
//                                 name="truckType"
//                                 onChange={setFormData}
//                                 placeholder="Truck type"
//                                 data={TRUCK_TYPE}
//                             />
//                         </Grid>
//                         <Grid item md={5} ml={4}>
//                             <InputField
//                                 type={'number'}
//                                 inputlabel="QUANTITY OF TRUCKS"
//                                 placeholder="0"
//                                 name="qtyOfTrucks"
//                                 value={props.formData['qtyOfTrucks']}
//                                 onChange={setFormData}
//                             />
//                         </Grid>
//                     </Grid>
//                 }
//                 {props.formData["transportationType"] === "Full wagon load FWL" &&
//                     <Grid container mt={3}>
//                         <Grid item md={5}>
//                             <SelectDropDown
//                                 label="WAGON TYPE"
//                                 icon={(props) => <KeyboardArrowDownIcon {...props} />}
//                                 value={props.formData['wagonType'] ?? ""}
//                                 name="wagonType"
//                                 onChange={setFormData}
//                                 placeholder="Wagon type"
//                                 data={WAGON_TYPE}
//                             />
//                         </Grid>
//                         <Grid item md={5} ml={4}>
//                             <InputField
//                                 type={'number'}
//                                 inputlabel="QUANTITY OF WAGONS"
//                                 placeholder="0"
//                                 name="qtyOfWagons"
//                                 value={props.formData['qtyOfWagons']}
//                                 onChange={setFormData}
//                             />
//                         </Grid>
//                     </Grid>
//                 }
//                 <Grid container mt={3}>
//                     <Grid item md={5}>
//                         <LocationAutoComplete
//                             label={'From'}
//                             required={true}
//                             Inputplaceholder={'City , Port'}
//                             mapid={'frommap'}
//                             name="from"
//                             handleChange={(opt) => {
//                                 let item = {
//                                     target: {
//                                         name: "from",
//                                         value: opt
//                                     }
//                                 }
//                                 setFormData(item);
//                             }}
//                         />
//                     </Grid>
//                     <Grid item md={5} ml={4}>
//                         <LocationAutoComplete
//                             label={'To'}
//                             required={true}
//                             Inputplaceholder={'City , Port'}
//                             mapid={'tomap'}
//                             handleChange={(opt) => {
//                                 let item = {
//                                     target: {
//                                         name: "to",
//                                         value: opt
//                                     }
//                                 }
//                                 setFormData(item);
//                             }}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Grid container mt={3}>
//                     <Grid item md={5}>
//                         <Calendar
//                             value={props.formData['readytoload']}
//                             onChange={setFormData}
//                             label="READY TO LOAD"
//                             placeholder="Select"
//                             name="readytoload"
//                         />
//                     </Grid>
//                 </Grid>
//                 <Grid container mt={3}>
//                     <Grid item md={9}>
//                         <InputField
//                             multiline={true}
//                             type={'text'}
//                             inputlabel="ADDITIONAL INFORMATION"
//                             placeholder="Write a message..."
//                             name="info"
//                             value={props.formData['info']}
//                             onChange={setFormData}
//                             minRows={2}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Typography variant='h6' mt={7} mb={3}>Associated services</Typography>
//                 <Box mt={2} className="associated-services">
//                     <Popover title={"Add cargo insurance to your shipment to stay safe from any accidents."} >
//                         <CustomChip
//                             onClick={() => {
//                                 let item = {
//                                     target: {
//                                         name: "insurance",
//                                         value: formData["insurance"] === true ? false : true
//                                     }
//                                 }
//                                 setFormData(item);
//                             }}
//                             avatar={<><CheckBox name="insurance" checked={props.formData["insurance"]} onChange={setFormData} /><div className={`commodity-icons _29`} /></>} label="Insurance"
//                         />
//                     </Popover>
//                     <Popover title={"Order an inspection or tally service by checking this one."} >
//                         <CustomChip
//                             onClick={() => {
//                                 let item = {
//                                     target: {
//                                         name: "inspection-services",
//                                         value: formData["inspection-services"] === true ? false : true
//                                     }
//                                 }
//                                 setFormData(item);
//                             }}
//                             avatar={<><CheckBox name="inspection-services" checked={props.formData["inspection-services"]} onChange={setFormData} /><div className={`commodity-icons _30`} /></>}
//                             label="Inspection services"
//                         />
//                     </Popover>
//                     <Popover title={"For different type of commodities and specific local requirements, we will help you to get phytosanitary, radiology, veterinary and other types of certificates."} >
//                         <CustomChip
//                             onClick={() => {
//                                 let item = {
//                                     target: {
//                                         name: "certification",
//                                         value: formData["certification"] === true ? false : true
//                                     }
//                                 }
//                                 setFormData(item);
//                             }}
//                             avatar={<><CheckBox name="certification" checked={props.formData["certification"]} onChange={setFormData} /><div className={`commodity-icons _31`} /></>} label="Certification"
//                         />
//                     </Popover>
//                     <Popover title={"Select this item if you need customs brokerage service."} >
//                         <CustomChip
//                             onClick={() => {
//                                 let item = {
//                                     target: {
//                                         name: "customs-clearance",
//                                         value: formData["customs-clearance"] === true ? false : true
//                                     }
//                                 }
//                                 setFormData(item);
//                             }}
//                             avatar={<><CheckBox name="customs-clearance" checked={props.formData["customs-clearance"]} onChange={setFormData} /><div className={`commodity-icons _32`} /></>}
//                             label="Customs clearance"
//                         />
//                     </Popover>
//                 </Box>
//                 {props.formData['insurance'] === true &&
//                     <Grid container mt={3}>
//                         <Grid item md={4}>
//                             <CustomInputField
//                                 btnText="USD"
//                                 placeholder="0"
//                                 name="invoiceAmount"
//                                 onChange={setFormData}
//                                 value={props.formData['invoiceAmount']}
//                                 inputlabel="INVOICE AMOUNT"
//                             />
//                         </Grid>
//                     </Grid>
//                 }
//                 <Typography variant='h6' mt={7} mb={3}>СARGOES Finance</Typography>
//                 <Alert
//                     severity="info"
//                     className='custom-alert'
//                     iconMapping={{
//                         info: <CheckBox name="isAccessingTrade" checked={props.formData["isAccessingTrade"]} onChange={setFormData} />,
//                     }}
//                 >
//                     <AlertTitle>I am interested in accessing Trade, Logistics or Invetory Finance</AlertTitle>
//                     <div><img src="./cargo.svg" alt="" style={{ float: 'right' }} /></div>
//                     CARGOES Finance provides access to finance for exporters, importers and logistics companies across the globe for receivables and payables
//                 </Alert>
//                 <Typography variant='h6' mt={7} mb={3}>Contact details</Typography>
//                 <Grid container mt={3}>
//                     <Grid item md={4}>
//                         <InputField
//                             type={'text'}
//                             inputlabel="PHONE"
//                             placeholder="(000) 000 000"
//                             name="info"
//                             value={props.formData['info']}
//                             onChange={setFormData}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Grid container mt={4} spacing={4}>
//                     <Grid item md={3}>
//                         <CustomButton
//                             title="Send"
//                             onClick={() => { }}
//                         />
//                     </Grid>
//                     <Grid item md={8}>
//                         <Typography component={"p"} className="terms-conditions">By clicking Send, you agree with our <Typography component={"a"}>Terms & conditions.</Typography></Typography>
//                     </Grid>
//                 </Grid>
//             </Box>
//             <DialogBox
//                 open={modal}
//                 handleClose={() => setModal(false)}
//                 handleOnSelect={(val) => {
//                     console.log("handleOnSelect", val)
//                     let item = {
//                         target: {
//                             name: "commodityType",
//                             value: val.title
//                         }
//                     }
//                     getHSCodes(val.code, val.level, setIsLoaded, setData);
//                     setFormData(item);
//                 }}
//             />
//         </Container>
//     );
// }

// export default FormComplete;
