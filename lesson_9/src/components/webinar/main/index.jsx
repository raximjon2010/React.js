import { Outlet } from "react-router-dom";
import { Button, Container, Input, Inputs, Level, Levels, Select, Title, Wrapper } from "../style";

const Main = ({setName, setNumber, onSelect, CLickButton}) => {
    return (
        <Container>
           <Wrapper to={'/'}>
                <Title>Webbrain Academy</Title>
                <Levels>
                    <Level color = 'true'>1</Level>
                    <Level>2</Level>
                    <Level>3</Level>
                    </Levels>
                <Inputs>
                <Input onChange={(e) => setName(e.target.value)} type="name" placeholder="name"/>
                <Input maxLength={9}  onChange={(e) => setNumber(e.target.value)} type="number" placeholder="number" />
                </Inputs>
                <Select onChange={onSelect} name="" id="">
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
                <option value="Bootcamp">Bootcamp</option>
                <option value="HTML CSS">HTML & CSS</option>
                </Select>
                <Button onClick={CLickButton}>Keyingi</Button>
                </Wrapper>
                <Outlet/>
        </Container>
    );
}

export default Main;