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
                    link=""
                    image="sex-on-toast-2.jpg"
                    alt="Sex On Toast"
                    name="Sex On Toast"
                />

                <ArtistItem 
                    link=""
                    image="jamie-lees-tali.jpg"
                    alt="MC Tali"
                    name="MC Tali"
                />

                <ArtistItem 
                    link=""
                    image="yoko-zuna.jpg"
                    alt="Yoko Zuna"
                    name="Yoko Zuna"
                />

                {/* <ArtistItem 
                    link=""
                    image="frank-booker.jpg"
                    alt="Frank Booker"
                    name="Frank Booker"
                /> */}

                <ArtistItem 
                    link=""
                    image="the-eastern.jpg"
                    alt="The Eastern"
                    name="The Eastern"
                />

                <ArtistItem 
                    link=""
                    image="ardijah-3.jpg"
                    alt="Ardijah"
                    name="Ardijah"
                />

                <ArtistItem 
                    link=""
                    image="love-square.jpg"
                    alt="Love Square"
                    name="Love Square"
                />

                <ArtistItem 
                    link=""
                    image="nairobi-trio.jpg"
                    alt="Nairobi Trio"
                    name="Nairobi Trio"
                />

                <ArtistItem 
                    link=""
                    image="alae-2.png"
                    alt="Alae"
                    name="Alae"
                />

                <ArtistItem 
                    link=""
                    image="mr-speaker.jpeg"
                    alt="Mr Speaker"
                    name="Mr Speaker"
                />

                <ArtistItem 
                    link=""
                    image="richard-adams.jpg"
                    alt="Richard Adams"
                    name="Richard Adams"
                />

                <ArtistItem 
                    link=""
                    image="denis-hepi.jpg"
                    alt="Denis Hepi"
                    name="Denis Hepi"
                />

                <ArtistItem 
                    link=""
                    image="white-chapel-jak.jpg"
                    alt="White Chapel Jak"
                    name="White Chapel Jak"
                />

                </div>
            </div>
        </section>
    );
}

export default ArtistSection;