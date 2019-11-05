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
                <div className="event-info">

                    <div className="event-details">
                        <h4 className="event-name">{props.name}</h4>
                        <p className="event-location">{props.location}</p>
                        <p className="event-date">{props.date}</p>
                    </div>

                    <div className="event-ticket-button">
                        <button type="button" className="btn-tickets">
                            <a href="" target="_blank">
                            Buy Tickets
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            </a>
        </div>
    );
}

export default EventCard;