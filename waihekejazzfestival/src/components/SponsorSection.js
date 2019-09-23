import React from 'react';

const BASE_PATH = "./img/sponsors/"

const SponsorImage = (props) => {
    return (
        <div className="col span-1-of-4 sponsor-image">
            <img src={BASE_PATH + props.image} alt={props.alt}/>
        </div>
    );
}
const SponsorSection = () => {
    return (
        <section id="sponsors" className="section-sponsors">
        <div className="row">
            <h3>Sponsors</h3>
        </div>

        <div className="row">
            <SponsorImage image="sothebys.png" alt="Sotherby's Logo" />
            <SponsorImage image="fullers-logo.png" alt="Fullers Ferry Logo" />
            <SponsorImage image="all-that-jazz-quartet.png" alt="All That Jazz Quartet Logo"/>
            <SponsorImage image="roys-bay-logo.png" alt="Roys Bay Logo"/>
        </div>
        </section>
    );
}

export default SponsorSection;
