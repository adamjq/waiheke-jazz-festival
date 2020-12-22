import React from 'react';

import EventCard from "./EventCard"

const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vulputate elit. Sed vitae lorem tortor. Praesent bibendum dignissim ex, id blandit neque feugiat finibus. Praesent interdum a urna eget dapibus. Quisque efficitur velit eu blandit aliquet. Aenean vulputate, diam ac sodales finibus, urna mi dictum neque, hendrerit fringilla ex nibh eget augue."

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
                {/* <div>
                    <div className="button-links">
                        <p className="long-copy">
                            <button type="button" className="btn-brochure">
                                <a href="./media/brochure.pdf" target="_blank">
                                Brochure
                                </a>
                            </button>
                            <button type="button" className="btn-brochure">
                                <a  href="https://www.iticket.co.nz/go-to/waiheke-jazz-festival-2021" target="_blank" rel="noopener noreferrer">
                                All Tickets
                                </a>
                            </button>
                        </p>
                    </div>
                </div> */}
            </div>

            <EventCard  
                link="http://www.iticket.co.nz/events/2021/apr/wijf-friday-groove"
                image="GoodFridayGrove.png"
                alt="Good Friday Groove"
                name="Good Friday Groove"
                date="Friday 2 April"
                time="12 - 5pm"
                location="Rangihoua Estate"
                description={loremText}
            />
            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-fillmore-east"
                image="FillmoreEast.png"
                alt='"One Night At The Fillmore East"'
                name='"One Night At The Fillmore East"'
                date="Saturday 3 April"
                time="8 - 10pm"
                location="Artworks Theatre"
                description={loremText}
            />

            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-sundowner"
                image="JazzOnTheGreen.png"
                alt="Jazz On The Green"
                name="Jazz On The Green"
                date="Sunday 4 April"
                time="4:30 - 7:30pm"
                location="Rangihoua Estate"
                description={loremText}
            />
            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-long-lunch"
                image="JazzLongLunch.png"
                alt="Jazz Long Lunch"
                name="Jazz Long Lunch"
                date="Monday 5 April"
                time="1 - 4pm"
                location="Batch Winery"
                description={loremText} 
            />

        </section>
    );
}

export default EventSection;