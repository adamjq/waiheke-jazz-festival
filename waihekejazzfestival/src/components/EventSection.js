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
                <div>
                    <div className="button-links">
                        <p className="long-copy">
                            <button type="button" className="btn-brochure">
                                <a href="./media/brochure.pdf" target="_blank">
                                Brochure
                                </a>
                            </button>
                            <button type="button" className="btn-brochure">
                                <a  href="https://www.iticket.co.nz/events/2021/apr" target="_blank" rel="noopener noreferrer">
                                All Tickets
                                </a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2021/apr"
                    image="GoodFridayGrove.png"
                    alt="Good Friday Groove"
                    name="Good Friday Groove"
                    date="Friday 2 April"
                    time="12 - 5pm"
                    location="Rangihoua Estate"
                    artists={["The Eastern | Radio Rebelde", <br/>, "White Chapel Jak", <br/>, "Gypsy Kings Tribute Band"]}
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2021/apr"
                    image="FillmoreEast.png"
                    alt='"One Night At The Fillmore East"'
                    name='"One Night At The Fillmore East"'
                    date="Saturday 3 April"
                    time="8 - 10pm"
                    location="Artworks Theatre"
                    artists={["Joplin, Hendrix, and Many More", <br/>, "Featuring Aaron Carpenter | Solomon Cole", <br/>, "Alastair Riddell | Meredith Bean"]}
                />
            </div>

            <div className="row">
                <EventCard  
                    link="https://www.iticket.co.nz/events/2021/apr"
                    image="JazzOnTheGreen.png"
                    alt="Jazz On The Green"
                    name="Jazz On The Green"
                    date="Sunday 4 April"
                    time="4:30 - 7:30pm"
                    location="Rangihoua Estate"
                    artists={["The Eastern | Hopetoun Brown", <br/>, "Chelsea Prastitti | JT & The Saxman", <br/>, "& Many More..."]}
                />
                <EventCard  
                    link="https://www.iticket.co.nz/events/2021/apr"
                    image="JazzLongLunch.png"
                    alt="Jazz Long Lunch"
                    name="Jazz Long Lunch"
                    date="Monday 5 April"
                    time="1 - 4pm"
                    location="Batch Winery" 
                    artists={["Nairobi Trio", <br/>, "With guest appearances from", <br/>, "The Eastern & Hopetoun Brown"]}
                />
            </div>

        </section>
    );
}

export default EventSection;