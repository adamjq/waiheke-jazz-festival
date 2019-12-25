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
                        <a href="./media/brochure.pdf" target="_blank">
                        Brochure
                        </a>
                    </button>
                </p>
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-good-friday-groove"
                    image="miloux1.jpg"
                    alt="Good Friday Groove"
                    name="Good Friday Groove"
                    date="Friday, April 10th"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-the-last-waltz"
                    image="the-last-waltz.jpeg"
                    alt="Songs From The Last Waltz"
                    name="Songs From The Last Waltz"
                    date="Friday, April 10th"
                    location="Artworks Theatre" 
                />

            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-painters-workshop"
                    image="richard-adams.jpg"
                    alt="Painters Workshop"
                    name="Painters Workshop"
                    date="Friday, April 10th"
                    location="Owhanake Barn" 
                />

                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-jazz-in-the-village"
                    image="the-eastern-2.jpg"
                    alt="Jazz In The Village"
                    name="Jazz In The Village"
                    date="Saturday, April 11th & Sunday, April 12th"
                    location="Artworks Theatre" 
                />
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-saturday-night-live"
                    image="alae.jpg"
                    alt='Saturday Night "Live"'
                    name='Saturday Night "Live"'
                    date="Saturday, April 11th"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-supper-club"
                    image="skilaa.jpg"
                    alt="Supper Club"
                    name="Supper Club"
                    date="Saturday, April 11th"
                    location="Waiheke Island Resort"
                />
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-grand-finale"
                    image="jt_and_sax.png"
                    alt="Grande Finale"
                    name="Grande Finale"
                    date="Sunday, April 12th"
                    location="Rangihoua Estate"
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2020/apr/waijam-jazz-long-lunch"
                    image="love-square-3.jpg"
                    alt="Jazz Long Lunch"
                    name="Jazz Long Lunch"
                    date="Monday, April 13th"
                    location="Batch Winery"
                />
            </div>
        </section>
    );
}

export default EventSection;