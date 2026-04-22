import './navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from '../animation/menu'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" onClick={closeMenu}>Lume</Link>
        </div>

        <div className="desktop-nav">
          <div className="left">
            <Link to="/product">Product</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/download">Download</Link>
          </div>

          <div className="right">
            <Link to="/account">Account</Link>
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <Menu isOpen={menuOpen} onClose={closeMenu} />
    </nav>
  )
}