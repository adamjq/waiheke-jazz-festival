import React from 'react';

const BASE_PATH = "./img/artists/"

const ArtistItem = (props) => {
    return (
        <div className="artist-item">
            <div className="artist-link">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={BASE_PATH + props.image} alt={props.alt}/>
                <p>{props.name}</p> 
            </a>
            </div>
        </div>
    );
}

const ArtistSection = () => {
    return (
        <section id="artists" className="section-artists">
            <div className="row">
                <h3>Artists</h3>
            </div>

            <div className="grid">
                <div className="artist-items">

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-trinity-roots"
                    image="trinity.jpg"
                    alt="Trinity Roots"
                    name="Trinity Roots"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-trinity-roots"
                    image="trinity.jpg"
                    alt="Trinity Roots"
                    name="Trinity Roots"
                />

                </div>
            </div>
        </section>
    );
}

export default ArtistSection;