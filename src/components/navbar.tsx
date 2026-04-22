import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="content nav-inner">
                <div className='left'>
                    <Link to="/">Lume</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/download">Download</Link>
                </div>

                <div className='right'>
                    <Link to="/account">Account</Link>
                </div>
            </div>
        </nav>
    );
}