import { Outlet, useNavigate } from "react-router-dom";
import { Button, Option, Container, Input, Inputs, Level, Levels, Select, Title, Wrapper } from "../style";

const Main = ({setName, setNumber, onSelect, CLickButton}) => {

    const navigate = useNavigate()
    return (
        <Container to={'/'}>
           <Wrapper>
                <Title><em>L o g I n</em></Title>
                <Levels>
                    <Level color = 'true'>1</Level>
                    <Level>2</Level>
                    <Level>3</Level>
                    </Levels>
                <Inputs>
                <Input onChange={(e) => setName(e.target.value)} type="name" placeholder="Ismingizni kiriting"/>
                <Input maxLength={9}  onChange={(e) => setNumber(e.target.value)} type="number" placeholder="Telefon raqamingizni kiriting" />
                </Inputs>
                <Select onChange={onSelect} name="" id="">
                <Option value="Javascript">Javascript</Option>
                <Option value="React">React</Option>
                <Option value="Bootcamp">Bootcamp</Option>
                <Option value="HTML CSS">HTML & CSS</Option>
                </Select>
                <Button onClick={() => CLickButton()}>Keyingi</Button>
                </Wrapper>
                <Outlet/>
        </Container>
    );
}

export default Main;