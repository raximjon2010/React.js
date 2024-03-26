import { Outlet } from "react-router-dom";
import { Container, Desc, Image, Input, Inputs, Level, Levels, Select, Texts, Title, Wrapper } from "../style";
import image from '../../../assets/image.png';

const Done = ({kurs, title , number}) => {
    return (
        <Container to={'/done'}>
        <Wrapper>
        <Title>Webbrain Academy</Title>
             <Levels>
                 <Level color = 'true'>1</Level>
                 <Level color = 'true'>2</Level>
                 <Level color = 'green'>3</Level>
                 </Levels>
                 <Title>Tabriklaymiz</Title>
                 <Desc>Ro'yhatdan o'tish muvaffaqiyatli yakunlandi</Desc>
                 <Desc>Operatorlarimiz siz bilan 48 soat ichida bog'lanadi.</Desc>
                 <div>
                    <Texts tulov = 'true'>Tasdiqlandi</Texts>
                    <Desc>Kurs: {kurs}</Desc>
                    <Desc>Ismi: {title}</Desc>
                    <Desc>Telefon raqami: {number}</Desc>
                 </div>
             </Wrapper> 
             <Outlet/>
     </Container>
    );
}

export default Done;