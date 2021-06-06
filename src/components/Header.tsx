import { NavBar } from "./NavBar"

export const Header = () => {
    return (
        <section className="section-heading">
        <header>
            <NavBar/>
            <div className="hero-text-box">
                <h2 className="heading-text-presents">
                    Waiheke International Jazz Festival Presents
                </h2>
                <h1 className="heading-text-main-title">
                    Waiheke Jazz
                </h1>
                <h1 className="heading-text-main-title">
                    Festival 2021
                </h1>
                <h2 className="heading-text-dates">
                    Easter 2021 April 2 - 5
                </h2>
            </div>
        </header>
        </section>
    );
}