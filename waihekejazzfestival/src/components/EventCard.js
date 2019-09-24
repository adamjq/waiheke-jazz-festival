import React from 'react';

const BASE_PATH = "./img/events/"

const EventCard = (props) => {
    return (
        <div className="col span-1-of-3 box">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="event-box">
                <div className="event-image">
                    <img src={BASE_PATH + props.image} alt={props.alt}/>
                </div>
                <div>
                    <p className="event-date">{props.date}</p>
                    <p className="event-location">{props.location}</p>
                </div>
            </div>
            </a>
        </div>
    );
}

export default EventCard;