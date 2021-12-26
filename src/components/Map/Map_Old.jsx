import React/*, { useState }*/ from 'react'
/*import styled from '@emotion/styled'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import test from '../img/alpaka.png'
import map_image from '../img/map.png'
import Search from './Search'

const Img = styled.img`
    height: 100px;
`

let M = (props) =>{

    const [selected, setSelected] = useState(null)
    const center = {lat:56.015282, lng: 92.893250}
    const [position, setPosition] = useState(center)
    const [zoom, setZoom] = useState(12)
    
    const bounds = {
        //север +25км, юг -15км, запад +45км, восток -55км от центра Красноярска
        north: center.lat + 0.25,
        south: center.lat - 0.15,
        east: center.lng + 0.45,
        west: center.lng - 0.55,
    }

    const options={
        bounds:bounds,
        types:[],
        componentRestrictions: { country: "ru"},
    }

    let PlaceSelected = (place) =>{
        setZoom(17)
        setPosition({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
    }

    return(
        <GoogleMap defaultZoom={zoom} defaultCenter={position} >
            <Search options={options} Selected={(place)=>PlaceSelected(place)} />
            {!!props.stray &&
                props.stray.map((s, id)=>{
                    return(<Marker key={id} position={{lat: s.latlng[0], lng: s.latlng[1]}} onClick={()=>{setSelected({lat: s.latlng[0], lng: s.latlng[1]})}} 
                    icon={{
                        url: '/zhivotnye_v_serdtse.png',
                        scaledSize: new window.google.maps.Size(50, 35)
                    }} />
                )})
            }
            {!!props.house &&
                props.house.map((h, id)=>{
                    return(<Marker key={id} position={{lat: h.latlng[0], lng: h.latlng[1]}} onClick={()=>{setSelected({lat: h.latlng[0], lng: h.latlng[1]})}} 
                    icon={{
                        url: '/zhivotnye_v_serdtse.png',
                        scaledSize: new window.google.maps.Size(50, 35)
                    }} />
                )})
            }
            { selected &&
                <InfoWindow position={selected} onCloseClick={()=>{setSelected(null)}}>
                    <Img src={test} alt="" />
                </InfoWindow>
            }
        </GoogleMap>
    )
}

let WrappedMap = withScriptjs(withGoogleMap(M))

let Container = styled.div`
    width: ${(props)=>props.width}px;
    height: ${(props)=>props.height}px;
`

const Contain = styled.div`
    height: 100%;
    width: 100%;
    background: url(${map_image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

let Map = (props) =>{

    return(
        <Container width={props.width} height={props.height}>
            <WrappedMap {...props} googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDMbcWmL7ZDjINMdQdSj2Q1qcugXVJPV18`}
					loadingElement={<Contain/>}
					containerElement={<Contain/>}
					mapElement={<Contain/>} />
        </Container>
    )
}
*/
let z = (props)=>{
    return(
        <div></div>
    )
}

export default z