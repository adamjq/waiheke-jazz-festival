// @ts-nocheck

import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.scss'

const DEFAULT_MAP_ZOOM = 12

// defaults to Ostend, Waiheke Island coordinates
const DEFAULT_MAP_CENTER = {
    lat: -36.78952842336488,
    lng: 175.0503238476899
}

// from .env file
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GMAPS_API_KEY

interface MapProps {
    locations: Location[]
}

interface Location {
    lat: number
    lng: number
    address: string
}

const LocationPin = ( { text } ) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

export const Map = ( { locations } ) => {
    return (
    <div className="map">
        <div className="google-map">
        <GoogleMapReact
            bootstrapURLKeys={
                {
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'en'
                }
            }
            defaultCenter={DEFAULT_MAP_CENTER}
            defaultZoom={DEFAULT_MAP_ZOOM}
        >

            {locations.map((l) => (
                <LocationPin
                    lat={l.lat}
                    lng={l.lng}
                    text={l.title}
                />
            ))}


        </GoogleMapReact>
        </div>
    </div>
    )
}

export default Map
