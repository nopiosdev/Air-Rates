import React, { forwardRef, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import CommonService from '../Services/CommonService';
import axios from "axios";
import Loader from './Loader';
import { Autocomplete, FormLabel, TextField } from "@mui/material";

const AutoComplete = forwardRef((props, ref) => {

    const [listdata, setListdata] = useState([]);
    const [listnearbydata, setListNearBydata] = useState([]);
    const [selectedcountry, setSelectedCountry] = useState();
    const [showloader, setShowloader] = useState(false);
    const [search, setSearch] = useState(true);

    let map;
    let service;
    let infowindow;

    function createMarker(place) {
        if (!place.geometry || !place.geometry.location) return;

        const marker = new window.google.maps.Marker({
            map,
            position: place.geometry.location,
        });
        window.google.maps.event.addListener(marker, "click", () => {
            infowindow.setContent(place.name || "");
            infowindow.open(map);
        });
    }

    const SearchPlaces = async () => {
        setShowloader(true)
        await CommonService.GoolgePlaceSearch(props?.Inputvalue).then((res) => {
            if (res != null) {
                setShowloader(false)
                setListdata(res)
            }
        })

    }

    useEffect(() => {
        if (props.Inputvalue == '') {
            setSearch(true)
        }
    }, [props.Inputvalue])


    useEffect(() => {
        if (search == true) {
            SearchPlaces()
        }
    }, [props.Inputvalue, search])



    const onGeneratemap = async (item) => {

        const center = new window.google.maps.LatLng(item?.lat, item?.lng);

        infowindow = new window.google.maps.InfoWindow();
        map = new window.google.maps.Map(document.getElementById(props?.mapid), {
            center: center,
            zoom: 15,
        });

        const request = {
            query: item?.name,
            fields: ["name", "geometry"],
        };

        service = new window.google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
                map.setCenter(results[0].geometry.location);

            }
        });
    }


    const NearByplaces = async (item) => {
        setSelectedCountry(item)
        setSearch(false)
        const formData = new FormData();
        formData.append('input', item?.place_id)
        formData.append('type', 'place_id')
        formData.append('country_code', item?.code)
        formData.append('place_type', item?.place_type)

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post('https://www.searates.com/search/google-geocode', formData, config)
            .then(response => {
                setListdata([])
                setListNearBydata(response?.data);
                onGeneratemap(response?.data?.country_ports[0])
            })
            .catch(error => {
                console.log(error);
            });

    }

    const onClear = () => {
        setListdata([])
        setListNearBydata([])
        setShowloader(false)
        setSelectedCountry()
    }

    console.log("listdata", listdata)
    return (
        <>
            <FormLabel className='input-label ' required>{props.label}</FormLabel>
            <Autocomplete
                sx={{marginTop:'5px'}}
                freeSolo
                fullWidth
                options={[]}
                autoHighlight
                //   value={props.Inputvalue}
                onChange={props.onInputChange}
                getOptionLabel={(option) => option.description + " " + option.code}
                // getOptionLabel={(option) => {
                //   return <div component="li" >
                //     <span className={`commodity-icons ${option?.class}`} />
                //     {option.description} {option.code && `(${option.code})`}
                //   </div >
                // }
                // }

                renderOption={(props, option) => (
                    console.log(option)
                    // <Box component="li" {...props}>
                    //   <div className={`commodity-icons ${option?.class}`} />
                    //   {option.description} {option.code && `(${option.code})`}
                    // </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={props.Inputplaceholder}
                    />
                )}
            />
        </>
        // <div className="autocomplete">
        //     <div className="label">
        //         <h4 className="css-9npbnl-MuiFormLabel-root-MuiInputLabel-root">{props.label}
        //             {props.required && <span className="css-wgai2y-MuiFormLabel-asterisk">*</span>} </h4>
        //     </div>
        //     <div className="auto-inputfield">
        //         <input
        //             ref={ref}
        //             onPointerOut={props.onInputPointerOut}
        //             onBlur={props.onInputBlur}
        //             placeholder={props.Inputplaceholder}
        //             type={'text'}
        //             value={props.Inputvalue}
        //             onChange={props.onInputChange}
        //             onKeyDown={props.onInputKeyDown}
        //             disabled={props.Inputdisabled}
        //             min="1"
        //             onFocus={props.onFocus}
        //             style={props.Inputstyle}
        //             defaultValue={props.InputdefaultValue}
        //             onWheel={props.onInputWheel}
        //             className={`input ${props.InputNewclassName}`}                    
        //         />
        //         <div className="googlemap">
        //             <div className="autoselect">
        //                 {showloader &&
        //                     <Loader />
        //                 }
        //                 {listdata != '' && listdata?.map((item, index) => {
        //                     return (
        //                         <div className="autorow" key={index + 2} onClick={() => { NearByplaces(item) }}>
        //                             <div className="icon">
        //                                 <ReactCountryFlag
        //                                     countryCode={item?.code}
        //                                     style={{
        //                                         width: 22,
        //                                         height: 17,
        //                                     }}
        //                                     svg
        //                                     cdnSuffix="svg"
        //                                     aria-label={item?.country}
        //                                 />
        //                             </div>
        //                             <div className="detail">
        //                                 <p style={{ fontSize: 14, fontWeight: '600' }}>{item?.city}</p>
        //                                 <p style={{ fontSize: 13, color: '#999393' }}>{item?.city + ' ' + item?.country}</p>
        //                             </div>
        //                         </div>
        //                     )
        //                 })}
        //                 <div className="customrow">
        //                     <div className="placename">
        //                         {listnearbydata != '' && listnearbydata?.country_ports?.map((item, index) => {
        //                             return (
        //                                 <div className="autorow" key={index + 2}
        //                                     onMouseEnter={() => {
        //                                         onGeneratemap(item);
        //                                     }}
        //                                     onClick={() => {
        //                                         props.onSelect(item, selectedcountry?.country);
        //                                         onClear()
        //                                     }}
        //                                 >
        //                                     <div className="icon">
        //                                         <ReactCountryFlag
        //                                             countryCode={item?.country_code}
        //                                             style={{
        //                                                 width: 22,
        //                                                 height: 17,
        //                                             }}
        //                                             svg
        //                                             cdnSuffix="svg"
        //                                         />
        //                                     </div>
        //                                     <div className="detail">
        //                                         <p style={{ fontSize: 14, fontWeight: '600' }}>{item?.name}</p>
        //                                         <p style={{ fontSize: 13, color: '#999393' }}>{'Port of' + ' ' + selectedcountry?.country}</p>
        //                                     </div>
        //                                 </div>
        //                             )
        //                         })}
        //                     </div>
        //                     <div className="placemap">
        //                         <div style={selectedcountry && { height: 300 }} id={props?.mapid}></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
});

export default AutoComplete