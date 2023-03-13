import { Grid, Typography } from '@mui/material'
import React from 'react'
import CustomButton from './CustomButton'
import CustomInputField from './CustomInputField'
import InputField from './InputField'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const ByUnits = (props) => {

    const handleOnAddBtnClick = () => {
        // setDimensions([...dimensions, { dimensionId: dimensions[dimensions.length - 1].dimensionId + 1 }]);
    }
    const handleOnDeleteBtnClick = (id) => {
        // setDimensions(dimensions.filter(x => x.dimensionId !== id));
    }
    console.log(props.dimensions)
    return (
        <>
            {props.dimensions?.map((x,i) =>
                // <Dimensions 
                //     index={i}
                //     item={x}
                //     handleOnDeleteBtnClick={handleOnDeleteBtnClick}
                // />
                <Grid container mt={3}>
            <Grid item md={4} mr={1}>
                <CustomInputField
                    btnText="m"
                    placeholder="width"
                    name="dimenionsWidth"
                    onChange={props.onChange}
                    value={props.value}
                    onHeightChange={props.onHeightChange}
                    onLengthChange={props.onLengthChange}
                    height={props.height}
                    length={props.length}
                    inputlabel="DIMENSIONS"
                />
            </Grid>
            <Grid item md={2} mr={2}>
                <InputField
                    type={'number'}
                    inputlabel="QUANTITY"
                    placeholder="Quantity"
                    name="quantity"
                    required={false}
                    value={props.quantity}
                    onChange={props.onQunatityChange}
                />
            </Grid>
            <Grid item md={2}>
                <CustomInputField
                    btnText="mt"
                    placeholder="Gross weight"
                    name="grossWeight"
                    onChange={props.onGrossWeightChange}
                    value={props.grossWeight}
                    inputlabel="GROSS WEIGHT"
                />
            </Grid>
            {/* {item.length > 1 &&
                <Grid item md={1} className='delete-dimension-btn-container'>
                    <CustomButton
                        icon={<DeleteIcon />}
                        className="delete-dimension-btn"
                        onClick={() => item.handleOnDeleteBtnClick(x.dimensionId)}
                    />
                </Grid>
            } */}
        </Grid>
        
            )}
            <Grid container mt={3}>
                <Grid item md={1}>
                    <CustomButton
                        variant="text"
                        title="Add"
                        icon={<AddIcon />}
                        className="add-dimension-btn"
                        onClick={handleOnAddBtnClick}
                    />
                </Grid>
                <Grid item md={7}>
                    <Typography component={'p'} className="dimensions-total"><b>Shipment total:</b> {(props.value && props.height && props.length && props.quantity) ? (props.value * props.height * props.length) * props.quantity : 0} m<sup>3</sup> {(props.grossWeight && props.grossWeight !== "") ? props.grossWeight : 0} mt</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ByUnits

// export const Dimensions = ({i,item}) => {
   
//     return (
//         <Grid container mt={3}>
//             <Grid item md={4} mr={1}>
//                 <CustomInputField
//                     btnText="m"
//                     placeholder="width"
//                     name="dimenionsWidth"
//                     onChange={(e)=>{
//                         set
//                     }}
//                     value={props.value}
//                     onHeightChange={props.onHeightChange}
//                     onLengthChange={props.onLengthChange}
//                     height={props.height}
//                     length={props.length}
//                     inputlabel="DIMENSIONS"
//                 />
//             </Grid>
//             <Grid item md={2} mr={2}>
//                 <InputField
//                     type={'number'}
//                     inputlabel="QUANTITY"
//                     placeholder="Quantity"
//                     name="quantity"
//                     required={false}
//                     value={props.quantity}
//                     onChange={props.onQunatityChange}
//                 />
//             </Grid>
//             <Grid item md={2}>
//                 <CustomInputField
//                     btnText="mt"
//                     placeholder="Gross weight"
//                     name="grossWeight"
//                     onChange={props.onGrossWeightChange}
//                     value={props.grossWeight}
//                     inputlabel="GROSS WEIGHT"
//                 />
//             </Grid>
//             {item.length > 1 &&
//                 <Grid item md={1} className='delete-dimension-btn-container'>
//                     <CustomButton
//                         icon={<DeleteIcon />}
//                         className="delete-dimension-btn"
//                         onClick={() => item.handleOnDeleteBtnClick(x.dimensionId)}
//                     />
//                 </Grid>
//             }
//         </Grid>
//     )
// }