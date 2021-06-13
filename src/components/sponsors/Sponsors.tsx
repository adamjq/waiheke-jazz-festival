import fullersImage from '../../images/sponsors/Fullers360Logo.png'
import aucklandCouncilImage from '../../images/sponsors/AucklandCouncilLogo.png'

import './sponsors.scss'

const SPONSERS = [
    {
        image: fullersImage,
        alt: "Fullers 360 Logo",
    },
    {
        image: aucklandCouncilImage,
        alt: "Auckland Council Logo",
    }
]

export const Sponsors = () => {
    return (
        <div className="section-sponsors">
            <div className="sponsor-logos">
                {SPONSERS.map((s, index) => (
                    <img key={index} src={s.image} alt={s.alt}/>
                ))}
            </div>
        </div>
    )
}

export default Sponsors