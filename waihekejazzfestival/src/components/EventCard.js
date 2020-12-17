import React from 'react';

const BASE_PATH = "./img/events/"

// const EventCard = (props) => {
//     return (
//         <div className="col span-1-of-2 box">
//             <a href={props.link} target="_blank" rel="noopener noreferrer">
//             <div className="event-box">
//                 <div className="event-image">
//                     <img src={BASE_PATH + props.image} alt={props.alt}/>
//                 </div>
//                 <div className="event-info">

//                     <div className="event-details">
//                         <h4 className="event-name">{props.name}</h4>
//                         <p className="event-location">{props.location}</p>
//                         <p className="event-date">{props.date}</p>
//                     </div>

//                     <div className="event-ticket-button">
//                         <button type="button" className="btn-tickets">
//                             <a href={props.link} target="_blank" rel="noopener noreferrer">
//                             Buy Tickets
//                             </a>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             </a>
//         </div>
//     );
// }

const EventCard = (props) => {
    return (
        <div className="col span-1-of-2 box">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="event-box">
                <div className="event-details">
                    <div className="event-time">
                        <p>{props.location} {props.time}</p>
                    </div>
                    <div className="event-date">
                        <p>{props.date}</p>
                    </div>
                </div>

                <h4 className="event-name">{props.name}</h4>
                
                <div className="event-image">
                    <img src={BASE_PATH + props.image} alt={props.alt}/>
                </div>
                
                <div className="event-artists">
                    <p>{props.artists}</p>
                </div>

                    {/* <div className="event-ticket-button">
                        <button type="button" className="btn-tickets">
                            <a href={props.link} target="_blank" rel="noopener noreferrer">
                            Buy Tickets
                            </a>
                        </button>
                    </div> */}
            </div>
            </a>
        </div>
    );
}

export default EventCard;