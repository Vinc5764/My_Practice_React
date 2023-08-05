import styles from './Navbar.module.css'
import {Link, NavLink} from 'react-router-dom'
import {links} from './constants'
import {FaBars} from 'react-icons/fa'
import Logo from '../../assets/images/logo.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav>
        <div className='nav__container'>
            <Link to="/">
                <img src={Logo} className={styles.logo} alt="logo" />
            </Link>
            <ul className='nav-links'>
                {
                  links.map(({name,path}, index) => {
                     return(
                        <li key={index}>
                          <NavLink to={path}>{name}</NavLink>
                        </li>
                     )})
                }
            </ul>
          </div>
             <button className="nav__toggle-btn">
                <FaBars /> 
             </button>
    </nav>
  )
}

export default Navbar