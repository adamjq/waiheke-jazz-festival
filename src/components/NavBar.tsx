import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="row">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="https://www.iticket.co.nz/go-to/waiheke-jazz-festival-2021" target="_blank" rel="noopener noreferrer">Tickets</a></li>
                <li><a href="/#events">Events</a></li>
                <li><a href="/#artists">Artists</a></li>

                {/* <li><Link to="/venues">Venues</Link></li> */}
            </ul>
    </nav>
    )
}
