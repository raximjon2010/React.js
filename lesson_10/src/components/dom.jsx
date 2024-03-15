import { Container, Item } from "./style";
import {NavLink, Outlet} from 'react-router-dom' 


const Dom = () => {
    return (
        <div>

        <Container>
            <Item to={'home'}>Home</Item>
            <Item to={'about'}>About</Item>
            <Item to={'contact'}>Contacts</Item>
            <Item to={'student'}>Students</Item>
        </Container>
            <Outlet/>
        </div>
    );
}

export default Dom;
