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
                    link="https://www.iticket.co.nz/events/2021/apr/wijf-friday-groove"
                    image="the-eastern.jpg"
                    alt="The Eastern"
                    name="The Eastern"
                />
                
                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2021/apr/wijf-sundowner"
                    image="HopetounBrown.jpg"
                    alt="Hopetoun Brown"
                    name="Hopetoun Brown"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2021/apr/wijf-friday-groove"
                    image="RadioRebelde.jpg"
                    alt="Radio Rebelde"
                    name="Radio Rebelde"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2021/apr/wijf-long-lunch"
                    image="nairobi.jpg"
                    alt="Nairobi Trio"
                    name="Nairobi Trio"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2021/apr/wijf-sundowner"
                    image="ChelseaPrastitti.jpg"
                    alt="Chelsea Prastitti"
                    name="Chelsea Prastitti"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2021/apr/wijf-friday-groove"
                    image="whitechapel.jpg"
                    alt="White Chapel Jak"
                    name="White Chapel Jak"
                />

                </div>
            </div>
        </section>
    );
}

export default ArtistSection;