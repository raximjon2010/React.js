
import { Outlet } from "react-router-dom";
import arrow from '../../../assets/Arrow.svg';
import { Button, Container, Icon, Inputs, Level, Levels, Texts, Title, Tulov, Wrapper } from "../style";
import { useState } from "react";

const Payment = ({Back, continueButton, saveSelect, selecte, OnFile}) => {
    const [active, setActive] = useState(false)
    return (
        <Container to={'/payment'}>
            <Wrapper>
                <Title>Webbrain Academy</Title>
                <Texts>Tarif: {selecte}</Texts>
                <Levels>
                <Level color = 'true'>1</Level>
                <Level color = 'true'>2</Level>
                <Level>3</Level>
                </Levels>
                <Tulov>
                <Texts onClick={() => setActive(!active)} tulov = 'true'>Bank kartasiga tulov <Icon rotate = {active} src={arrow} alt="eror"/></Texts>
                {
                active ?
                <div>
                <Texts>{saveSelect}</Texts>
                <Inputs>
                <Texts>8600 1404 3622 1478</Texts>
                <span style={{color: 'blue'}}>Sardorbek Muhtorov</span>
                <Texts>Chekni yuklang</Texts>
                <input onChange={OnFile} type="file" placeholder="Chekni yuklang"/>
                </Inputs>
                </div>
                : 
                ''
            }
            </Tulov>
                <Button onClick = {continueButton}>Keyingi</Button>
                </Wrapper>
                <Outlet/>
        </Container>
    );
}

export default Payment;