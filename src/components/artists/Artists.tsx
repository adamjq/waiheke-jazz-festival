import './artists.scss'

const ARTISTS: ArtistCardProps[] = [
    {
        name: "Nairobi Trio",
        websiteURL: "http://www.nairobitrio.co.nz",
        image: "",
    },
]

interface ArtistCardProps {
    name: string
    websiteURL: string
    image: any
}

export const Artists = () => {
    return (
        <div className="section-artists">
            <h1>Artists</h1>

            {ARTISTS.map((a) => (
                <ArtistCard 
                    name={a.name}
                    websiteURL={a.websiteURL}
                    image={a.image}
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

export default Artists