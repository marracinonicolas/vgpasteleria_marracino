import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header>
            <div className="brand"><span>VG</span><small>pastelería</small> </div>
            <nav>
                <NavItem label="Tortas" refItem="tortas" />
                <NavItem label="Cookies" refItem="cookies" />
                <NavItem label="Cakepops" refItem="cakepops" />
                <NavItem label="Tartas" refItem="tartas" />
                <NavItem label="Alfajores" refItem="alfajores" />
                <NavItem label="Accesorios" refItem="accesorios" />
            </nav>
            <CartWidget />
        </header>
        
    )
}

export default NavBar