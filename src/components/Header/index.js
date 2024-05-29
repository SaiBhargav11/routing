import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  ;<nav className="navbar">
    <div className="con1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="head"> Wave </h1>
    </div>
    <ul className="con">
      <li className="head">
        <Link to="/"> Home </Link>
      </li>
      <li className="head">
        <Link to="/about"> About </Link>
      </li>
      <li className="head">
        <Link to="/contact"> Contact </Link>
      </li>
    </ul>
  </nav>
}

export default Header
