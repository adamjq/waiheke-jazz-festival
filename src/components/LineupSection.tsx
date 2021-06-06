import React from 'react';

const LineupSection = () => {
    return (
        <section id="lineup" className="section-lineup">
            <div className="row">
                <h3>Lineup</h3>
                <div className="lineup-artists">
                <div className="first-tier"><p>The Eastern</p></div>
                <div className="first-tier"><p>Hopetoun Brown</p></div>
                <div className="second-tier"><p>Nairobi Trio |  White Chapel Jak</p></div>
                <div className="second-tier"><p>Gypsy Kings Tribute Band | Radio Rebelde</p></div>
                <div className="second-tier"><p>JT & The Saxman | Cousin Alice</p></div>
                <div className="third-tier"><p>Aaron Carpenter | Solomon Cole</p></div>
                <div className="third-tier"><p>Alastair Riddell | Meredith Bean | Dave Alley</p></div>
                </div>
            </div>
        </section>
    );
}

export default LineupSection;