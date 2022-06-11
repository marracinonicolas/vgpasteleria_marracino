import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to='/'>
                <div className="brand"><span>VG</span><small>pastelería</small> </div>
            </Link>
            <nav>
                <NavLink to='category/tortas' className={({ isActive }) => isActive ? 'active' : 'default'}><NavItem label="Tortas" refItem="tortas" /></NavLink>
                <NavLink to='category/cookies' className={({ isActive }) => isActive ? 'active' : 'default'}><NavItem label="Cookies" refItem="cookies" /></NavLink>
                <NavLink to='category/cakepops' className={({ isActive }) => isActive ? 'active' : 'default'}><NavItem label="Cakepops" refItem="cakepops" /></NavLink>
                <NavLink to='category/tartas' className={({ isActive }) => isActive ? 'active' : 'default'}><NavItem label="Tartas" refItem="tartas" /></NavLink>
                <NavLink to='category/alfajores' className={({ isActive }) => isActive ? 'active' : 'default'}><NavItem label="Alfajores" refItem="alfajores" /></NavLink>
            </nav>
            <CartWidget />
        </header>
        
    )
}

export default NavBar