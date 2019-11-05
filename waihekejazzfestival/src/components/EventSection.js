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
                    link=""
                    image="ardijah-2.jpg"
                    alt="Good Friday Groove"
                    name="Good Friday Groove"
                    date="Friday, April 10th 2020"
                    location="Rangihoua Estate" 
                />
                <EventCard  
                    link=""
                    image="the-last-waltz.jpeg"
                    alt="Last Waltz Tribute"
                    name="Last Waltz Tribute"
                    date="Friday, April 10th 2020"
                    location="Artworks Theatre" 
                />
                <EventCard  
                    link=""
                    image="richard-adams.jpeg"
                    alt="Painting Workshop"
                    name="Painting Workshop"
                    date="Friday, April 10th 2020"
                    location="Owhanake Barn" 
                />
            </div>

            <div className="row">
                <EventCard  
                    link=""
                    image="the-eastern-2.jpg"
                    alt="Jazz In The Village"
                    name="Jazz In The Village"
                    date="Saturday, April 11th 2020"
                    location="Artworks Theatre" 
                />
                <EventCard  
                    link=""
                    image="love-square-2.jpg"
                    alt="Paint To Jazz"
                    name="Paint To Jazz"
                    date="Saturday, April 11th 2020"
                    location="Artworks Theatre" 
                />
                <EventCard  
                    link=""
                    image="yoko-zuna.jpg"
                    alt="Yoko Zuna & Frank Booker"
                    name="Yoko Zuna & Frank Booker"
                    date="Saturday, April 11th 2020"
                    location="Stonyridge" 
                />
            </div>

            {/* <div className="row">
                <EventCard  
                    link=""
                    image="good-friday-groove.png"
                    alt="The Supper Club"
                    name="The Supper Club"
                    date="Saturday, April 11th 2020"
                    location="Waiheke Island Resort" 
                />
                <EventCard  
                    link=""
                    image="good-friday-groove.png"
                    alt="Grande Finale"
                    name="Grande Finale"
                    date="Sunday, April 12th 2020"
                    location="Rangihoua Estate"
                />
                <EventCard  
                    link=""
                    image="good-friday-groove.png"
                    alt="Jazz Long Lunch"
                    name="Jazz Long Lunch"
                    date="Monday, April 13th 2020"
                    location="Batch"
                />
            </div> */}
        </section>
    );
}

export default EventSection;