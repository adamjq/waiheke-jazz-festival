import nairobiTrioImage from '../../images/artists/nairobi-trio.jpg'

import './artists.scss'

const ARTISTS: ArtistCardProps[] = [
    {
        name: "Nairobi Trio",
        websiteURL: "http://www.nairobitrio.co.nz",
        image: nairobiTrioImage,
    },
]

interface ArtistCardProps {
    name: string
    websiteURL: string
    image: any
    index?: number
}

export const Artists = () => {
    return (
        <div className="section-artists">
            <h1>Artists</h1>

            {ARTISTS.map((a, i) => (
                <ArtistCard 
                    name={a.name}
                    websiteURL={a.websiteURL}
                    image={a.image}
                    index={i}
                />
            ))}
        </div>
    )
}

const ArtistCard = (props: ArtistCardProps) => {
    return (
        <div className="artist-card">
            <img className="artist-card-img" src={props.image} alt={props.name}/>

            <div className="artist-card-info">
                <h3 className="artist-card-name">{props.name}</h3>
                <a href={props.websiteURL}>{props.websiteURL}</a>
            </div>
        </div>
    )
}

// const ArtistCard = (props: ArtistCardProps) => {

//     // use index to determine whether to have img card on left or right side
//     if (props.index != undefined && props.index % 2 === 0) {

//         // image on left of div
//         return (
//             <div className="artist-card">
//                 <img className="artist-card-img" src={props.image} alt={props.name}/>

//                 <div className="artist-card-info">
//                     <h3 className="artist-card-name">{props.name}</h3>
//                     <a href={props.websiteURL}>{props.websiteURL}</a>
//                 </div>
//             </div>
//             )
//     } else {

//         // image on right of div
//         return (
//             <div className="artist-card">
//             <div className="artist-card-info">
//                 <h3 className="artist-card-name">{props.name}</h3>
//                 <a href={props.websiteURL}>{props.websiteURL}</a>
//             </div>

//             <img className="artist-card-img" src={props.image} alt={props.name}/>
//         </div>
//         )
//     }
// }

export default Artists