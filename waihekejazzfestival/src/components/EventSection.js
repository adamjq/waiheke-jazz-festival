import React from 'react';

import EventCard from "./EventCard"

const weirderSideText = `
Hop aboard the Jazzabout bus for a magical mystery tour to experience the "Death of Love Part 2" - unusual versions of music from Tom Waits and Nick Cave, along with performances from special guests. 
Pick up 1pm sharp. Drop off 3pm. Outside the Oneroa Library.
`

const sundownerText = `
An afternoon of Jazz unlike any other! Some of Auckland's top Jazz artists perform for you at one of Waiheke's most relaxed and inviting venues at Wild Estate, Wild on Waiheke. On the scheduled Onetangi bus route. Don't miss this superb day trip.
`

const longLunchText = `
End your weekend on Waiheke at the now-legendary Jazz Long Lunch at Batch Winery - enjoy performances by New Zealand's favourite Jazz Entertainers the Nairobi trio and others while taking in the breathtaking views. Includes supmtuous 3 course lunch.
`

const EventSection = () => {
    return (
        <section id="events" className="section-events">
            <div className="row">
                {/* <h3>Events</h3> */}
                <p className="long-copy">
                    To book tickets, click on the event icon of your choice - you will be linked directly to iTicket. 
                    Have your credit card ready - two more clicks and your tickets will be emailed directly to you. It's as simple as that! 
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
                                <a  href="https://www.iticket.co.nz/go-to/waiheke-jazz-festival-2021" target="_blank" rel="noopener noreferrer">
                                All Tickets
                                </a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <EventCard  
                link="http://www.iticket.co.nz/events/2021/apr/wijf-friday-groove"
                image="GoodFridayGrove.png"
                alt="Good Friday Groove"
                name="Good Friday Groove"
                date="Friday 2 April"
                time="12NOON - 5pm"
                location="Rangihoua Estate"
                description={[ "Four stunning acts deliver a diverse range of music, including americana, latin-ska, jazz, soul, R&B and salsa-flamenco. Rangihoua is a licensed venue with artisan food trucks and a spacious outdoor seating area. Bring a blanket or fold-up chair. Return trip on the JAZZABOUT BUS from Matiatia ($15 cash) or catch the scheduled Rocky Bay bus.",<br/>, <strong>JAZZABOUT BUS SCHEDULE</strong>, <br/>,<strong>DEPART MATIATIA 10am, 10.45am, 11.30am</strong>, <br/>, <strong>DEPART RANGIHOUA ESTATE 4.30pm, 5.15pm, 6pm</strong>]}
                artists="White Chapel Jak | The Eastern | Radio Rebelde | Gypsy Kings Tribute Band"
                artistsSmall={["White Chapel Jak", <br/>, "The Eastern", <br/>, "Radio Rebelde", <br/>, "Gypsy Kings Tribute Band"]}
            />
            <EventCard  
                link="http://www.iticket.co.nz/events/2021/apr/wijf-weirder-side"
                image="weirder_side.png"
                alt='The Weirder Side of Jazz'
                name='The Weirder Side of Jazz'
                date="Saturday 3 April"
                time="1 - 3pm"
                location="Bus Trip & Show"
                description={weirderSideText}
                artists="Johnny Fleury | Floss Fleury"
                artistsSmall={["Johnny Fleury", <br/>, "Floss Fleury"]}
            />
            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-fillmore-east"
                image="fillmore_book_now.png"
                alt='"One Night At The Fillmore East"'
                name='"One Night At The Fillmore East"'
                date="Saturday 3 April"
                time="8 - 10pm"
                location="Artworks Theatre"
                description={[`A retrospective salute to the great performers who played the infamous "Fillmore East" in New York in the late '60's and early '70's including Janis Joplin, Jimi Hendrix, the Allman brothers and many more.`
                , <br/>, <br/>, <strong>SOLD OUT. Second Show Announced</strong>]}
                artists="Aaron Carpenter | Solomon Cole | Alastair Riddell | Meredith Bean | Dave Alley"
                artistsSmall={["Aaron Carpenter", <br/>, "Solomon Cole", <br/>, "Alastair Riddell", <br/>, "Meredith Bean", <br/>, "Dave Alley"]}
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
                artists="The Eastern | Hopetoun Brown | Chelsea Prastitti | JT & The Saxman & more..."
                artistsSmall={["The Eastern", <br/>, "Hopetoun Brown", <br/>, "Chelsea Prastitti", <br/>, "JT & The Saxman", <br/>, "& more..."]}
            />
            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-long-lunch"
                image="sold_out_jazz_lunch.png"
                alt="Jazz Long Lunch"
                name="Jazz Long Lunch"
                date="Monday 5 April"
                time="1 - 4pm"
                location="Batch Winery"
                description={longLunchText}
                artists="Nairobi Trio | The Eastern | Hopetoun Brown"
                artistsSmall={["Nairobi Trio", <br/>, "The Eastern", <br/>, "Hopetoun Brown"]}
            />

        </section>
    );
}

export default EventSection;