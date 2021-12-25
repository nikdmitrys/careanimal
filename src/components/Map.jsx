import React from 'react'
import styled from '@emotion/styled'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

let M = () =>{
    return(
	        <GoogleMap defaultZoom={12} defaultCenter={{lat:56.015282, lng: 92.893250}} />
    )
}

let WrappedMap = withScriptjs(withGoogleMap(M))

let Container = styled.div`
    width: ${(props)=>props.width}px;
    height: ${(props)=>props.height}px;
`

let Map = (props) =>{
    return(
        <Container width={props.width} height={props.height}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDMbcWmL7ZDjINMdQdSj2Q1qcugXVJPV18`}
					loadingElement={<div style={{height:'100%'}} />}
					containerElement={<div style={{height:'100%'}} />}
					mapElement={<div style={{height:'100%'}} />} />
        </Container>
    )
}

export default Map