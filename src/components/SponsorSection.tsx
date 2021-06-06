const BASE_PATH = "./img/sponsors/"

const SPONSERS = [
    {
        image: "Fullers360Logo.png",
        alt: "Fullers 360 Logo",
    },
    {
        image: "AucklandCouncilLogo.png",
        alt: "Auckland Council Logo",
    }
]

export const SponsorSection = () => {
    return (
        <section id="sponsors" className="section-sponsors">
        <div className="row">

            {SPONSERS.map((s, index) => (
                <img key={index} src={BASE_PATH + s.image} alt={s.alt}/>
            ))}

        </div>
        </section>
    )
}
