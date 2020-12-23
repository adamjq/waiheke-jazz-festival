import React from 'react';

const BASE_PATH = "./img/events/"

const EventCard = (props) => {
    return (
        <div className="row">
            <a href={props.link}>
            <div className="event-box">
                <div className="event-details">
                    <div className="event-heading">
                        <div className="event-date">
                            <p>{props.date}</p>
                        </div>
                        <div className="event-name">
                            <p>{props.name}</p>
                        </div>
                    </div>

                    <div className="event-info">
                        <div className="event-location">
                            <p>{props.location}</p>
                        </div>
                        <div className="event-time">
                            <p>{props.time}</p>
                        </div>
                        <div className="event-description">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>

                <div className="event-image">
                    <img src={BASE_PATH + props.image} alt={props.alt}/>
                </div>

                <div className="event-artists artists-large">
                    <p>{props.artists}</p>
                </div>
                <div className="event-artists artists-small">
                    <p>{props.artistsSmall}</p>
                </div>
            </div>
            </a>
        </div>
    );
}

export default EventCard;