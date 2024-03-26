import { useState } from "react";
import { Container, Image,} from "./style";
import Payment from "./payment";
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Main from "./main";
import bg from '../../assets/orqafon.png';
import Done from "./done";

const BaseUrl = 'https://sheet.best/api/sheets/6114b434-52e1-4adf-b147-59da0a290b3f';

const Index = (index) => {
    const [title,setName] = useState('');
    const [number,setNumber] = useState('');
    const [selecte, setSelect] = useState('Javascript');
    const [saveSelect, setsaveSelect] = useState('')
    const [Files, setFiles] = useState(null);
    const navigate = useNavigate();

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
                setsaveSelect('')
            }
            navigate('payment');
        };
    }
    const Back =() => {
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
            <Image src = {bg} />
                <Routes>
           <Route exact path = {'/'} element = {<Main setName = {setName} setNumber = {setNumber} onSelect = {onSelect} CLickButton = {CLickButton}/>}/>
           <Route  path="/payment" element = { <Payment Back = {Back} continueButton = {ContinueButton} saveSelect = {saveSelect} selecte = {selecte} OnFile = {onFile}/>}/>   
           <Route  path="/done" element = {<Done kurs = {selecte} title = {title} number = {number}/>}/>;   
           <Route path="*" element = {<Navigate to={'/'}/>}/>
               </Routes>
                </Container>
    );
}

export default Index;