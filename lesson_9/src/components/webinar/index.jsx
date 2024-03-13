import { useState } from "react";
import { Button, Container, Input, Inputs, Level, Levels, Select, Texts, Title, Tulov, Wrapper } from "./style";
import Payment from "./payment";

const BaseUrl = 'https://sheet.best/api/sheets/6114b434-52e1-4adf-b147-59da0a290b3f'


const Index = (index) => {
    const [title,setName] = useState('');
    const [number,setNumber] = useState('');
    const [selecte, setSelect] = useState('Javascript');
    const [isActive, setIsactive] = useState(false)
    const [saveSelect, setsaveSelect] = useState('')
    const [Files, setFiles] = useState(null);

    const onFile = (e) => {
        const selectedFile = e.target?.files[0];
        setFiles(selectedFile)
    }
    const onSelect = (e) => {
    setSelect(e.target.value)
    localStorage.setItem('data', JSON.stringify({title, number, selecte: e.target.value}))
    }
    const PostTarif = (body) => {
        if (selecte.length) {
            fetch(`${BaseUrl}/tabs/${selecte}`, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                },
                body: JSON.stringify(body)
            })
        }
    }
    const PostData = () => {
        const date = new Date();
        const body = {
            id: number,
            name: title,
            status: selecte,
            phone: number,
            language: navigator?.language,
            time: `${date.getHours()}:${date.getMinutes()}: ${date.getMilliseconds()}`,
        }
        fetch(`${BaseUrl}/tabs/ALL`, {
            method: 'POST', 
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(() => PostTarif(body))
    }

    const CLickButton = (type) => {
        if (!number.length || !title.length || !selecte.length) {
            alert(`Qaysidur malumot notug'ri kiritildi`);
        }
        else {
            PostData()
            setIsactive(true)
            if (selecte == 'Javascript') {
                setsaveSelect('500 000 ming')
            }
            else if (selecte == 'React') {
                setsaveSelect('400 000 ming')
            }
            else if (selecte == 'Bootcamp') {
                setsaveSelect('600 000 ming')
            }
            else if (selecte == 'HTML CSS') {
                setsaveSelect('300 000 ming')
            }
            else {
                setsaveSelect('hech nima')
            }
        }
    }
    const Back =() => {
        setIsactive(false)
    }
    const ContinueButton = () => {
        if (!Files) {
            alert('Chekni yuklang')
        }  
        else{
            const date = new Date();
            const body = {
                id: number,
                name: title,
                status: selecte,
                phone: number,
                language: navigator?.language,
                time: `${date.getHours()}:${date.getMinutes()}: ${date.getMilliseconds()}`,
                file: Files ? 'check yuklandi' : 'check yuklanmadi',
            }
            fetch(`${BaseUrl}/tabs/${Files ? 'payment' : 'ALL'}`, {
                method: 'POST', 
                headers : {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(body)
            })
        }
    }
    return (
        
        <Container>
{
            isActive === false ? 
           <Wrapper>
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
                <Button onClick={CLickButton}>Tayyor</Button>
                </Wrapper>
                :
                <Payment Back = {Back} continueButton = {ContinueButton} saveSelect = {saveSelect} selecte = {selecte} OnFile = {onFile}/>  
}
                </Container>
    );
}

export default Index;