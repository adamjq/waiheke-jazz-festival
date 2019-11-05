import React from 'react';

const LineupSection = () => {
    return (
        <section id="lineup" className="section-lineup">
            <div className="row">
                <h3>Lineup</h3>
                <div className="lineup-artists">
                {/* <div className="first-tier"><p></p></div> */}
                <div className="second-tier"><p>ARDIJAH | Yoko Zuna</p></div>
                <div className="second-tier"><p>The Eastern | Frank Booker</p></div>
                <div className="second-tier"><p>Love Square | Nairobi Trio</p></div>
                <div className="third-tier"><p>Mr Speaker | White Chapel Jak</p></div>
                <div className="third-tier"><p>Delta Blues | JT & The Saxman</p></div>
                </div>
            </div>
        </section>
    );
}

export default LineupSection;