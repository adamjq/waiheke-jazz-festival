const BASE_PATH = "./img/sponsors/"

{/* <div className="col span-1-of-1 sponsor-image"> */}

const SponsorImage = (props: any) => {
    return (
        <div className="sponsor-image">
            <img src={BASE_PATH + props.image} alt={props.alt}/>
        </div>
    );
}
export const SponsorSection = () => {
    return (
        <section id="sponsors" className="section-sponsors">
        {/* <div className="row">
            <h3>Sponsors</h3>
        </div> */}

        <div className="row">
            {/* <SponsorImage image="PerpetualGuardian.png" alt="Perpetual Guardian Logo"/> */}
            <SponsorImage image="Fullers360Logo.png" alt="Fullers 360 Logo"/>
            <br></br><br></br>
            <SponsorImage image="AucklandCouncilLogo.png" alt="Auckland Council Logo" />
            {/* <SponsorImage image="LogoMusicPlanet.png" alt="Music Planet Logo"/>
            <SponsorImage image="PostageStampWinesLogo.png" alt="Postage Stamp Wines Logo"/> */}
        </div>
        </section>
    );
}