import { NavbarItem, NavbarWrapper } from "./style";
import { StudentList } from "../context/list/list";
import { useContext } from "react";


const Navbar = () => {
    const [list, dispatch] = useContext(StudentList);
    console.log(list);
    return (
        <div>
           <NavbarWrapper>
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Students {list.length}</NavbarItem>
            <NavbarItem>Contacts</NavbarItem>
           </NavbarWrapper>
        </div>
    );
}

export default Navbar;