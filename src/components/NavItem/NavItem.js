const NavItem = ({label, refItem}) =>{
    return (
        <button>
            <a href={refItem}>{label}</a>
        </button>
    )
}

export default NavItem