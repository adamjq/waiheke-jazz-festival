import React from 'react';

import EventCard from "./EventCard"

const EventSection = () => {
    return (
        <section id="events" className="section-events">
            <div className="row">
                <h3>Events</h3>
                <p className="long-copy">
                    To book tickets, click on the event icon of your choice - you will be linked directly to iTicket. 
                    Have your credit card ready - two more clicks and your tickets will be emailed directly to you. It's as simple as that! 
                </p>
                <p className="long-copy">
                    The line-up for the show of your choice and all the info you'll need to know is in the event listing on the iTicket site - 
                    book now! Some events have limited tickets available.
                </p>
                <p className="long-copy">
                    Click to see the full program
                    <button type="button" className="btn-brochure">
                        <a href="src/media/brochure.png" target="_blank">
                        Brochure
                        </a>
                    </button>
                </p>
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2019/apr/waiheke-jazz-good-friday-groove"
                    image="good-friday-groove.png"
                    alt="Good Friday Groove"
                    date="19 April 2019"
                    location="Rangihoua Estate" 
                />
            </div>
        </section>
    );
}

export default EventSection;