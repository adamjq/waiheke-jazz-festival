import React from 'react';

import EventCard from "./EventCard"

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
                link="https://www.iticket.co.nz/events/2021/apr/wijf-fillmore-east"
                image="fillmore.png"
                alt='"One Night At The Fillmore East"'
                name='"One Night At The Fillmore East"'
                date="Friday 2 April"
                time="8 - 10pm"
                location="Artworks Theatre"
                description={[`A retrospective salute to the great performers who played the infamous "Fillmore East" in New York in the late '60's and early '70's including Janis Joplin, Jimi Hendrix, the Allman brothers and many more.`
                , <br/>, <br/>, <strong>Saturday 3rd April show SOLD OUT</strong>]}
                artists="Aaron Carpenter | Solomon Cole | Alastair Riddell | Meredith Bean | Dave Alley"
                artistsSmall={["Aaron Carpenter", <br/>, "Solomon Cole", <br/>, "Alastair Riddell", <br/>, "Meredith Bean", <br/>, "Dave Alley"]}
            />
            <EventCard  
                link="https://www.iticket.co.nz/events/2021/apr/wijf-sundowner"
                image="sold_out_sundowner.png"
                alt="Jazz Sundowner"
                name="Jazz Sundowner"
                date="Sunday 4 April"
                time="4:30 - 8pm"
                location="Wild Estate, Wild on Waiheke"
                description={[`An afternoon of Jazz unlike any other! Some of Auckland's top Jazz artists perform for you at one of Waiheke's most relaxed and inviting venues at Wild Estate, Wild on Waiheke. On the scheduled Onetangi bus route. Don't miss this superb day trip.`
                , <br/>, <br/>, <strong>Current allocation exhausted. Check back here before the event as more tickets may be released.</strong>]}
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

            <br/><br/>
            { <h3>Fringe</h3> }

            <EventCard  
                link="https://www.casitamiro.co.nz/shop/product/482170/1-good-friday-jazz--mireya-ramos-trio--2nd-april/"
                image="fringe_2.png"
                alt='Mireya Ramos Trio'
                name='Mireya Ramos Trio'
                date="Friday 2 April"
                time="7 - 11pm"
                location="Casita Miro"
                description={['Born in Puerto Rico, from the age of 17 Mireya paid her dues playing Mariachi, salsa, merengue, jazz, R&B and hip-hop. Mireya takes us through the Latin-tinged Americana landscape of the US, featuring classic Jazz as well as the Mexican tradition.',<br/>,<br/>,<strong>Ticket price includes 3 waves of Casita's famous tapas</strong> ]}
                artists="Mireya Ramos Trio"
                artistsSmall="Mireya Ramos Trio"
            />
            <EventCard  
                link="http://www.iticket.co.nz/events/2021/apr/wijf-weirder-side"
                image="fringe_1.png"
                alt='The Weirder Side of Jazz'
                name='The Weirder Side of Jazz'
                date="Saturday 3 April"
                time="1 - 3pm"
                location="Bus Trip & Show"
                description={['Hop aboard the Jazzabout bus for a magical mystery tour to experience the "Death of Love Part 2" - unusual versions of music from Tom Waits and Nick Cave, along with performances from special guests.',<br/>,<br/>,<strong>PICK-UP 1pm sharp & DROP OFF 3pm outside the Library, Oneroa</strong> ]}
                artists="Johnny Fleury | Floss Fleury"
                artistsSmall={["Johnny Fleury", <br/>, "Floss Fleury"]}
            />

        </section>
    );
}

export default EventSection;