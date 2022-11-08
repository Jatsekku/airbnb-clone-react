import './Navbar.css'
import airbnbn_logo from '../assets/airbnb-logo.png' 

export default function Navbar() {
    return (
        <nav className="navbar--container">
            <img className="navbar--logo" src={airbnbn_logo} />
        </nav>
    )
}