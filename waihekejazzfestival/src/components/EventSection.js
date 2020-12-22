import React from 'react';

import EventCard from "./EventCard"

const gfgText = `
Rangihoua Estate's natural amphitheatre is the setting for the ever-popular GOOD FRIDAY GROOVE featuring diverse line-up covering Americana, Folk, Latin-Ska, Jazz, Soul, R'n;B and Salsa-Flamenco fusion. An easy day trip from Auckland Rangihoua Estate is fully licensed with artisan food stalls and on the scheduled Rocky Bay bus route.
`

const filmoreText = `
A retrospective salute to the great performers who played the infamous "Fillmore East" in New York in the late '60's and early '70's including Janis Joplin, Jimi Hendrix, the Allman brothers and many more. LIMITED TICKETS AVAIABLE
`

const sundownerText = `
An afternoon of Jazz unlike any other! Some of Auckland's top Jazz artists perform for you at one of Waiheke's most relaxed and inviting venues at Wild Estate, Wild on Waiheke. On the scheduled Onetangi bus route. Don't miss this superb day trip experience
`

const longLunchText = `
End your weekend on Waiheke at the now-legendary Jazz Long Lunch at Batch Winery - enjoy performances by New Zealand's favourite Jazz Entertainers the Nairobi trio and others while taking in the breathtaking views. Includes supmtuous 3 course lunch. LIMITED TICKETS AVAILABLE
`

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
                time="12NOON - 5pm"
                location="Rangihoua Estate"
                description={gfgText}
            />
            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-fillmore-east"
                image="FillmoreEast.png"
                alt='"One Night At The Fillmore East"'
                name='"One Night At The Fillmore East"'
                date="Saturday 3 April"
                time="8 - 10pm"
                location="Artworks Theatre"
                description={filmoreText}
            />

            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-sundowner"
                image="JazzOnTheGreen.png"
                alt="Jazz Sundowner"
                name="Jazz Sundowner"
                date="Sunday 4 April"
                time="4:30 - 8pm"
                location="Wild Estate, Wild on Waiheke"
                description={sundownerText}
            />
            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-long-lunch"
                image="JazzLongLunch.png"
                alt="Jazz Long Lunch"
                name="Jazz Long Lunch"
                date="Monday 5 April"
                time="1 - 4pm"
                location="Batch Winery"
                description={longLunchText} 
            />

        </section>
    );
}

export default EventSection;