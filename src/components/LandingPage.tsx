import logo from '../images/logo_min.png'

export const LandingPage = () => {
    return (
        <div className="section-landing-page">
            <header>
                <div>
                    <span>
                        <img src={logo} alt="Logo"/>
                    </span>

                    <span>
                        <h1 className="festival-title">
                            <span>Waiheke </span>
                            <span className="title-jazz">Jazz </span>
                            <span>Festival</span>
                        </h1>
                    </span>

                    {/* <h2  className="festival-dates">
                        Easter 2022 April 15 - 18
                    </h2> */}
                </div>
            </header>
        </div>
    );
}