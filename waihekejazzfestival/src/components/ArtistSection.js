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
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-good-friday-groove"
                    image="sot.jpg"
                    alt="Sex On Toast"
                    name="Sex On Toast"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-good-friday-groove"
                    image="miloux.jpg"
                    alt="Miloux"
                    name="Miloux"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-saturday-night-live"
                    image="yoko-zuna.jpg"
                    alt="Yoko Zuna"
                    name="Yoko Zuna"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-saturday-night-live"
                    image="frank-booker-pleasure.jpg"
                    alt="Frank Booker"
                    name="Frank Booker"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-jazz-in-the-village"
                    image="the-eastern.jpg"
                    alt="The Eastern"
                    name="The Eastern"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-good-friday-groove"
                    image="ardjiah.jpg"
                    alt="Ardijah"
                    name="Ardijah"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-jazz-long-lunch"
                    image="nairobi.jpg"
                    alt="Nairobi Trio"
                    name="Nairobi Trio"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-supper-club"
                    image="love-square.jpg"
                    alt="Love Square"
                    name="Love Square"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-saturday-night-live"
                    image="alae.jpg"
                    alt="Alae"
                    name="Alae"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-jazz-in-the-village"
                    image="mr-speaker-forward.jpg"
                    alt="Mr Speaker"
                    name="Mr Speaker"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-good-friday-groove"
                    image="whitechapel.jpg"
                    alt="White Chapel Jak"
                    name="White Chapel Jak"
                />

                <ArtistItem 
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-supper-club"
                    image="skilaa.jpg"
                    alt="Skilaa"
                    name="Skilaa"
                />

                </div>
            </div>
        </section>
    );
}

export default ArtistSection;