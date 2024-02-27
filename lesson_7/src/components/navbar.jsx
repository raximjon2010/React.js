import { NavbarItem, NavbarWrapper } from "./style";
const Navbar = ({data}) => {
    return (
        <div>
           <NavbarWrapper>
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Students {data.length}</NavbarItem>
            <NavbarItem>Contacts</NavbarItem>
           </NavbarWrapper>
        </div>
    );
}

export default Navbar;