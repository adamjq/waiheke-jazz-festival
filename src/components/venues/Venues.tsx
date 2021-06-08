import artworksImage from '../../images/venues/artworks_min.jpg'
import batchImage from '../../images/venues/batch_winery_min.jpg'
import rangihouaImage from '../../images/venues/rangihoua_min.jpg'

import { Map } from '../map/map'

import './venues.scss'

const VENUES: VenueCardProps[] = [
    {
        title: "Rangihoua Estate",
        address: "1 Gordons Road, Rocky Bay, Waiheke Island",
        websiteURL: "https://www.rangihoua.co.nz/",
        image: rangihouaImage,
        lat: -36.809456983048655,
        lng: 175.06157178425767
    },
    {
        title: "Artworks Theatre",
        address: "2 Korora Road, Oneroa, Waiheke Island",
        websiteURL: "https://artworkstheatre.org.nz/",
        image: artworksImage,
        lat: -36.78072446027415,
        lng: 175.00682649561233
    },
    {
        title: "Batch Winery",
        address: "129 Carsons Road, Waiheke Island",
        websiteURL: "https://batchwinery.com/",
        image: batchImage,
        lat: -36.813864540050616,
        lng: 175.08318
    }
]

interface VenueCardProps {
    title: string
    address: string
    websiteURL: string
    image: any
    lat?: number
    lng?: number
}

export const Venues = () => {
    return (
        <div className="section-venues">
            <h1>Venues</h1>

            {VENUES.map((v) => (
                <VenueCard 
                    title={v.title}
                    address={v.address}
                    websiteURL={v.websiteURL}
                    image={v.image}
                />
            ))}

            <Map
                locations={VENUES}
            />

        </div>
    )
}

const VenueCard = (props: VenueCardProps) => {
    return (
        <div className="venue-card">
            <img className="venue-card-img" src={props.image} alt={props.title}/>

            <div className="venue-card-info">
                <h3 className="venue-card-title">{props.title}</h3>
                <p className="venue-card-address">{props.address}</p>
                <a href={props.websiteURL}>{props.websiteURL}</a>
            </div>
        </div>
    )
}

export default Venues