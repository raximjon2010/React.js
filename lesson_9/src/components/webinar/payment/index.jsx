
import { Outlet } from "react-router-dom";
import { Button, Container, Inputs, Level, Levels, Texts, Title, Tulov, Wrapper } from "../style";

const Payment = ({Back, continueButton, saveSelect, selecte, OnFile}) => {
    return (
        <Container>
            <Wrapper to={'/payment'}>
                <Texts onClick={Back}>Tahirlash</Texts>
                <Title>Webbrain Academy</Title>
                <Texts>Tarif:{selecte}</Texts>
                <Levels>
                <Level color = 'true'>1</Level>
                <Level color = 'true'>2</Level>
                <Level>3</Level>
                </Levels>
                <Tulov>
                <Texts tulov = 'true'>Bank kartasiga tulov</Texts>
                <Texts>{saveSelect}</Texts>
                <Inputs>
                <Texts>8600 1404 3622 1478</Texts>
                <span style={{color: 'blue'}}>Sardorbek Muhtorov</span>
                <Texts>Chekni yuklang</Texts>
                <input onChange={OnFile} type="file" placeholder="Chekni yuklang"/>
                </Inputs>
                </Tulov>
                <Button onClick = {continueButton}>Keyingi</Button>
                </Wrapper>
                <Outlet/>
        </Container>
    );
}

export default Payment;